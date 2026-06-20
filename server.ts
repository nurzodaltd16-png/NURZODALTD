/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import express from 'express';
import path from 'path';
import fs from 'fs';
import { createServer as createViteServer } from 'vite';
import { GoogleGenAI, Type } from '@google/genai';
import dotenv from 'dotenv';

dotenv.config();

const app = express();
const PORT = 3000;

app.use(express.json());

// In-memory array for inquiries with persistence to contacts.json
const CONTACTS_FILE_PATH = path.join(process.cwd(), 'contacts.json');
let contacts: any[] = [];

// Load saved contacts if they exist
try {
  if (fs.existsSync(CONTACTS_FILE_PATH)) {
    const fileData = fs.readFileSync(CONTACTS_FILE_PATH, 'utf8');
    contacts = JSON.parse(fileData);
  }
} catch (error) {
  console.error('Failed to load contacts.json:', error);
}

// Function to persist contacts
const saveContacts = () => {
  try {
    fs.writeFileSync(CONTACTS_FILE_PATH, JSON.stringify(contacts, null, 2), 'utf8');
  } catch (error) {
    console.error('Failed to write contacts.json:', error);
  }
};

// Initialise GoogleGenAI client (lazy initialization format fallback)
let aiClient: GoogleGenAI | null = null;
const getAiClient = (): GoogleGenAI | null => {
  const key = process.env.GEMINI_API_KEY;
  if (!key || key === 'MY_GEMINI_API_KEY' || key.trim() === '') {
    return null; // Key not provided yet
  }
  if (!aiClient) {
    aiClient = new GoogleGenAI({
      apiKey: key,
      httpOptions: {
        headers: {
          'User-Agent': 'aistudio-build'
        }
      }
    });
  }
  return aiClient;
};

// Mock fallback estimator for offline / no-credential usage
function getFallbackEstimate(desc: string) {
  const d = desc.toLowerCase();
  
  if (d.includes('bathroom') || d.includes('bath') || d.includes('shower') || d.includes('wetroom')) {
    return {
      priceRange: '£3,800 - £6,200',
      duration: '5 - 9 Working Days',
      materialsNeeded: [
        'Premium anti-slip ceramic or porcelain tiles',
        'Tanking membrane (waterproofing kit)',
        'Chrome thermostatic shower mixer & vanity unit',
        'Water-grade plasterboard & flexible adhesive/grout'
      ],
      technicalAssessment: 'Requires full tanking wet-zones check to current BS 5385 standards. Hot and cold copper pipework will be chased into sub-walls and pressure-tested before sealing.',
      contractorTips: 'Consider choosing warm/neutral grey grout lines which handle hard water staining far better than standard polar white grout.'
    };
  }
  
  if (d.includes('kitchen') || d.includes('cook') || d.includes('cabinets') || d.includes('countertop')) {
    return {
      priceRange: '£5,500 - £9,000',
      duration: '7 - 12 Working Days',
      materialsNeeded: [
        'Finished timber cabinetry units & soft-close hinges',
        'Selected Carrara Quartz or engineered wood countertops',
        'Integrated modern extraction hood & high-flow taps',
        'Waterproof splashback tiles & satin emulsion finish'
      ],
      technicalAssessment: 'Cabinetry levelling matching UK 900mm standard height. Gas fitting works requires a Gas Safe certified professional if the boiler or hob is moved.',
      contractorTips: 'We recommend sealing worktops quarterly if using natural timber, or choosing Quartz/Solid-surfaces for maintenance-free longevity.'
    };
  }
  
  if (d.includes('floor') || d.includes('carpet') || d.includes('wood') || d.includes('laminate') || d.includes('lvt')) {
    return {
      priceRange: '£750 - £1,600',
      duration: '2 - 3 Working Days',
      materialsNeeded: [
        '12mm Premium engineered oak flooring or LVT planks',
        'Vapour barrier & high-density acoustic underlay (20dB+)',
        'MDF Skirting boards (primed)',
        'T-section expansion bars & threshold profiles'
      ],
      technicalAssessment: 'Subfloor level testing is key. Any deviation greater than 3mm over a 2-meter span will be smoothed with rapid-setting self-levelling compound prior to plank installation.',
      contractorTips: 'Allow engineered and wood flooring materials to acclimatise in your heated home for at least 48 hours before fitting to limit contractive expansion later.'
    };
  }
  
  if (d.includes('tile') || d.includes('tiling') || d.includes('backsplash')) {
    return {
      priceRange: '£400 - £950',
      duration: '1 - 2 Working Days',
      materialsNeeded: [
        'Porcelain or ceramic tiles',
        'Rapid-set flexible tile adhesive',
        'Spacers (2mm or 3mm)',
        'High-grade silicone sealant (anti-mould / sanitary rating)'
      ],
      technicalAssessment: 'Plasterboard walls must be sealed with acrylic primer (SBR) instead of standard PVA to ensure full adherence and avoid pre-absorption of tile adhesive moisture.',
      contractorTips: 'Provide a 10% waste buffer when purchasing tiles to allow for technical angular cuts and replacement spares.'
    };
  }

  if (d.includes('paint') || d.includes('paint') || d.includes('wallpaper') || d.includes(' plaster') || d.includes('decorat')) {
    return {
      priceRange: '£500 - £1,200',
      duration: '3 - 5 Working Days',
      materialsNeeded: [
        'Dulux Trade Vinyl Matt/Silk emulsion',
        'High-density wall filler / skim plaster',
        'Fine grit sandpaper & protective dust sheets',
        'Precision painters tape to prevent bleed edges'
      ],
      technicalAssessment: 'Surface preparation represents 70% of high-end painting quality. All hairline fractures will be gouged, filled with premium filler, and sanded smooth before applying two coats.',
      contractorTips: 'Ensure plastering is fully dried (usually 3-5 days depending on humidity) before painting. Applying paint on damp plaster leads to blistering and peeling.'
    };
  }

  if (d.includes('electric') || d.includes('fuse') || d.includes(' rewire') || d.includes('socket') || d.includes('light')) {
    return {
      priceRange: '£350 - £850',
      duration: '1 - 2 Working Days',
      materialsNeeded: [
        'UK Compliant metal dual RCD consumer fuse box',
        'Heavy-duty copper wiring conduit',
        'Brushed-steel double sockets with integrated USB ports',
        'Low-energy LED fire-rated spotlight fixtures'
      ],
      technicalAssessment: 'All rewiring and board upgrades must strictly satisfy BS 7671 IET Wiring Regulations. Testing reports will be issued upon completion.',
      contractorTips: 'Install double sockets with USB sockets directly by your bedside or kitchen counters to significantly decrease your reliance on untidy extension hubs.'
    };
  }

  // Default handyman estimate
  return {
    priceRange: '£250 - £550',
    duration: '1 Working Day',
    materialsNeeded: [
      'Universal wall plugs & heavy duty screws',
      'Solid steel wall Brackets or rawl bolts',
      'Multi-surface filler and touch-up paint brush set',
      'Flexible silicone / caulking compounds'
    ],
    technicalAssessment: 'Standard multi-repair and fitting operations. Thermal moisture sensor and metal-detector scans will be carried out prior to any heavy wall-mounting to avoid utilities punctures.',
    contractorTips: 'Group small tasks (like door handle fixes, mirror hanging, cabinet aligning) together in one visit to maximize the efficiency of your handyman.'
  };
}

// Trustpilot domain verification endpoint
app.get('/be9b3618-4202-4a8d-a43e-c77314b83d8f.html', (req, res) => {
  res.setHeader('Content-Type', 'text/html');
  res.send(`<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="trustpilot-one-time-domain-verification-id" content="dd0e4224-1a58-46b2-ba76-770ba3b91d96"/>
    <title>Trustpilot One-Time Domain Verification</title>
</head>
<body>
    trustpilot-one-time-verification-id=d6bcdf8b-1d7c-4a3c-9b68-b6031e5942f4
</body>
</html>`);
});

// 1. SMART ESTIMATOR API
app.post('/api/quote-estimator', async (req, res) => {
  const { description } = req.body;
  if (!description || description.trim() === '') {
    return res.status(400).json({ error: 'Please enter a description for your building or handyman project.' });
  }

  const ai = getAiClient();

  if (!ai) {
    // Elegant fallback if no key is supplied
    console.log('Skipping Gemini API - No key found. Issuing local contractor estimation fallback.');
    const mockResult = getFallbackEstimate(description);
    return res.json({ result: mockResult, poweredBy: 'Nurzoda Local Pricing Engine' });
  }

  try {
    const promptText = `
      Please analyze this homeowner's building, handyman, tiling, electrical, or renovation project description:
      "${description}"
      
      Provide a realistic, professional, non-binding contract estimate in typical London, UK GBP currency. Include matching elements from major building skills.
    `;

    const response = await ai.models.generateContent({
      model: 'gemini-3.5-flash',
      contents: promptText,
      config: {
        systemInstruction: `
          You are the lead quantity surveyor and expert UK general contractor at NURZODA LTD (Company Number 15699501), registered in East London (E7 0LA).
          Your role is to return accurate, trustworthy, and realistic pricing and construction evaluations for residential projects.
          Align your estimates with standard London price rates.
          You must respond ONLY with a clean JSON object. Do not include markdown codeblocks or wrap in backticks.
        `,
        responseMimeType: 'application/json',
        responseSchema: {
          type: Type.OBJECT,
          properties: {
            priceRange: {
              type: Type.STRING,
              description: 'An elegant GBP cost range estimate. e.g., "£450 - £750" (including/excluding VAT and materials explicitly where helpful).'
            },
            duration: {
              type: Type.STRING,
              description: 'Approximate project duration. e.g., "3 - 5 Working Days" or "1 Working Day".'
            },
            materialsNeeded: {
              type: Type.ARRAY,
              items: { type: Type.STRING },
              description: 'A structured list of 3 to 5 realistic building materials, mortars, paints, tiles, or fittings that the project requires.'
            },
            technicalAssessment: {
              type: Type.STRING,
              description: 'A highly professional 2-3 sentence technical assessment of the engineering, plumbing, electrical, or tiling considerations. Refer to UK building standards or regulations if relevant.'
            },
            contractorTips: {
              type: Type.STRING,
              description: 'A valuable expert tip or warning for the homeowner before they commence this specific project.'
            }
          },
          required: ['priceRange', 'duration', 'materialsNeeded', 'technicalAssessment', 'contractorTips']
        }
      }
    });

    const bodyText = response.text ? response.text.trim() : '';
    // Clean potential markdown tags since some clients write blocks
    const cleanedJson = bodyText.replace(/^```json\s*/i, '').replace(/```\s*$/, '').trim();
    const result = JSON.parse(cleanedJson);

    return res.json({ result, poweredBy: 'Gemini 3.5 Flash' });
  } catch (err: any) {
    console.error('Error in Gemini estimator API:', err);
    // If Gemini fails, we still serve the local fallback to prevent any user crash
    const mockResult = getFallbackEstimate(description);
    return res.json({ result: mockResult, error: err.message, poweredBy: 'Nurzoda Estimator (Fallback Mode)' });
  }
});

// 2. LEAD / CONTACT BOOKING API
app.post('/api/contact', (req, res) => {
  const { name, email, phone, address, serviceType, description, estimateResult } = req.body;
  if (!name || !phone || !description) {
    return res.status(400).json({ error: 'Please provide at least a Name, Phone number, and Project description.' });
  }

  const newInquiry = {
    id: `lead_${Date.now()}`,
    name,
    email: email || '',
    phone,
    address: address || '',
    serviceType: serviceType || 'General Enquiry',
    description,
    status: 'new',
    createdAt: new Date().toISOString(),
    estimateResult: estimateResult || null
  };

  contacts.unshift(newInquiry);
  // Keep maximum 100 inquiries saved
  if (contacts.length > 100) {
    contacts = contacts.slice(0, 100);
  }

  saveContacts();
  return res.json({ success: true, inquiry: newInquiry });
});

// 3. GET ALL LEADS API (For Admin Dashboard)
app.get('/api/admin/leads', (req, res) => {
  return res.json({ leads: contacts });
});

// 4. UPDATE LEAD STATUS (For Admin Dashboard)
app.patch('/api/admin/leads/:id', (req, res) => {
  const { id } = req.params;
  const { status } = req.body;
  
  if (!status) {
    return res.status(400).json({ error: 'Status is required' });
  }

  const leadIndex = contacts.findIndex((c) => c.id === id);
  if (leadIndex === -1) {
    return res.status(404).json({ error: 'Inquiry not found' });
  }

  contacts[leadIndex].status = status;
  saveContacts();
  return res.json({ success: true, lead: contacts[leadIndex] });
});

// 5. DELETE LEAD (For Admin Dashboard)
app.delete('/api/admin/leads/:id', (req, res) => {
  const { id } = req.params;
  const leadIndex = contacts.findIndex((c) => c.id === id);
  if (leadIndex === -1) {
    return res.status(404).json({ error: 'Inquiry not found' });
  }

  contacts.splice(leadIndex, 1);
  saveContacts();
  return res.json({ success: true });
});

// MAIN SERVER & PRODUCTION ASSET BINDING
async function startServer() {
  if (process.env.NODE_ENV !== 'production') {
    const vite = await createViteServer({
      server: { middlewareMode: true },
      appType: 'spa'
    });
    app.use(vite.middlewares);
  } else {
    const distPath = path.join(process.cwd(), 'dist');
    app.use(express.static(distPath));
    app.get('*', (req, res) => {
      res.sendFile(path.join(distPath, 'index.html'));
    });
  }

  app.listen(PORT, '0.0.0.0', () => {
    console.log(`Nurzoda Ltd dev server listening at http://0.0.0.0:${PORT}`);
  });
}

startServer();

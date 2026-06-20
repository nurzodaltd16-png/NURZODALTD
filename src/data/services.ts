/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { ServiceDetail } from '../types';

export const services: ServiceDetail[] = [
  {
    id: 'flooring-tiling',
    title: 'Premium Flooring & Tiling',
    category: 'flooring',
    shortDesc: 'Expert floor fitting and bespoke tiling for kitchens, bathrooms, and corridors.',
    longDesc: 'From elegant herringbone hardwood and high-durability luxury vinyl tile (LVT) to precision porcelain and ceramic wall and floor tiles. We deliver flawless, leveled installations, subfloor preparations, and repairs that stand the test of time.',
    priceEstimate: 'From £35 - £65 per sq.m (Labour Only)',
    icon: 'Grid',
    features: [
      'Bespoke Tile work installation (Porcelain, Marble, Ceramic)',
      'Professional Floor fitting (Hardwood, Engineered wood, Laminate, LVT)',
      'Subfloor leveling, screening, and damp-proofing (DPM)',
      'Durable flooring repair and tile replacement',
      'Underfloor heating matching preparation'
    ],
    imageUrl: 'https://images.unsplash.com/photo-1581858726788-75bc0f6a952d?auto=format&fit=crop&w=800&q=80'
  },
  {
    id: 'bathroom-kitchen',
    title: 'Bathroom & Kitchen Remodelling',
    category: 'renovations',
    shortDesc: 'High-end fully managed structural remodelling, plumbing, and bespoke fitting.',
    longDesc: 'Complete head-to-toe kitchen and bathroom transformations. We handle everything from copper and waste plumbing re-routing, smart modern shower and wetroom designs, premium cabinetry installation, to custom gold/chrome hardware integrations.',
    priceEstimate: 'Bathrooms from £4,200 | Kitchens from £6,800',
    icon: 'Bath',
    features: [
      'Complete Bathroom Renovation & Wetroom installation',
      'Plumbing fixture installation (taps, vanities, smart toilets)',
      'Kitchen cabinetry installation & countertop fitting (Quartz, Granite, Wood)',
      'Water fixture repair and custom leakproofing controls',
      'Fitted appliance integrations and waste drainage configurations'
    ],
    imageUrl: 'https://images.unsplash.com/photo-1584622650111-993a426fbf0a?auto=format&fit=crop&w=800&q=80'
  },
  {
    id: 'extensions-building',
    title: 'Extensions, Additions & Conversions',
    category: 'renovations',
    shortDesc: 'Structural house extensions, loft conversions, and custom building.',
    longDesc: 'Add value and floor area with full structural home additions. We coordinate structurally engineered building works, detached or extended house revisions, roof installations, load-bearing RSJ beam fittings, and comprehensive exterior refurbishments.',
    priceEstimate: 'Extensions from £2,100 per sq.m',
    icon: 'Home',
    features: [
      'Custom home building and structural home renovations',
      'Home addition construction and side/rear house extensions',
      'Extended House roof installations and thermal insulating layers',
      'Interior structural repairs and load-bearing wall removals',
      'Residential and commercial multi-unit fit-outs'
    ],
    imageUrl: 'https://images.unsplash.com/photo-1503387762-592deb58ef4e?auto=format&fit=crop&w=800&q=80'
  },
  {
    id: 'painting-decoration',
    title: 'Master Painting & Decoration',
    category: 'decoration',
    shortDesc: 'Luxury interior/exterior painting, bespoke plastering, and detailed wall styling.',
    longDesc: 'Impeccable painting and decoration designed for premium London homes. We utilize high-quality, durable paint finishes (including Farrow & Ball, Dulux Trade, and Little Greene) along with meticulous surface preparation to ensure a durable, exquisite mirror-like sheen.',
    priceEstimate: 'From £180 per day per contractor',
    icon: 'Paintbrush',
    features: [
      'High-end interior and exterior painting services',
      'Wall plastering, skimming, and high-precision coving work',
      'Bespoke wallpaper hanging and accent-wall styling',
      'Skirting board, architrave painting, and protective woodwork gloss',
      'Complete aesthetic refurbishments for period Victorian houses'
    ],
    imageUrl: 'https://images.unsplash.com/photo-1562259949-e8e7689d7828?auto=format&fit=crop&w=800&q=80'
  },
  {
    id: 'electrical-smart',
    title: 'Certified Electrical Services',
    category: 'electrical',
    shortDesc: 'Safe, certified electrical installs, custom smart lighting, and safety checks.',
    longDesc: 'Licensed electrical work ranging from full house rewiring and fuse box upgrades (consumer units) to elegant spotlight grids, smart thermostat connections, kitchen appliance wiring, and landlord electrical safety certification (EICR).',
    priceEstimate: 'From £90 per smart point install',
    icon: 'Lightbulb',
    features: [
      'Consumer unit upgrades and full residential rewiring surveys',
      'Elegant LED spotlight layouts and low-voltage strip highlighting',
      'Smart home integrations (Ring, Nest, Hive heating controls)',
      'Socket additions, outdoor waterproof sockets, and garden lighting',
      'Full electrical safety testing and landlord EICR registration'
    ],
    imageUrl: 'https://images.unsplash.com/photo-1621905251189-08b45d6a269e?auto=format&fit=crop&w=800&q=80'
  },
  {
    id: 'handyman-assembly',
    title: 'Bespoke Handyman & Repairs',
    category: 'handyman',
    shortDesc: 'High-precision flatpack furniture assembly, furniture restoration, and general maintenance.',
    longDesc: 'Fast, tidy, and expert handyman visits. Whether assembling complex Ikea Pax wardrobes, wall-mounting heavy OLED TVs on plasterboard, aligning interior doors, repairing running toilets, or executing delicate furniture restorations.',
    priceEstimate: 'From £50 - £75 flat rate / hour',
    icon: 'Hammer',
    features: [
      'Precision structural furniture assembly and cabinet aligning',
      'High-end furniture restoration and detailed woodwork buffing',
      'Wall mounting services (Large televisions, heavy mirrors, shelving units)',
      'Water fixture repair, flushing issues, and custom mastic sealing',
      'General multi-room structural touch-ups and locks fitting'
    ],
    imageUrl: 'https://images.unsplash.com/photo-1534080318582-12e29e92ed29?auto=format&fit=crop&w=800&q=80'
  }
];

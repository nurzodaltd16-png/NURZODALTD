/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { ServicesSection } from './components/ServicesSection';
import { GallerySection } from './components/GallerySection';
import { TestimonialsSection } from './components/TestimonialsSection';
import { FAQSection } from './components/FAQSection';
import { Footer } from './components/Footer';
import { MessageCircle, Phone, ArrowUp, ArrowLeft, Wrench, Shield, CheckCircle } from 'lucide-react';

export default function App() {
  const [currentView, setCurrentView] = useState<'home' | 'services'>('home');

  // Trigger from "AI Estimate" service card - direct WhatsApp routing of estimate scope details
  const handleSelectServiceForEstimate = (serviceTitle: string) => {
    let textPreset = '';
    
    if (serviceTitle.includes('Flooring')) {
      textPreset = 'Need an expert floor fitting layout for a spacious living room. Solid oak wood materials preferred, around 25sqm context. Please estimate skirtings and underlay as well.';
    } else if (serviceTitle.includes('Bathroom')) {
      textPreset = 'A complete bathroom remodel with walk-in thermostatic wetroom shower panels, luxury marble-pattern wall tiles, and plumbing fittings upgrades.';
    } else if (serviceTitle.includes('Decoration') || serviceTitle.includes('Painting')) {
      textPreset = 'Hi, need professional painting and coving decoration across our Edwardian hallway walls and two bedroom ceilings. Skimming plaster needed to cover old splits.';
    } else if (serviceTitle.includes('Electrical')) {
      textPreset = 'Hooking up a safe new RCD consumer unit, installing 12 fire-rated dimmable spotlight grids in the kitchen, and certifying safety checks.';
    } else if (serviceTitle.includes('Handyman') || serviceTitle.includes('Assembly')) {
      textPreset = 'Assembly job for three massive IKEA PAX double wardrobes with custom glass partition hinges, and wall-mounting a heavy 65" TV on drywall securely.';
    } else {
      textPreset = `I am planning a comprehensive building and renovation project for my property. Looking for advice about materials and typical cost guides for ${serviceTitle}.`;
    }

    const encodedMsg = encodeURIComponent(`Hi Nurzoda Ltd! ${textPreset}`);
    window.open(`https://wa.me/447377419674?text=${encodedMsg}`, '_blank');
  };

  // Trigger from "Book Now " or details card button - direct WhatsApp booking
  const handleBookNowClick = (serviceTitle: string) => {
    const encodedMsg = encodeURIComponent(`Hi Nurzoda Ltd! I would like to book a firm, on-site survey inspection for ${serviceTitle}. Please check availability.`);
    window.open(`https://wa.me/447377419674?text=${encodedMsg}`, '_blank');
  };

  // Scroll to verified trust/WhatsApp portal
  const handleEstimateScrollRequest = () => {
    setCurrentView('home');
    setTimeout(() => {
      const el = document.getElementById('reviews');
      if (el) el.scrollIntoView({ behavior: 'smooth' });
    }, 50);
  };

  return (
    <div className="min-h-screen bg-editorial-grey flex flex-col text-editorial-dark selection:bg-editorial-dark selection:text-editorial-cream font-sans">
      
      {/* 1. Header & Navigation Bar */}
      <Navbar
        currentView={currentView}
        onViewChange={(v) => {
          setCurrentView(v);
          window.scrollTo({ top: 0, behavior: 'smooth' });
        }}
      />

      {/* 2. Primary Layout Framework components */}
      <main className="flex-grow">
        {currentView === 'home' ? (
          <>
            {/* Core Selling Banner Hero */}
            <Hero
              onEstimateClick={handleEstimateScrollRequest}
              onContactClick={handleEstimateScrollRequest}
            />

            {/* Filterable stunning before vs after gallery list */}
            <GallerySection />

            {/* Social Proof customer testimonials widget block with LinkedIn */}
            <TestimonialsSection />

            {/* General FAQs on regulations, timelines, and payments */}
            <FAQSection />
          </>
        ) : (
          <div className="bg-editorial-grey min-h-[85vh] py-12 animate-in fade-in duration-300">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              
              {/* Back breadcrumb and headers */}
              <div className="mb-10 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 border-b border-editorial-dark/15 pb-6">
                <button
                  onClick={() => {
                    setCurrentView('home');
                    window.scrollTo({ top: 0, behavior: 'smooth' });
                  }}
                  className="inline-flex items-center gap-2 px-4 py-2 border border-editorial-dark bg-white hover:bg-neutral-50 text-editorial-dark text-xs font-mono uppercase tracking-wider font-bold transition-all shadow-sm cursor-pointer self-start"
                >
                  <ArrowLeft className="w-4 h-4" />
                  <span>Back to Home</span>
                </button>

                <div className="text-sm font-mono uppercase tracking-[0.1em] text-editorial-dark/60">
                  Services Hub • Nurzoda Ltd
                </div>
              </div>

              {/* Dedicated service description header */}
              <div className="bg-white p-8 md:p-12 border border-editorial-dark mb-10 shadow-sm relative overflow-hidden">
                <div className="absolute right-0 top-0 translate-x-1/4 -translate-y-1/4 opacity-5 pointer-events-none">
                  <Wrench className="w-96 h-96" />
                </div>
                
                <div className="max-w-3xl space-y-4">
                  <div className="inline-flex items-center gap-2 bg-brand-yellow/35 text-editorial-dark border border-editorial-dark px-3 py-1 text-[10px] font-mono uppercase font-bold tracking-wider select-none">
                    <Shield className="w-3.5 h-3.5 text-editorial-dark" />
                    <span>LDC Certified & Fully Insured</span>
                  </div>
                  
                  <h1 className="font-sans text-editorial-dark tracking-tight text-3xl sm:text-5xl font-extrabold uppercase leading-none">
                    Our Specialized Trades
                  </h1>
                  
                  <p className="font-sans text-sm sm:text-base text-editorial-dark/80 leading-relaxed">
                    NURZODA LTD provides fully insured, certified residential renovations, extensions, floor fitting, 
                    and interior construction across wider London. We bring razor-sharp attention to premium residential builds, 
                    complete rewires, high-end loft conversions, master bathroom tiling, and professional paint decoration.
                  </p>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-4 font-mono text-[11px] uppercase tracking-wider text-editorial-dark/95">
                    <div className="flex items-center gap-2">
                      <CheckCircle className="w-4 h-4 text-[#00b67a] shrink-0" />
                      <span>£5M Public Liability Insurance</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <CheckCircle className="w-4 h-4 text-[#00b67a] shrink-0" />
                      <span>Registered UK Limited Entity</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <CheckCircle className="w-4 h-4 text-[#00b67a] shrink-0" />
                      <span>Certified Nic/Eic Electricians</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <CheckCircle className="w-4 h-4 text-[#00b67a] shrink-0" />
                      <span>London-Wide Prompt Home Visits</span>
                    </div>
                  </div>
                </div>
              </div>

              {/* Mount the actual Services list inside this page */}
              <ServicesSection
                onSelectServiceForEstimate={handleSelectServiceForEstimate}
                onBookNowClick={handleBookNowClick}
              />

            </div>
          </div>
        )}

      </main>

      {/* 3. Formal Corporate credentials Footer */}
      <Footer />

      {/* Sticky utility bottom support triggers for mobile users */}
      <div className="fixed bottom-6 right-6 z-30 flex flex-col gap-2">
        {/* WhatsApp floating widget */}
        <a
          href="https://wa.me/447377419674?text=Hello%20Nurzoda%20Ltd%21%20I%20would%20like%20to%20request%20a%20handyman%20visit."
          target="_blank"
          rel="noopener noreferrer"
          className="p-3 bg-emerald-600 hover:bg-emerald-500 text-white rounded-none border border-editorial-dark shadow transition-all flex items-center justify-center group"
          title="Contact us directly on WhatsApp"
        >
          <MessageCircle className="w-5 h-5 fill-white text-emerald-600 group-hover:rotate-12 transition-transform" />
        </a>

        {/* Back to top scroll button */}
        <button
          onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
          className="p-3 bg-white text-editorial-dark border border-editorial-dark hover:bg-editorial-grey transition-all flex items-center justify-center cursor-pointer rounded-none shadow"
          title="Scroll back to top"
        >
          <ArrowUp className="w-5 h-5" />
        </button>
      </div>

    </div>
  );
}

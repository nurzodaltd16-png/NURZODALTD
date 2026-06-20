/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React from 'react';
import { Shield, Sparkles, MapPin, Award, Star, ArrowRight, MessageCircle } from 'lucide-react';

interface HeroProps {
  onEstimateClick: () => void;
  onContactClick: () => void;
}

export function Hero({ onEstimateClick, onContactClick }: HeroProps) {
  return (
    <section className="relative overflow-hidden bg-editorial-grey py-16 sm:py-24 border-b border-editorial-dark" id="hero">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-stretch">
          
          {/* Left Block - Sales Message */}
          <div className="lg:col-span-7 flex flex-col justify-between space-y-6">
            
            {/* Tagline Badge */}
            <div className="self-start inline-flex items-center gap-2 px-3.5 py-1.5 bg-editorial-dark text-brand-yellow text-[10px] font-mono tracking-[0.15em] uppercase font-bold border border-editorial-dark">
              <Sparkles className="w-4 h-4 text-brand-yellow animate-pulse shrink-0" />
              <span>Professional London Extensions & Loft Conversions</span>
            </div>

            {/* Massive Trust Header */}
            <div>
              <span className="text-[10px] text-editorial-dark/65 font-mono tracking-[0.2em] uppercase block mb-2">
                EST. 2024 / LONDON, REG: 15699501
              </span>
              <h1 className="font-sans text-editorial-dark tracking-tight text-4xl sm:text-6xl leading-[1.05] font-extrabold uppercase">
                Builders of <br />
                <span className="bg-editorial-dark text-brand-yellow px-2 py-0.5 leading-snug">Distinction.</span><br />
                <span className="text-3xl sm:text-4xl font-bold text-editorial-dark/80 block mt-3 lowercase first-letter:uppercase font-mono normal-case tracking-normal">
                  loft conversions, extensions & full refurbs
                </span>
              </h1>
            </div>

            {/* Subtext */}
            <p className="font-sans text-base text-editorial-dark/85 max-w-xl leading-relaxed">
              <strong>NURZODA LTD</strong> is a premier London building contractor. We engineer high-end residential 
              extensions, structural loft conversions, certified electrical installations, custom bathrooms, and professional flooring 
              designed to extend your living space and maximize market value. Fully insured & vetted.
            </p>

            {/* Trust Badges Bar */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-1 border border-editorial-dark bg-editorial-dark/10 p-1">
              <div className="flex items-center gap-2 bg-white p-3 border border-editorial-dark/10">
                <Shield className="w-5 h-5 text-editorial-dark shrink-0" />
                <div className="text-[11px] font-mono leading-tight">
                  <span className="block font-bold uppercase tracking-wider text-editorial-dark">Fully Insured</span>
                  <span className="text-editorial-dark/60">Public Liability Covered</span>
                </div>
              </div>

              <div className="flex items-center gap-2 bg-white p-3 border border-editorial-dark/10">
                <MapPin className="w-5 h-5 text-editorial-dark shrink-0" />
                <div className="text-[11px] font-mono leading-tight">
                  <span className="block font-bold uppercase tracking-wider text-editorial-dark">London-Wide</span>
                  <span className="text-editorial-dark/60">Forest Gate, E7 Base</span>
                </div>
              </div>

              <div className="flex items-center gap-2 bg-white p-3 border border-editorial-dark/10 sm:col-span-1 col-span-1">
                <Award className="w-5 h-5 text-editorial-dark shrink-0" />
                <div className="text-[11px] font-mono leading-tight">
                  <span className="block font-bold uppercase tracking-wider text-editorial-dark">MyBuilder</span>
                  <span className="text-editorial-dark/60">5.0 ★ Certified Profile</span>
                </div>
              </div>
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 pt-2">
              <button
                onClick={onEstimateClick}
                className="inline-flex items-center justify-center gap-2 px-6 py-4 bg-brand-yellow hover:bg-amber-400 text-editorial-dark font-mono uppercase tracking-[0.1em] font-bold transition-all border border-editorial-dark text-xs cursor-pointer shadow-sm"
              >
                <span>Request Free Quote</span>
                <ArrowRight className="w-4 h-4 text-editorial-dark" />
              </button>

              <a
                href="https://wa.me/447377419674?text=Hi%20Nurzoda%20Ltd%2C%20I%20would%20like%20to%20request%20a%20free%20quote%20for%20my%20building%20and%20refurbishment%20project."
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 px-6 py-4 bg-white hover:bg-neutral-50 text-editorial-dark border border-editorial-dark font-mono uppercase tracking-[0.1em] font-bold transition-all text-xs"
              >
                <MessageCircle className="w-4 h-4 text-editorial-dark" />
                <span>Chat on WhatsApp</span>
              </a>
            </div>

            {/* Small reassurance note */}
            <p className="text-[11px] font-mono uppercase tracking-wider text-editorial-dark/80 flex items-center gap-1.5 pt-2">
              <span className="w-2.5 h-2.5 bg-brand-yellow border border-editorial-dark shrink-0" />
              <span>Available now for home visits in Forest Gate, Stratford, Wanstead, and wider London.</span>
            </p>

          </div>

          {/* Right Block - Visual Showcase (Aesthetic design card with premium architecture showcase) */}
          <div className="lg:col-span-5 relative flex flex-col justify-between">
            <div className="relative border border-editorial-dark overflow-hidden bg-editorial-dark w-full h-full aspect-square lg:aspect-auto min-h-[380px]">
              {/* Primary Background Image of a fully remolded gorgeous premium room */}
              <img
                src="https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?auto=format&fit=crop&w=1200&q=80"
                alt="Nurzoda Ltd Luxury Renovations"
                className="w-full h-full object-cover opacity-90 hover:scale-105 transition-transform duration-750"
                referrerPolicy="no-referrer"
              />
              
              {/* Gradient Scrim */}
              <div className="absolute inset-0 bg-gradient-to-t from-neutral-950/90 via-neutral-900/20 to-transparent" />

              {/* Floating Content / Verified Credentials Banner (Strictly no fake reviews) */}
              <div className="absolute bottom-0 left-0 right-0 p-6 text-white space-y-3 z-10">
                <div>
                  <h4 className="font-sans text-xl font-black uppercase tracking-tight text-brand-yellow">
                    NURZODA LTD
                  </h4>
                  <p className="font-mono text-[9px] uppercase tracking-wider text-neutral-300">
                    High-End London Architectural Builders & Tilers
                  </p>
                </div>
                
                <div className="h-px bg-white/20 my-2" />

                <div className="flex justify-between items-center text-[9px] uppercase tracking-widest font-mono text-neutral-300">
                  <span className="flex items-center gap-1.5 font-bold">
                    <span className="w-2 h-2 rounded-full bg-[#00b67a] inline-block animate-pulse" />
                    Fully Insured & Verified
                  </span>
                  <span className="px-2 py-0.5 bg-brand-yellow text-editorial-dark font-mono text-[9px] font-bold">
                    EAST LONDON BASE
                  </span>
                </div>
              </div>
            </div>

            {/* Overlapping trade profile block below the image */}
            <div className="mt-4 bg-white text-editorial-dark p-4 border border-editorial-dark flex justify-between items-center shadow-sm">
              <div>
                <span className="block font-mono text-xs uppercase tracking-widest text-[#666] font-bold">Verified Trades</span>
                <span className="block font-sans text-sm font-extrabold text-editorial-dark uppercase tracking-tight">
                  100% Insured Craftsmanship
                </span>
              </div>
              <span className="font-mono text-xs font-bold border border-editorial-dark px-2.5 py-1 bg-brand-yellow text-editorial-dark uppercase tracking-wider select-none shrink-0 shadow-sm">
                ★ 5.0 Rated
              </span>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}

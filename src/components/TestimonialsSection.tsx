/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React from 'react';
import { Star, ShieldCheck, ExternalLink, Instagram, Sparkles, MessageSquare, Linkedin } from 'lucide-react';

export function TestimonialsSection() {
  return (
    <section className="bg-editorial-grey py-16 sm:py-24 scroll-mt-20 border-b border-editorial-dark" id="reviews">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Title */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <h2 className="text-[10px] font-mono font-bold tracking-[0.15em] text-editorial-dark uppercase border border-editorial-dark bg-brand-yellow inline-block px-3.5 py-1.5 mb-4 select-none">
            Verified Verification & Trust
          </h2>
          <p className="font-sans text-3xl sm:text-4xl text-editorial-dark tracking-tight leading-tight font-extrabold uppercase">
            100% Transparent Channels
          </p>
          <p className="font-sans text-sm sm:text-base text-editorial-dark/75 mt-3">
            At <strong className="text-editorial-dark">NURZODA LTD</strong>, we do not support manual or fake reviews. For complete transparency, all our client feedback is gathered and verified entirely through official, third-party portals.
          </p>
        </div>

        {/* Dynamic Trust Scoreboard Grid (No fake review items list) */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          
          {/* Card 1: Trustpilot Profile */}
          <div className="bg-white border border-editorial-dark p-6 flex flex-col justify-between hover:bg-neutral-50 transition-all shadow-sm relative group h-full">
            <div>
              <div className="flex justify-between items-start mb-6">
                <span className="text-lg font-bold tracking-tight text-[#00b67a] font-sans">
                  Trustpilot
                </span>
                <div className="flex gap-0.5">
                  {[1, 2, 3, 4, 5].map((s) => (
                    <div key={s} className="w-4 h-4 bg-[#00b67a] flex items-center justify-center text-white rounded-[3px]">
                      <span className="text-[8px] leading-none">★</span>
                    </div>
                  ))}
                </div>
              </div>
              <h3 className="text-base font-bold text-editorial-dark font-sans uppercase tracking-tight mb-2">
                Domain Verified
              </h3>
              <p className="text-xs text-editorial-dark/70 leading-relaxed mb-6 font-sans">
                Our official domain <span className="font-mono bg-neutral-100 px-1 py-0.5 text-editorial-dark">nurzodaltd.info</span> has been successfully registered and verified on Trustpilot. Read genuine external feedback.
              </p>
            </div>
            
            <a
              href="https://uk.trustpilot.com"
              target="_blank"
              rel="noopener noreferrer"
              className="mt-4 inline-flex items-center justify-center gap-2 px-3 py-2.5 bg-[#00b67a] text-white font-mono text-[10px] font-bold uppercase tracking-wider hover:bg-[#00a36c] transition-colors"
            >
              <span>Visit Trustpilot</span>
              <ExternalLink className="w-3.5 h-3.5 text-white" />
            </a>
          </div>

          {/* Card 2: Instagram Portfolio Feed */}
          <div className="bg-white border border-editorial-dark p-6 flex flex-col justify-between hover:bg-neutral-50 transition-all shadow-sm relative group h-full">
            <div>
              <div className="flex justify-between items-start mb-6">
                <span className="text-lg font-bold tracking-tight text-pink-600 font-sans flex items-center gap-1.5">
                  <Instagram className="w-5 h-5 text-pink-600 shrink-0" />
                  Instagram
                </span>
                <span className="text-[8px] font-mono tracking-widest uppercase bg-pink-50 text-pink-700 px-2 py-0.5 border border-pink-100 font-bold block rounded">
                  Portfolio
                </span>
              </div>
              <h3 className="text-base font-bold text-editorial-dark font-sans uppercase tracking-tight mb-2">
                Daily Gallery
              </h3>
              <p className="text-xs text-editorial-dark/70 leading-relaxed mb-6 font-sans">
                Follow our official builder feed <span className="font-mono bg-neutral-100 px-1 py-0.5 text-pink-600 font-bold font-sans">@gardenhh122</span> on Instagram for snapshots, floor frames, and video logs.
              </p>
            </div>
            
            <a
              href="https://www.instagram.com/gardenhh122?igsh=Y204NmtqMWYwaXIz&utm_source=qr"
              target="_blank"
              rel="noopener noreferrer"
              className="mt-4 inline-flex items-center justify-center gap-2 px-3 py-2.5 bg-pink-600 text-white font-mono text-[10px] font-bold uppercase tracking-wider hover:bg-pink-700 transition-colors"
            >
              <span>Our Instagram</span>
              <Instagram className="w-3.5 h-3.5 text-white" />
            </a>
          </div>

          {/* Card 3: LinkedIn Corporate profile */}
          <div className="bg-white border border-editorial-dark p-6 flex flex-col justify-between hover:bg-neutral-50 transition-all shadow-sm relative group h-full">
            <div>
              <div className="flex justify-between items-start mb-6">
                <span className="text-lg font-bold tracking-tight text-[#0a66c2] font-sans flex items-center gap-1.5">
                  <Linkedin className="w-5 h-5 text-[#0a66c2] shrink-0" />
                  LinkedIn
                </span>
                <span className="text-[8px] font-mono tracking-widest uppercase bg-blue-50 text-blue-700 px-2 py-0.5 border border-blue-100 font-bold block rounded">
                  Corporate
                </span>
              </div>
              <h3 className="text-base font-bold text-editorial-dark font-sans uppercase tracking-tight mb-2">
                Business Network
              </h3>
              <p className="text-xs text-editorial-dark/70 leading-relaxed mb-6 font-sans">
                Connect with our commercial builders directory on LinkedIn to view director profiles, credentials records, and construction updates.
              </p>
            </div>
            
            <a
              href="https://www.linkedin.com/in/nurzoda-ltd-945413418/?lipi=urn%3Ali%3Apage%3Ad_flagship3_profile_view_base_contact_details%3BBEiKRLW7SW2RrRbHVVPQgQ%3D%3D"
              target="_blank"
              rel="noopener noreferrer"
              className="mt-4 inline-flex items-center justify-center gap-2 px-3 py-2.5 bg-[#0a66c2] text-white font-mono text-[10px] font-bold uppercase tracking-wider hover:bg-[#004182] transition-colors"
            >
              <span>Our LinkedIn</span>
              <Linkedin className="w-3.5 h-3.5 text-white" />
            </a>
          </div>

          {/* Card 4: MyBuilder Profile */}
          <div className="bg-white border border-editorial-dark p-6 flex flex-col justify-between hover:bg-neutral-50 transition-all shadow-sm relative group h-full">
            <div>
              <div className="flex justify-between items-start mb-6">
                <span className="text-lg font-bold tracking-tight text-amber-600 font-sans flex items-center gap-1">
                  <ShieldCheck className="w-5 h-5 text-amber-600 shrink-0" />
                  MyBuilder
                </span>
                <span className="text-[10px] font-mono text-amber-600 font-extrabold uppercase block">
                  5.0 Rated
                </span>
              </div>
              <h3 className="text-base font-bold text-editorial-dark font-sans uppercase tracking-tight mb-2">
                Trade Registry
              </h3>
              <p className="text-xs text-editorial-dark/70 leading-relaxed mb-6 font-sans">
                Verify our status on the leading tradesperson directory. Our profile displays our verified insurances and comprehensive projects history.
              </p>
            </div>
            
            <a
              href="https://www.mybuilder.com/profile/kholmumin"
              target="_blank"
              rel="noopener noreferrer"
              className="mt-4 inline-flex items-center justify-center gap-2 px-3 py-2.5 bg-brand-yellow text-editorial-dark font-mono text-[10px] font-extrabold uppercase tracking-wider hover:bg-amber-400 transition-colors border border-editorial-dark"
            >
              <span>Our MyBuilder</span>
              <ExternalLink className="w-3.5 h-3.5 text-editorial-dark" />
            </a>
          </div>

        </div>

        {/* Quality Guarantee Callout Panel */}
        <div className="border border-editorial-dark bg-editorial-dark text-white p-6 sm:p-8 flex flex-col sm:flex-row items-center justify-between gap-6 max-w-5xl mx-auto shadow-md">
          <div className="space-y-2 text-center sm:text-left">
            <span className="inline-flex items-center gap-1.5 px-3 py-1 bg-white/10 text-brand-yellow text-[9px] border border-white/15 uppercase font-mono tracking-widest font-extrabold">
              <Sparkles className="w-3.5 h-3.5" />
              <span>Full Public Liability Cover Included</span>
            </span>
            <h3 className="font-sans text-xl sm:text-2xl font-extrabold uppercase leading-tight">
              Honest Builders, Direct Results
            </h3>
            <p className="text-xs text-neutral-300 max-w-xl leading-relaxed">
              We focus on premium execution. Each loft conversion, rear house extension, and tiling project is fully documented under legally-binding warranty paperwork and managed with real-time updates.
            </p>
          </div>
          
          <a
            href="https://wa.me/447377419674?text=Hi%20Nurzoda%20Ltd%2C%20I%20saw%20your%20Instagram%20and%20Trustpilot%20profiles%20and%20would%20like%20to%20request%20a%20free%20quote."
            target="_blank"
            rel="noopener noreferrer"
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-4 bg-brand-yellow hover:bg-amber-400 text-editorial-dark border border-editorial-dark font-mono uppercase tracking-[0.1em] font-extrabold text-xs cursor-pointer shadow-sm shrink-0 transition-all"
          >
            <MessageSquare className="w-4 h-4 text-editorial-dark" />
            <span>Chat Custom Quote</span>
          </a>
        </div>

      </div>
    </section>
  );
}

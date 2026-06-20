/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React from 'react';
import { ShieldCheck, Mail, MapPin, Phone, ExternalLink, Instagram, Linkedin } from 'lucide-react';
import { NurzodaLogo } from './NurzodaLogo';

export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-editorial-dark text-zinc-300 font-sans border-t border-editorial-dark shrink-0" id="main-footer">
      
      {/* Upper Footer section */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 md:py-16">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-10">
          
          {/* Logo Column */}
          <div className="md:col-span-5 space-y-4">
            <div className="flex items-center gap-2">
              <NurzodaLogo className="h-9 w-auto" light={true} />
            </div>
            
            <p className="text-xs text-zinc-400 leading-relaxed max-w-sm">
              Professional residential refurbishments, expert flooring installation, certified wallpapering & painting, flawless tiling, and registered handyman repairs across entire London municipal borders.
            </p>

            <div className="space-y-1.5 text-xs font-mono bg-white/5 border border-white/10 p-3 max-w-sm">
              <span className="block text-zinc-400 font-bold uppercase tracking-widest text-[9px]">
                UK Corporate Registrar ID:
              </span>
              <span className="text-white block text-[11px]">
                NURZODA LTD — Company Number: <strong>15699501</strong>
              </span>
            </div>
          </div>

          {/* Location Links Column */}
          <div className="md:col-span-4 space-y-4">
            <span className="text-[10px] font-mono font-bold uppercase tracking-widest text-white/80 block border-b border-white/10 pb-1 max-w-[120px]">
              Postcode Areas
            </span>
            <p className="text-xs text-zinc-400 leading-relaxed">
              We regularly visit clients in Forest Gate (E7), Stratford (E15), Manor Park (E12), Wanstead (E11), East Ham (E6), and West Ham. Available across surrounding central and East Greater London boroughs.
            </p>
            <div className="flex items-center gap-1.5 text-xs font-mono text-white">
              <MapPin className="w-3.5 h-3.5 shrink-0" />
              <span>Forest Gate Base • London E7 0LA</span>
            </div>
          </div>

          {/* Quick Contact info Column */}
          <div className="md:col-span-3 space-y-4">
            <span className="text-[10px] font-mono font-bold uppercase tracking-widest text-white/80 block border-b border-white/10 pb-1 max-w-[100px]">
              Direct Line
            </span>
            <div className="space-y-3 text-xs">
              <a
                href="tel:+447377419674"
                className="flex items-center gap-2 text-zinc-300 hover:text-white transition-colors"
              >
                <Phone className="w-4 h-4 text-white shrink-0" />
                <span>07377 419674</span>
              </a>

              <a
                href="mailto:nurzodaltd16@gmail.com"
                className="flex items-center gap-2 text-zinc-300 hover:text-white transition-colors select-all"
              >
                <Mail className="w-4 h-4 text-white shrink-0" />
                <span>nurzodaltd16@gmail.com</span>
              </a>

              <div className="flex flex-col gap-2 pt-1">
                <a
                  href="https://www.linkedin.com/in/nurzoda-ltd-945413418/?lipi=urn%3Ali%3Apage%3Ad_flagship3_profile_view_base_contact_details%3BBEiKRLW7SW2RrRbHVVPQgQ%3D%3D"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-between text-white hover:bg-white/10 transition-colors bg-white/5 px-3 py-2 border border-white/15 text-left"
                >
                  <span className="flex items-center gap-2">
                    <Linkedin className="w-3.5 h-3.5 text-blue-400 shrink-0" />
                    <span className="font-mono text-[9px] uppercase tracking-wider font-bold">LinkedIn Business</span>
                  </span>
                  <ExternalLink className="w-3 h-3 text-white/50" />
                </a>

                <a
                  href="https://www.mybuilder.com/profile/kholmumin"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-between text-white hover:bg-white/10 transition-colors bg-white/5 px-3 py-2 border border-white/15 text-left"
                >
                  <span className="flex items-center gap-2">
                    <ShieldCheck className="w-3.5 h-3.5 text-brand-yellow shrink-0" />
                    <span className="font-mono text-[9px] uppercase tracking-wider font-bold">MyBuilder Trade</span>
                  </span>
                  <ExternalLink className="w-3 h-3 text-white/50" />
                </a>

                <a
                  href="https://www.instagram.com/gardenhh122?igsh=Y204NmtqMWYwaXIz&utm_source=qr"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-between text-white hover:bg-white/10 transition-colors bg-white/5 px-3 py-2 border border-white/15 text-left"
                >
                  <span className="flex items-center gap-2">
                    <Instagram className="w-3.5 h-3.5 text-pink-500 shrink-0" />
                    <span className="font-mono text-[9px] uppercase tracking-wider font-bold">Instagram Feed</span>
                  </span>
                  <ExternalLink className="w-3 h-3 text-white/50" />
                </a>

                <a
                  href="https://uk.trustpilot.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-between text-white hover:bg-white/10 transition-colors bg-white/5 px-3 py-2 border border-white/15 text-left"
                >
                  <span className="flex items-center gap-2">
                    <span className="w-3.5 h-3.5 bg-[#00b67a] text-white rounded-[2px] text-[7px] font-bold flex items-center justify-center">★</span>
                    <span className="font-mono text-[9px] uppercase tracking-wider font-bold">Trustpilot</span>
                  </span>
                  <ExternalLink className="w-3 h-3 text-white/50" />
                </a>
              </div>
            </div>
          </div>

        </div>
      </div>

      {/* Under footer segment */}
      <div className="bg-neutral-950 border-t border-white/10 text-[9px] text-zinc-500 py-6">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col sm:flex-row justify-between items-center gap-4 text-center sm:text-left">
          <p>
            &copy; {currentYear} NURZODA LTD. Company Number 15699501. All rights reserved. Registered Office: 1 Avenue Road, London, UK, E7 0LA.
          </p>
          <div className="flex gap-4 font-mono font-bold tracking-widest uppercase">
            <span>Licensed Builders</span>
            <span>•</span>
            <span>Fully Insured Trades</span>
          </div>
        </div>
      </div>

    </footer>
  );
}

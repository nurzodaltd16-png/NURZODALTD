/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from 'react';
import { Menu, X, Phone, ShieldCheck, ExternalLink } from 'lucide-react';
import { NurzodaLogo } from './NurzodaLogo';

interface NavbarProps {
  currentView: 'home' | 'services';
  onViewChange: (view: 'home' | 'services') => void;
}

export function Navbar({ currentView, onViewChange }: NavbarProps) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const navItems = [
    { label: 'Our Services', href: '#services' },
    { label: 'Project Gallery', href: '#gallery' },
    { label: 'Contact & Reviews', href: '#reviews' }
  ];

  const handleNavItemClick = (href: string, label: string, e: React.MouseEvent) => {
    e.preventDefault();
    setMobileMenuOpen(false);
    if (label === 'Our Services') {
      onViewChange('services');
      window.scrollTo({ top: 0, behavior: 'smooth' });
    } else {
      onViewChange('home');
      const targetId = href.replace('#', '');
      setTimeout(() => {
        const element = document.getElementById(targetId);
        if (element) {
          element.scrollIntoView({ behavior: 'smooth' });
        }
      }, 50);
    }
  };

  return (
    <nav className="sticky top-0 z-40 bg-editorial-cream border-b border-editorial-dark" id="main-nav">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-20">
          {/* Logo & Branding */}
          <div className="flex items-center">
            <a 
              href="#" 
              onClick={(e) => { 
                e.preventDefault(); 
                onViewChange('home'); 
                window.scrollTo({ top: 0, behavior: 'smooth' }); 
              }} 
              className="flex items-center gap-3"
            >
              <NurzodaLogo className="h-9 sm:h-11 w-auto" />
              <div className="hidden lg:block border-l border-editorial-dark/20 pl-3 py-0.5">
                <span className="text-[8px] text-editorial-dark/60 font-mono tracking-[0.12em] uppercase block">
                  Est. 2024 / London, UK
                </span>
                <span className="text-[8px] text-editorial-dark/60 font-mono tracking-[0.12em] uppercase block">
                  Reg. No. 15699501
                </span>
              </div>
            </a>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-6">
            {navItems.map((item) => (
              <a
                key={item.label}
                href={item.href}
                onClick={(e) => handleNavItemClick(item.href, item.label, e)}
                className={`font-mono uppercase tracking-[0.12em] text-[11px] font-bold transition-colors ${
                  (item.label === 'Our Services' && currentView === 'services') 
                    ? 'text-[#00b67a] border-b-2 border-[#00b67a] pb-1'
                    : 'text-editorial-dark/85 hover:text-editorial-dark'
                }`}
              >
                {item.label}
              </a>
            ))}
            
            {/* MyBuilder partner link */}
            <a
              href="https://www.mybuilder.com/profile/kholmumin"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 px-3 py-1.5 bg-white text-editorial-dark text-[10px] font-mono uppercase tracking-wider font-bold border border-editorial-dark hover:bg-editorial-grey transition-all"
            >
              <ShieldCheck className="w-3.5 h-3.5 text-editorial-dark" />
              <span>MyBuilder Profile</span>
              <ExternalLink className="w-3 h-3" />
            </a>

            {/* Urgent Phone Trigger */}
            <a
              href="tel:+447377419674"
              className="inline-flex items-center gap-2 px-4 py-2 bg-brand-yellow hover:bg-amber-400 text-editorial-dark text-xs font-mono uppercase tracking-[0.1em] font-bold transition-all border border-editorial-dark shadow-sm"
            >
              <Phone className="w-4 h-4 text-editorial-dark" />
              <span>07377 419674</span>
            </a>
          </div>

          {/* Mobile menu button */}
          <div className="flex items-center gap-2 md:hidden">
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 text-editorial-dark hover:bg-white transition-colors border border-editorial-dark"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-editorial-cream border-t border-editorial-dark py-4 px-4 space-y-3 animate-in fade-in duration-200">
          {navItems.map((item) => (
            <a
              key={item.label}
              href={item.href}
              onClick={(e) => handleNavItemClick(item.href, item.label, e)}
              className={`block py-2 font-mono text-xs uppercase tracking-wider font-bold border-b border-editorial-dark/10 ${
                (item.label === 'Our Services' && currentView === 'services')
                  ? 'text-[#00b67a]'
                  : 'text-editorial-dark hover:text-editorial-dark/70'
              }`}
            >
              {item.label}
            </a>
          ))}
          <div className="pt-2 space-y-3">
            <a
              href="https://www.mybuilder.com/profile/kholmumin"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center gap-2 py-2.5 bg-white border border-editorial-dark text-editorial-dark font-mono text-xs font-bold uppercase"
            >
              <ShieldCheck className="w-4 h-4" />
              <span>Verified MyBuilder Partner</span>
              <ExternalLink className="w-3.5 h-3.5" />
            </a>

            <a
              href="tel:+447377419674"
              className="flex items-center justify-center gap-2 py-3 bg-editorial-dark text-editorial-cream font-mono text-xs font-bold uppercase"
            >
              <Phone className="w-5 h-5" />
              <span>Call: 07377 419674</span>
            </a>
          </div>
        </div>
      )}
    </nav>
  );
}

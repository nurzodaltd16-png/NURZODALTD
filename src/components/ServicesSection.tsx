/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from 'react';
import * as Icons from 'lucide-react';
import { services } from '../data/services';
import { ServiceDetail } from '../types';

interface ServicesSectionProps {
  onSelectServiceForEstimate: (serviceTitle: string) => void;
  onBookNowClick: (serviceTitle: string) => void;
}

export function ServicesSection({ onSelectServiceForEstimate, onBookNowClick }: ServicesSectionProps) {
  const [selectedCategory, setSelectedCategory] = useState<string>('all');
  const [activeModalService, setActiveModalService] = useState<ServiceDetail | null>(null);

  const categories = [
    { label: 'All Services', value: 'all' },
    { label: 'Build & Extensions', value: 'renovations' },
    { label: 'Painting & Decorating', value: 'decoration' },
    { label: 'Flooring & Tiling', value: 'flooring' },
    { label: 'Electrical Works', value: 'electrical' },
    { label: 'Handyman Repairs', value: 'handyman' }
  ];

  const filteredServices = selectedCategory === 'all'
    ? services
    : services.filter(s => s.category === selectedCategory);

  // Utility to render dynamic Lucide Icon safely
  const renderIcon = (iconName: string, className: string = "w-6 h-6 text-indigo-950") => {
    const IconComponent = (Icons as any)[iconName] || Icons.Hammer;
    return <IconComponent className={className} />;
  };

  return (
    <section className="bg-white py-16 sm:py-24 scroll-mt-20 border-b border-editorial-dark" id="services">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <h2 className="text-[10px] font-mono font-bold tracking-[0.15em] text-editorial-dark uppercase border border-editorial-dark bg-brand-yellow inline-block px-3.5 py-1.5 mb-4 select-none">
            Commercial & Residential Specialities
          </h2>
          <p className="font-sans text-3xl sm:text-4xl text-editorial-dark tracking-tight leading-tight font-extrabold uppercase">
            Designed to Build, Built to Last
          </p>
          <p className="font-sans text-sm sm:text-base text-editorial-dark/80 mt-3">
            From luxury structural extensions and high-end loft conversions, down to precision hardwood flooring, certified rewires, and premium plaster decoration. We implement perfection at every scale.
          </p>
        </div>

        {/* Category Filters */}
        <div className="flex flex-wrap justify-center gap-2 mb-10">
          {categories.map((cat) => (
            <button
              key={cat.value}
              onClick={() => setSelectedCategory(cat.value)}
              className={`px-4 py-2 font-mono uppercase tracking-wider text-[11px] font-bold transition-all cursor-pointer ${
                selectedCategory === cat.value
                  ? 'bg-editorial-dark text-editorial-cream border border-editorial-dark'
                  : 'bg-white text-editorial-dark border border-editorial-dark/30 hover:bg-editorial-grey hover:border-editorial-dark'
              }`}
            >
              {cat.label}
            </button>
          ))}
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredServices.map((service) => (
            <div
              key={service.id}
              className="flex flex-col bg-editorial-cream border border-editorial-dark transition-all hover:bg-neutral-50 group"
              id={`service-card-${service.id}`}
            >
              {/* Service Image banner */}
              <div className="relative h-48 sm:h-52 w-full border-b border-editorial-dark overflow-hidden">
                <img
                  src={service.imageUrl}
                  alt={service.title}
                  className="w-full h-full object-cover opacity-85 group-hover:scale-103 transition-transform duration-500"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-neutral-950/70 to-transparent" />
                <div className="absolute bottom-4 left-4 flex items-center gap-2">
                  <div className="p-2 bg-white border border-editorial-dark">
                    {renderIcon(service.icon, "w-4 h-4 text-editorial-dark")}
                  </div>
                  <span className="text-editorial-dark font-mono font-bold text-[10px] tracking-wider uppercase bg-white px-2.5 py-1 border border-editorial-dark">
                    {service.priceEstimate.split('|')[0]}
                  </span>
                </div>
              </div>

              {/* Service Details Card Body */}
              <div className="p-6 flex flex-col flex-grow space-y-4">
                <h3 className="font-serif italic font-bold text-xl text-editorial-dark group-hover:text-black transition-colors">
                  {service.title}
                </h3>
                <p className="font-sans text-xs sm:text-sm text-editorial-dark/80 line-clamp-3">
                  {service.shortDesc}
                </p>

                {/* Technical bullets snippet */}
                <div className="space-y-2 py-2">
                  <span className="text-[10px] uppercase font-mono tracking-widest text-[#666] font-bold block">
                    Our Core Specialties:
                  </span>
                  <ul className="space-y-1.5 text-xs text-editorial-dark/95 font-sans">
                    {service.features.slice(0, 3).map((feat, i) => (
                      <li key={i} className="flex items-start gap-1.5">
                        <Icons.CheckCircle2 className="w-3.5 h-3.5 text-editorial-dark shrink-0 mt-0.5" />
                        <span>{feat}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="ptr-grow" style={{ flexGrow: 1 }} />

                {/* Custom CTAs for card */}
                <div className="flex gap-2 pt-4 border-t border-editorial-dark/20">
                  <button
                    onClick={() => setActiveModalService(service)}
                    className="flex-1 py-2.5 bg-white border border-editorial-dark text-editorial-dark hover:bg-editorial-grey text-[10px] font-mono uppercase tracking-wider font-bold transition-all text-center cursor-pointer"
                  >
                    View Details
                  </button>
                  <button
                    onClick={() => onSelectServiceForEstimate(service.title)}
                    className="py-2.5 px-3 bg-editorial-dark hover:bg-neutral-800 text-editorial-cream font-mono uppercase tracking-wider text-[10px] font-bold transition-colors flex items-center justify-center gap-1 cursor-pointer"
                    title="Estimate specific costs using AI Advisor"
                  >
                    <Icons.Sparkles className="w-3.5 h-3.5" />
                    <span>AI Estimate</span>
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Detailed Service Modal Overlay */}
        {activeModalService && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-editorial-dark/60 backdrop-blur-xs animate-in fade-in duration-200" id="service-modal-overlay">
            <div className="bg-editorial-cream overflow-hidden max-w-2xl w-full border border-editorial-dark flex flex-col max-h-[90vh]">
              {/* Header Image */}
              <div className="relative h-48 sm:h-56 shrink-0 border-b border-editorial-dark">
                <img
                  src={activeModalService.imageUrl}
                  alt={activeModalService.title}
                  className="w-full h-full object-cover opacity-80"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-neutral-950/70 to-transparent" />
                <button
                  onClick={() => setActiveModalService(null)}
                  className="absolute top-4 right-4 p-2 bg-editorial-cream text-editorial-dark hover:bg-white border border-editorial-dark transition-colors"
                >
                  <Icons.X className="w-4 h-4" />
                </button>
                <div className="absolute bottom-4 left-4 flex items-center gap-2.5">
                  <div className="p-2 bg-white border border-editorial-dark shadow-md">
                    {renderIcon(activeModalService.icon, "w-5 h-5 text-editorial-dark")}
                  </div>
                  <div>
                    <h3 className="text-white font-serif italic font-extrabold text-xl sm:text-2xl tracking-tight leading-tight">
                      {activeModalService.title}
                    </h3>
                    <p className="text-[9px] text-zinc-300 font-mono tracking-widest uppercase mt-0.5">
                      Service Category: {activeModalService.category}
                    </p>
                  </div>
                </div>
              </div>

              {/* Scrollable Modal Content Body */}
              <div className="p-6 md:p-8 space-y-6 overflow-y-auto flex-grow">
                <div>
                  <h4 className="text-[10px] uppercase font-mono font-bold tracking-[0.15em] text-[#666] mb-1">
                    About this Service
                  </h4>
                  <p className="font-sans text-editorial-dark/90 text-sm leading-relaxed">
                    {activeModalService.longDesc}
                  </p>
                </div>

                <div className="bg-white p-4 border border-editorial-dark">
                  <h4 className="text-[10px] uppercase font-mono font-bold tracking-[0.15em] text-[#666] mb-1">
                    London Trade Cost Standard Guide
                  </h4>
                  <p className="text-editorial-dark font-serif italic font-extrabold text-base sm:text-lg">
                    {activeModalService.priceEstimate}
                  </p>
                  <span className="text-[10px] text-editorial-dark/60 block mt-1.5 font-mono">
                    *Non-binding estimations are revised of actual surveys. Pricing adjusts with complex technical layouts or specific material grades options.
                  </span>
                </div>

                <div className="space-y-3">
                  <h4 className="text-[10px] uppercase font-mono font-bold tracking-[0.15em] text-[#666]">
                    What we supply & fit:
                  </h4>
                  <ul className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                    {activeModalService.features.map((feat, i) => (
                      <li key={i} className="flex gap-2 text-xs text-editorial-dark/90 items-start">
                        <Icons.Check className="w-3.5 h-3.5 text-editorial-dark shrink-0 mt-0.5 border border-editorial-dark rounded-full bg-white" />
                        <span>{feat}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              {/* Modal Footer CTAs */}
              <div className="p-5 bg-white border-t border-editorial-dark flex flex-col sm:flex-row justify-end gap-3 shrink-0">
                <button
                  onClick={() => {
                    onSelectServiceForEstimate(activeModalService.title);
                    setActiveModalService(null);
                  }}
                  className="px-4 py-2.5 border border-editorial-dark bg-white text-editorial-dark hover:bg-editorial-grey flex items-center justify-center gap-1.5 font-mono uppercase tracking-wider text-[10px] font-bold"
                >
                  <Icons.Sparkles className="w-4 h-4 text-editorial-dark animate-pulse" />
                  <span>Send to AI Estimator</span>
                </button>
                <button
                  onClick={() => {
                    onBookNowClick(activeModalService.title);
                    setActiveModalService(null);
                  }}
                  className="px-5 py-2.5 bg-editorial-dark text-editorial-cream hover:bg-neutral-800 font-mono uppercase tracking-wider text-[10px] font-bold text-center"
                >
                  Book Inquiries & Estimates
                </button>
              </div>
            </div>
          </div>
        )}

      </div>
    </section>
  );
}

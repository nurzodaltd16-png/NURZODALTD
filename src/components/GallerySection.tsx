 /** @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from 'react';
import { Eye, MapPin, Calendar, Sparkles, Image as ImageIcon, X } from 'lucide-react';
import { galleryItems } from '../data/gallery';
import { GalleryItem } from '../types';

export function GallerySection() {
  const [activeFilter, setActiveFilter] = useState<string>('all');
  const [selectedItem, setSelectedItem] = useState<GalleryItem | null>(null);
  const [showBeforeMap, setShowBeforeMap] = useState<Record<string, boolean>>({});

  const filters = [
    { label: 'All Projects', value: 'all' },
    { label: 'Structural & Extensions', value: 'structural' },
    { label: 'Bathrooms', value: 'bathroom' },
    { label: 'Kitchens', value: 'kitchen' },
    { label: 'Flooring', value: 'flooring' },
    { label: 'Tiling Works', value: 'tiles' }
  ];

  const filteredItems = activeFilter === 'all'
    ? galleryItems
    : galleryItems.filter(item => item.category === activeFilter);

  const toggleBeforeAfter = (itemId: string, e: React.MouseEvent) => {
    e.stopPropagation(); // prevent opening detailed modal
    setShowBeforeMap(prev => ({
      ...prev,
      [itemId]: !prev[itemId]
    }));
  };

  return (
    <section className="bg-editorial-cream py-16 sm:py-24 scroll-mt-20 border-b border-editorial-dark" id="gallery">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

         {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <h2 className="text-[10px] font-mono font-bold tracking-[0.15em] text-editorial-dark uppercase border border-editorial-dark bg-white inline-block px-3.5 py-1.5 mb-4 select-none">
            Interactive Project Portfolio
          </h2>
          <p className="font-serif italic text-3xl sm:text-4xl text-editorial-dark tracking-tight leading-tight font-black">
            Our London Project Gallery
          </p>
          <p className="font-sans text-sm sm:text-base text-editorial-dark/75 mt-3">
            Real finished homes from our actual building runs in Forest Gate, Stratford, and surrounding neighborhoods. Feel free to toggle the <strong className="text-editorial-dark font-semibold">Before / After</strong> views!
          </p>
        </div>

        {/* Filter Bar */}
        <div className="flex flex-wrap justify-center gap-2 mb-10">
          {filters.map((fil) => (
            <button
              key={fil.value}
              onClick={() => setActiveFilter(fil.value)}
              className={`px-4 py-2 font-mono uppercase tracking-wider text-[11px] font-bold transition-all cursor-pointer ${
                activeFilter === fil.value
                  ? 'bg-editorial-dark text-editorial-cream border border-editorial-dark'
                  : 'bg-white text-editorial-dark border border-editorial-dark/30 hover:bg-editorial-grey hover:border-editorial-dark'
              }`}
            >
              {fil.label}
            </button>
          ))}
        </div>

        {/* Gallery Items Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredItems.map((item) => {
            const provingBefore = !!showBeforeMap[item.id] && !!item.beforeUrl;
            return (
              <div
                key={item.id}
                onClick={() => setSelectedItem(item)}
                className="group relative bg-white border border-editorial-dark cursor-pointer transition-all hover:bg-neutral-50 flex flex-col h-full"
                id={`gallery-item-${item.id}`}
              >
                {/* Photo container */}
                <div className="relative aspect-4/3 w-full overflow-hidden bg-white shrink-0 border-b border-editorial-dark">
                  <img
                    src={provingBefore ? item.beforeUrl : item.afterUrl}
                    alt={item.title}
                    className="w-full h-full object-cover opacity-90 group-hover:scale-103 transition-transform duration-700"
                    referrerPolicy="no-referrer"
                  />
                  
                  {/* Before/After Overlay Indicator Pill */}
                  {item.beforeUrl && (
                    <button
                      onClick={(e) => toggleBeforeAfter(item.id, e)}
                      className="absolute top-4 left-4 z-10 px-3 py-1 bg-white text-editorial-dark border border-editorial-dark hover:bg-editorial-grey transition-colors text-[9px] font-mono font-bold uppercase shadow-sm flex items-center gap-1 cursor-pointer"
                    >
                      <Eye className="w-3.5 h-3.5 text-editorial-dark" />
                      <span>{provingBefore ? 'Showing: BEFORE' : 'Show Before View'}</span>
                    </button>
                  )}

                  {/* Category Indicator Badge */}
                  <span className="absolute top-4 right-4 z-10 px-2.5 py-1 bg-editorial-grey text-editorial-dark border border-editorial-dark font-mono text-[9px] uppercase tracking-wide">
                    {item.category}
                  </span>

                  {/* Hover visual details backdrop */}
                  <div className="absolute inset-0 bg-gradient-to-t from-neutral-950/70 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end justify-between p-4 text-white">
                    <span className="text-[11px] font-mono uppercase tracking-wider flex items-center gap-1 font-bold">
                      <Eye className="w-4 h-4" /> Expand Details
                    </span>
                    <span className="text-[9px] font-mono tracking-widest bg-white text-editorial-dark border border-editorial-dark px-2 py-0.5 uppercase font-bold">
                      {item.year}
                    </span>
                  </div>
                </div>

                {/* Info area */}
                <div className="p-5 flex flex-col flex-grow space-y-3 bg-white">
                  <div className="flex gap-4 justify-between text-[11px] text-editorial-dark/65 font-mono uppercase tracking-wider">
                    <span className="flex items-center gap-1 font-semibold">
                      <MapPin className="w-3.5 h-3.5 text-editorial-dark" />
                      {item.location}
                    </span>
                    <span className="flex items-center gap-1 shrink-0 font-semibold">
                      <Calendar className="w-3.5 h-3.5" />
                      {item.year}
                    </span>
                  </div>

                  <h3 className="font-serif italic font-bold text-lg text-editorial-dark leading-snug group-hover:text-black transition-colors">
                    {item.title}
                  </h3>

                  <p className="font-sans text-xs sm:text-sm text-editorial-dark/80 line-clamp-2 md:line-clamp-3">
                    {item.description}
                  </p>
                </div>
              </div>
            );
          })}
        </div>

        {/* Detailed Project Image Modal Backdrop */}
        {selectedItem && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-editorial-dark/60 backdrop-blur-xs animate-in fade-in duration-200" id="gallery-lightbox">
            <div className="bg-editorial-cream overflow-hidden border border-editorial-dark max-w-4xl w-full flex flex-col max-h-[90vh]">
              {/* Primary image display */}
              <div className="relative bg-neutral-950 border-b border-editorial-dark flex-grow overflow-hidden flex items-center justify-center min-h-[300px] max-h-[50vh]">
                <img
                  src={showBeforeMap[selectedItem.id] ? selectedItem.beforeUrl : selectedItem.afterUrl}
                  alt={selectedItem.title}
                  className="max-h-full max-w-full object-contain opacity-90"
                  referrerPolicy="no-referrer"
                />

                {/* Toggles */}
                <div className="absolute bottom-4 left-4 flex gap-2">
                  {selectedItem.beforeUrl && (
                    <button
                      onClick={(e) => toggleBeforeAfter(selectedItem.id, e)}
                      className="px-4 py-2 bg-white text-editorial-dark border border-editorial-dark font-mono uppercase tracking-wider text-[10px] font-bold flex items-center gap-1.5 hover:bg-editorial-grey cursor-pointer"
                    >
                      <Eye className="w-4 h-4 text-editorial-dark" />
                      <span>{showBeforeMap[selectedItem.id] ? 'View AFTER Remodel' : 'View BEFORE Remodel'}</span>
                    </button>
                  )}
                  <span className="px-3 py-2 bg-editorial-dark text-editorial-cream text-[10px] font-mono uppercase tracking-widest border border-editorial-dark font-bold">
                    Completed: {selectedItem.year}
                  </span>
                </div>

                {/* Close Button */}
                <button
                  onClick={() => setSelectedItem(null)}
                  className="absolute top-4 right-4 p-2 bg-editorial-cream text-editorial-dark hover:bg-white border border-editorial-dark transition-colors cursor-pointer"
                >
                  <X className="w-4 h-4" />
                </button>
              </div>

              {/* Description Body */}
              <div className="p-6 md:p-8 space-y-4 bg-white">
                <div className="flex flex-wrap justify-between items-center gap-3">
                  <h3 className="font-serif italic font-extrabold text-xl sm:text-2xl text-editorial-dark">
                    {selectedItem.title}
                  </h3>
                  <div className="flex gap-4 text-[11px] uppercase text-editorial-dark/60 font-semibold font-mono tracking-wider">
                    <span className="flex items-center gap-1">
                      <MapPin className="w-4 h-4 text-editorial-dark" />
                      {selectedItem.location}
                    </span>
                    <span className="flex items-center gap-1">
                      <Calendar className="w-4 h-4" />
                      {selectedItem.year}
                    </span>
                  </div>
                </div>

                <p className="font-sans text-editorial-dark/85 text-sm leading-relaxed border-t border-editorial-dark/10 pt-3">
                  {selectedItem.description}
                </p>

                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pt-3 bg-editorial-cream p-4 border border-editorial-dark mt-2">
/**
                  <div className="flex items-center gap-2">
                    <Sparkles className="w-5 h-5 text-editorial-dark shrink-0" />
                    <span className="text-xs text-editorial-dark/80 font-sans leading-relaxed block">
                      Need a similar finish in your London home? Request a customized estimate now.
                    </span>
                  </div>
                  <button
                    onClick={() => {
                      const element = document.getElementById('estimator');
                      if (element) element.scrollIntoView({ behavior: 'smooth' });
                      setSelectedItem(null);
                    }}
                    className="px-5 py-2.5 bg-editorial-dark hover:bg-neutral-800 text-editorial-cream font-mono uppercase tracking-wider text-[11px] font-bold transition-all shrink-0 cursor-pointer"
                  >
                    Estimate Cost
                  </button>
                </div>
              </div>
            </div>
          </div>
        )}

      </div>
    </section>
  );
}

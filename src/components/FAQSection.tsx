/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { HelpCircle, ChevronDown, ShieldCheck, Clock, CreditCard, Landmark, Check } from 'lucide-react';

interface FAQItem {
  id: string;
  category: 'regulations' | 'timelines' | 'payments';
  question: string;
  answer: React.ReactNode;
}

export function FAQSection() {
  const [openId, setOpenId] = useState<string | null>('planning-perm');
  const [activeCategoryFilter, setActiveCategoryFilter] = useState<'all' | 'regulations' | 'timelines' | 'payments'>('all');

  const faqItems: FAQItem[] = [
    {
      id: 'planning-perm',
      category: 'regulations',
      question: 'Do I need planning permission for my renovation or loft conversion in London?',
      answer: (
        <div className="space-y-3">
          <p>
            Most standard loft conversions and small rear extensions fall under <strong>Permitted Development (PD) rights</strong>, 
            meaning they do not require full planning permission. However, they must adhere to specific volume limits (e.g., up to 40 cubic meters for terraced houses, and 50 cubic meters for semi-detached or detached properties).
          </p>
          <p>
            If your property is a flat, situated in a London Conservation Area, or is a listed building, 
            you <strong>must</strong> secure Planning Permission from your local London Council (e.g., Richmond, Wandsworth, Barnet, or Kensington & Chelsea). NURZODA LTD delivers full support, helping prepare your site layouts and coordinate with local structural engineers.
          </p>
        </div>
      )
    },
    {
      id: 'party-wall',
      category: 'regulations',
      question: 'What is a Party Wall Agreement, and when is it legally required?',
      answer: (
        <div className="space-y-3">
          <p>
            Under the <strong>Party Wall etc. Act 1996</strong>, you must notify your adjoining neighbors if your London building project involves:
          </p>
          <ul className="list-disc pl-5 space-y-1">
            <li>Cutting into a shared boundary wall to insert steel beams (common in loft conversions).</li>
            <li>Demolishing and rebuilding a party wall or garden boundary structure.</li>
            <li>Excavating within 3 to 6 meters of an adjoining structure's foundations for an extension.</li>
          </ul>
          <p>
            You must serve a formal Party Wall Notice at least <strong>1 to 2 months</strong> before work starts. We supply precise technical dimension checks and project parameters to aid your designated Party Wall Surveyor.
          </p>
        </div>
      )
    },
    {
      id: 'timelines-guide',
      category: 'timelines',
      question: 'What are the typical project timelines for your residential building trades?',
      answer: (
        <div className="space-y-4">
          <p>
            While every London home is unique, we prioritize efficient, uninterrupted workmanship to minimize disruption. Below are our typical timelines for our core services:
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pb-2">
            <div className="border border-editorial-dark/10 p-3 bg-neutral-50">
              <span className="font-mono text-[10px] uppercase font-bold text-amber-600 block mb-1">Bathrooms</span>
              <span className="font-sans text-xs font-bold block text-editorial-dark">2 – 3 Weeks</span>
              <span className="font-sans text-[11px] text-editorial-dark/70">Complete strip-out, wetroom tanking, layout plumbing, and luxury tiling.</span>
            </div>
            <div className="border border-editorial-dark/10 p-3 bg-neutral-50">
              <span className="font-mono text-[10px] uppercase font-bold text-pink-600 block mb-1">Flooring & Skirting</span>
              <span className="font-sans text-xs font-bold block text-editorial-dark">3 – 5 Days</span>
              <span className="font-sans text-[11px] text-editorial-dark/70">Sub-floor leveling, underlay, engineered oak layout, and perimeter fitting.</span>
            </div>
            <div className="border border-editorial-dark/10 p-3 bg-neutral-50">
              <span className="font-mono text-[10px] uppercase font-bold text-blue-600 block mb-1">Internal Decoration</span>
              <span className="font-sans text-xs font-bold block text-editorial-dark">5 – 10 Days</span>
              <span className="font-sans text-[11px] text-editorial-dark/70">Full plaster skimming, sanding, base undercoat, and dual coat premium colors.</span>
            </div>
            <div className="border border-editorial-dark/10 p-3 bg-neutral-50">
              <span className="font-mono text-[10px] uppercase font-bold text-emerald-600 block mb-1">Handyman Assembly</span>
              <span className="font-sans text-xs font-bold block text-editorial-dark">1 – 2 Days</span>
              <span className="font-sans text-[11px] text-editorial-dark/70">Heavy IKEA PAX modular framing, precise doors leveling, and safe wall-mounting.</span>
            </div>
          </div>
          <p className="text-[11px] italic text-editorial-dark/60">
            *Note: Project progression occurs in continuous daily shifts. We do not jump between client properties mid-contract.
          </p>
        </div>
      )
    },
    {
      id: 'payment-schedules',
      category: 'payments',
      question: 'How are payments structured? Do you require payments upfront?',
      answer: (
        <div className="space-y-3">
          <p>
            No, we <strong>never</strong> request full or bulk payments upfront. We believe in fair, professional financial transparency to ensure complete confidence in our craftsmanship.
          </p>
          <p>
            We structure all mid-to-large projects on a written <strong>Staged Milestone Schedule</strong>:
          </p>
          <div className="space-y-2 font-sans text-xs bg-white border border-editorial-dark/15 p-3">
            <div className="flex justify-between items-center border-b border-neutral-100 pb-1.5">
              <span>1. Booking Deposit</span>
              <span className="font-mono font-bold text-emerald-600 text-[11px]">10% – To Secure Calendar Date</span>
            </div>
            <div className="flex justify-between items-center border-b border-neutral-100 py-1.5">
              <span>2. Project Kick-off</span>
              <span className="font-mono font-bold text-editorial-dark/70 text-[11px]">30% – Materials Delivery & Core Preparation</span>
            </div>
            <div className="flex justify-between items-center border-b border-neutral-100 py-1.5">
              <span>3. Mid-Way Milestone</span>
              <span className="font-mono font-bold text-editorial-dark/70 text-[11px]">30% – Electrical Rough-in, Plumbing, & Substructure</span>
            </div>
            <div className="flex justify-between items-center border-b border-neutral-100 py-1.5">
              <span>4. Secondary Finishes</span>
              <span className="font-mono font-bold text-editorial-dark/70 text-[11px]">20% – Priming, Fitting, & Master Tiling Done</span>
            </div>
            <div className="flex justify-between items-center pt-1.5">
              <span>5. Final Snagging Clearance</span>
              <span className="font-mono font-bold text-editorial-dark text-[11px]">10% – Satisfactory Handover & Sign-off</span>
            </div>
          </div>
        </div>
      )
    },
    {
      id: 'building-control',
      category: 'regulations',
      question: 'What insurances and structural controls do you carry?',
      answer: (
        <div className="space-y-3">
          <p>
            NURZODA LTD is a legally registered UK Limited Company <strong>(Company No. 15699501)</strong>. 
            For your absolute safety and protection, we carry:
          </p>
          <ul className="space-y-1.5 font-sans text-xs">
            <li className="flex items-start gap-2">
              <Check className="w-3.5 h-3.5 text-emerald-600 shrink-0 mt-0.5" />
              <span><strong>£5,000,000 Public Liability Insurance</strong> to safeguard your property and adjacent neighbors.</span>
            </li>
            <li className="flex items-start gap-2">
              <Check className="w-3.5 h-3.5 text-emerald-600 shrink-0 mt-0.5" />
              <span>Full compliance with UK Building Regulations Part P (Electrical Safety) and Part G (Sanitation).</span>
            </li>
            <li className="flex items-start gap-2">
              <Check className="w-3.5 h-3.5 text-emerald-600 shrink-0 mt-0.5" />
              <span>All electrical installations are fully verified and registered with NIC/EIC accredited engineers, delivering standard compliance certificates.</span>
            </li>
          </ul>
        </div>
      )
    }
  ];

  const filteredItems = faqItems.filter(
    item => activeCategoryFilter === 'all' || item.category === activeCategoryFilter
  );

  const getCategoryIcon = (category: string) => {
    switch (category) {
      case 'regulations':
        return <Landmark className="w-4 h-4 text-amber-600" />;
      case 'timelines':
        return <Clock className="w-4 h-4 text-pink-600" />;
      case 'payments':
        return <CreditCard className="w-4 h-4 text-emerald-600" />;
      default:
        return <HelpCircle className="w-4 h-4" />;
    }
  };

  return (
    <section className="bg-white border-t border-editorial-dark py-16 sm:py-24" id="faq-section">
      <div className="max-w-4xl mx-auto px-4 sm:px-6">
        
        {/* Section Header */}
        <div className="text-center mb-12">
          <span className="font-mono text-[9px] sm:text-[10px] uppercase font-bold text-amber-600 tracking-[0.2em] bg-amber-50 px-2 py-0.5 border border-amber-100 inline-block mb-3">
            Client Advisor Portal
          </span>
          <h2 className="font-sans text-2xl sm:text-4xl font-extrabold uppercase text-editorial-dark tracking-tight leading-none mb-4">
            Frequently Asked Questions
          </h2>
          <p className="font-sans text-xs sm:text-sm text-editorial-dark/70 max-w-xl mx-auto leading-relaxed">
            Essential criteria concerning London planning consent, boundary party walls, precise project durations, and stages of payment for our trade works.
          </p>
        </div>

        {/* Category Filters (Sleek minimalist pills) */}
        <div className="flex flex-wrap justify-center gap-2 mb-8 border-b border-editorial-dark/10 pb-6">
          {[
            { id: 'all', label: 'All Questions' },
            { id: 'regulations', label: 'Council & Rules' },
            { id: 'timelines', label: 'Estimates & Timelines' },
            { id: 'payments', label: 'Deposits & Payments' }
          ].map((cat) => (
            <button
              key={cat.id}
              onClick={() => setActiveCategoryFilter(cat.id as any)}
              className={`font-mono text-[9px] sm:text-[10px] uppercase tracking-wider font-extrabold px-3 py-1.5 border transition-all cursor-pointer ${
                activeCategoryFilter === cat.id
                  ? 'bg-editorial-dark text-white border-editorial-dark'
                  : 'bg-neutral-50 text-editorial-dark/70 border-editorial-dark/15 hover:bg-neutral-100 hover:text-editorial-dark'
              }`}
            >
              {cat.label}
            </button>
          ))}
        </div>

        {/* FAQ Accordions Grid */}
        <div className="space-y-4">
          <AnimatePresence initial={false}>
            {filteredItems.map((item) => {
              const isOpen = openId === item.id;
              return (
                <div
                  key={item.id}
                  className={`border transition-all duration-200 ${
                    isOpen 
                      ? 'border-editorial-dark bg-neutral-50/50' 
                      : 'border-editorial-dark/15 bg-white hover:border-editorial-dark/50'
                  }`}
                  id={`faq-item-${item.id}`}
                >
                  {/* Triggers click */}
                  <button
                    onClick={() => setOpenId(isOpen ? null : item.id)}
                    className="w-full text-left p-4 sm:p-5 flex justify-between items-start gap-4 cursor-pointer focus:outline-none"
                    aria-expanded={isOpen}
                  >
                    <div className="flex gap-3 items-start">
                      <div className="mt-0.5 shrink-0">
                        {getCategoryIcon(item.category)}
                      </div>
                      <span className="font-sans font-extrabold text-sm sm:text-base text-editorial-dark tracking-tight">
                        {item.question}
                      </span>
                    </div>
                    
                    <span className="shrink-0 mt-0.5 p-1 bg-white border border-editorial-dark/15 group-hover:border-editorial-dark">
                      <ChevronDown
                        className={`w-3.5 h-3.5 text-editorial-dark/70 transition-transform duration-300 ${
                          isOpen ? 'rotate-180 text-editorial-dark' : ''
                        }`}
                      />
                    </span>
                  </button>

                  {/* Expandable answers */}
                  <AnimatePresence initial={false}>
                    {isOpen && (
                      <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: 'auto', opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.2, ease: 'easeInOut' }}
                        className="overflow-hidden"
                      >
                        <div className="px-4 sm:px-5 pb-5 border-t border-editorial-dark/10 pt-4 font-sans text-xs sm:text-sm text-editorial-dark/80 leading-relaxed max-w-3xl">
                          {item.answer}
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              );
            })}
          </AnimatePresence>
        </div>

        {/* Trust Note footer banner */}
        <div className="mt-12 bg-editorial-grey border border-editorial-dark/10 p-4 sm:p-6 flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="flex gap-3 items-center">
            <div className="w-10 h-10 bg-brand-yellow/10 flex items-center justify-center border border-brand-yellow shrink-0">
              <ShieldCheck className="w-5 h-5 text-editorial-dark" />
            </div>
            <div>
              <p className="font-sans text-xs font-bold text-editorial-dark uppercase tracking-wide">
                Have a customized project question?
              </p>
              <p className="font-sans text-[11px] text-editorial-dark/60">
                Contact our builder director directly at <span className="font-bold text-emerald-600 font-mono">07377 419674</span>.
              </p>
            </div>
          </div>
          
          <a
            href="https://wa.me/447377419674?text=Hi%20Nurzoda%20Ltd%2C%20I%20have%20a%20local%20planning%2Fregulatory%20question%20regarding%20my%20renovation%20project."
            target="_blank"
            rel="noopener noreferrer"
            className="font-mono text-[9px] uppercase tracking-wider font-extrabold px-3 py-2 bg-emerald-600 hover:bg-emerald-500 text-white transition-all flex items-center gap-1.5 shrink-0"
          >
            <span>Ask via WhatsApp</span>
          </a>
        </div>

      </div>
    </section>
  );
}

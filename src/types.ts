/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

export interface ServiceDetail {
  id: string;
  title: string;
  category: 'handyman' | 'flooring' | 'decoration' | 'tiles' | 'electrical' | 'renovations';
  shortDesc: string;
  longDesc: string;
  priceEstimate: string;
  icon: string; // Lucide icon name
  features: string[];
  imageUrl: string;
}

export interface GalleryItem {
  id: string;
  title: string;
  category: 'flooring' | 'decoration' | 'tiles' | 'bathroom' | 'kitchen' | 'structural';
  description: string;
  beforeUrl?: string;
  afterUrl: string;
  location: string;
  year: string;
}

export interface Testimonial {
  id: string;
  name: string;
  location: string;
  rating: number; // 1-5
  text: string;
  projectType: string;
  date: string;
  verifiedSource: 'Google' | 'MyBuilder' | 'Direct' | 'Trustpilot';
}

export interface ContactInquiry {
  id: string;
  name: string;
  email: string;
  phone: string;
  address?: string;
  serviceType: string;
  description: string;
  status: 'new' | 'contacted' | 'booked' | 'archived';
  createdAt: string;
  estimateResult?: SmartEstimateResult;
}

export interface SmartEstimateResult {
  priceRange: string;
  duration: string;
  materialsNeeded: string[];
  technicalAssessment: string;
  contractorTips: string;
}

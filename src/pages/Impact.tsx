import React from 'react';
import { ImpactHero } from '../components/impact/ImpactHero';
import { AnnualReport } from '../components/impact/AnnualReport';
import { SuccessStories } from '../components/impact/SuccessStories';
import { Testimonials } from '../components/impact/Testimonials';

export function Impact() {
  return (
    <div>
      <ImpactHero />
      <AnnualReport />
      <SuccessStories />
      <Testimonials />
    </div>
  );
}
import React from 'react';
import { ProgramHero } from '../components/programs/ProgramHero';
import { ProgramsList } from '../components/programs/ProgramsList';
import { ProgramImpact } from '../components/programs/ProgramImpact';

export function Programs() {
  return (
    <div>
      <ProgramHero />
      <ProgramsList />
      <ProgramImpact />
    </div>
  );
}
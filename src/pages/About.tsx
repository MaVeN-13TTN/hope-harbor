import React from 'react';
import { Mission } from '../components/about/Mission';
import { Team } from '../components/about/Team';
import { Values } from '../components/about/Values';

export function About() {
  return (
    <div>
      <Mission />
      <Team />
      <Values />
    </div>
  );
}
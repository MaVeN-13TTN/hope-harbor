import React from 'react';
import { GetInvolvedHero } from '../components/get-involved/GetInvolvedHero';
import { VolunteerOpportunities } from '../components/get-involved/VolunteerOpportunities';
import { DonationOptions } from '../components/get-involved/DonationOptions';
import { VolunteerForm } from '../components/get-involved/VolunteerForm';

export function GetInvolved() {
  return (
    <div>
      <GetInvolvedHero />
      <VolunteerOpportunities />
      <DonationOptions />
      <VolunteerForm />
    </div>
  );
}
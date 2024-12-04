import React from 'react';
import { DollarSign, Gift, Building, CalendarClock } from 'lucide-react';

const donationOptions = [
  {
    title: 'One-Time Donation',
    description: 'Make an immediate impact with a single contribution to support our programs and services.',
    icon: DollarSign,
    buttonText: 'Donate Now',
  },
  {
    title: 'Monthly Giving',
    description: 'Join our sustaining donors program and help ensure consistent support for our community.',
    icon: CalendarClock,
    buttonText: 'Become a Monthly Donor',
  },
  {
    title: 'Legacy Giving',
    description: 'Create a lasting impact by including HopeHarbor in your estate planning.',
    icon: Gift,
    buttonText: 'Learn About Legacy Giving',
  },
  {
    title: 'Corporate Partnerships',
    description: 'Partner with us to make a difference while engaging your employees and customers.',
    icon: Building,
    buttonText: 'Partner With Us',
  },
];

export function DonationOptions() {
  return (
    <div className="bg-gray-50 py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-2xl lg:text-center">
          <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
            Ways to Give
          </h2>
          <p className="mt-4 text-lg leading-8 text-gray-600">
            Your generous support helps us continue our vital work in the community.
            Choose the giving option that works best for you.
          </p>
        </div>
        <div className="mx-auto mt-16 grid max-w-2xl grid-cols-1 gap-8 sm:mt-20 lg:mx-0 lg:max-w-none lg:grid-cols-2">
          {donationOptions.map((option) => {
            const Icon = option.icon;
            return (
              <div
                key={option.title}
                className="flex flex-col bg-white p-8 shadow-lg rounded-2xl"
              >
                <div className="flex items-center gap-x-3">
                  <Icon className="h-7 w-7 flex-none text-rose-600" />
                  <h3 className="text-lg font-semibold leading-8 text-gray-900">
                    {option.title}
                  </h3>
                </div>
                <p className="mt-4 text-base leading-7 text-gray-600">
                  {option.description}
                </p>
                <div className="mt-6">
                  <button className="rounded-md bg-rose-600 px-4 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-rose-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-rose-600">
                    {option.buttonText}
                  </button>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}
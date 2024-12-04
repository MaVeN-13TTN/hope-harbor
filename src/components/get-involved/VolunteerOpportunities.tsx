import React from 'react';
import { Calendar, Book, Heart, Home, Utensils, Users } from 'lucide-react';

const opportunities = [
  {
    title: 'Education & Mentoring',
    description: 'Help students with homework, teach classes, or mentor youth in our programs.',
    icon: Book,
    commitment: '2-4 hours/week',
  },
  {
    title: 'Food Bank Support',
    description: 'Sort donations, pack food boxes, or help distribute meals to families in need.',
    icon: Utensils,
    commitment: 'Flexible hours',
  },
  {
    title: 'Housing Program',
    description: 'Assist with shelter operations, maintenance, or housing placement support.',
    icon: Home,
    commitment: '4-8 hours/week',
  },
  {
    title: 'Community Events',
    description: 'Help organize and run fundraising events, workshops, and community gatherings.',
    icon: Calendar,
    commitment: 'Project-based',
  },
  {
    title: 'Senior Care',
    description: 'Provide companionship, assist with errands, or help with senior programs.',
    icon: Heart,
    commitment: '2-6 hours/week',
  },
  {
    title: 'Administrative Support',
    description: 'Help with office tasks, data entry, or program coordination.',
    icon: Users,
    commitment: 'Flexible schedule',
  },
];

export function VolunteerOpportunities() {
  return (
    <div className="bg-white py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-2xl lg:text-center">
          <h2 className="text-base font-semibold leading-7 text-rose-600">Volunteer With Us</h2>
          <p className="mt-2 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
            Make a Difference in Your Community
          </p>
          <p className="mt-6 text-lg leading-8 text-gray-600">
            We offer various volunteer opportunities to match your interests, skills, and availability.
            Every hour you give makes a real difference in someone's life.
          </p>
        </div>

        <div className="mx-auto mt-16 max-w-2xl sm:mt-20 lg:mt-24 lg:max-w-none">
          <div className="grid grid-cols-1 gap-x-8 gap-y-16 lg:grid-cols-3">
            {opportunities.map((opportunity) => {
              const Icon = opportunity.icon;
              return (
                <div key={opportunity.title} className="flex flex-col">
                  <div className="flex items-center gap-x-3">
                    <Icon className="h-7 w-7 flex-none text-rose-600" />
                    <h3 className="text-lg font-semibold leading-8 text-gray-900">
                      {opportunity.title}
                    </h3>
                  </div>
                  <div className="mt-4 flex flex-auto flex-col">
                    <p className="flex-auto text-base leading-7 text-gray-600">
                      {opportunity.description}
                    </p>
                    <p className="mt-4 text-sm font-semibold text-rose-600">
                      Time Commitment: {opportunity.commitment}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
}
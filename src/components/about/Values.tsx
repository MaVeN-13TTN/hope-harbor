import React from 'react';
import { Shield, Heart, Users, Target, Scale, Globe } from 'lucide-react';

const values = [
  {
    name: 'Integrity',
    description: 'We maintain the highest standards of transparency and accountability in all our actions.',
    icon: Shield,
  },
  {
    name: 'Compassion',
    description: 'We approach every individual and situation with empathy and understanding.',
    icon: Heart,
  },
  {
    name: 'Community',
    description: 'We believe in the power of people coming together to create positive change.',
    icon: Users,
  },
  {
    name: 'Impact',
    description: 'We focus on creating measurable, lasting change in our community.',
    icon: Target,
  },
  {
    name: 'Equity',
    description: 'We ensure fair access to resources and opportunities for all.',
    icon: Scale,
  },
  {
    name: 'Sustainability',
    description: 'We develop solutions that create long-term positive change.',
    icon: Globe,
  },
];

export function Values() {
  return (
    <div className="bg-white py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-2xl lg:text-center">
          <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
            Our Core Values
          </h2>
          <p className="mt-4 text-lg leading-8 text-gray-600">
            These principles guide our actions and decisions as we work to create positive change
            in our community.
          </p>
        </div>
        <div className="mx-auto mt-16 max-w-2xl sm:mt-20 lg:mt-24 lg:max-w-none">
          <dl className="grid max-w-xl grid-cols-1 gap-x-8 gap-y-16 lg:max-w-none lg:grid-cols-3">
            {values.map((value) => {
              const Icon = value.icon;
              return (
                <div key={value.name} className="flex flex-col">
                  <dt className="flex items-center gap-x-3 text-base font-semibold leading-7 text-gray-900">
                    <Icon className="h-5 w-5 flex-none text-rose-600" />
                    {value.name}
                  </dt>
                  <dd className="mt-4 flex flex-auto flex-col text-base leading-7 text-gray-600">
                    <p className="flex-auto">{value.description}</p>
                  </dd>
                </div>
              );
            })}
          </dl>
        </div>
      </div>
    </div>
  );
}
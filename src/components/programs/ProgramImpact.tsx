import React from 'react';
import { Users, Clock, Award } from 'lucide-react';

const stats = [
  {
    label: 'People Served Annually',
    value: '10,000+',
    icon: Users,
  },
  {
    label: 'Hours of Service',
    value: '50,000+',
    icon: Clock,
  },
  {
    label: 'Success Rate',
    value: '95%',
    icon: Award,
  },
];

export function ProgramImpact() {
  return (
    <div className="bg-white py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-2xl lg:text-center">
          <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
            Program Impact
          </h2>
          <p className="mt-4 text-lg leading-8 text-gray-600">
            Our programs create meaningful change in the lives of individuals and families
            throughout our community.
          </p>
        </div>
        <dl className="mt-16 grid grid-cols-1 gap-0.5 overflow-hidden rounded-2xl text-center sm:grid-cols-3">
          {stats.map((stat) => {
            const Icon = stat.icon;
            return (
              <div key={stat.label} className="flex flex-col bg-gray-50 p-8">
                <dt className="text-sm font-semibold leading-6 text-gray-600">
                  <Icon className="mx-auto h-6 w-6 text-rose-600 mb-4" />
                  {stat.label}
                </dt>
                <dd className="order-first text-3xl font-semibold tracking-tight text-gray-900">
                  {stat.value}
                </dd>
              </div>
            );
          })}
        </dl>
      </div>
    </div>
  );
}
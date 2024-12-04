import React from 'react';
import { Users, Home, Heart, Smile } from 'lucide-react';

const stats = [
  {
    id: 1,
    name: 'People Helped',
    value: '50,000+',
    icon: Users,
    description: 'Lives touched through our programs',
  },
  {
    id: 2,
    name: 'Shelters Built',
    value: '100+',
    icon: Home,
    description: 'Safe spaces created for families',
  },
  {
    id: 3,
    name: 'Volunteers',
    value: '5,000+',
    icon: Heart,
    description: 'Dedicated community members',
  },
  {
    id: 4,
    name: 'Success Stories',
    value: '1,000+',
    icon: Smile,
    description: 'Transformative outcomes achieved',
  },
];

export function ImpactStats() {
  return (
    <div className="bg-white py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-2xl lg:max-w-none">
          <div className="text-center">
            <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
              Our Impact in Numbers
            </h2>
            <p className="mt-4 text-lg leading-8 text-gray-600">
              Every number represents a life changed, a family supported, and a community strengthened.
            </p>
          </div>
          <dl className="mt-16 grid grid-cols-1 gap-0.5 overflow-hidden rounded-2xl text-center sm:grid-cols-2 lg:grid-cols-4">
            {stats.map((stat) => {
              const Icon = stat.icon;
              return (
                <div key={stat.id} className="flex flex-col bg-gray-50 p-8">
                  <dt className="text-sm font-semibold leading-6 text-gray-600">
                    <div className="flex justify-center mb-4">
                      <Icon className="h-6 w-6 text-rose-600" />
                    </div>
                    {stat.name}
                  </dt>
                  <dd className="order-first text-3xl font-semibold tracking-tight text-gray-900">
                    {stat.value}
                  </dd>
                  <dd className="mt-2 text-sm text-gray-600">{stat.description}</dd>
                </div>
              );
            })}
          </dl>
        </div>
      </div>
    </div>
  );
}
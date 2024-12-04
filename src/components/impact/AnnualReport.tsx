import React from 'react';
import { BarChart, DollarSign, Users, TrendingUp } from 'lucide-react';

const metrics = [
  {
    name: 'Total Donations',
    value: '$2.5M',
    change: '+12%',
    icon: DollarSign,
  },
  {
    name: 'People Served',
    value: '50,000+',
    change: '+18%',
    icon: Users,
  },
  {
    name: 'Program Success Rate',
    value: '95%',
    change: '+5%',
    icon: TrendingUp,
  },
  {
    name: 'Programs Offered',
    value: '25',
    change: '+4',
    icon: BarChart,
  },
];

export function AnnualReport() {
  return (
    <div className="bg-white py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-2xl lg:text-center">
          <h2 className="text-base font-semibold leading-7 text-rose-600">Annual Report 2024</h2>
          <p className="mt-2 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
            Growing Impact Year Over Year
          </p>
          <p className="mt-6 text-lg leading-8 text-gray-600">
            Our commitment to transparency and accountability means sharing our progress
            and impact with our supporters and community.
          </p>
        </div>

        <div className="mx-auto mt-16 max-w-2xl sm:mt-20 lg:mt-24 lg:max-w-none">
          <dl className="grid max-w-xl grid-cols-1 gap-x-8 gap-y-16 lg:max-w-none lg:grid-cols-4">
            {metrics.map((metric) => {
              const Icon = metric.icon;
              return (
                <div key={metric.name} className="flex flex-col items-center">
                  <dt className="flex items-center gap-x-3 text-base font-semibold leading-7 text-gray-900">
                    <Icon className="h-5 w-5 flex-none text-rose-600" />
                    {metric.name}
                  </dt>
                  <dd className="mt-4 flex flex-auto flex-col text-base leading-7">
                    <p className="flex-auto text-3xl font-bold text-gray-900">{metric.value}</p>
                    <p className="text-sm text-green-600">{metric.change} from last year</p>
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
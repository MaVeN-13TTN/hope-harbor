import React from 'react';
import { Target, Heart, Users } from 'lucide-react';

export function Mission() {
  return (
    <div className="bg-white py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-2xl lg:text-center">
          <h2 className="text-base font-semibold leading-7 text-rose-600">Our Purpose</h2>
          <p className="mt-2 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
            Making a Lasting Impact in Our Community
          </p>
          <p className="mt-6 text-lg leading-8 text-gray-600">
            At HopeHarbor, we believe in the power of community and compassion to transform lives.
            Our mission is to create sustainable change through dedicated programs and volunteer efforts.
          </p>
        </div>
        <div className="mx-auto mt-16 max-w-2xl sm:mt-20 lg:mt-24 lg:max-w-none">
          <dl className="grid max-w-xl grid-cols-1 gap-x-8 gap-y-16 lg:max-w-none lg:grid-cols-3">
            <div className="flex flex-col">
              <dt className="flex items-center gap-x-3 text-base font-semibold leading-7 text-gray-900">
                <Target className="h-5 w-5 flex-none text-rose-600" />
                Our Mission
              </dt>
              <dd className="mt-4 flex flex-auto flex-col text-base leading-7 text-gray-600">
                <p className="flex-auto">
                  To empower communities through sustainable programs, education, and support services
                  that create lasting positive change in people's lives.
                </p>
              </dd>
            </div>
            <div className="flex flex-col">
              <dt className="flex items-center gap-x-3 text-base font-semibold leading-7 text-gray-900">
                <Heart className="h-5 w-5 flex-none text-rose-600" />
                Our Vision
              </dt>
              <dd className="mt-4 flex flex-auto flex-col text-base leading-7 text-gray-600">
                <p className="flex-auto">
                  A world where every individual has access to the resources and opportunities they need
                  to thrive and reach their full potential.
                </p>
              </dd>
            </div>
            <div className="flex flex-col">
              <dt className="flex items-center gap-x-3 text-base font-semibold leading-7 text-gray-900">
                <Users className="h-5 w-5 flex-none text-rose-600" />
                Our Values
              </dt>
              <dd className="mt-4 flex flex-auto flex-col text-base leading-7 text-gray-600">
                <p className="flex-auto">
                  Compassion, integrity, and dedication guide everything we do as we work to create
                  meaningful change in our community.
                </p>
              </dd>
            </div>
          </dl>
        </div>
      </div>
    </div>
  );
}
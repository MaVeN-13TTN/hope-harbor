import React from 'react';

export function GetInvolvedHero() {
  return (
    <div className="relative bg-gray-900">
      <div className="absolute inset-0">
        <img
          className="h-full w-full object-cover opacity-40"
          src="https://images.unsplash.com/photo-1559027615-cd4628902d4a?ixlib=rb-4.0.3&auto=format&fit=crop&w=2340&q=80"
          alt="Volunteers working together"
        />
      </div>
      <div className="relative mx-auto max-w-7xl py-24 px-6 sm:py-32 lg:px-8">
        <h1 className="text-4xl font-bold tracking-tight text-white sm:text-5xl lg:text-6xl">
          Get Involved
        </h1>
        <p className="mt-6 max-w-3xl text-xl text-gray-300">
          Join us in making a difference. Whether through volunteering, donating, or partnering,
          there are many ways to support our mission and create positive change.
        </p>
      </div>
    </div>
  );
}
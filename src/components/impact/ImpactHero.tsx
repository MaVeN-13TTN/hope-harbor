import React from 'react';

export function ImpactHero() {
  return (
    <div className="relative bg-gray-900">
      <div className="absolute inset-0">
        <img
          className="h-full w-full object-cover opacity-40"
          src="https://images.unsplash.com/photo-1469571486292-0ba58a3f068b?ixlib=rb-4.0.3&auto=format&fit=crop&w=2340&q=80"
          alt="Making an impact"
        />
      </div>
      <div className="relative mx-auto max-w-7xl py-24 px-6 sm:py-32 lg:px-8">
        <h1 className="text-4xl font-bold tracking-tight text-white sm:text-5xl lg:text-6xl">
          Our Impact
        </h1>
        <p className="mt-6 max-w-3xl text-xl text-gray-300">
          Every day, we work to create lasting positive change in our community. Here's how
          your support helps us make a difference.
        </p>
      </div>
    </div>
  );
}
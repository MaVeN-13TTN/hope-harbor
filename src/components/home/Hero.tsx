import React from 'react';
import { Link } from 'react-router-dom';

export function Hero() {
  return (
    <div className="relative h-screen">
      <div className="absolute inset-0">
        <img
          className="w-full h-full object-cover object-center"
          src="https://images.unsplash.com/photo-1488521787991-ed7bbaae773c?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2340&q=80"
          alt="People helping people"
        />
        <div className="absolute inset-0 bg-gray-900 bg-opacity-60"></div>
      </div>
      
      <div className="relative h-full flex flex-col justify-center max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h1 className="text-4xl font-extrabold tracking-tight text-white sm:text-5xl lg:text-6xl">
          Together We Can Make a Difference
        </h1>
        <p className="mt-6 text-xl text-gray-300 max-w-3xl">
          Join us in our mission to create positive change in our community. Through compassion,
          dedication, and your support, we can build a better future for those in need.
        </p>
        <div className="mt-10 flex space-x-4">
          <Link
            to="/donate"
            className="inline-flex items-center px-6 py-3 border border-transparent text-base font-medium rounded-md text-white bg-rose-600 hover:bg-rose-700"
          >
            Donate Now
          </Link>
          <Link
            to="/get-involved"
            className="inline-flex items-center px-6 py-3 border border-transparent text-base font-medium rounded-md text-gray-200 bg-gray-800 bg-opacity-50 hover:bg-opacity-75"
          >
            Get Involved
          </Link>
        </div>
      </div>
    </div>
  );
}
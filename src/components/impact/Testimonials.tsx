import React from 'react';

const testimonials = [
  {
    content: "The support I received from HopeHarbor changed my life. They didn't just help me find housing; they helped me rebuild my confidence and hope for the future.",
    author: "Maria R.",
    role: "Program Participant",
  },
  {
    content: "As a volunteer, I've witnessed firsthand the incredible impact this organization has on our community. The dedication and compassion they show is truly inspiring.",
    author: "James L.",
    role: "Volunteer",
  },
  {
    content: "HopeHarbor's youth education program gave my children the support they needed to succeed in school. We're forever grateful for their help.",
    author: "Patricia M.",
    role: "Parent",
  },
];

export function Testimonials() {
  return (
    <div className="bg-white py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-xl text-center">
          <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
            Voices of Impact
          </h2>
          <p className="mt-4 text-lg leading-8 text-gray-600">
            Hear from the people whose lives have been touched by our work.
          </p>
        </div>
        <div className="mx-auto mt-16 flow-root max-w-2xl sm:mt-20 lg:mx-0 lg:max-w-none">
          <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
            {testimonials.map((testimonial, index) => (
              <div key={index} className="relative bg-gray-50 px-6 py-8 rounded-2xl">
                <div className="relative">
                  <svg
                    className="absolute -top-4 -left-4 h-8 w-8 text-gray-200"
                    fill="currentColor"
                    viewBox="0 0 32 32"
                    aria-hidden="true"
                  >
                    <path d="M9.352 4C4.456 7.456 1 13.12 1 19.36c0 5.088 3.072 8.064 6.624 8.064 3.36 0 5.856-2.688 5.856-5.856 0-3.168-2.208-5.472-5.088-5.472-.576 0-1.344.096-1.536.192.48-3.264 3.552-7.104 6.624-9.024L9.352 4zm16.512 0c-4.8 3.456-8.256 9.12-8.256 15.36 0 5.088 3.072 8.064 6.624 8.064 3.264 0 5.856-2.688 5.856-5.856 0-3.168-2.304-5.472-5.184-5.472-.576 0-1.248.096-1.44.192.48-3.264 3.456-7.104 6.528-9.024L25.864 4z" />
                  </svg>
                  <p className="relative mt-4 text-lg leading-6 text-gray-600">
                    {testimonial.content}
                  </p>
                </div>
                <div className="mt-6">
                  <p className="font-semibold text-gray-900">{testimonial.author}</p>
                  <p className="text-sm text-gray-600">{testimonial.role}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
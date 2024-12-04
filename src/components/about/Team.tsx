import React from 'react';

const team = [
  {
    name: 'Sarah Johnson',
    role: 'Executive Director',
    image: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
    bio: 'With over 15 years of experience in non-profit management, Sarah leads our organization with passion and vision.',
  },
  {
    name: 'Michael Chen',
    role: 'Programs Director',
    image: 'https://images.unsplash.com/photo-1519244703995-f4e0f30006d5?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
    bio: 'Michael oversees all our community programs, ensuring they create meaningful impact and reach those who need them most.',
  },
  {
    name: 'Emily Rodriguez',
    role: 'Volunteer Coordinator',
    image: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
    bio: 'Emily manages our growing network of volunteers, matching their skills with community needs.',
  },
  {
    name: 'David Thompson',
    role: 'Development Director',
    image: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
    bio: 'David leads our fundraising initiatives and develops partnerships to support our mission.',
  },
];

export function Team() {
  return (
    <div className="bg-gray-50 py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-2xl lg:text-center">
          <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
            Meet Our Team
          </h2>
          <p className="mt-4 text-lg leading-8 text-gray-600">
            Dedicated professionals working together to make a difference in our community.
          </p>
        </div>
        <ul className="mx-auto mt-20 grid max-w-2xl grid-cols-1 gap-x-8 gap-y-16 sm:grid-cols-2 lg:mx-0 lg:max-w-none lg:grid-cols-4">
          {team.map((person) => (
            <li key={person.name} className="group relative">
              <div className="aspect-h-1 aspect-w-1 w-full overflow-hidden rounded-2xl bg-gray-100">
                <img
                  className="object-cover object-center"
                  src={person.image}
                  alt={person.name}
                />
              </div>
              <h3 className="mt-6 text-lg font-semibold leading-8 text-gray-900">
                {person.name}
              </h3>
              <p className="text-base leading-7 text-rose-600">{person.role}</p>
              <p className="mt-4 text-base leading-7 text-gray-600">{person.bio}</p>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
import { ProgramCard } from './ProgramCard';

const programs = [
  {
    title: 'Youth Mentorship Program',
    description: 'Empowering young minds through guidance and support',
    image: 'https://images.unsplash.com/photo-1571624436279-b272aff752b5?ixlib=rb-4.0.3&auto=format&fit=crop&w=2340&q=80',
    link: '/programs/youth-mentorship',
  },
  {
    title: 'Food Security Initiative',
    description: 'Ensuring no one goes hungry in our community',
    image: 'https://images.unsplash.com/photo-1488521787991-ed7bbaae773c?ixlib=rb-4.0.3&auto=format&fit=crop&w=2340&q=80',
    link: '/programs/food-security',
  },
  {
    title: 'Housing Support',
    description: 'Helping families find stable housing through emergency shelter, transitional housing, and housing assistance.',
    image: 'https://images.unsplash.com/photo-1460317442991-0ec209397118?ixlib=rb-4.0.3&auto=format&fit=crop&w=2340&q=80',
    link: '/programs/housing',
  },
  {
    title: 'Senior Care Services',
    description: 'Supporting elderly community members with companionship, care coordination, and essential services.',
    image: 'https://images.unsplash.com/photo-1516307365426-bea591f05011?ixlib=rb-4.0.3&auto=format&fit=crop&w=2340&q=80',
    link: '/programs/senior-care',
  },
  {
    title: 'Job Training & Employment',
    description: 'Offering skills development, career counseling, and job placement assistance to build economic stability.',
    image: 'https://images.unsplash.com/photo-1521737604893-d14cc237f11d?ixlib=rb-4.0.3&auto=format&fit=crop&w=2340&q=80',
    link: '/programs/job-training',
  },
  {
    title: 'Mental Health Support',
    description: 'Providing counseling, support groups, and mental health resources for community well-being.',
    image: 'https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?ixlib=rb-4.0.3&auto=format&fit=crop&w=2340&q=80',
    link: '/programs/mental-health',
  },
];

export function ProgramsList() {
  return (
    <div className="bg-gray-50 py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto grid max-w-2xl grid-cols-1 gap-x-8 gap-y-16 sm:grid-cols-2 lg:mx-0 lg:max-w-none lg:grid-cols-3">
          {programs.map((program) => (
            <ProgramCard key={program.title} {...program} />
          ))}
        </div>
      </div>
    </div>
  );
}
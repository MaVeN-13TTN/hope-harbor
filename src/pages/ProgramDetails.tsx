import { useParams } from 'react-router-dom';

// This interface defines the structure of a program
interface Program {
  id: string;
  title: string;
  description: string;
  image: string;
  longDescription: string;
  goals: string[];
  impact: string;
}

// Sample program data - In a real application, this would come from an API or database
const programs: Record<string, Program> = {
  'youth-mentorship': {
    id: 'youth-mentorship',
    title: 'Youth Mentorship Program',
    description: 'Empowering young minds through guidance and support',
    image: 'https://images.unsplash.com/photo-1571624436279-b272aff752b5?ixlib=rb-4.0.3&auto=format&fit=crop&w=2340&q=80',
    longDescription: 'Our Youth Mentorship Program pairs experienced mentors with young individuals to provide guidance, support, and opportunities for personal growth. Through regular meetings, workshops, and activities, mentors help youth develop essential life skills, set goals, and work towards achieving their dreams.',
    goals: [
      'Provide positive role models for youth',
      'Develop leadership and life skills',
      'Support academic achievement',
      'Build self-confidence and self-esteem',
      'Create opportunities for personal growth'
    ],
    impact: 'Since its inception, our Youth Mentorship Program has helped over 500 young people achieve their educational and personal goals, with 85% of participants reporting improved confidence and clearer future aspirations.'
  },
  'food-security': {
    id: 'food-security',
    title: 'Food Security Initiative',
    description: 'Ensuring no one goes hungry in our community',
    image: 'https://images.unsplash.com/photo-1488521787991-ed7bbaae773c?ixlib=rb-4.0.3&auto=format&fit=crop&w=2340&q=80',
    longDescription: 'The Food Security Initiative works to combat hunger in our community through food distribution, education about nutrition, and sustainable food practices. We partner with local farms and businesses to provide fresh, healthy food to families in need.',
    goals: [
      'Reduce food insecurity in our community',
      'Provide nutritious meals to families in need',
      'Educate about healthy eating habits',
      'Create sustainable food distribution networks',
      'Partner with local food producers'
    ],
    impact: 'Our Food Security Initiative serves over 1,000 families monthly, distributing more than 50,000 pounds of fresh food annually. We\'ve seen a 40% reduction in reported food insecurity among program participants.'
  },
  'housing': {
    id: 'housing',
    title: 'Housing Support',
    description: 'Helping families find stable housing through emergency shelter, transitional housing, and housing assistance.',
    image: 'https://images.unsplash.com/photo-1460317442991-0ec209397118?ixlib=rb-4.0.3&auto=format&fit=crop&w=2340&q=80',
    longDescription: 'Our Housing Support program provides comprehensive assistance to families and individuals facing housing instability. We offer emergency shelter services, help with transitional housing, and provide resources for long-term housing solutions.',
    goals: [
      'Provide emergency shelter to those in need',
      'Support transition to stable housing',
      'Offer housing assistance and resources',
      'Prevent homelessness through early intervention',
      'Connect clients with additional support services'
    ],
    impact: 'We\'ve helped over 300 families secure stable housing in the past year, with 75% maintaining their housing for more than two years. Our emergency shelter has provided safe haven for over 1,000 individuals.'
  },
  'senior-care': {
    id: 'senior-care',
    title: 'Senior Care Services',
    description: 'Supporting elderly community members with companionship, care coordination, and essential services.',
    image: 'https://images.unsplash.com/photo-1516307365426-bea591f05011?ixlib=rb-4.0.3&auto=format&fit=crop&w=2340&q=80',
    longDescription: 'Our Senior Care Services program focuses on enhancing the quality of life for elderly community members through companionship, care coordination, and access to essential services.',
    goals: [
      'Provide companionship to reduce isolation',
      'Coordinate healthcare and support services',
      'Assist with daily activities',
      'Ensure access to necessary resources',
      'Create engaging social activities'
    ],
    impact: 'We serve over 200 seniors monthly, providing more than 5,000 hours of companionship and support services annually. 90% of our seniors report improved quality of life and reduced feelings of isolation.'
  },
  'job-training': {
    id: 'job-training',
    title: 'Job Training & Employment',
    description: 'Offering skills development, career counseling, and job placement assistance to build economic stability.',
    image: 'https://images.unsplash.com/photo-1521737604893-d14cc237f11d?ixlib=rb-4.0.3&auto=format&fit=crop&w=2340&q=80',
    longDescription: 'Our Job Training & Employment program empowers individuals through comprehensive career development services, including skills training, resume building, interview preparation, and job placement assistance.',
    goals: [
      'Provide practical job skills training',
      'Offer career counseling and guidance',
      'Assist with job search and placement',
      'Build partnerships with local employers',
      'Support long-term career development'
    ],
    impact: 'Over 400 participants have completed our job training programs, with 80% securing employment within six months. Our graduates report an average 45% increase in income after program completion.'
  },
  'mental-health': {
    id: 'mental-health',
    title: 'Mental Health Support',
    description: 'Providing counseling, support groups, and mental health resources for community well-being.',
    image: 'https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?ixlib=rb-4.0.3&auto=format&fit=crop&w=2340&q=80',
    longDescription: 'Our Mental Health Support program offers accessible mental health services including individual counseling, support groups, and educational resources to promote emotional well-being in our community.',
    goals: [
      'Provide accessible mental health counseling',
      'Facilitate support groups',
      'Offer crisis intervention services',
      'Promote mental health awareness',
      'Reduce stigma around mental health'
    ],
    impact: 'We\'ve provided over 2,000 counseling sessions and supported 500+ individuals through our mental health programs. 85% of participants report improved mental well-being and coping skills.'
  }
};

export function ProgramDetails() {
  const { programId } = useParams<{ programId: string }>();
  const program = programId ? programs[programId] : null;

  if (!program) {
    return (
      <div className="min-h-screen bg-gray-50 px-4 py-16 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-7xl text-center">
          <h2 className="text-3xl font-bold text-gray-900">Program Not Found</h2>
          <p className="mt-4 text-lg text-gray-500">
            The program you're looking for doesn't exist or has been removed.
          </p>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <div className="relative h-[40vh]">
        <img
          src={program.image}
          alt={program.title}
          className="absolute inset-0 h-full w-full object-cover"
        />
        <div className="absolute inset-0 bg-gray-900 bg-opacity-60" />
        <div className="relative h-full flex items-center">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <h1 className="text-4xl font-bold text-white sm:text-5xl lg:text-6xl">
              {program.title}
            </h1>
          </div>
        </div>
      </div>

      {/* Content Section */}
      <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 gap-8 lg:grid-cols-3">
          {/* Main Content */}
          <div className="lg:col-span-2">
            <h2 className="text-3xl font-bold text-gray-900">About the Program</h2>
            <p className="mt-4 text-lg text-gray-500">{program.longDescription}</p>
            
            <h3 className="mt-8 text-2xl font-bold text-gray-900">Our Goals</h3>
            <ul className="mt-4 space-y-4">
              {program.goals.map((goal, index) => (
                <li key={index} className="flex items-start">
                  <span className="flex h-6 w-6 items-center justify-center rounded-full bg-rose-100 text-rose-600">
                    {index + 1}
                  </span>
                  <span className="ml-3 text-lg text-gray-500">{goal}</span>
                </li>
              ))}
            </ul>

            <h3 className="mt-8 text-2xl font-bold text-gray-900">Our Impact</h3>
            <p className="mt-4 text-lg text-gray-500">{program.impact}</p>
          </div>

          {/* Sidebar */}
          <div className="lg:col-span-1">
            <div className="rounded-lg bg-white p-6 shadow-lg">
              <h3 className="text-xl font-bold text-gray-900">Get Involved</h3>
              <p className="mt-4 text-gray-500">
                Want to support this program? There are several ways you can help make a difference.
              </p>
              <div className="mt-6 space-y-4">
                <a
                  href="/donate"
                  className="block w-full rounded-md bg-rose-600 px-4 py-2 text-center text-sm font-medium text-white hover:bg-rose-700"
                >
                  Make a Donation
                </a>
                <a
                  href="/get-involved"
                  className="block w-full rounded-md bg-gray-100 px-4 py-2 text-center text-sm font-medium text-gray-600 hover:bg-gray-200"
                >
                  Volunteer With Us
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

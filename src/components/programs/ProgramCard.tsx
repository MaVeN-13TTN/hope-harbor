import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';

interface ProgramCardProps {
  title: string;
  description: string;
  image: string;
  link: string;
}

export function ProgramCard({ title, description, image, link }: ProgramCardProps) {
  return (
    <div className="flex flex-col overflow-hidden rounded-lg shadow-lg">
      <div className="flex-shrink-0">
        <img className="h-48 w-full object-cover" src={image} alt={title} />
      </div>
      <div className="flex flex-1 flex-col justify-between bg-white p-6">
        <div className="flex-1">
          <h3 className="text-xl font-semibold text-gray-900">{title}</h3>
          <p className="mt-3 text-base text-gray-500">{description}</p>
        </div>
        <div className="mt-6">
          <Link
            to={link}
            className="flex items-center text-rose-600 hover:text-rose-700"
          >
            Learn more
            <ArrowRight className="ml-2 h-4 w-4" />
          </Link>
        </div>
      </div>
    </div>
  );
}
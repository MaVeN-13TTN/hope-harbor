import { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Heart, Menu, X } from 'lucide-react';

interface NavLinkProps {
  to: string;
  children: React.ReactNode;
  isActive?: boolean;
}

function NavLink({ to, children, isActive }: NavLinkProps) {
  return (
    <Link
      to={to}
      className={`relative inline-flex items-center px-1 pt-1 text-sm font-medium ${
        isActive ? 'text-gray-900' : 'text-gray-500 hover:text-gray-900'
      }`}
    >
      <div className="flex items-center gap-2">
        {isActive && (
          <span className="w-1.5 h-1.5 bg-rose-600 rounded-full" />
        )}
        {children}
      </div>
    </Link>
  );
}

export function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const location = useLocation();

  const isActivePath = (path: string) => {
    if (path === '/') {
      return location.pathname === '/';
    }
    return location.pathname.startsWith(path);
  };

  return (
    <header className="bg-white shadow-sm">
      <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">
          <div className="flex items-center">
            <Link to="/" className="flex items-center">
              <Heart className="h-8 w-8 text-rose-600" />
              <span className="ml-2 text-xl font-bold text-gray-900">HopeHarbor</span>
            </Link>
          </div>
          
          <div className="hidden sm:ml-6 sm:flex sm:space-x-8">
            <NavLink to="/about" isActive={isActivePath('/about')}>
              About Us
            </NavLink>
            <NavLink to="/programs" isActive={isActivePath('/programs')}>
              Programs
            </NavLink>
            <NavLink to="/impact" isActive={isActivePath('/impact')}>
              Our Impact
            </NavLink>
            <NavLink to="/get-involved" isActive={isActivePath('/get-involved')}>
              Get Involved
            </NavLink>
          </div>

          <div className="flex items-center">
            <Link
              to="/donate"
              className={`hidden sm:inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md text-white ${
                isActivePath('/donate')
                  ? 'bg-rose-700'
                  : 'bg-rose-600 hover:bg-rose-700'
              }`}
            >
              Donate Now
            </Link>
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="sm:hidden inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-gray-500 hover:bg-gray-100"
            >
              {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>
      </nav>

      {/* Mobile menu */}
      <div className={`sm:hidden ${isMenuOpen ? 'block' : 'hidden'}`}>
        <div className="pt-2 pb-3 space-y-1">
          <Link
            to="/about"
            className={`block pl-3 pr-4 py-2 border-l-4 text-base font-medium ${
              isActivePath('/about')
                ? 'border-rose-600 text-rose-600 bg-rose-50'
                : 'border-transparent text-gray-500 hover:text-gray-900 hover:bg-gray-50'
            }`}
          >
            About Us
          </Link>
          <Link
            to="/programs"
            className={`block pl-3 pr-4 py-2 border-l-4 text-base font-medium ${
              isActivePath('/programs')
                ? 'border-rose-600 text-rose-600 bg-rose-50'
                : 'border-transparent text-gray-500 hover:text-gray-900 hover:bg-gray-50'
            }`}
          >
            Programs
          </Link>
          <Link
            to="/impact"
            className={`block pl-3 pr-4 py-2 border-l-4 text-base font-medium ${
              isActivePath('/impact')
                ? 'border-rose-600 text-rose-600 bg-rose-50'
                : 'border-transparent text-gray-500 hover:text-gray-900 hover:bg-gray-50'
            }`}
          >
            Our Impact
          </Link>
          <Link
            to="/get-involved"
            className={`block pl-3 pr-4 py-2 border-l-4 text-base font-medium ${
              isActivePath('/get-involved')
                ? 'border-rose-600 text-rose-600 bg-rose-50'
                : 'border-transparent text-gray-500 hover:text-gray-900 hover:bg-gray-50'
            }`}
          >
            Get Involved
          </Link>
          <Link
            to="/donate"
            className={`block pl-3 pr-4 py-2 border-l-4 text-base font-medium ${
              isActivePath('/donate')
                ? 'border-rose-600 text-rose-600 bg-rose-50'
                : 'border-transparent text-gray-500 hover:text-gray-900 hover:bg-gray-50'
            }`}
          >
            Donate Now
          </Link>
        </div>
      </div>
    </header>
  );
}
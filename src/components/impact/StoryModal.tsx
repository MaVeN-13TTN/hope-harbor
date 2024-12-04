import { X } from 'lucide-react';

interface StoryModalProps {
  story: {
    id: number;
    title: string;
    category: string;
    description: string;
    image: string;
    fullStory: string;
    impact: string;
    quote: string;
  } | null;
  isOpen: boolean;
  onClose: () => void;
}

export function StoryModal({ story, isOpen, onClose }: StoryModalProps) {
  if (!isOpen || !story) return null;

  return (
    <div className="fixed inset-0 z-50 overflow-y-auto" aria-labelledby="modal-title" role="dialog" aria-modal="true">
      <div className="flex min-h-screen items-end justify-center px-4 pt-4 pb-20 text-center sm:block sm:p-0">
        {/* Background overlay */}
        <div className="fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity" aria-hidden="true" onClick={onClose} />

        {/* Modal panel */}
        <div className="inline-block transform overflow-hidden rounded-lg bg-white text-left align-bottom shadow-xl transition-all sm:my-8 sm:w-full sm:max-w-4xl sm:align-middle">
          <div className="absolute right-0 top-0 pr-4 pt-4">
            <button
              type="button"
              className="rounded-md bg-white text-gray-400 hover:text-gray-500 focus:outline-none"
              onClick={onClose}
            >
              <span className="sr-only">Close</span>
              <X className="h-6 w-6" aria-hidden="true" />
            </button>
          </div>

          <div className="bg-white">
            <div className="relative h-96">
              <img
                src={story.image}
                alt={story.title}
                className="absolute inset-0 h-full w-full object-cover"
              />
              <div className="absolute inset-0 bg-gray-900 bg-opacity-60" />
              <div className="relative flex h-full items-end p-8">
                <div>
                  <div className="mb-4">
                    <span className="inline-flex items-center rounded-full bg-rose-600/10 px-3 py-1 text-sm font-medium text-rose-400 ring-1 ring-inset ring-rose-400/20">
                      {story.category}
                    </span>
                  </div>
                  <h2 className="text-3xl font-bold text-white">{story.title}</h2>
                </div>
              </div>
            </div>

            <div className="px-8 py-6">
              <div className="prose prose-lg max-w-none">
                <blockquote className="text-xl italic text-gray-900 border-l-4 border-rose-500 pl-4 my-8">
                  "{story.quote}"
                </blockquote>
                
                <h3 className="text-xl font-semibold text-gray-900 mt-8 mb-4">The Journey</h3>
                <p className="text-gray-700">{story.fullStory}</p>

                <h3 className="text-xl font-semibold text-gray-900 mt-8 mb-4">Impact</h3>
                <p className="text-gray-700">{story.impact}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

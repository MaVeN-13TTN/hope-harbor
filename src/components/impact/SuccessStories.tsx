import React, { useState } from 'react';
import { StoryModal } from './StoryModal';

const stories = [
  {
    id: 1,
    title: "Sarah's Journey to Independence",
    category: "Housing Support",
    description: "After facing homelessness, Sarah found stability through our housing program and now has a place to call home.",
    image: "https://images.unsplash.com/photo-1531123897727-8f129e1688ce?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    fullStory: "Sarah's story is one of remarkable resilience. After losing her job and subsequently her home during the pandemic, she found herself without a stable place to live. Through our housing support program, she received emergency shelter and participated in our financial literacy workshops. With dedicated support from our case managers, Sarah developed a sustainable budget, secured employment, and eventually transitioned into permanent housing. Today, she's not just stable – she's thriving.",
    impact: "Sarah has maintained stable housing for over two years, rebuilt her savings, and now mentors others in our financial literacy program. Her story exemplifies how stable housing can be the foundation for transformative life changes.",
    quote: "Hope Harbor didn't just give me a roof over my head – they gave me the tools and confidence to rebuild my life. I'm proud to say I'm not just surviving anymore; I'm truly living."
  },
  {
    id: 2,
    title: "Michael's Career Transformation",
    category: "Job Training",
    description: "Through our job training program, Michael gained new skills and secured a full-time position in his dream field.",
    image: "https://images.unsplash.com/photo-1560250097-0b93528c311a?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    fullStory: "Michael had always dreamed of working in technology but lacked the formal training and connections to break into the field. After enrolling in our job training program, he completed an intensive 12-week coding bootcamp, received one-on-one career mentoring, and participated in networking events with local tech companies. His dedication and newly acquired skills caught the attention of a growing startup.",
    impact: "Now a full-stack developer, Michael has tripled his previous income and actively participates in our mentorship program, helping others follow a similar path to success in tech careers.",
    quote: "The program gave me more than just technical skills – it gave me a community and the confidence to pursue my dreams."
  },
  {
    id: 3,
    title: "The Thompson Family's Fresh Start",
    category: "Family Support",
    description: "With comprehensive support services, the Thompson family overcame challenges and built a stronger future together.",
    image: "https://images.unsplash.com/photo-1491438590914-bc09fcaaf77a?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    fullStory: "The Thompsons faced multiple challenges: housing instability, food insecurity, and limited access to healthcare. Through our comprehensive family support program, they received coordinated assistance that addressed all aspects of their situation. We helped them secure affordable housing, connect with healthcare providers, and access nutritious food through our food bank program.",
    impact: "Today, all three Thompson children are excelling in school, both parents have stable employment, and the family is actively involved in community service, giving back to help other families in similar situations.",
    quote: "Hope Harbor showed us that we didn't have to face our challenges alone. They helped us turn our struggles into stepping stones toward a better future."
  }
];

export function SuccessStories() {
  const [selectedStory, setSelectedStory] = useState<typeof stories[0] | null>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const openStory = (story: typeof stories[0]) => {
    setSelectedStory(story);
    setIsModalOpen(true);
  };

  const closeStory = () => {
    setIsModalOpen(false);
    setSelectedStory(null);
  };

  return (
    <div className="bg-gray-50 py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
            Success Stories
          </h2>
          <p className="mt-4 text-lg leading-8 text-gray-600">
            Real stories of hope, resilience, and transformation from the people we've helped.
          </p>
        </div>
        <div className="mx-auto mt-16 grid max-w-2xl auto-rows-fr grid-cols-1 gap-8 sm:mt-20 lg:mx-0 lg:max-w-none lg:grid-cols-3">
          {stories.map((story) => (
            <article
              key={story.id}
              onClick={() => openStory(story)}
              className="relative isolate flex flex-col justify-end overflow-hidden rounded-2xl bg-gray-900 px-8 pb-8 pt-80 sm:pt-48 lg:pt-80 cursor-pointer transform transition-all duration-300 hover:scale-[1.02] hover:shadow-xl"
            >
              <img
                src={story.image}
                alt={story.title}
                className="absolute inset-0 -z-10 h-full w-full object-cover transition-transform duration-300 hover:scale-105"
              />
              <div className="absolute inset-0 -z-10 bg-gradient-to-t from-gray-900 via-gray-900/40" />
              <div className="absolute inset-0 -z-10 rounded-2xl ring-1 ring-inset ring-gray-900/10" />

              <div className="flex flex-wrap items-center gap-y-1 overflow-hidden text-sm leading-6 text-gray-300">
                <div className="mr-4">
                  <span className="inline-flex items-center rounded-full bg-rose-600/10 px-3 py-1 text-xs font-medium text-rose-400 ring-1 ring-inset ring-rose-400/20">
                    {story.category}
                  </span>
                </div>
              </div>
              <h3 className="mt-3 text-lg font-semibold leading-6 text-white">
                {story.title}
              </h3>
              <p className="mt-2 text-sm leading-6 text-gray-300">
                {story.description}
              </p>
            </article>
          ))}
        </div>
      </div>

      <StoryModal
        story={selectedStory}
        isOpen={isModalOpen}
        onClose={closeStory}
      />
    </div>
  );
}
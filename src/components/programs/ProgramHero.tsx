export function ProgramHero() {
  return (
    <div className="relative h-[60vh] bg-gray-900">
      <div className="absolute inset-0">
        <img
          className="h-full w-full object-cover object-center opacity-40"
          src="https://images.unsplash.com/photo-1509099836639-18ba1795216d?ixlib=rb-4.0.3&auto=format&fit=crop&w=2340&q=80"
          alt="Community programs"
        />
      </div>
      <div className="relative h-full flex flex-col justify-center mx-auto max-w-7xl py-24 px-6 sm:py-32 lg:px-8">
        <h1 className="text-4xl font-bold tracking-tight text-white sm:text-5xl lg:text-6xl">
          Our Programs
        </h1>
        <p className="mt-6 max-w-3xl text-xl text-gray-300">
          We offer comprehensive support through various programs designed to address
          the diverse needs of our community members and create lasting positive change.
        </p>
      </div>
    </div>
  );
}
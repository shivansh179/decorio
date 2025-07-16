'use client'
import { ChevronLeft, ChevronRight, Camera } from 'lucide-react';
import React from 'react';

const projects = [
  {
    image: "/assets/bedrooms/Slide16.png",
    title: "Contemporary 3BHK Apartment Design with Beige Wall Panel",
    location: "Subishi Iris Villas",
    scope: "Full Home, Kitchen, Swing Wardrobe",
    bhk: "3-BHK",
    pricing: "20 - 30 Lakhs",
    imageCount: 7,
  },
  {
    image: "/assets/bedrooms/Slide11.png",
    title: "3BHK Independent House Design in Hyderabad with Parallel Kitchen",
    location: "Ideal Blooms",
    scope: "Full Home, Kitchen, Modular Ward...",
    bhk: "3-BHK",
    pricing: "20 - 30 Lakhs",
    imageCount: 7,
  },
  {
    image: "/assets/bedrooms/Slide12.png",
    title: "Contemporary 3BHK Apartment Design with Built-in TV Unit",
    location: "Prestige Tranquil",
    scope: "Full Home, Kitchen, Kids Bedroom",
    bhk: "3-BHK",
    pricing: "20 - 30 Lakhs",
    imageCount: 10,
  },
  {
    image: "/assets/bedrooms/Slide15.png",
    title: "Luxury Apartment Design with Built-in TV Unit",
    location: "Prestige Tranquil",
    scope: "Full Home, Kitchen, Kids Bedroom",
    bhk: "3-BHK",
    pricing: "70 - 80 Lakhs",
    imageCount: 10,
  },
];

const ProjectCard = ({ project }: { project: typeof projects[0] }) => (
    <div className="flex-shrink-0 w-[380px] bg-white rounded-lg shadow-md overflow-hidden group">
        <div className="relative">
            <img src={project.image} alt={project.title} className="w-full h-56 object-cover" />
            <div className="absolute bottom-2 right-2 bg-black bg-opacity-50 text-white text-xs px-2 py-1 rounded flex items-center">
                <Camera size={14} className="mr-1" />
                {project.imageCount}
            </div>
        </div>
        <div className="p-4">
            <h3 className="font-bold text-lg text-gray-800 truncate">{project.title}</h3>
            <p className="text-sm text-gray-500 mb-4">{project.location}</p>
            <div className="flex justify-between text-xs text-gray-600 border-t pt-4">
                <div>
                    <p className="font-semibold">Scope</p>
                    <p>{project.scope}</p>
                </div>
                <div>
                    <p className="font-semibold">BHK</p>
                    <p>{project.bhk}</p>
                </div>
                <div>
                    <p className="font-semibold">Pricing</p>
                    <p>{project.pricing}</p>
                </div>
            </div>
        </div>
        <div className="p-4 border-t">
            <button className="w-full border border-liv-pink text-liv-pink font-semibold py-2 rounded-lg hover:bg-liv-pink hover:text-white transition-colors">
                Get This Design
            </button>
        </div>
    </div>
);


const FeaturedProjects = () => {
    const scrollContainerRef = React.useRef<HTMLDivElement>(null);

    const scroll = (direction: 'left' | 'right') => {
        if (scrollContainerRef.current) {
            const scrollAmount = direction === 'left' ? -400 : 400;
            scrollContainerRef.current.scrollBy({ left: scrollAmount, behavior: 'smooth' });
        }
    };
  
    return (
    <section className="py-16 bg-liv-purple-light">
      <div className="container mx-auto px-4 relative">
        <h2 className="text-3xl font-bold text-center text-gray-800 mb-10">
          By BeSpoke Design: Delivered by BeSpoke
        </h2>
        
        <div className="relative">
          <div ref={scrollContainerRef} className="flex overflow-x-auto space-x-6 pb-4 -mx-4 px-4 scrollbar-hide">
             {projects.map((project, index) => (
                <ProjectCard key={index} project={project} />
             ))}
             {/* Add a dummy card to ensure scrolling space */}
             <div className="flex-shrink-0 w-1"></div>
          </div>
          
          <button onClick={() => scroll('left')} className="absolute top-1/2 -translate-y-1/2 -left-4 bg-white rounded-full p-2 shadow-lg hover:bg-gray-100 hidden md:block">
            <ChevronLeft size={24} className="text-gray-700" />
          </button>
          <button onClick={() => scroll('right')} className="absolute top-1/2 -translate-y-1/2 -right-4 bg-white rounded-full p-2 shadow-lg hover:bg-gray-100 hidden md:block">
            <ChevronRight size={24} className="text-gray-700" />
          </button>
        </div>
      </div>
    </section>
  );
};

export default FeaturedProjects;
import { projects } from '@/data'
import React, { useState } from 'react'

const RecentProjects = () => {
  const [hoveredProject, setHoveredProject] = useState<number | null>(null);

  const handleMouseEnter = (id: number) => {
    setHoveredProject(id);
  };

  const handleMouseLeave = () => {
    setHoveredProject(null);
  };

  return (
    <div className='py-20'>
      <h1 className='heading'>
        A small selection of {' '}
        <span className='text-purple'>recent projects</span>
      </h1>
      <div className='flex flex-wrap items-center justify-center p-4 gap-16 mt-10'>
        {projects.map(({ id, title, des, vid, img, iconLists, link }) => (
          <div 
            key={id} 
            id={String(id)} 
            className='lg:min-h-[32.5rem] h-[25rem] flex flex-col items-center justify-between sm:w-96 w-[80vw] bg-[#13162d] rounded-3xl overflow-hidden p-4 transition-all duration-300 ease-in-out transform hover:scale-105'
            onMouseEnter={() => handleMouseEnter(id)}
            onMouseLeave={handleMouseLeave}
          >
            <div className='relative w-full h-[20vh] lg:h-[30vh] mb-4 overflow-hidden rounded-3xl'>
              {hoveredProject === id ? (
                <video 
                  muted 
                  loop 
                  autoPlay 
                  src={vid}
                  className='w-full h-full object-cover transition-opacity duration-300 ease-in-out opacity-100'
                  onCanPlay={() => console.log(`Video ${id} can play`)}
                  onError={(e) => console.error(`Error loading video ${id}:`, e)}
                />
              ) : (
                <img src={img} alt={title} className="w-full h-full object-cover transition-opacity duration-300 ease-in-out opacity-100" />
              )}
            </div>
            <h1 className='font-bold lg:text-2xl md:text-xl text-base line-clamp-1 text-center mb-2'>
              {title}
            </h1>
            <p className='lg:text-xl lg:font-normal font-light text-sm line-clamp-2 text-center mb-4'>
              {des}
            </p>
            <div className='flex items-center justify-between'>
              <div className='flex items-center'>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default RecentProjects;

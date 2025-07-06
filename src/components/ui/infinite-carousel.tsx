import React, { useEffect, useState, useRef } from "react";
import Image from "next/image";
import { IconArrowNarrowRight } from "@tabler/icons-react";

interface ProjectData {
  title: string;
  description: string;
  techStack: string[];
  buttonText: string;
  buttonLink: string;
  src: string;
}

interface CarouselControlProps {
  type: string;
  title: string;
  handleClick: () => void;
}

const CarouselControl = ({ type, title, handleClick }: CarouselControlProps) => {
  return (
    <button
      className={`w-8 h-8 flex items-center mx-2 justify-center bg-white/10 backdrop-blur-sm border border-white/20 rounded-full focus:outline-none hover:-translate-y-0.5 active:translate-y-0.5 transition-all duration-200 hover:bg-white/20 z-20 ${
        type === "previous" ? "rotate-180" : ""
      }`}
      title={title}
      onClick={handleClick}
    >
      <IconArrowNarrowRight className="text-white w-4 h-4" />
    </button>
  );
};

interface ProjectCardProps {
  project: ProjectData;
  isCenter: boolean;
  onHover: (hovering: boolean) => void;
}

const ProjectCard = ({ project, isCenter, onHover }: ProjectCardProps) => {
  const cardRef = useRef<HTMLDivElement>(null);
  const xRef = useRef(0);
  const yRef = useRef(0);
  const frameRef = useRef<number>(0);   // added 0 here

  useEffect(() => {
    const animate = () => {
      if (!cardRef.current) return;

      const x = xRef.current;
      const y = yRef.current;

      cardRef.current.style.setProperty("--x", `${x}px`);
      cardRef.current.style.setProperty("--y", `${y}px`);

      frameRef.current = requestAnimationFrame(animate);
    };

    frameRef.current = requestAnimationFrame(animate);

    return () => {
      if (frameRef.current) {
        cancelAnimationFrame(frameRef.current);
      }
    };
  }, []);

  const handleMouseMove = (event: React.MouseEvent) => {
    const el = cardRef.current;
    if (!el) return;

    const r = el.getBoundingClientRect();
    xRef.current = event.clientX - (r.left + Math.floor(r.width / 2));
    yRef.current = event.clientY - (r.top + Math.floor(r.height / 2));
  };

  const handleMouseLeave = () => {
    xRef.current = 0;
    yRef.current = 0;
    onHover(false);
  };

  const handleMouseEnter = () => {
    onHover(true);
  };

  return (
    <div
      ref={cardRef}
      className={`relative mx-2 flex-shrink-0 bg-gradient-to-br from-slate-900 to-slate-800 rounded-xl overflow-hidden shadow-xl border border-white/10 backdrop-blur-sm transition-all duration-500 ${
        isCenter 
          ? "w-96 h-48 scale-105 opacity-100 z-10" 
          : "w-60 h-40 scale-90 opacity-70"
      }`}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      onMouseEnter={handleMouseEnter}
      style={{
        transform: `translate3d(calc(var(--x) / 30), calc(var(--y) / 30), 0) ${isCenter ? 'scale(1.05)' : 'scale(0.9)'}`,
        transition: "transform 0.1s ease-out, width 0.5s ease, height 0.5s ease, opacity 0.5s ease",
      }}
    >
      <div className="relative w-full h-full overflow-hidden">
        <Image
          className="object-cover transition-all duration-300 hover:scale-105"
          alt={project.title}
          src={project.src}
          loading="eager"
          decoding="sync"
          fill
        />
        <div className="absolute inset-0 bg-gradient-to-t from-slate-900/60 to-transparent" />
      </div>
    </div>
  );
};

interface ProjectCarouselProps {
  projects: ProjectData[];
  className?: string;
}

export function InfiniteProjectCarousel({
  projects,
  className = "",
}: ProjectCarouselProps) {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isPaused, setIsPaused] = useState(false);
  const [isHovered, setIsHovered] = useState(false);
//   const intervalRef = useRef<NodeJS.Timeout>();
  const intervalRef = useRef<NodeJS.Timeout | null>(null);

  const displayProjects = projects;

  useEffect(() => {
    if (!isPaused && !isHovered) {
      intervalRef.current = setInterval(() => {
        setCurrentIndex((prev) => (prev + 1) % displayProjects.length);
      }, 4000);
    }

    return () => {
      if (intervalRef.current) {
        clearInterval(intervalRef.current);
      }
    };
  }, [isPaused, isHovered, displayProjects.length]);

  const handlePreviousClick = () => {
    setCurrentIndex((prev) => (prev - 1 + displayProjects.length) % displayProjects.length);
    setIsPaused(true);
    setTimeout(() => setIsPaused(false), 2000);
  };

  const handleNextClick = () => {
    setCurrentIndex((prev) => (prev + 1) % displayProjects.length);
    setIsPaused(true);
    setTimeout(() => setIsPaused(false), 2000);
  };

  const handleCardHover = (hovering: boolean) => {
    setIsHovered(hovering);
  };

  const getVisibleProjects = () => {
    const visibleProjects = [];
    for (let i = -1; i <= 1; i++) {
      const index = (currentIndex + i + displayProjects.length) % displayProjects.length;
      visibleProjects.push({
        project: displayProjects[index],
        index: index,
        isCenter: i === 0,
        position: i
      });
    }
    return visibleProjects;
  };

  return (
    <div className={`relative w-full py-4 ${className}`}>
      
      {/* Main carousel container */}
      <div className="relative overflow-hidden">
        <div className="flex justify-center items-center py-4">
          <div className="flex items-center justify-center">
            {getVisibleProjects().map(({ project, index, isCenter, position }) => (
              <div
                key={`${project.title}-${index}`}
                className={`transition-all duration-500 ${
                  position === -1 ? 'transform -translate-x-4' : 
                  position === 1 ? 'transform translate-x-4' : ''
                }`}
              >
                <ProjectCard
                  project={project}
                  isCenter={isCenter}
                  onHover={handleCardHover}
                />
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Navigation Controls */}
      <div className="absolute top-1/2 left-4 transform -translate-y-1/2">
        <CarouselControl
          type="previous"
          title="Go to previous project"
          handleClick={handlePreviousClick}
        />
      </div>
      
      <div className="absolute top-1/2 right-4 transform -translate-y-1/2">
        <CarouselControl
          type="next"
          title="Go to next project"
          handleClick={handleNextClick}
        />
      </div>

      {/* Indicators */}
      <div className="absolute bottom-2 left-1/2 transform -translate-x-1/2 flex space-x-1">
        {displayProjects.map((_, idx) => (
          <button
            key={idx}
            className={`w-2 h-2 rounded-full transition-all duration-300 ${
              idx === currentIndex ? "bg-white scale-125" : "bg-white/30 hover:bg-white/50"
            }`}
            onClick={() => {
              setCurrentIndex(idx);
              setIsPaused(true);
              setTimeout(() => setIsPaused(false), 2000);
            }}
          />
        ))}
      </div>

      {/* Project Details Section */}
      <div className="mt-6 max-w-2xl mx-auto px-4">
        <div className="rounded-xl p-6">
          <div className="text-center">
            <h2 className="text-xl font-bold text-white mb-3">
              {displayProjects[currentIndex].title}
            </h2>
            <p className="text-gray-300 text-sm mb-4 leading-relaxed">
              {displayProjects[currentIndex].description}
            </p>
            
            <div className="mb-4">
              <div className="flex flex-wrap justify-center gap-1">
                {displayProjects[currentIndex].techStack.map((tech, idx) => (
                  <span
                    key={idx}
                    className="px-3 py-1 bg-gradient-to-r from-blue-500/20 to-purple-500/20 text-blue-300 rounded-full border border-blue-500/30 font-medium text-sm"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>
            
            <a
              href={displayProjects[currentIndex].buttonLink}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center px-6 py-2 bg-gradient-to-r from-blue-500 to-purple-600 text-white text-sm font-medium rounded-lg hover:from-blue-600 hover:to-purple-700 transition-all duration-200 hover:shadow-lg hover:shadow-blue-500/25 group transform hover:scale-105"
            >
              {displayProjects[currentIndex].buttonText}
              <IconArrowNarrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
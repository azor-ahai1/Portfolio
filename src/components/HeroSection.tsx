"use client";
import React, { useState, useEffect } from "react";
import IconCloud from "./ui/icon-cloud";
import { SparklesText } from "./ui/sparkles-text";
import { cn } from "@/utils/cn";

// import { Poppins } from "next/font/google";

const slugs = [
  "typescript",
  "javascript",
  "java",
  "react",
  "html5",
  "css3",
  "nodedotjs",
  "express",
  "nextdotjs",
  "postgresql",
  "firebase",
  "vercel",
  "docker",
  "git",
  "github",
  "gitlab",
  "visualstudiocode",
  "render",
  "cplusplus",
  "python",
  "mongodb",
  "mongoose",
  "mysql",
  "flask"
];

// const poppins = Poppins({
//     subsets: ["latin"],
//     weight: ["600", "700", "800"],
//     variable: "--font-poppins",
//   });

const HeroSection = () => {
  // const images = slugs.map(
  //   (slug) => `https://cdn.simpleicons.org/${slug}/${slug}`
  // );
  
  const [isLoaded, setIsLoaded] = useState(false);
  
  useEffect(() => {
    setIsLoaded(true);
  }, []);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({
        behavior: 'smooth',
        block: 'start',
      });
    }
  };

  return (
    <div className="relative h-screen w-full overflow-hidden" id="home">
      {/* Background Video */}
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-black/50 z-10" />
        <video 
          autoPlay 
          loop 
          muted 
          playsInline
          className="w-full h-full object-cover blur-xs"
        >
          <source src="/heroBackground.mp4" type="video/mp4" />
          Your browser does not support the video tag.
        </video>
        <div className="absolute inset-0 bg-black/50 z-10" />
      </div>

      {/* Content */}
      <div className="relative z-20 flex items-center justify-center h-full px-4">
        <div className={cn(
          "grid grid-cols-1 md:grid-cols-2 gap-8 items-center w-full max-w-6xl",
          isLoaded ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4",
          "transition-all duration-1000"
        )}>
          {/* Left Side - Text */}
          <div className="text-center md:text-left space-y-6">
            
            <div className="mb-4">
              <SparklesText>
                <span className={`font-cairoplay text-4xl md:text-5xl lg:text-6xl text-transparent bg-clip-text bg-gradient-to-r from-pink-500 to-purple-600`}>
                  Aashish Shukla
                </span>
              </SparklesText>
            </div>
            
            <h2 className="text-2xl md:text-3xl font-medium text-white mb-6">

              <span className="text-green-400">Full Stack Developer </span>
              <span className="text-white animate-pulse" style={{ animationDuration: '0.75s' }}>|</span>
            </h2>
            
            <p className="text-gray-300 max-w-lg mb-8">
              Passionate about creating elegant solutions with modern technologies.
              Transforming ideas into seamless digital experiences.
            </p>
            
            <div className="flex flex-wrap gap-4 justify-center md:justify-start">
              <button className="px-6 py-3 rounded-full bg-gradient-to-r from-pink-500 to-purple-600 text-white font-medium hover:shadow-lg hover:shadow-pink-500/25 transition-all">
                View Projects
              </button>
              <button className="px-6 py-3 rounded-full border border-white/30 text-white hover:bg-white/10 transition-all">
                Contact Me
              </button>
            </div>
          </div>
          
          {/* Right Side - Icon Cloud */}
          <div className="flex justify-center md:justify-end ">
              <IconCloud iconSlugs={slugs}  />
          </div>
        </div>
        
        {/* Scroll Down Indicator */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce cursor-pointer"
          onClick={() => scrollToSection('about')}
          role="button"
          aria-label="Scroll to About section"
        >
          <div className="w-6 h-10 rounded-full border-2 border-white/50 flex justify-center pt-2 hover:border-white hover:bg-white/10 transition-all">
            <div className="w-1 h-2 bg-white/50 rounded-full animate-pulse" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
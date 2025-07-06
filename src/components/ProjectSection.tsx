"use client";

import React, { useState } from "react";
import { motion } from "framer-motion";
import { BackgroundBeams } from "./ui/background-beams";
import { InfiniteProjectCarousel } from "./ui/infinite-carousel";

const projectsData = [
  {
    title: "SwapSpace",
    description: "A full-stack e-commerce platform enabling users to buy and sell products. Features include user account management and real-time order tracking.",
    techStack: ["ExpressJS", "Mongoose", "JWT", "Multer", "Cloudinary", "React", "Vite"],
    buttonText: "View Project",
    buttonLink: "https://swapspace.onrender.com",
    src: "/swapspace.png"
  },
  {
    title: "SecretPing",
    description: "A full-stack anonymous messaging platform allowing users to send and receive anonymous messages via unique shareable links. Features include secure authentication, profile management, and threaded replies.",
    techStack: ["NextJS", "Mongoose", "Next-Auth JWT"],
    buttonText: "View Project",
    buttonLink: "https://secretping.onrender.com",
    src: "/secretping.png"
  },
  {
    title: "BlogSite",
    description: "A blogging platform where users can create accounts, write and format blogs, upload images, and explore content from others. Features include profile customization, secure authentication, and role-based access control.",
    techStack: ["React", "Vite", "JavaScript", "Appwrite", "React-Redux"],
    buttonText: "View Repsitory",
    buttonLink: "https://github.com/azor-ahai1/BlogSite",
    src: "/blogsite.png"
  },
  {
    title: "LoadShield",
    description: "A real-time coal theft detection platform with features including live vehicle monitoring. Users can add or remove vehicles, track activity in real time, and ensure secure and efficient transportation management.",
    techStack: ["ExpressJS", "Mongoose", "React", "Vite", "Socket.io"],
    buttonText: "View Project",
    buttonLink: "https://coal-theft-detection-model-1.onrender.com",
    src: "/loadshield.png"
  },
  {
    title: "Currency Convertor",
    description: "An application that enables users to convert between multiple currencies using real-time exchange rates.",
    techStack: ["React", "Vite", "JavaScript", "Currency API"],
    buttonText: "View Repsitory",
    buttonLink: "https://github.com/azor-ahai1/CurrencyConvertor",
    src: "/currencyconvertor.png"
  },
  {
    title: "Passowrd Generator",
    description: "An application that generates random passwords, offering customizable options for length, character types, and clipboard copy functionality.",
    techStack: ["React", "Vite", "Tailwind CSS", "JavaScript"],
    buttonText: "View Repository",
    buttonLink: "https://github.com/azor-ahai1/PasswordGenerator",
    src: "/passwsordgenerator.png"
  }
];

const ProjectSection = () => {
  const [isHeadingHovered, setIsHeadingHovered] = useState(false);
  
  return (
    <section className="pt-4 relative overflow-hidden" id="projects">
     
      <div className="container mx-auto px-6 md:px-8 relative z-10 mt-8 pt-8 border-t border-white/10 backdrop-blur-[2px]">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="flex flex-col items-center mb-2"
        >
          <div 
            className="relative inline-block"
            onMouseEnter={() => setIsHeadingHovered(true)}
            onMouseLeave={() => setIsHeadingHovered(false)}
          >
            <h2 className="text-5xl font-bold font-inter mb-4 mt-4 dark:text-amber-100 bg-clip-text text-transparent bg-gradient-to-r from-pink-500 via-purple-500 to-indigo-500">
              My Projects
            </h2>
            {/* <div className="absolute bottom-0 left-0 w-full h-1 overflow-hidden">
              <div 
                className={`h-full bg-gradient-to-r from-pink-500 via-purple-500 to-indigo-500 rounded-full transition-transform duration-500 ease-out ${
                  isHeadingHovered ? "scale-x-120" : "scale-x-50"
                }`}
                style={{ 
                  transformOrigin: "center" 
                }}
              />
            </div> */}
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="mb-20"
        >

          <div className="w-full">
            <InfiniteProjectCarousel
              projects={projectsData}
              className="rounded-3xl backdrop-blur-sm"
            />
          </div>
        </motion.div>

      </div>
      <BackgroundBeams />
    </section>
  );
};

export default ProjectSection;
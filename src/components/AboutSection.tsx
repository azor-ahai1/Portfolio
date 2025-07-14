"use client";

import React from "react";
import Image from "next/image";
import { WebDevList } from "./WebDevList";
import { LanguagesList } from "./LanguagesList";
import mepic from "../../public/mepic.png";
import { BackgroundBeams } from "./ui/background-beams";
import { motion } from "framer-motion";
import { CodingProfiles } from "./CodingProfiles";
import { SparklesText } from "./ui/sparkles-text";

const AboutSection = () => {  
  return (
    <section className="pt-4 pb-24 relative overflow-hidden" id="about">
      <div className="absolute top-0 left-0 right-0 h-32 bg-gradient-to-b from-transparent to-black/5 backdrop-blur-sm z-0" />
      
      {/* <div className="absolute top-0 left-0 w-64 h-64 bg-gradient-to-br from-pink-300/20 to-purple-300/20 rounded-full blur-3xl -translate-x-1/2 -translate-y-1/2" />
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-gradient-to-tl from-blue-300/20 to-teal-300/20 rounded-full blur-3xl translate-x-1/3 translate-y-1/3" /> */}
      

      <div className="container mx-auto px-6 md:px-8 relative z-10 mt-8 pt-8 border-t border-white/10 backdrop-blur-[2px]">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="flex flex-col items-center mb-16"
        >
          <div 
            className="relative inline-block"
          >
            <SparklesText>
              <h2 className="font-cairoplay text-4xl md:text-5xl text-transparent bg-clip-text bg-gradient-to-r from-yellow-500 to-green-600">
                About Me
              </h2>
            </SparklesText>
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
        
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">

          <motion.div 
            className="lg:col-span-6 flex flex-col items-center lg:items-start"
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.2 }}
          >
            <div className="flex flex-row items-center w-full justify-center">
                <div className="relative mb-10 group">
                    <div className="absolute -inset-1 bg-gradient-to-r from-pink-500 to-indigo-500 rounded-full opacity-75 
                        transition duration-300 group-hover:opacity-100"></div>
                    <div className="relative w-64 h-64 md:w-80 md:h-80 rounded-full overflow-hidden border-4 border-black/10 dark:border-white/10">
                        <Image
                        src={mepic}
                        alt="Aashish Shukla"
                        fill
                        className="object-cover transition duration-500 group-hover:scale-105"
                        sizes="(max-width: 768px) 16rem, 20rem"
                        priority
                        />
                    </div>
                </div>
            </div>

            <div className="w-full mt-4 backdrop-blur-sm  p-6 rounded-2xl shadow-xl hover:shadow-2xl transition duration-300">
              <p className="text-gray-700 dark:text-gray-200 text-lg leading-relaxed mb-4">
                I&apos;m Aashish Shukla — a full-stack developer with a passion for building innovative software solutions and dynamic web applications.  I enjoy turning complex problems into clean, efficient code and continuously sharpen my skills to stay at the forefront of modern development.
              </p>
            </div>
            <CodingProfiles />
          </motion.div>
          
          <motion.div 
            className="lg:col-span-6"
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.4 }}
          >
            <div className="transition duration-300">
              <h3 className="text-3xl font-bold mb-6 text-center lg:text-left bg-clip-text text-transparent bg-gradient-to-r from-pink-500 to-indigo-500">
                Skills & Expertise
              </h3>
              
              <div className="grid grid-cols-1 gap-8">
                <div className="space-y-4">
                  <h4 className="text-xl font-semibold text-gray-800 dark:text-white flex items-center">
                    <span className="w-2 h-6 bg-pink-500 rounded mr-3"></span>
                    Programming Languages
                  </h4>
                  <LanguagesList />
                </div>
                
                <div className="space-y-4">
                  <h4 className="text-xl font-semibold text-gray-800 dark:text-white flex items-center">
                    <span className="w-2 h-6 bg-indigo-500 rounded mr-3"></span>
                    Web Development
                  </h4>
                  <WebDevList />
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
      <BackgroundBeams />
    </section>
  );
};

export default AboutSection;
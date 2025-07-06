"use client";

import React, { useState } from "react";
import { SiCodechef, SiLeetcode, SiCodeforces, SiGithub } from "react-icons/si";
import Tooltip from "./ToolTip";
import { motion, useMotionValue } from "framer-motion";

interface ProfileLinkProps {
  href: string;
  icon: React.ReactNode;
  name: string;
  color: string;
}

const ProfileLink = ({ href, icon, name, color }: ProfileLinkProps) => {
  const [isTooltipVisible, setTooltipVisible] = useState(false);
  const x = useMotionValue(0);

  return (
    <motion.div 
      className="relative"
      onMouseMove={(e) => {
        const rect = e.currentTarget.getBoundingClientRect();
        x.set(e.clientX - rect.x - rect.width / 2);
      }}
      onHoverStart={() => setTooltipVisible(true)}
      onHoverEnd={() => setTooltipVisible(false)}
    >
      <Tooltip isVisible={isTooltipVisible} name={name} x={x} />
      <motion.a 
        href={href}
        target="_blank"
        rel="noopener noreferrer"
        className={`flex items-center justify-center w-12 h-12 rounded-full ${color} text-white shadow-lg 
                  hover:shadow-xl transition-all duration-300 hover:scale-110`}
        whileHover={{ y: -5 }}
        whileTap={{ scale: 0.95 }}
      >
        {icon}
      </motion.a>
    </motion.div>
  );
};

export const CodingProfiles = () => {
  return (
    <div className="w-full mt-6">
      <h4 className="text-xl font-semibold text-gray-800 dark:text-white flex items-center pb-3 mb-4">
        <span className="w-2 h-6  bg-purple-500 rounded mr-3"></span>
        Coding Profiles
      </h4>
      
      <div className="flex items-center justify-center md:justify-start pt-5 space-x-6">
        <ProfileLink 
          href="https://github.com/yourusername" 
          icon={<SiGithub size={24} />} 
          name="GitHub" 
          color="bg-gray-800 hover:bg-gray-700" 
        />
        
        <ProfileLink 
          href="https://leetcode.com/yourusername" 
          icon={<SiLeetcode size={24} />} 
          name="LeetCode" 
          color="bg-yellow-600 hover:bg-yellow-500" 
        />
        
        <ProfileLink 
          href="https://codeforces.com/profile/yourusername" 
          icon={<SiCodeforces size={24} />} 
          name="Codeforces" 
          color="bg-blue-600 hover:bg-blue-500" 
        />
        
        <ProfileLink 
          href="https://www.codechef.com/users/yourusername" 
          icon={<SiCodechef size={24} />} 
          name="CodeChef" 
          color="bg-indigo-600 hover:bg-indigo-500" 
        />
      </div>
    </div>
  );
};
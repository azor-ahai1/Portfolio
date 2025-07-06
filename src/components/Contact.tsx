"use client";
import React, { useState } from 'react';
import { FaEnvelope, FaLinkedin, FaInstagram, FaGithub } from 'react-icons/fa';
import { SparklesText } from "./ui/sparkles-text";
import { cn } from "@/utils/cn";
import { InteractiveHoverButton } from './ui/interactive-hover-button';

const Contact_Info = [
  {
    platform: "Email",
    icon: <FaEnvelope size={24} />,
    link: "mailto:aashishshukla910@gmail.com",
    id: "aashishshukla910@gmail.com"
  },
  {
    platform: "LinkedIn",
    icon: <FaLinkedin size={24} />,
    link: "https://linkedin.com/in/your-profile",
    id: "aashish-shukla"
  },
  {
    platform: "Instagram",
    icon: <FaInstagram size={24} />,
    link: "https://instagram.com/aashish__shukla",
    id: "@aashish__shukla"
  },
  {
    platform: "GitHub",
    icon: <FaGithub size={24} />,
    link: "https://github.com/azor-ahai1",
    id: "azor-ahai1"
  }
];

interface ContactCardProps {
  icon: React.ReactNode;
  platform: string;
  id: string;
  link: string;
}

const ContactCard: React.FC<ContactCardProps> = ({ icon, platform, id, link }) => {
  const [isHovered, setIsHovered] = useState(false);
  
  return (
    <a 
      href={link}
      target="_blank"
      rel="noopener noreferrer"
      className="block w-full h-full"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div className="w-full h-20 flex items-center gap-4 p-6 rounded-xl bg-white/5 backdrop-blur-sm border border-white/10 transition-all duration-300 hover:border-pink-500/30 hover:shadow-lg hover:shadow-pink-500/10">
        <div className={cn(
          "text-pink-400 text-xl flex-shrink-0",
          isHovered ? "scale-110" : "scale-100",
          "transition-transform duration-300"
        )}>
          {icon}
        </div>
        <div className="flex flex-col">
          <span className="font-medium text-white text-lg">{platform}</span>
          <div className={cn(
            "text-gray-300 text-sm overflow-hidden transition-all duration-300",
            isHovered ? "opacity-100 max-h-6" : "opacity-0 max-h-0"
          )}>
            {id}
          </div>
        </div>
      </div>
    </a>
  );
};

const Contact: React.FC = () => {
  return (
    <section className="min-h-screen w-full flex items-center justify-center bg-gradient-to-br from-gray-900 to-black pt-20" id="contact">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-16">
            <div className="mb-4">
              <SparklesText>
                <span className="font-cairoplay text-4xl md:text-5xl text-transparent bg-clip-text bg-gradient-to-r from-pink-500 to-purple-600">
                  Get In Touch
                </span>
              </SparklesText>
            </div>
            <p className="text-gray-300 text-lg max-w-2xl mx-auto mt-6">
              Feel free to reach out through any of these platforms. I'm always open to discussing new projects, opportunities, or collaborations.
            </p>
          </div>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-10">
            {Contact_Info.map((contact, index) => (
              <ContactCard 
                key={index}
                icon={contact.icon}
                platform={contact.platform}
                id={contact.id}
                link={contact.link}
              />
            ))}
          </div>          
        </div>
        <div className="mt-24 border-t border-white/10 pt-8  text-center">
            <p className="text-gray-400 text-sm mt-2">© {new Date().getFullYear()} Aashish Shukla. All rights reserved.</p>
            <p className="text-gray-500 text-xs mt-2">Designed & Developed with ❤️</p>
        </div>
      </div>

    </section>
  );
};

export default Contact;
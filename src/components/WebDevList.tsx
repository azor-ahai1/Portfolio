"use client";
import React, { forwardRef, useRef, useState } from "react";
import {
  SiReact,
  SiExpress,
  SiNextdotjs,
  SiMysql,
  SiMongodb,
  SiFlask,
} from 'react-icons/si';
import { FaCode } from 'react-icons/fa';

import { cn } from "@/utils/cn";
import { AnimatedBeam } from "@/components/ui/animated-beam";
import { useMotionValue } from "framer-motion";
import Tooltip from "./ToolTip";

const Circle = forwardRef<
  HTMLDivElement,
  { 
    className?: string; 
    children?: React.ReactNode;
    name: string;
    onHover: (id: string | null) => void;
    isHovered: boolean;
    id: string;
  }
>(({ className, children, name, onHover, isHovered, id }, ref) => {
  const x = useMotionValue(0);

  const handleMouseMove = (event: React.MouseEvent<HTMLDivElement>) => {
    if (event.currentTarget) {
      const halfWidth = event.currentTarget.offsetWidth / 2;
      x.set(event.nativeEvent.offsetX - halfWidth);
    }
  };

  return (
    <div
      className="group relative"
      onMouseEnter={() => onHover(id)}
      onMouseLeave={() => onHover(null)}
      onMouseMove={handleMouseMove}
    >
      <Tooltip isVisible={isHovered} name={name} x={x} />
      <div
        ref={ref}
        className={cn(
          "z-10 flex items-center justify-center rounded-full border-2 bg-black p-3 shadow-[0_0_20px_-12px_rgba(0,0,0,0.8)] transition duration-300 group-hover:scale-110",
          isHovered ? "z-30" : "",
          className,
        )}
      >
        {children}
      </div>
    </div>
  );
});

Circle.displayName = "Circle";

export function WebDevList() {
  const [hoveredId, setHoveredId] = useState<string | null>(null);
  
  const containerRef = useRef<HTMLDivElement>(null);
  const div1Ref = useRef<HTMLDivElement>(null);
  const div2Ref = useRef<HTMLDivElement>(null);
  const div3Ref = useRef<HTMLDivElement>(null);
  const div4Ref = useRef<HTMLDivElement>(null);
  const div5Ref = useRef<HTMLDivElement>(null);
  const div6Ref = useRef<HTMLDivElement>(null);
  const div7Ref = useRef<HTMLDivElement>(null);
  
  // Define icon props for consistency
  const iconProps = {
    size: 24,
  };

  // Array of icon data
  const icons = [
    { id: "react", ref: div1Ref, name: "React", component: <SiReact {...iconProps} />, className: "size-12" },
    { id: "nextjs", ref: div2Ref, name: "NextJs", component: <SiNextdotjs {...iconProps} />, className: "size-12" },
    { id: "mongodb", ref: div3Ref, name: "MongoDB", component: <SiMongodb {...iconProps} />, className: "size-12" },
    { id: "webdevelopment", ref: div4Ref, name: "Web Development", component: <FaCode size={32} />, className: "size-16" },
    { id: "expressjs", ref: div5Ref, name: "ExpressJs", component: <SiExpress {...iconProps} />, className: "size-12" },
    { id: "flask", ref: div6Ref, name: "Flask", component: <SiFlask {...iconProps} />, className: "size-12" },
    { id: "sql", ref: div7Ref, name: "SQL", component: <SiMysql {...iconProps} />, className: "size-12" },
  ];

  return (
    <div
      className="relative flex h-[300px] w-full items-center justify-center overflow-hidden p-10"
      ref={containerRef}
    >
      <div className="flex size-full max-h-[200px] max-w-lg flex-col items-stretch justify-between gap-10">
        <div className="flex flex-row items-center justify-between">
          <Circle 
            ref={div1Ref} 
            id={icons[0].id} 
            name={icons[0].name} 
            className={icons[0].className}
            onHover={setHoveredId}
            isHovered={hoveredId === icons[0].id}
          >
            {icons[0].component}
          </Circle>
          <Circle 
            ref={div5Ref} 
            id={icons[4].id} 
            name={icons[4].name} 
            className={icons[4].className}
            onHover={setHoveredId}
            isHovered={hoveredId === icons[4].id}
          >
            {icons[4].component}
          </Circle>
        </div>
        <div className="flex flex-row items-center justify-between">
          <Circle 
            ref={div2Ref} 
            id={icons[1].id} 
            name={icons[1].name} 
            className={icons[1].className}
            onHover={setHoveredId}
            isHovered={hoveredId === icons[1].id}
          >
            {icons[1].component}
          </Circle>
          <Circle 
            ref={div4Ref} 
            id={icons[3].id} 
            name={icons[3].name} 
            className={icons[3].className}
            onHover={setHoveredId}
            isHovered={hoveredId === icons[3].id}
          >
            {icons[3].component}
          </Circle>
          <Circle 
            ref={div6Ref} 
            id={icons[5].id} 
            name={icons[5].name} 
            className={icons[5].className}
            onHover={setHoveredId}
            isHovered={hoveredId === icons[5].id}
          >
            {icons[5].component}
          </Circle>
        </div>
        <div className="flex flex-row items-center justify-between">
          <Circle 
            ref={div3Ref} 
            id={icons[2].id} 
            name={icons[2].name} 
            className={icons[2].className}
            onHover={setHoveredId}
            isHovered={hoveredId === icons[2].id}
          >
            {icons[2].component}
          </Circle>
          <Circle 
            ref={div7Ref} 
            id={icons[6].id} 
            name={icons[6].name} 
            className={icons[6].className}
            onHover={setHoveredId}
            isHovered={hoveredId === icons[6].id}
          >
            {icons[6].component}
          </Circle>
        </div>
      </div>
      <AnimatedBeam
        containerRef={containerRef}
        fromRef={div1Ref}
        toRef={div4Ref}
        curvature={-75}
        endYOffset={-10}
      />
      <AnimatedBeam
        containerRef={containerRef}
        fromRef={div2Ref}
        toRef={div4Ref}
      />
      <AnimatedBeam
        containerRef={containerRef}
        fromRef={div3Ref}
        toRef={div4Ref}
        curvature={75}
        endYOffset={10}
      />
      <AnimatedBeam
        containerRef={containerRef}
        fromRef={div5Ref}
        toRef={div4Ref}
        curvature={-75}
        endYOffset={-10}
        reverse
      />
      <AnimatedBeam
        containerRef={containerRef}
        fromRef={div6Ref}
        toRef={div4Ref}
        reverse
      />
      <AnimatedBeam
        containerRef={containerRef}
        fromRef={div7Ref}
        toRef={div4Ref}
        curvature={75}
        endYOffset={10}
        reverse
      />
    </div>
  );
}
"use client";
import React, { forwardRef, useRef, useState } from "react";
import { 
  IconBrandCpp,
  IconBrandPython,
  IconCode,
  IconBrandJavascript,
  IconBrandTypescript
} from "@tabler/icons-react";
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

export function LanguagesList() {
  const [hoveredId, setHoveredId] = useState<string | null>(null);
  
  const containerRef = useRef<HTMLDivElement>(null);
  const div1Ref = useRef<HTMLDivElement>(null);
  const div3Ref = useRef<HTMLDivElement>(null);
  const div4Ref = useRef<HTMLDivElement>(null);
  const div5Ref = useRef<HTMLDivElement>(null);
  const div7Ref = useRef<HTMLDivElement>(null);
  
  // Define icon props for consistency
  const iconProps = {
    size: 24,
    stroke: 1.5,
  };

  // Array of icon data
  const icons = [
    { id: "cpp", ref: div1Ref, name: "C++", component: <IconBrandCpp {...iconProps} />, className: "size-12" },
    { id: "python", ref: div3Ref, name: "Python", component: <IconBrandPython {...iconProps} />, className: "size-12" },
    { id: "languages", ref: div4Ref, name: "Programming Languages", component: <IconCode {...iconProps} size={36} />, className: "size-16" },
    { id: "javascript", ref: div5Ref, name: "Javascript", component: <IconBrandJavascript {...iconProps} />, className: "size-12" },
    { id: "typescript", ref: div7Ref, name: "Typescript", component: <IconBrandTypescript {...iconProps} />, className: "size-12" },
  ];

  return (
    <div
      className="relative flex h-[300px] w-full items-center justify-center overflow-hidden p-10"
      ref={containerRef}
    >
      <div className="flex size-full max-h-[200px] max-w-lg flex-col justify-between gap-10">
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
            id={icons[3].id} 
            name={icons[3].name} 
            className={icons[3].className}
            onHover={setHoveredId}
            isHovered={hoveredId === icons[3].id}
          >
            {icons[3].component}
          </Circle>
        </div>
        <div className="flex flex-row justify-center items-center w-full">
          <Circle 
            ref={div4Ref} 
            id={icons[2].id} 
            name={icons[2].name} 
            className={icons[2].className}
            onHover={setHoveredId}
            isHovered={hoveredId === icons[2].id}
          >
            {icons[2].component}
          </Circle>
        </div>
        <div className="flex flex-row items-center justify-between">
          <Circle 
            ref={div3Ref} 
            id={icons[1].id} 
            name={icons[1].name} 
            className={icons[1].className}
            onHover={setHoveredId}
            isHovered={hoveredId === icons[1].id}
          >
            {icons[1].component}
          </Circle>
          <Circle 
            ref={div7Ref} 
            id={icons[4].id} 
            name={icons[4].name} 
            className={icons[4].className}
            onHover={setHoveredId}
            isHovered={hoveredId === icons[4].id}
          >
            {icons[4].component}
          </Circle>
        </div>
      </div>
      <AnimatedBeam
        containerRef={containerRef}
        fromRef={div1Ref}
        toRef={div4Ref}
        curvature={-35}
        endYOffset={0}
      />
      <AnimatedBeam
        containerRef={containerRef}
        fromRef={div3Ref}
        toRef={div4Ref}
        curvature={35}
        endYOffset={0}
      />
      <AnimatedBeam
        containerRef={containerRef}
        fromRef={div5Ref}
        toRef={div4Ref}
        curvature={-35}
        endYOffset={0}
        reverse
      />
      <AnimatedBeam
        containerRef={containerRef}
        fromRef={div7Ref}
        toRef={div4Ref}
        curvature={35}
        endYOffset={0}
        reverse
      />
    </div>
  );
}
"use client";

import { useEffect, useRef, useState } from "react";
import Image from "next/image";
import { Diamond, Zap } from "lucide-react";
import { cn } from "@/lib/utils";
import { TrafficLightDots } from "../shared/icons";
import type { FabricaProject } from "@/types/fabrica-framer-media";

/** Small self-contained fade/slide-up-on-scroll hook for card reveal. */
function useRevealOnScroll<T extends HTMLElement>() {
  const ref = useRef<T>(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const node = ref.current;
    if (!node) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.2 },
    );

    observer.observe(node);
    return () => observer.disconnect();
  }, []);

  return { ref, isVisible };
}

/** Fallback logo badge for projects without a dedicated extracted SVG mark. */
function FallbackLogoBadge({ project }: { project: FabricaProject }) {
  if (project.name === "Powersurge") {
    return (
      <span className="flex h-10 w-10 items-center justify-center rounded-md bg-black/80">
        <Zap className="h-5 w-5 text-white" fill="currentColor" strokeWidth={0} />
      </span>
    );
  }
  if (project.name === "Mastermail") {
    return (
      <span className="flex h-10 w-10 items-center justify-center rounded-md bg-white">
        <Diamond className="h-5 w-5 text-black" strokeWidth={2} />
      </span>
    );
  }
  return null;
}

export function ProjectCard({ project }: { project: FabricaProject }) {
  const { ref, isVisible } = useRevealOnScroll<HTMLDivElement>();
  const [isHovered, setIsHovered] = useState(false);
  const hasDedicatedLogo = project.logo.length > 0;

  return (
    <div
      ref={ref}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      className={cn(
        "transition-[opacity,transform] duration-500 ease-out",
        isVisible ? "translate-y-0 opacity-100" : "translate-y-5 opacity-0",
      )}
    >
      {/* Top label bar */}
      <div className="flex items-center justify-between rounded-2xl bg-white px-6 py-5">
        <div className="flex items-baseline gap-1.5">
          <span className="text-base font-semibold text-black">{project.name}.</span>
          <span className="text-sm text-black/40">/{project.year}</span>
        </div>
        <TrafficLightDots active={isHovered} className="transition-colors duration-200" />
      </div>

      {/* Image block */}
      <div className="relative mt-3 aspect-[4/3] overflow-hidden rounded-2xl">
        <Image
          src={`/sites/fabrica-framer-media-fe96c5e9/root-8a5edab2/images/${project.image}`}
          alt={project.name}
          fill
          className={cn(
            "object-cover transition-transform duration-500 ease-out",
            isHovered ? "scale-[1.03]" : "scale-100",
          )}
          sizes="(max-width: 810px) 100vw, 50vw"
        />

        {/* Overlay logo + name */}
        <div className="absolute inset-0 flex items-center justify-center gap-3">
          {hasDedicatedLogo ? (
            <Image
              src={`/sites/fabrica-framer-media-fe96c5e9/root-8a5edab2/images/${project.logo}`}
              alt={project.logoAlt}
              width={40}
              height={40}
              className="h-10 w-10 object-contain"
            />
          ) : (
            <FallbackLogoBadge project={project} />
          )}
          <span className="text-2xl font-semibold text-white">{project.name}</span>
        </div>
      </div>
    </div>
  );
}

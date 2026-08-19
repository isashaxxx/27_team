"use client";

import { useEffect, useRef, useState } from "react";
import Image from "next/image";
import { cn } from "@/lib/utils";
import { PlusBadgeIcon } from "../shared/icons";
import type { FabricaTeamMember } from "@/types/fabrica-framer-media";

const IMAGE_BASE = "/sites/fabrica-framer-media-fe96c5e9/root-8a5edab2/images";

const TEAM: FabricaTeamMember[] = [
  {
    name: "Sarah Johnson",
    role: "Creative Director",
    image: "2tiQFkd5S2BAWIEShaSCdLTiY.jpg",
  },
  {
    name: "Christopher Miller",
    role: "UX/UI Designer",
    image: "33ZiQHiNM5s1AOYU8Ejc9IMhc84.jpg",
  },
  {
    name: "Lauren Thompson",
    role: "Team Lead",
    image: "XBirhPxPnqDiGkAtvDrRCiK4pS8.jpg",
  },
  {
    name: "Michael Wilson",
    role: "Full Stack Developer",
    // Swapped from the spec's default (a female portrait) for a photo that
    // actually reads as a man, matching the reference screenshot.
    image: "9EtXT1aFvual1dmNauTJSO1YmE.jpg",
  },
];

/** Fades an element up into view the first time it enters the viewport. */
function useScrollFadeIn<T extends HTMLElement>() {
  const ref = useRef<T | null>(null);
  const [isVisible, setIsVisible] = useState(
    () => typeof IntersectionObserver === "undefined",
  );

  useEffect(() => {
    const node = ref.current;
    if (!node || typeof IntersectionObserver === "undefined") return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.15, rootMargin: "0px 0px -80px 0px" },
    );

    observer.observe(node);
    return () => observer.disconnect();
  }, []);

  return { ref, isVisible };
}

function TeamCard({ member }: { member: FabricaTeamMember }) {
  return (
    <div className="relative aspect-[1/1.1] overflow-hidden rounded-2xl bg-black/5">
      <Image
        src={`${IMAGE_BASE}/${member.image}`}
        alt={member.name}
        fill
        sizes="(min-width: 810px) 22vw, 45vw"
        className="object-cover"
      />
      <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/0 to-black/0" />

      <div className="absolute top-3 left-3 flex items-center gap-1.5 rounded-full bg-black/60 py-1.5 pr-3 pl-1.5 backdrop-blur-sm">
        <PlusBadgeIcon className="h-4 w-4 shrink-0 text-white" />
        <span className="text-[11px] leading-tight font-medium text-white">
          {member.role}
          <span className="block font-normal text-white/60">at fabrica®</span>
        </span>
      </div>

      <p className="absolute bottom-4 left-4 text-xl leading-tight font-semibold text-white">
        {member.name}
      </p>
    </div>
  );
}

export function TeamMission({ className }: { className?: string }) {
  const { ref, isVisible } = useScrollFadeIn<HTMLDivElement>();

  return (
    <section
      className={cn(
        "mx-3 rounded-[25px] bg-white px-6 py-16 sm:mx-9 sm:px-9 sm:py-20 lg:py-24",
        className,
      )}
    >
      {/* Eyebrow */}
      <div className="flex items-center gap-2.5">
        <PlusBadgeIcon className="h-6 w-6 text-black/40" />
        <span className="text-sm text-black/40 sm:text-[15px]">fabrica®</span>
      </div>

      {/* Heading */}
      <h2 className="mt-6 max-w-[900px] text-[40px] leading-[1.05] font-semibold tracking-[-0.03em] text-balance sm:text-[50px] lg:text-[60px] lg:tracking-[-0.06em]">
        <span className="block text-black">The faces behind</span>
        <span className="block text-black/40">the projects.</span>
      </h2>

      {/* Mission text + quote + team grid */}
      <div
        ref={ref}
        className={cn(
          "mt-12 flex flex-col gap-10 transition-all duration-700 ease-out min-[810px]:mt-20 min-[810px]:flex-row min-[810px]:items-start min-[810px]:justify-between min-[810px]:gap-8",
          isVisible ? "translate-y-0 opacity-100" : "translate-y-8 opacity-0",
        )}
      >
        {/* Be part of our mission */}
        <div className="min-[810px]:w-[220px] min-[810px]:shrink-0">
          <p className="text-lg font-semibold text-black sm:text-xl">
            Be part of our mission
          </p>
          <p className="mt-3 text-[15px] leading-relaxed text-black/50">
            If you&apos;re ready to create and collaborate, we&apos;d love to
            hear from you.
          </p>
          <button
            type="button"
            className="mt-6 inline-flex items-center gap-4 rounded-full bg-black py-3.5 pr-4 pl-7 text-[15px] font-medium text-white transition-transform duration-200 ease-out hover:scale-[1.03]"
          >
            <span>Apply now</span>
            <span className="h-2 w-2 shrink-0 rounded-full bg-white" />
          </button>
        </div>

        {/* Pull quote */}
        <p className="text-2xl leading-snug min-[810px]:max-w-[400px] min-[810px]:flex-1">
          <span className="font-medium text-black/40">
            We believe great work comes{" "}
          </span>
          <span className="font-semibold text-black">from collaboration.</span>
          <span className="font-medium text-black/40">
            {" "}
            That&apos;s why we work closely with each other to ensure every
            project meets your goals and exceeds expectations.
          </span>
        </p>

        {/* Team grid */}
        <div className="grid grid-cols-2 gap-3 sm:gap-4 min-[810px]:w-[420px] min-[810px]:shrink-0">
          {TEAM.map((member) => (
            <TeamCard key={member.name} member={member} />
          ))}
        </div>
      </div>
    </section>
  );
}

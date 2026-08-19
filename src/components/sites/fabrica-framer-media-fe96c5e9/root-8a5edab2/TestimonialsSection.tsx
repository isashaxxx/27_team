"use client";

import { useEffect, useRef, useState, type ReactNode } from "react";
import Image from "next/image";
import { cn } from "@/lib/utils";
import { StarIcon, PlusBadgeIcon } from "../shared/icons";

const IMAGE_BASE = "/sites/fabrica-framer-media-fe96c5e9/root-8a5edab2/images";

const AVATAR_STACK = [
  `${IMAGE_BASE}/vGSJoy0fkCYvuK5CETUzS64NNo.jpg`,
  `${IMAGE_BASE}/6xxZ3D6rnu26P86nUVvj2eanCY.jpg`,
  `${IMAGE_BASE}/6girwIRKdg1doDEWAHr4oDIbroU.jpg`,
];

const EMILY_DAVIS_PHOTO = `${IMAGE_BASE}/aPl6cE0jS1YZHwAFXXw61N1JkQI.jpg`;

/** Fades + slides a card in once it scrolls into view; staggered by index. */
function useInView<T extends HTMLElement>(delayMs: number) {
  const ref = useRef<T | null>(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const node = ref.current;
    if (!node) return;

    let timer: ReturnType<typeof setTimeout> | undefined;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          timer = setTimeout(() => setIsVisible(true), delayMs);
        }
      },
      { threshold: 0.15 },
    );

    observer.observe(node);
    return () => {
      observer.disconnect();
      if (timer) clearTimeout(timer);
    };
  }, [delayMs]);

  return { ref, isVisible };
}

function StarRow({ className }: { className?: string }) {
  return (
    <div className={cn("flex items-center gap-0.5", className)}>
      {Array.from({ length: 5 }).map((_, i) => (
        <StarIcon key={i} className="h-3.5 w-3.5 text-amber-500" />
      ))}
    </div>
  );
}

function FadeInCard({
  index,
  className,
  children,
}: {
  index: number;
  className?: string;
  children: ReactNode;
}) {
  const { ref, isVisible } = useInView<HTMLDivElement>(index * 80);

  return (
    <div
      ref={ref}
      className={cn(
        "flex min-h-[400px] flex-col justify-end rounded-3xl p-8 transition-all duration-700 ease-out sm:min-h-[440px]",
        isVisible ? "translate-y-0 opacity-100" : "translate-y-6 opacity-0",
        className,
      )}
    >
      {children}
    </div>
  );
}

export function TestimonialsSection({ className }: { className?: string }) {
  return (
    <section
      className={cn("bg-[#f4f3f1] px-6 py-20 sm:px-10 sm:py-28 lg:px-16 lg:py-32", className)}
    >
      <div className="mx-auto max-w-[1400px]">
        {/* Eyebrow */}
        <div className="mb-10 flex items-center gap-2.5 sm:mb-14">
          <PlusBadgeIcon className="h-6 w-6 text-black" />
          <span className="text-sm font-medium text-black">Testimonials</span>
        </div>

        {/* Heading */}
        <div className="mb-16 sm:mb-20 lg:mb-24">
          <h2 className="text-[56px] font-semibold leading-[0.95] tracking-tight text-black sm:text-[90px] lg:text-[144px] lg:leading-[0.92] lg:tracking-[-0.06em]">
            Experiences.
          </h2>
          <p className="mt-4 text-sm text-black/40">©2025</p>
        </div>

        {/* Cards */}
        <div className="grid grid-cols-1 gap-4 max-[809px]:grid-cols-2 min-[810px]:grid-cols-4">
          {/* Card 1: brand */}
          <FadeInCard index={0} className="bg-white">
            <p className="mb-6 text-lg font-medium text-black">fabrica&reg;</p>

            <div className="mb-4 flex items-center">
              {AVATAR_STACK.map((src, i) => (
                <span
                  key={src}
                  className={cn(
                    "relative h-8 w-8 overflow-hidden rounded-full border-2 border-white",
                    i > 0 && "-ml-2",
                  )}
                >
                  <Image src={src} alt="" fill sizes="32px" className="object-cover" />
                </span>
              ))}
              <span className="-ml-2 flex h-8 w-8 items-center justify-center rounded-full border-2 border-white bg-black text-[10px] font-medium text-white">
                56+
              </span>
            </div>

            <StarRow className="mb-2" />

            <p className="mb-6 text-sm text-black/60">
              <span className="text-black/40">Trusted by</span>{" "}
              <span className="text-black/70">clients worldwide</span>
            </p>

            <button
              type="button"
              className="w-full rounded-full bg-black px-7 py-3.5 text-sm font-medium text-white transition-colors hover:bg-black/85"
            >
              Leave a review
            </button>
          </FadeInCard>

          {/* Card 2: quote */}
          <FadeInCard index={1} className="bg-white">
            <p className="text-[22px] font-medium leading-[1.3] text-black sm:text-[26px]">
              Incredible team! They delivered exactly what we needed, on time and beyond
              expectations.
            </p>
          </FadeInCard>

          {/* Card 3: person */}
          <FadeInCard index={2} className="bg-white">
            <div className="mb-5 flex items-start justify-between">
              <StarRow />
              <PlusBadgeIcon className="h-7 w-7 text-black/30" />
            </div>

            <div className="relative mb-6 min-h-[160px] flex-1 overflow-hidden rounded-2xl">
              <Image
                src={EMILY_DAVIS_PHOTO}
                alt="Emily Davis"
                fill
                sizes="(min-width: 810px) 25vw, 50vw"
                className="object-cover grayscale"
              />
            </div>

            <p className="text-base font-medium text-black">Emily Davis</p>
            <p className="text-sm text-black/50">StartUp Hub</p>
          </FadeInCard>

          {/* Card 4: quote */}
          <FadeInCard index={3} className="bg-white">
            <p className="text-[22px] font-medium leading-[1.3] text-black sm:text-[26px]">
              Our new branding is exactly what we envisioned&mdash;clean, modern, and unique. #1
              in our industry.
            </p>
          </FadeInCard>
        </div>
      </div>
    </section>
  );
}

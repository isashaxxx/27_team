"use client";

import { useEffect, useRef, useState } from "react";
import Image from "next/image";
import { cn } from "@/lib/utils";
import { PlusBadgeIcon } from "../shared/icons";

const IMAGE_BASE = "/sites/fabrica-framer-media-fe96c5e9/root-8a5edab2/images";

/** Fades an element up into view the first time it enters the viewport. */
function useFadeUpOnView<T extends HTMLElement>() {
  const ref = useRef<T | null>(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const node = ref.current;
    if (!node) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.15 },
    );

    observer.observe(node);
    return () => observer.disconnect();
  }, []);

  return { ref, visible };
}

function FadeUp({
  className,
  delayMs = 0,
  children,
}: {
  className?: string;
  delayMs?: number;
  children: React.ReactNode;
}) {
  const { ref, visible } = useFadeUpOnView<HTMLDivElement>();

  return (
    <div
      ref={ref}
      className={cn(
        "transition-[opacity,transform] duration-500 ease-out",
        visible ? "translate-y-0 opacity-100" : "translate-y-5 opacity-0",
        className,
      )}
      style={{ transitionDelay: `${delayMs}ms` }}
    >
      {children}
    </div>
  );
}

const CLIENT_LOGOS = [
  { src: `${IMAGE_BASE}/m9cv2Bx2sImOjy4Q3x1Fk5d5WGM.svg`, alt: "Client logo" },
  { src: `${IMAGE_BASE}/CtaV2dn3ujpK8zv0Py3i9IJArPQ.svg`, alt: "Client logo" },
  { src: `${IMAGE_BASE}/wk98ext8C9l414fS0PK6BvjTA.svg`, alt: "Client logo" },
];

export function WhyChooseCta({ className }: { className?: string }) {
  return (
    <section
      className={cn(
        "mx-1.5 rounded-t-[25px] bg-[#0a0a0a] px-6 py-16 sm:mx-2 sm:px-9 sm:py-20 lg:py-[90px]",
        className,
      )}
    >
      {/* Photos */}
      <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 sm:gap-6">
        <FadeUp className="relative aspect-[4/3] overflow-hidden rounded-2xl sm:aspect-square">
          <Image
            src={`${IMAGE_BASE}/HlvuJF9yIQ3Q8fP86EjFIq5ExE.jpg`}
            alt="Bird in flight, black and white"
            fill
            sizes="(min-width: 810px) 50vw, 100vw"
            className="object-cover grayscale"
          />
        </FadeUp>
        <FadeUp
          delayMs={100}
          className="relative aspect-[4/3] overflow-hidden rounded-2xl sm:aspect-square"
        >
          <Image
            src={`${IMAGE_BASE}/KL17tuoYHz5TzXCqskqaMY5Iw0.jpg`}
            alt="Portrait in a puffer jacket hood, black and white"
            fill
            sizes="(min-width: 810px) 50vw, 100vw"
            className="object-cover grayscale"
          />
        </FadeUp>
      </div>

      {/* Eyebrow + heading */}
      <div className="mt-14 sm:mt-20 lg:mt-24">
        <FadeUp className="flex items-center gap-2.5">
          <PlusBadgeIcon className="h-6 w-6 text-white/60" />
          <span className="text-sm text-white/60 sm:text-[15px]">Why choose us</span>
        </FadeUp>

        <FadeUp delayMs={80} className="mt-6 max-w-4xl">
          <h2>
            <span className="text-[36px] font-semibold leading-[1.05] tracking-[-0.03em] text-white sm:text-[48px] lg:text-[60px] lg:tracking-[-0.06em]">
              Proven results for every project,{" "}
            </span>
            <span className="text-[36px] font-semibold leading-[1.05] tracking-[-0.03em] text-white/60 sm:text-[48px] lg:text-[60px] lg:tracking-[-0.06em]">
              with a focus on design and functionality.
            </span>
          </h2>
        </FadeUp>
      </div>

      {/* Button + stats cluster */}
      <div className="mt-12 flex flex-col items-start gap-8 sm:mt-16 lg:mt-20 lg:flex-row lg:items-end lg:justify-between">
        <FadeUp delayMs={120} className="order-2 lg:order-1 lg:pb-6">
          <button
            type="button"
            className="rounded-full bg-white px-8 py-4 text-[15px] font-medium text-black transition-transform duration-200 ease-out hover:scale-[1.03] sm:px-10 sm:py-5 sm:text-base"
          >
            Get started
          </button>
        </FadeUp>

        <FadeUp
          delayMs={160}
          className="relative order-1 w-full overflow-hidden rounded-2xl lg:order-2 lg:w-[640px]"
        >
          <div className="relative aspect-[16/10] w-full sm:aspect-[16/8]">
            <Image
              src={`${IMAGE_BASE}/vrhxHFTuxnCduP4nljUulqZcuQ.jpg`}
              alt=""
              fill
              sizes="(min-width: 1024px) 640px, 100vw"
              className="object-cover"
            />

            <div className="absolute inset-0 flex flex-col justify-end gap-3 p-3 sm:flex-row sm:items-end sm:gap-4 sm:p-4">
              <div className="flex-1 rounded-2xl bg-white p-5 sm:p-6">
                <p className="text-lg font-semibold text-black">50+ Projects completed</p>
                <p className="mt-3 text-sm text-black/50">
                  We&apos;ve delivered 50+ projects that help companies generate real results.
                </p>
              </div>

              <div className="flex-1 rounded-2xl bg-white p-5 sm:p-6">
                <p className="text-lg font-semibold text-black">98% Client satisfaction rate</p>
                <div className="mt-6 flex items-center gap-4 sm:mt-8">
                  {CLIENT_LOGOS.map((logo, i) => (
                    <Image
                      key={i}
                      src={logo.src}
                      alt={logo.alt}
                      width={72}
                      height={20}
                      className="h-4 w-auto opacity-70 sm:h-5"
                    />
                  ))}
                </div>
              </div>
            </div>
          </div>
        </FadeUp>
      </div>
    </section>
  );
}

"use client";

import { useEffect, useRef, useState } from "react";
import Image from "next/image";
import { cn } from "@/lib/utils";
import { PlusBadgeIcon, StarIcon } from "../shared/icons";

const IMAGE_BASE = "/sites/fabrica-framer-media-fe96c5e9/root-8a5edab2/images";

/**
 * Fades an element in and slides it up slightly once it scrolls into view.
 * Self-contained (no shared hooks directory entry yet) so this component
 * stays drop-in portable.
 */
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

/** Faint nested concentric-circle rings used as decorative background chrome. */
function RingsDecoration({ className }: { className?: string }) {
  const sizes = [520, 400, 280, 160];
  return (
    <div aria-hidden className={cn("pointer-events-none absolute", className)}>
      {sizes.map((size) => (
        <div
          key={size}
          className="absolute rounded-full border border-black/[0.06]"
          style={{
            width: size,
            height: size,
            top: "50%",
            left: "50%",
            transform: "translate(-50%, -50%)",
          }}
        />
      ))}
    </div>
  );
}

/** Circular Pagespeed gauge rendered as an SVG progress ring. */
function PagespeedGauge() {
  const size = 110;
  const strokeWidth = 8;
  const radius = (size - strokeWidth) / 2;
  const circumference = 2 * Math.PI * radius;
  const progress = 0.95;
  const dashOffset = circumference * (1 - progress);

  return (
    <div className="relative flex h-[110px] w-[110px] shrink-0 items-center justify-center">
      <svg width={size} height={size} viewBox={`0 0 ${size} ${size}`} className="-rotate-90">
        <circle
          cx={size / 2}
          cy={size / 2}
          r={radius}
          fill="none"
          stroke="currentColor"
          strokeWidth={strokeWidth}
          className="text-black/[0.08]"
        />
        <circle
          cx={size / 2}
          cy={size / 2}
          r={radius}
          fill="none"
          stroke="currentColor"
          strokeWidth={strokeWidth}
          strokeLinecap="round"
          strokeDasharray={circumference}
          strokeDashoffset={dashOffset}
          className="text-neutral-900"
        />
      </svg>
      <span className="absolute text-2xl font-semibold leading-none tracking-tight text-neutral-950">
        100
      </span>
    </div>
  );
}

const CHART_BARS = [
  { month: "Dec", value: "+1k", h: 40 },
  { month: "Jan", value: "+1.3k", h: 56 },
  { month: "Feb", value: "+1.1k", h: 48 },
  { month: "Feb", value: "+1.5k", h: 68 },
  { month: "Feb", value: "+2.3k", h: 84 },
  { month: "Mar", value: "+5.9k", h: 108 },
] as const;

/** Monthly quarterly-visits bar chart; last bar is the highlighted/dark one. */
function QuarterlyVisitsChart() {
  return (
    <div className="flex flex-1 items-end justify-between gap-2">
      {CHART_BARS.map((bar, i) => {
        const isLast = i === CHART_BARS.length - 1;
        return (
          <div key={`${bar.month}-${i}`} className="flex flex-col items-center gap-2">
            <div
              className={cn(
                "flex w-8 items-start justify-center rounded-full pt-2 text-[10px] font-semibold",
                isLast ? "bg-neutral-950 text-white" : "bg-neutral-100 text-neutral-950",
              )}
              style={{ height: bar.h, writingMode: "vertical-rl" }}
            >
              {bar.value}
            </div>
            <span className="text-xs text-neutral-400">{bar.month}</span>
          </div>
        );
      })}
    </div>
  );
}

export function CaseStudyStats() {
  const { ref, isVisible } = useScrollFadeIn<HTMLDivElement>();

  return (
    <section className="bg-[#f5f5f5] px-6 py-24 md:px-10 lg:py-32">
      <div className="mx-auto max-w-[1320px]">
        <div className="grid grid-cols-1 gap-x-8 gap-y-6 md:grid-cols-[minmax(0,260px)_1fr]">
          <div>
            <div className="flex items-center gap-2 text-black">
              <span className="text-[15px] font-medium">fabrica®</span>
            </div>
            <p className="mt-4 max-w-[240px] text-[15px] leading-relaxed text-neutral-500">
              Every project we take on is designed for long-term success.
            </p>
          </div>
          <div>
            <h2 className="text-[24px] font-medium leading-[1.2] tracking-[-0.03em] text-neutral-950 sm:text-[28px] lg:text-[30px] lg:tracking-[-0.04em]">
              <span className="text-neutral-400">Our approach is simple:</span>{" "}
              we focus on functionality, speed, and clarity, ensuring that
              every project serves a clear purpose without unnecessary
              complexity.
            </h2>
            <p className="mt-6 max-w-[520px] text-[15px] leading-relaxed text-neutral-500 sm:text-base">
              We don&apos;t overpromise or use flashy marketing language. We
              simply build well-designed, functional websites and strategies
              that help businesses succeed.
            </p>
          </div>
        </div>

        <div
          ref={ref}
          className={cn(
            "mt-16 grid grid-cols-1 gap-5 transition-all duration-700 ease-out md:mt-20 lg:grid-cols-4",
            isVisible ? "translate-y-0 opacity-100" : "translate-y-8 opacity-0",
          )}
        >
          {/* Case study card */}
          <div className="relative flex aspect-[4/5] flex-col overflow-hidden rounded-[20px] bg-[#0a0a0a] sm:aspect-[16/10] lg:col-span-2 lg:aspect-auto">
            <Image
              src={`${IMAGE_BASE}/2tiQFkd5S2BAWIEShaSCdLTiY.jpg`}
              alt="Case study client portrait"
              fill
              sizes="(min-width: 1024px) 50vw, 100vw"
              className="object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/10 to-transparent" />

            <div className="relative z-10 flex items-start justify-between p-6 sm:p-8">
              <div>
                <p className="text-sm text-white/90">Case study</p>
                <p className="mt-1 text-sm text-white/50">
                  UX/UI Redesign, Frontend Optimization.
                </p>
              </div>
              <PlusBadgeIcon className="h-9 w-9 shrink-0 text-white/90" />
            </div>

            <div className="pointer-events-none absolute inset-x-0 bottom-[92px] select-none overflow-hidden sm:bottom-[110px]">
              <span className="block w-fit whitespace-nowrap px-6 text-[64px] font-semibold leading-none tracking-[-0.06em] text-white sm:px-8 sm:text-[68px] lg:text-[78px]">
                fabrica®
              </span>
            </div>

            <div className="relative z-10 mt-auto flex items-end justify-between gap-4 p-6 sm:p-8">
              <div>
                <p className="text-lg leading-tight font-semibold text-white sm:text-xl">
                  From branding to web
                </p>
                <p className="text-lg leading-tight font-semibold text-white/50 sm:text-xl">
                  development and marketing
                </p>
                <a
                  href="#"
                  className="mt-3 inline-flex items-center gap-1.5 text-sm text-white/80 underline-offset-2 hover:underline"
                >
                  Live website
                  <span aria-hidden>↗</span>
                </a>
              </div>
              <p className="shrink-0 text-sm text-white/40">We do it all.</p>
            </div>
          </div>

          {/* Performance stat card */}
          <div className="relative flex flex-col overflow-hidden rounded-[20px] bg-white p-6 sm:p-8">
            <RingsDecoration className="top-1/3 right-0 h-[520px] w-[520px] translate-x-1/3 -translate-y-1/2" />

            <div className="relative z-10 flex flex-col gap-8">
              <div>
                <p className="text-sm text-neutral-500">Performance Boost:</p>
                <p className="mt-2 text-[28px] leading-[1.15] font-semibold tracking-tight text-neutral-950 sm:text-[34px]">
                  Page speed +48%, Bounce rate -23%
                </p>
              </div>

              <div>
                <p className="text-sm text-neutral-500">
                  Conversion Rate Improvement:
                </p>
                <p className="mt-2 text-[28px] leading-[1.15] font-semibold tracking-tight text-neutral-950 sm:text-[34px]">
                  4.2% → 5.9%
                </p>
              </div>
            </div>

            <div className="relative z-10 mt-10">
              <div className="flex items-center gap-1">
                {Array.from({ length: 5 }).map((_, i) => (
                  <StarIcon key={i} className="h-4 w-4 text-amber-500" />
                ))}
              </div>
              <p className="mt-3 text-base text-neutral-700">
                &ldquo;Thanks to the redesign, we&apos;ve seen a steady 60%
                increase in leads.&rdquo;
              </p>
              <div className="mt-4 flex items-center gap-2.5">
                <Image
                  src={`${IMAGE_BASE}/mARXSQIQaDhUf6ZRpDnRzU235g.jpg`}
                  alt="Angela Smith"
                  width={24}
                  height={24}
                  className="rounded-full object-cover"
                />
                <span className="text-sm font-medium text-neutral-950">
                  Angela Smith
                </span>
              </div>
            </div>
          </div>

          {/* Pagespeed gauge + quarterly visits chart */}
          <div className="flex flex-col gap-5">
            <div className="flex items-center gap-6 rounded-[20px] bg-white p-6 text-left sm:p-8">
              <PagespeedGauge />
              <div>
                <p className="text-base font-medium text-neutral-950">
                  Pagespeed score
                </p>
                <p className="mt-2 text-sm leading-relaxed text-neutral-500">
                  We prioritize performance without sacrificing visual appeal
                  or functionality.
                </p>
              </div>
            </div>

            <div className="flex flex-1 flex-col rounded-[20px] bg-white p-6 sm:p-8">
              <div className="flex items-baseline gap-2">
                <span className="text-3xl font-semibold tracking-tight text-neutral-950">
                  38K
                </span>
                <span className="rounded-full bg-neutral-100 px-2.5 py-1 text-xs font-medium text-neutral-600">
                  +30%
                </span>
              </div>
              <p className="mt-1 text-sm text-neutral-500">Quarterly visits</p>
              <div className="mt-6 min-h-[110px]">
                <QuarterlyVisitsChart />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

"use client";

import { useEffect, useRef, useState } from "react";
import Image from "next/image";
import { cn } from "@/lib/utils";

const IMAGE_BASE =
  "/sites/fabrica-framer-media-fe96c5e9/root-8a5edab2/images";

interface LaunchCard {
  index: string;
  dotsFilled: number;
  photo: string;
  title: string;
}

const CARDS: LaunchCard[] = [
  {
    index: "01",
    dotsFilled: 1,
    photo: `${IMAGE_BASE}/8qCqC2OsD0HTVtpCDKLzJGcjwUo.jpg`,
    title: "The team that communicates every step",
  },
  {
    index: "02",
    dotsFilled: 2,
    photo: `${IMAGE_BASE}/je5LkQxtlpMk3QwDVyGCYFiOugM.jpg`,
    title: "Customized solutions for your unique needs",
  },
  {
    index: "03",
    dotsFilled: 3,
    photo: `${IMAGE_BASE}/lEZwltTi9mwoiWVW7KioGvSAOLk.jpg`,
    title: "Transparent pricing with no hidden fees",
  },
  {
    index: "04",
    dotsFilled: 4,
    photo: `${IMAGE_BASE}/xcjrZRfVBa6b3ruwbNh8aIRdak.jpg`,
    title: "Proven track record with measurable results",
  },
];

function useFadeUpOnScroll<T extends HTMLElement>() {
  const ref = useRef<T | null>(null);
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
      { threshold: 0.15 },
    );

    observer.observe(node);
    return () => observer.disconnect();
  }, []);

  return { ref, isVisible };
}

function DotProgress({ filled }: { filled: number }) {
  return (
    <div className="flex items-center gap-1">
      {Array.from({ length: 4 }).map((_, i) => (
        <span
          key={i}
          className={cn(
            "h-1.5 w-1.5 rounded-full",
            i < filled ? "bg-black" : "bg-black/15",
          )}
        />
      ))}
    </div>
  );
}

function LaunchCardItem({ card }: { card: LaunchCard }) {
  return (
    <div className="flex min-h-[140px] flex-col justify-between rounded-2xl bg-white p-6">
      <div className="flex items-start justify-between">
        <DotProgress filled={card.dotsFilled} />
        <span className="text-sm text-black/40">{card.index}</span>
      </div>

      <div className="flex items-center gap-4">
        <div className="relative h-14 w-14 shrink-0 overflow-hidden rounded-xl">
          <Image
            src={card.photo}
            alt=""
            fill
            sizes="56px"
            className="object-cover"
          />
        </div>
        <h3 className="text-base leading-tight font-semibold text-black">
          {card.title}
        </h3>
      </div>
    </div>
  );
}

export function HowWeLaunch() {
  const { ref, isVisible } = useFadeUpOnScroll<HTMLDivElement>();

  return (
    <section className="bg-[#f5f5f5] px-6 py-24 md:px-12 lg:px-20">
      <div className="mx-auto max-w-[1280px]">
        <h2 className="max-w-[900px] text-4xl leading-[1.05] font-semibold tracking-[-0.03em] text-balance sm:text-5xl lg:text-[60px]">
          <span className="text-black">How we launch </span>
          <span className="text-black/40">
            websites and marketing campaigns.
          </span>
        </h2>

        <p className="mt-6 max-w-[450px] text-lg font-medium text-black/40">
          See how our team combines creativity, technology, and strategy to
          build powerful digital solutions.
        </p>

        <div
          ref={ref}
          className={cn(
            "mt-14 grid grid-cols-1 gap-4 transition-all duration-500 ease-out sm:grid-cols-2 lg:grid-cols-4 lg:gap-5",
            isVisible
              ? "translate-y-0 opacity-100"
              : "translate-y-6 opacity-0",
          )}
        >
          {CARDS.map((card) => (
            <LaunchCardItem key={card.index} card={card} />
          ))}
        </div>
      </div>
    </section>
  );
}

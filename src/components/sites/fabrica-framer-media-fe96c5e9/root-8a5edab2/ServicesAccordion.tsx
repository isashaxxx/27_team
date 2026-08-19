"use client";

import { useState } from "react";
import { cn } from "@/lib/utils";
import { PlusBadgeIcon } from "../shared/icons";

interface ServiceItem {
  index: string;
  title: string;
  description: string;
  tags?: string[];
}

const SERVICES: ServiceItem[] = [
  {
    index: "001",
    title: "Web design and development",
    description:
      "Modern, responsive, and user-friendly websites designed to engage visitors and drive conversions.",
    tags: ["Typography", "Guidelines", "Visual identity", "6+"],
  },
  {
    index: "002",
    title: "Social media marketing",
    description:
      "Grow your audience and engagement with strategic, on-brand social content.",
  },
  {
    index: "003",
    title: "SEO and content marketing",
    description:
      "Improve visibility and rankings with research-backed SEO and content strategy.",
  },
  {
    index: "004",
    title: "Branding and identity",
    description:
      "Build a distinct, memorable brand identity across every touchpoint.",
  },
];

export function ServicesAccordion() {
  const [openIndex, setOpenIndex] = useState<number>(0);

  return (
    <section className="mx-1.5 rounded-b-[25px] bg-[#0a0a0a] px-6 py-16 sm:mx-2 md:px-12 md:py-24">
      <div className="mx-auto max-w-[1320px]">
        <div className="mb-10 flex items-center justify-between md:mb-16">
          <span className="text-sm text-white/50">What we do</span>
        </div>

        <div className="mb-10 flex items-baseline gap-3 md:mb-16">
          <h2 className="text-3xl font-semibold tracking-[-0.03em] text-white md:text-5xl">
            Services.
          </h2>
          <span className="text-3xl font-semibold text-white/40 md:text-5xl">
            ({SERVICES.length})
          </span>
        </div>

        <div>
          {SERVICES.map((service, i) => {
            const isOpen = openIndex === i;
            return (
              <div key={service.index} className="border-t border-white/10">
                <button
                  type="button"
                  onClick={() => setOpenIndex(isOpen ? -1 : i)}
                  className="flex w-full flex-col gap-4 py-8 text-left md:flex-row md:items-center md:gap-8"
                  aria-expanded={isOpen}
                >
                  <span className="text-sm text-white/50 md:w-20 md:shrink-0">
                    ({service.index})
                  </span>

                  <span className="flex-1 text-2xl font-medium tracking-[-0.03em] text-white md:text-[30px] md:tracking-[-0.04em]">
                    {service.title}
                  </span>

                  <span
                    className={cn(
                      "grid transition-[grid-template-rows] duration-300 ease-in-out",
                      isOpen
                        ? "grid-rows-[1fr] md:w-[420px] md:shrink-0"
                        : "grid-rows-[0fr] md:w-0 md:shrink-0",
                    )}
                  >
                    <span className="overflow-hidden">
                      <span className="flex flex-col gap-4 pb-2 pt-1 md:flex-row md:items-center md:justify-between md:gap-4 md:pb-0 md:pt-0">
                        <span className="max-w-[500px] text-base text-white/60 md:text-lg">
                          {service.description}
                        </span>

                        {service.tags && service.tags.length > 0 && (
                          <span className="flex flex-wrap items-center gap-2">
                            {service.tags.map((tag) => (
                              <span
                                key={tag}
                                className="inline-flex items-center rounded-full bg-white/10 px-4 py-2 text-[13px] text-white"
                              >
                                {tag}
                              </span>
                            ))}
                          </span>
                        )}
                      </span>
                    </span>
                  </span>

                  <PlusBadgeIcon
                    className={cn(
                      "h-10 w-10 shrink-0 self-end border-white/30 text-white transition-transform duration-300 ease-in-out md:self-auto",
                      isOpen && "rotate-45",
                    )}
                  />
                </button>
              </div>
            );
          })}
          <div className="border-t border-white/10" />
        </div>

        <div className="mt-12 md:mt-16">
          <button
            type="button"
            className="inline-flex items-center rounded-full bg-white px-10 py-5 text-base font-medium text-black transition-opacity hover:opacity-90"
          >
            Get started
          </button>
        </div>
      </div>
    </section>
  );
}

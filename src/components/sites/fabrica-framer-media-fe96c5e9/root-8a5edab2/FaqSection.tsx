"use client";

import { useState } from "react";
import { cn } from "@/lib/utils";
import { PlusBadgeIcon } from "../shared/icons";

type FaqItem = {
  question: string;
  answer: string;
};

const FAQ_ITEMS: FaqItem[] = [
  {
    question: "How long does it take to build a website?",
    answer:
      "The timeline for building a website depends on its complexity and specific requirements. On average, we'll provide a detailed timeline during the initial consultation to ensure clear expectations.",
  },
  {
    question: "Do you offer custom websites or use templates?",
    answer:
      "We build fully custom websites tailored to your brand and goals — we don't rely on generic templates.",
  },
  {
    question: "What's included in your SEO services?",
    answer:
      "On-page optimization, technical SEO audits, keyword strategy, and ongoing content recommendations.",
  },
  {
    question: "How does the monthly subscription model work?",
    answer:
      "You pay a flat monthly fee that covers hosting, updates, and ongoing design/development support — cancel anytime.",
  },
  {
    question: "Can you redesign my existing website?",
    answer:
      "Yes — we audit your current site and rebuild it with modern design, performance, and conversion best practices.",
  },
  {
    question: "How do I get started?",
    answer:
      "Book a free consultation and we'll put together a tailored plan and timeline for your project.",
  },
];

export function FaqSection() {
  const [openIndices, setOpenIndices] = useState<Set<number>>(new Set([0]));

  const toggleIndex = (index: number) => {
    setOpenIndices((prev) => {
      const next = new Set(prev);
      if (next.has(index)) {
        next.delete(index);
      } else {
        next.add(index);
      }
      return next;
    });
  };

  return (
    <section className="bg-[#f4f4f2] px-6 py-24 md:px-10 lg:px-16">
      <div className="mx-auto flex max-w-[1360px] flex-col gap-12 min-[810px]:flex-row min-[810px]:gap-8">
        <div className="min-[810px]:w-[35%] min-[810px]:shrink-0">
          <h2 className="text-[56px] font-semibold leading-[0.95] tracking-tight text-black sm:text-[90px] lg:text-[144px] lg:leading-[0.92] lg:tracking-[-0.06em]">
            FAQ.
          </h2>
          <p className="mt-6 max-w-md text-base leading-relaxed text-black/60">
            Got questions? We&apos;ve got answers. Here&apos;s everything you
            need to know about working with us.
          </p>
        </div>

        <div className="min-[810px]:w-[60%] min-[810px]:flex-1">
          {FAQ_ITEMS.map((item, index) => {
            const isOpen = openIndices.has(index);
            return (
              <div
                key={item.question}
                className="mb-3 rounded-2xl bg-white px-6 py-7 sm:px-8"
              >
                <button
                  type="button"
                  onClick={() => toggleIndex(index)}
                  aria-expanded={isOpen}
                  className="flex w-full items-center justify-between gap-4 text-left"
                >
                  <span className="text-xl font-semibold text-black">
                    {item.question}
                  </span>
                  <PlusBadgeIcon
                    className={cn(
                      "h-9 w-9 shrink-0 text-black transition-transform duration-300",
                      isOpen && "rotate-45",
                    )}
                  />
                </button>

                <div
                  className="grid transition-[grid-template-rows] duration-300 ease-out"
                  style={{
                    gridTemplateRows: isOpen ? "1fr" : "0fr",
                  }}
                >
                  <div className="overflow-hidden">
                    <p className="mt-4 max-w-[90%] text-base leading-relaxed text-black/60">
                      {item.answer}
                    </p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

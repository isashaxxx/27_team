"use client";

import { useState } from "react";
import { cn } from "@/lib/utils";
import { PlusBadgeIcon } from "../shared/icons";

type BillingPlan = "project" | "monthly";

const BASE_FEATURES = [
  "Homepage + up to 4 inner pages",
  "Design and Development",
  "Mobile-Optimized Design",
];

const MONTHLY_ONLY_FEATURE = "Monthly updates & improvements";

export function PricingSection() {
  const [plan, setPlan] = useState<BillingPlan>("project");
  const [addonOn, setAddonOn] = useState(true);

  const isMonthly = plan === "monthly";
  const price = isMonthly ? "$1,990" : "$2,490";
  const period = isMonthly ? "/month" : "/project";
  const features = isMonthly ? [...BASE_FEATURES, MONTHLY_ONLY_FEATURE] : BASE_FEATURES;

  return (
    <section className="mx-auto max-w-[1512px] px-4 sm:px-6">
      <div className="relative overflow-hidden rounded-[25px] bg-[#0a0a0a] px-6 pb-16 pt-20 sm:px-10 sm:pt-24 md:px-16">
        {/* Eyebrow */}
        <div className="flex items-center gap-2 text-white">
          <PlusBadgeIcon className="h-6 w-6 shrink-0" />
          <span className="text-[15px] font-medium">Simple pricing</span>
        </div>

        {/* Giant heading */}
        <h2 className="mt-6 text-[64px] font-semibold leading-[0.95] tracking-tight text-white sm:text-[100px] lg:text-[144px] lg:leading-[0.92] lg:tracking-[-0.06em]">
          Pricing.
        </h2>

        {/* Billing toggle */}
        <div className="mt-12 flex justify-center sm:mt-16">
          <div className="relative inline-flex items-center rounded-full bg-white/10 p-1">
            <div
              className={cn(
                "absolute top-1 bottom-1 left-1 w-[calc(50%-4px)] rounded-full bg-white transition-transform duration-250 ease-out",
                isMonthly && "translate-x-full",
              )}
              style={{ transitionDuration: "250ms" }}
              aria-hidden
            />
            <button
              type="button"
              onClick={() => setPlan("project")}
              className={cn(
                "relative z-10 rounded-full px-6 py-2.5 text-[15px] font-medium transition-colors duration-200",
                !isMonthly ? "text-black" : "text-white/50",
              )}
            >
              Per project
            </button>
            <button
              type="button"
              onClick={() => setPlan("monthly")}
              className={cn(
                "relative z-10 rounded-full px-6 py-2.5 text-[15px] font-medium transition-colors duration-200",
                isMonthly ? "text-black" : "text-white/50",
              )}
            >
              Monthly
            </button>
          </div>
        </div>

        {/* Price card */}
        <div className="mt-12 grid grid-cols-1 gap-10 rounded-[20px] border border-white/10 bg-white/[0.03] p-8 sm:mt-16 md:grid-cols-[1fr_1.1fr_1fr] md:gap-8 md:p-10">
          {/* Left: description */}
          <div className="flex flex-col justify-center">
            <p className="text-[22px] font-medium leading-tight text-white">
              Want more traffic and leads?
            </p>
            <p className="mt-3 text-[16px] leading-snug text-white/50">
              Get marketing and SEO that starts with your goals.
            </p>
          </div>

          {/* Middle: price + features */}
          <div className="flex flex-col justify-center border-white/10 md:border-x md:px-8">
            <div className="flex items-baseline gap-2">
              <span className="text-[48px] font-semibold leading-none text-white sm:text-[56px]">
                {price}
              </span>
              <span className="text-[16px] text-white/50">{period}</span>
            </div>
            <ul className="mt-6 flex flex-col gap-3">
              {features.map((feature) => (
                <li key={feature} className="flex items-center gap-2.5 text-[16px] text-white">
                  <PlusBadgeIcon className="h-4 w-4 shrink-0" />
                  <span>{feature}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Right: delivery + CTA */}
          <div className="flex flex-col justify-center gap-8">
            <div className="flex items-center justify-between border-b border-white/10 pb-4 text-[15px]">
              <span className="text-white/50">Delivery time</span>
              <span className="text-white">Ongoing</span>
            </div>
            <button
              type="button"
              className="w-full rounded-full bg-white px-8 py-4 text-center text-[15px] font-medium text-black transition-opacity hover:opacity-90"
            >
              Get in touch
            </button>
          </div>
        </div>

        {/* Add-on line */}
        <div className="mt-6 flex items-center gap-3">
          <span className="text-[18px] font-medium text-white">+$590</span>
          <button
            type="button"
            role="switch"
            aria-checked={addonOn}
            onClick={() => setAddonOn((v) => !v)}
            className={cn(
              "relative h-7 w-12 shrink-0 rounded-full transition-colors duration-200",
              addonOn ? "bg-white/20" : "bg-white/10",
            )}
          >
            <span
              className={cn(
                "absolute top-1 left-1 h-5 w-5 rounded-full bg-white transition-transform duration-200 ease-out",
                addonOn && "translate-x-5",
              )}
            />
          </button>
        </div>

        {/* Looking for more */}
        <div className="mt-24 grid grid-cols-1 gap-6 sm:mt-32 md:grid-cols-[1fr_2fr]">
          <div className="flex items-center gap-2 text-white/50">
            <span className="text-[15px] font-medium">Looking for more?</span>
          </div>
          <div>
            <p className="text-[22px] leading-snug sm:text-[24px]">
              <span className="font-medium text-white">
                Add marketing, SEO, or content creation—
              </span>
              <span className="font-medium text-white/60">
                flexible tools to strengthen your project. We&rsquo;ll shape a solution that fits
                your business, not ours.
              </span>
            </p>
            <div className="mt-8 flex items-center gap-3">
              <div className="h-10 w-10 shrink-0 rounded-full bg-white/10" aria-hidden />
              <div>
                <p className="text-[14px] font-medium text-white">George Stern</p>
                <p className="text-[13px] text-white/50">Client Success Manager</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

import Image from "next/image";
import { cn } from "@/lib/utils";
import { CrossMarkIcon } from "../shared/icons";

const SERVICES = [
  "Branding and Identity",
  "Social Media Marketing",
  "Web Design and Development",
  "SEO Optimization",
] as const;

export function HeroSection() {
  return (
    <section className="pt-[76px]">
      <div className="relative mx-1.5 min-h-[560px] overflow-hidden rounded-[25px] px-6 py-16 sm:min-h-[700px] sm:mx-2 md:min-h-[830px] md:px-9 md:py-[90px]">
        {/* Background video */}
        <video
          autoPlay
          loop
          muted
          playsInline
          className="absolute inset-0 h-full w-full object-cover"
        >
          <source
            src="/sites/fabrica-framer-media-fe96c5e9/root-8a5edab2/videos/G0NwzP4bivPvK55b3ubxNslUs.mp4"
            type="video/mp4"
          />
        </video>
        {/* Dark overlay for text legibility */}
        <div className="absolute inset-0 bg-black/75" />

        {/* Content */}
        <div className="relative z-10 flex h-full min-h-[500px] flex-col justify-between gap-10 md:min-h-[650px]">
          <div className="flex flex-col gap-8 md:flex-row md:items-start md:justify-between">
            {/* Wordmark */}
            <div>
              <div className="flex items-center">
                <h1
                  className={cn(
                    "font-sans text-6xl leading-[0.9] font-semibold tracking-[-0.06em] text-white",
                    "sm:text-8xl",
                    "lg:text-[263px] lg:leading-[0.92] lg:tracking-[-0.06em]",
                  )}
                >
                  fabrica
                </h1>
                <span
                  className={cn(
                    "ml-2 flex shrink-0 items-center justify-center rounded-full border-2 border-white text-white",
                    "h-10 w-10 text-base sm:h-16 sm:w-16 sm:text-xl",
                    "lg:h-[120px] lg:w-[120px] lg:text-[56px]",
                  )}
                >
                  R
                </span>
              </div>
              <p
                className={cn(
                  "mt-2 font-sans text-3xl font-semibold tracking-[-0.02em] text-white",
                  "sm:text-5xl sm:tracking-[-3.6px]",
                  "lg:text-[66px] lg:translate-x-[592px] lg:tracking-[-0.06em]",
                )}
              >
                Studio
              </p>
            </div>

            {/* Services list */}
            <ul className="flex flex-col gap-2 text-left md:text-right">
              {SERVICES.map((service) => (
                <li
                  key={service}
                  className="text-lg font-semibold tracking-[-0.04em] text-white"
                >
                  {service}
                </li>
              ))}
            </ul>
          </div>

          {/* Decorative cross marks */}
          <div className="hidden items-center justify-between px-1 sm:flex">
            <CrossMarkIcon className="h-4 w-4 text-white/40" />
            <CrossMarkIcon className="h-4 w-4 text-white/40" />
            <CrossMarkIcon className="h-4 w-4 text-white/40" />
            <CrossMarkIcon className="h-4 w-4 text-white/40" />
          </div>

          {/* Bottom row: tagline + floating card */}
          <div className="flex flex-col items-start gap-8 md:flex-row md:items-end md:justify-between">
            <p className="max-w-[520px] text-xl font-medium text-white/60">
              <span className="font-semibold text-white">
                No generic websites. No empty marketing promises.
              </span>{" "}
              Just tools and strategies that help your business grow and your
              brand shine.
            </p>

            <div className="flex w-full flex-col items-center gap-4 md:w-auto md:items-end">
              {/* Floating Team Lead card */}
              <div className="flex w-full max-w-[360px] items-stretch overflow-hidden rounded-2xl bg-white md:w-auto">
                <Image
                  src="/sites/fabrica-framer-media-fe96c5e9/root-8a5edab2/images/XBirhPxPnqDiGkAtvDrRCiK4pS8.jpg"
                  alt="Lauren Thompson, Team Lead at fabrica Studio"
                  width={130}
                  height={180}
                  priority
                  className="h-[180px] w-[130px] shrink-0 rounded-l-2xl object-cover"
                />
                <div className="flex flex-1 flex-col justify-between gap-3 p-4">
                  <div>
                    <p className="text-xs font-medium text-black/50">
                      Team Lead
                    </p>
                    <p className="text-xs font-medium text-black/35">
                      at fabrica®
                    </p>
                    <p className="mt-1 text-xl font-semibold text-black">
                      Lauren Thompson
                    </p>
                  </div>
                  <button
                    type="button"
                    className="flex w-fit items-center gap-2 rounded-full bg-black py-2 pr-2 pl-4 text-sm text-white"
                  >
                    Let&apos;s talk
                    <span className="h-2 w-2 rounded-full bg-white" />
                  </button>
                </div>
              </div>

              {/* Copyright */}
              <p className="text-sm text-white/70">
                © 2025 fabrica® Studio
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

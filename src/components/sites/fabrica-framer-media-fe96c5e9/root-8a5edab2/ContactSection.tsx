"use client";

import Image from "next/image";
import { cn } from "@/lib/utils";
import { MessageCircle, ListChecks } from "lucide-react";

const ASSET_BASE = "/sites/fabrica-framer-media-fe96c5e9/root-8a5edab2";

const infoRows = [
  {
    icon: MessageCircle,
    title: "Quick response.",
    description:
      "If you're ready to create and collaborate, we'd love to hear from you.",
  },
  {
    icon: ListChecks,
    title: "Clear next steps.",
    description:
      "After the consultation, we'll provide you with a detailed plan and timeline.",
  },
];

export function ContactSection({ className }: { className?: string }) {
  function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
  }

  return (
    <section
      className={cn(
        "relative mx-auto w-full max-w-[1400px] px-4 py-6 sm:px-6",
        className
      )}
    >
      <div className="relative overflow-hidden rounded-[25px] bg-black">
        <video
          className="absolute inset-0 h-full w-full object-cover"
          autoPlay
          loop
          muted
          playsInline
          preload="none"
        >
          <source
            src={`${ASSET_BASE}/videos/G0NwzP4bivPvK55b3ubxNslUs.mp4`}
            type="video/mp4"
          />
        </video>
        <div className="absolute inset-0 bg-black/60" />

        <div className="relative z-10 grid grid-cols-1 gap-10 p-6 sm:p-10 [@media(min-width:810px)]:grid-cols-2 [@media(min-width:810px)]:gap-12 [@media(min-width:810px)]:p-16">
          {/* Form card */}
          <div className="flex flex-col justify-between">
            <div className="rounded-[25px] bg-white p-8">
              <form onSubmit={handleSubmit} className="flex flex-col gap-4">
                <input
                  type="text"
                  name="name"
                  placeholder="Name"
                  className="w-full rounded-xl bg-[#f5f5f5] px-4 py-4 text-sm text-black placeholder:text-neutral-400 outline-none ring-0 transition focus:bg-neutral-100 focus:ring-2 focus:ring-black/10"
                />
                <input
                  type="email"
                  name="email"
                  placeholder="Email"
                  className="w-full rounded-xl bg-[#f5f5f5] px-4 py-4 text-sm text-black placeholder:text-neutral-400 outline-none ring-0 transition focus:bg-neutral-100 focus:ring-2 focus:ring-black/10"
                />
                <textarea
                  name="message"
                  placeholder="Your message"
                  rows={4}
                  className="w-full resize-none rounded-xl bg-[#f5f5f5] px-4 py-4 text-sm text-black placeholder:text-neutral-400 outline-none ring-0 transition focus:bg-neutral-100 focus:ring-2 focus:ring-black/10"
                />
                <button
                  type="submit"
                  className="mt-2 w-full rounded-xl bg-black py-[18px] text-sm font-medium text-white transition hover:bg-neutral-800"
                >
                  Send Message
                </button>
                <p className="mt-1 text-xs text-neutral-500">
                  By submitting, you agree to our{" "}
                  <a href="#" className="underline underline-offset-2">
                    Terms
                  </a>{" "}
                  and{" "}
                  <a href="#" className="underline underline-offset-2">
                    Privacy Policy.
                  </a>
                </p>
              </form>
            </div>

            <p className="mt-8 text-sm text-white/70 [@media(min-width:810px)]:mt-0">
              &copy; 2025 fabrica&reg; Studio
            </p>
          </div>

          {/* Info rows + team card */}
          <div className="flex flex-col gap-10">
            <div className="grid grid-cols-1 gap-8 sm:grid-cols-2">
              {infoRows.map((row) => (
                <div key={row.title} className="flex flex-col gap-3">
                  <row.icon className="h-5 w-5 text-white" strokeWidth={1.5} />
                  <h3 className="text-lg font-semibold text-white">
                    {row.title}
                  </h3>
                  <p className="text-sm leading-relaxed text-white/60">
                    {row.description}
                  </p>
                </div>
              ))}
            </div>

            {/* Team Lead card */}
            <div className="flex w-full max-w-sm overflow-hidden rounded-[20px] bg-white">
              <div className="relative h-[180px] w-[130px] shrink-0">
                <Image
                  src={`${ASSET_BASE}/images/XBirhPxPnqDiGkAtvDrRCiK4pS8.jpg`}
                  alt="Lauren Thompson, Team Lead at fabrica"
                  fill
                  sizes="130px"
                  className="object-cover"
                />
              </div>
              <div className="flex flex-1 flex-col justify-center gap-3 p-5">
                <div>
                  <p className="text-sm font-medium text-black">Team Lead</p>
                  <p className="text-sm text-neutral-500">at fabrica&reg;</p>
                </div>
                <p className="text-lg font-semibold text-black">
                  Lauren Thompson
                </p>
                <button
                  type="button"
                  className="flex w-fit items-center gap-2 rounded-full bg-black px-4 py-2 text-xs font-medium text-white transition hover:bg-neutral-800"
                >
                  Ask directly
                  <span className="h-1.5 w-1.5 rounded-full bg-white" />
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

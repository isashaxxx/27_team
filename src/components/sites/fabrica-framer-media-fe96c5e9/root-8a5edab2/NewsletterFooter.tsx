"use client";

import { useState, type FormEvent } from "react";
import { Flag } from "lucide-react";
import { cn } from "@/lib/utils";
import { CrossMarkIcon, ArrowUpRightIcon } from "../shared/icons";

const NAV_LINKS = ["Home", "Studio", "Projects", "Blog"] as const;
const SOCIAL_LINKS = ["Twitter", "Instagram", "Dribbble"] as const;

export function NewsletterFooter() {
  const [email, setEmail] = useState("");

  function handleSubscribe(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
  }

  return (
    <footer className="bg-[#f5f5f5]">
      <div className="mx-auto max-w-[1400px] px-6 pt-20 min-[810px]:px-9 min-[810px]:pt-28">
        {/* Newsletter row */}
        <div className="grid grid-cols-1 gap-10 min-[810px]:grid-cols-3">
          <div aria-hidden className="hidden min-[810px]:block" />
          <div className="flex flex-col gap-10 min-[810px]:col-span-2">
            <form
              onSubmit={handleSubscribe}
              className="flex w-full max-w-[380px] items-center justify-between rounded-full bg-black/5 py-1 pr-1 pl-6"
            >
              <input
                type="email"
                required
                value={email}
                onChange={(event) => setEmail(event.target.value)}
                placeholder="Enter your email"
                aria-label="Email address"
                className="w-full min-w-0 bg-transparent text-sm text-black outline-none placeholder:text-black/35"
              />
              <button
                type="submit"
                className="flex shrink-0 items-center gap-2 rounded-full bg-black px-5 py-2.5 text-sm font-medium text-white transition-opacity duration-200 hover:opacity-80"
              >
                Subscribe
                <span className="h-1.5 w-1.5 rounded-full bg-white" />
              </button>
            </form>

            <p className="max-w-[300px] text-[15px] leading-relaxed text-black/40">
              Join our newsletter and stay updated on the latest trends in
              digital design.
            </p>
          </div>
        </div>

        {/* Decorative cross marks */}
        <div className="mt-24 hidden grid-cols-3 items-center min-[810px]:grid">
          <CrossMarkIcon className="h-4 w-4 text-black/15" />
          <CrossMarkIcon className="h-4 w-4 text-black/15" />
          <CrossMarkIcon className="h-4 w-4 text-black/15" />
        </div>

        {/* Contact / Navigation / Social */}
        <div className="mt-16 grid grid-cols-1 gap-12 pb-24 min-[810px]:mt-28 min-[810px]:grid-cols-3 min-[810px]:gap-8 min-[810px]:pb-32">
          <div className="flex flex-col gap-1">
            <span className="text-lg font-medium text-black">
              (312) 555-2468
            </span>
            <a
              href="mailto:hello@fabrica.com"
              className="flex w-fit items-center gap-2 text-lg font-medium text-black transition-opacity duration-200 hover:opacity-60"
            >
              <span className="flex h-5 w-5 shrink-0 items-center justify-center rounded-full border border-black/30">
                <CrossMarkIcon className="h-2.5 w-2.5 text-black/60" />
              </span>
              <span className="underline underline-offset-4">
                hello@fabrica.com
              </span>
            </a>
          </div>

          <div>
            <p className="mb-6 text-[13px] text-black/40">Navigation</p>
            <nav className="flex flex-col gap-3">
              {NAV_LINKS.map((label) => (
                <a
                  key={label}
                  href="#"
                  className="w-fit text-lg font-medium text-black transition-opacity duration-200 hover:opacity-60"
                >
                  {label}
                </a>
              ))}
            </nav>
          </div>

          <div>
            <p className="mb-6 text-[13px] text-black/40">Social</p>
            <nav className="flex flex-col gap-3">
              {SOCIAL_LINKS.map((label) => (
                <a
                  key={label}
                  href="#"
                  className="flex w-fit items-center text-lg font-medium text-black transition-opacity duration-200 hover:opacity-60"
                >
                  {label}
                  <ArrowUpRightIcon className="ml-1 h-3 w-3 -translate-y-1.5 text-black/50" />
                </a>
              ))}
            </nav>
          </div>
        </div>

        {/* Wordmark */}
        <div className="grid grid-cols-1 pb-10 min-[810px]:grid-cols-3 min-[810px]:pb-16">
          <div aria-hidden className="hidden min-[810px]:block" />
          <div className="min-[810px]:col-span-2">
            <h2
              className={cn(
                "w-fit font-sans leading-[0.92] font-semibold tracking-[-0.06em] text-black",
                "text-5xl min-[810px]:text-8xl lg:text-[195px]",
              )}
            >
              fabrica®
            </h2>
            <p
              className={cn(
                "mt-1 font-sans font-semibold tracking-[-0.06em] text-black",
                "text-2xl min-[810px]:text-5xl lg:text-[58px]",
              )}
            >
              Studio
            </p>
          </div>
        </div>
      </div>

      {/* Bottom bar */}
      <div className="flex flex-col gap-4 bg-[#0a0a0a] px-6 py-6 min-[810px]:flex-row min-[810px]:items-center min-[810px]:justify-between min-[810px]:px-9">
        <p className="text-sm text-white/60">
          © 2025 fabrica® Studio. All rights reserved.
        </p>

        <div className="flex flex-wrap items-center gap-x-8 gap-y-2">
          <a
            href="#"
            className="text-sm text-white/70 transition-colors duration-200 hover:text-white"
          >
            Privacy Policy
          </a>
          <a
            href="#"
            className="text-sm text-white/70 transition-colors duration-200 hover:text-white"
          >
            Terms of Service
          </a>
          <span className="flex items-center gap-1.5 text-sm text-white/70">
            <Flag className="h-3.5 w-3.5" strokeWidth={1.75} />
            Built in Framer
          </span>
        </div>

        <p className="text-sm text-white/40">Created by Anatoliy Hrytsenko</p>
      </div>
    </footer>
  );
}

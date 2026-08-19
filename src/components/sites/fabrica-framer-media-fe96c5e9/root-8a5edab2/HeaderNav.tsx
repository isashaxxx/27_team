"use client";

import { useState } from "react";
import { cn } from "@/lib/utils";
import { HamburgerIcon, CloseIcon } from "../shared/icons";

const NAV_LINKS = [
  { label: "Studio", badge: null },
  { label: "Projects", badge: "27" },
  { label: "Blog", badge: null },
  { label: "Contact", badge: null },
] as const;

const OVERLAY_LINKS = ["Home", "Studio", "Projects", "Blog"] as const;

export function HeaderNav() {
  const [menuOpen, setMenuOpen] = useState(false);

  const closeMenu = () => setMenuOpen(false);

  return (
    <>
      <header className="fixed inset-x-0 top-0 z-50 flex items-center justify-between bg-[#f5f5f5] px-9 py-[19px] max-[810px]:px-6">
        <a href="#" className="text-[18px] font-semibold tracking-tight text-black">
          fabrica®
        </a>

        <nav className="flex items-center gap-10 max-[810px]:hidden">
          {NAV_LINKS.map((link) => (
            <a
              key={link.label}
              href="#"
              className="flex items-start gap-0.5 text-[15px] font-medium text-black transition-opacity duration-200 hover:opacity-60"
            >
              {link.label}
              {link.badge && (
                <sup className="text-[10px] font-medium text-gray-400">{link.badge}</sup>
              )}
            </a>
          ))}
        </nav>

        <button
          type="button"
          aria-label={menuOpen ? "Close menu" : "Open menu"}
          aria-expanded={menuOpen}
          onClick={() => setMenuOpen((open) => !open)}
          className="flex h-6 w-6 items-center justify-center text-black"
        >
          {menuOpen ? (
            <CloseIcon className="h-6 w-6" />
          ) : (
            <HamburgerIcon className="h-6 w-6" />
          )}
        </button>
      </header>

      <div
        className={cn(
          "fixed inset-0 z-40 flex flex-col justify-between bg-[#f5f5f5] px-9 py-24 transition-all duration-300 ease-in-out max-[810px]:px-6",
          menuOpen
            ? "pointer-events-auto translate-y-0 opacity-100"
            : "pointer-events-none -translate-y-4 opacity-0",
        )}
      >
        <nav className="flex flex-col gap-2">
          {OVERLAY_LINKS.map((label) => (
            <a
              key={label}
              href="#"
              onClick={closeMenu}
              className="text-[45px] font-semibold leading-tight text-black transition-opacity duration-200 hover:opacity-60 max-[810px]:text-[36px]"
            >
              {label}
            </a>
          ))}
        </nav>

        <div className="flex flex-col gap-6">
          <div className="flex flex-col gap-1">
            <a
              href="#"
              onClick={closeMenu}
              className="text-lg font-medium text-black transition-opacity duration-200 hover:opacity-60"
            >
              (312) 555-2468
            </a>
            <a
              href="#"
              onClick={closeMenu}
              className="text-lg font-medium text-black transition-opacity duration-200 hover:opacity-60"
            >
              hello@fabrica.com
            </a>
          </div>

          <div className="flex items-center gap-6">
            <a
              href="#"
              onClick={closeMenu}
              className="text-sm text-black/60 transition-opacity duration-200 hover:opacity-60"
            >
              Privacy Policy
            </a>
            <a
              href="#"
              onClick={closeMenu}
              className="text-sm text-black/60 transition-opacity duration-200 hover:opacity-60"
            >
              Terms of Service
            </a>
          </div>
        </div>
      </div>
    </>
  );
}

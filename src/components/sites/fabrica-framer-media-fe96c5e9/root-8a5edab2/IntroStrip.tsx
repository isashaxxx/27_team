import Image from "next/image";
import { cn } from "@/lib/utils";
import { PlayIcon } from "../shared/icons";

const ASSET_BASE = "/sites/fabrica-framer-media-fe96c5e9/root-8a5edab2/images";

const LOGOS = [
  "2e9rGrOkACVfd78cX0SzqLLw.svg",
  "uwiCTWkuPCOpiACYPmBnkQDV8KA.svg",
  "qMtwqqlLyy1I0xtlJx1nQvCqsE.svg",
  "IjvOxnf94qc0W01TH1Jt44VZRr4.svg",
  "4HSt1fdOhF6F3PFBgxeUkOsTJiw.svg",
  "AUrg765bxdJvG09Nkwtoo0n8A.svg",
];

type IntroStripProps = {
  className?: string;
};

export function IntroStrip({ className }: IntroStripProps) {
  return (
    <section className={cn("bg-[#f5f5f5] px-4 py-4 sm:px-6", className)}>
      {/* Logo strip */}
      <div className="grid grid-cols-2 gap-3 sm:grid-cols-3 sm:gap-4 lg:grid-cols-6">
        {LOGOS.map((logo) => (
          <div
            key={logo}
            className="flex h-[100px] items-center justify-center rounded-xl bg-white p-6 lg:h-[120px]"
          >
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src={`${ASSET_BASE}/${logo}`}
              alt="Client logo"
              className="max-h-full max-w-full object-contain"
            />
          </div>
        ))}
      </div>

      {/* Showreel */}
      <div className="relative mt-3 h-[350px] w-full overflow-hidden rounded-[25px] sm:h-[400px] lg:mt-4 lg:h-[650px]">
        <Image
          src={`${ASSET_BASE}/cWKPopujkJqclchyOL1bYOiZDs.jpg`}
          alt="Showreel still"
          fill
          sizes="100vw"
          className="object-cover grayscale"
        />

        <div className="absolute inset-0 flex flex-col items-center justify-center gap-4 sm:flex-row sm:items-center sm:justify-start sm:gap-6 sm:pl-[15%]">
          <button
            type="button"
            aria-label="Watch showreel"
            className="flex h-[70px] w-[70px] shrink-0 items-center justify-center rounded-full bg-white transition-transform duration-300 ease-out hover:scale-105 sm:h-[90px] sm:w-[90px]"
          >
            <PlayIcon className="ml-1 h-[30%] w-[30%] text-black" />
          </button>

          <div className="text-center sm:text-left">
            <p className="text-2xl font-semibold text-white sm:text-[34px]">
              Watch showreel
            </p>
            <p className="text-sm text-white/70 sm:text-[15px]">(2016-25©)</p>
          </div>
        </div>
      </div>
    </section>
  );
}

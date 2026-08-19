"use client";

import { useEffect, useRef, useState } from "react";
import Image from "next/image";
import { cn } from "@/lib/utils";

/**
 * Minimal local IntersectionObserver hook — fires a scroll-triggered
 * fade-in once an element enters the viewport, then disconnects.
 */
function useInView<T extends HTMLElement>(threshold = 0.2) {
  const ref = useRef<T | null>(null);
  const [inView, setInView] = useState(false);

  useEffect(() => {
    const node = ref.current;
    if (!node) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setInView(true);
          observer.disconnect();
        }
      },
      { threshold },
    );

    observer.observe(node);
    return () => observer.disconnect();
  }, [threshold]);

  return { ref, inView };
}

type BlogPost = {
  date: string;
  title: string;
  excerpt: string;
};

const posts: BlogPost[] = [
  {
    date: "February 2, 2025",
    title: "How a well-designed website can transform your business",
    excerpt:
      "Discover the latest design trends shaping the digital world and how they impact business.",
  },
  {
    date: "January 26, 2025",
    title: "The Psychology of Color in Branding",
    excerpt:
      "Colors influence emotions and decisions. Here's how to use them strategically in branding.",
  },
];

function FadeInCard({
  className,
  style,
  children,
}: {
  className?: string;
  style?: React.CSSProperties;
  children: React.ReactNode;
}) {
  const { ref, inView } = useInView<HTMLDivElement>();

  return (
    <div
      ref={ref}
      className={cn(
        "transition-all duration-700 ease-out",
        inView ? "translate-y-0 opacity-100" : "translate-y-4 opacity-0",
        className,
      )}
      style={style}
    >
      {children}
    </div>
  );
}

export function BlogSection() {
  return (
    <section className="bg-neutral-100 px-6 py-20 min-[810px]:px-10 lg:px-16 lg:py-28">
      <div className="mx-auto max-w-[1360px]">
        <div className="mb-12 flex flex-col items-start justify-between gap-6 min-[810px]:flex-row min-[810px]:items-end lg:mb-16">
          <h2 className="max-w-xl text-[32px] leading-[1.1] font-semibold tracking-tight text-neutral-950 sm:text-[45px] lg:text-[60px] lg:tracking-[-0.06em]">
            <span className="text-neutral-950">Newest trends</span>{" "}
            <span className="text-neutral-400">and insights from our team.</span>
          </h2>
          <p className="max-w-[280px] text-right text-sm leading-relaxed text-neutral-500 min-[810px]:text-base">
            Stay informed about our latest projects, trends, and industry insights.
          </p>
        </div>

        <div className="grid grid-cols-1 gap-4 min-[810px]:grid-cols-[1fr_1fr_1.3fr]">
          {posts.map((post, i) => (
            <FadeInCard
              key={post.title}
              className="rounded-2xl bg-white p-6"
              style={{ transitionDelay: `${i * 100}ms` }}
            >
              <p className="mb-6 text-[13px] text-neutral-500">{post.date}</p>
              <h3 className="mb-3 text-lg leading-tight font-semibold text-neutral-950 sm:text-xl">
                {post.title}
              </h3>
              <p className="text-sm leading-relaxed text-neutral-500">{post.excerpt}</p>
            </FadeInCard>
          ))}

          <FadeInCard
            className="relative min-h-[320px] overflow-hidden rounded-2xl min-[810px]:min-h-0"
            style={{ transitionDelay: "200ms" }}
          >
            <Image
              src="/sites/fabrica-framer-media-fe96c5e9/root-8a5edab2/images/DsMKi7qE5JNWO5UQxmeqZGDSOI.jpg"
              alt="Hands typing on a laptop keyboard beside a cup of coffee"
              fill
              sizes="(min-width: 810px) 40vw, 100vw"
              className="object-cover"
            />
            <div className="absolute inset-0 bg-black/30" />
            <div className="relative flex h-full min-h-[320px] items-center justify-end p-6 sm:p-8">
              <p className="max-w-[260px] text-right text-[28px] leading-[1.15] font-semibold text-white sm:text-[32px]">
                What&apos;s new in digital?
              </p>
            </div>
          </FadeInCard>
        </div>
      </div>
    </section>
  );
}

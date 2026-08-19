import { Plus, ArrowUpRight, Star, Menu, X, Play, ChevronRight } from "lucide-react";
import { cn } from "@/lib/utils";

type IconProps = { className?: string };

/** Circular outlined "+" badge used throughout as a decorative marker / accordion toggle. */
export function PlusBadgeIcon({ className }: IconProps) {
  return (
    <span
      className={cn(
        "inline-flex items-center justify-center rounded-full border border-current",
        className,
      )}
    >
      <Plus className="h-[45%] w-[45%]" strokeWidth={2} />
    </span>
  );
}

/** Bare "+" cross mark (hero decorative marks, footer column markers). */
export function CrossMarkIcon({ className }: IconProps) {
  return <Plus className={cn("h-4 w-4", className)} strokeWidth={1.5} />;
}

export function ArrowUpRightIcon({ className }: IconProps) {
  return <ArrowUpRight className={className} strokeWidth={1.75} />;
}

export function StarIcon({ className }: IconProps) {
  return <Star className={className} fill="currentColor" strokeWidth={0} />;
}

export function HamburgerIcon({ className }: IconProps) {
  return <Menu className={className} strokeWidth={1.75} />;
}

export function CloseIcon({ className }: IconProps) {
  return <X className={className} strokeWidth={1.75} />;
}

export function PlayIcon({ className }: IconProps) {
  return <Play className={className} fill="currentColor" strokeWidth={0} />;
}

export function ChevronRightIcon({ className }: IconProps) {
  return <ChevronRight className={className} strokeWidth={1.75} />;
}

/** macOS-style traffic-light dots used on project card hover state. */
export function TrafficLightDots({ active, className }: { active: boolean; className?: string }) {
  const colors = active
    ? ["bg-[#ff5f57]", "bg-[#febc2e]", "bg-[#28c840]"]
    : ["bg-black/15", "bg-black/15", "bg-black/15"];
  return (
    <span className={cn("inline-flex items-center gap-1", className)}>
      {colors.map((c, i) => (
        <span key={i} className={cn("h-1.5 w-1.5 rounded-full transition-colors duration-200", c)} />
      ))}
    </span>
  );
}

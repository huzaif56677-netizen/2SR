import Image from "next/image"
import { cn } from "@/lib/utils"

/**
 * Official 2SR Innovations Logo & Wordmark.
 * Uses the authentic 2SR brand mark asset preserved from company records.
 */
export function Wordmark({
  className,
  showText = true,
  size = "md",
}: {
  className?: string
  showText?: boolean
  size?: "sm" | "md" | "lg"
}) {
  const dimensions = {
    sm: { img: "h-7 w-9", font: "text-base", sub: "text-[0.58rem]" },
    md: { img: "h-9 w-12", font: "text-lg", sub: "text-[0.62rem]" },
    lg: { img: "h-12 w-16", font: "text-2xl", sub: "text-[0.72rem]" },
  }[size]

  return (
    <div className={cn("inline-flex items-center gap-3 select-none", className)}>
      <div className={cn("relative shrink-0 transition-transform duration-300 group-hover:scale-105", dimensions.img)}>
        <Image
          src="/images/logo.png"
          alt="2SR Innovations Logo"
          fill
          priority
          sizes="64px"
          className="object-contain"
        />
      </div>
      {showText && (
        <div className="flex flex-col justify-center leading-none">
          <span className={cn("font-serif font-semibold tracking-tight text-foreground", dimensions.font)}>
            2SR
          </span>
          <span className={cn("font-semibold uppercase tracking-[0.24em] text-muted-foreground mt-0.5", dimensions.sub)}>
            Innovations
          </span>
        </div>
      )}
    </div>
  )
}

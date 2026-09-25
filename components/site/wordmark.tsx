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
    sm: { img: "h-8 w-11", font: "text-base sm:text-lg" },
    md: { img: "h-11 w-15 sm:h-13 sm:w-18 lg:h-14 lg:w-20", font: "text-lg sm:text-xl lg:text-2xl" },
    lg: { img: "h-14 w-20 sm:h-16 sm:w-24", font: "text-2xl sm:text-3xl" },
  }[size]

  return (
    <div className={cn("inline-flex items-center gap-2.5 sm:gap-3.5 select-none", className)}>
      <div className={cn("relative shrink-0", dimensions.img)}>
        <Image
          src="/images/logo.png"
          alt="2SR Innovations Logo"
          fill
          priority
          sizes="(max-width: 640px) 60px, 90px"
          className="object-contain"
        />
      </div>
      {showText && (
        <div className="flex items-center gap-1.5 whitespace-nowrap leading-none">
          <span className={cn("font-serif font-bold tracking-tight silver-metallic", dimensions.font)}>
            2SR
          </span>
          <span className={cn("font-serif font-medium tracking-tight silver-metallic-subtle", dimensions.font)}>
            Innovations
          </span>
        </div>
      )}
    </div>
  )
}

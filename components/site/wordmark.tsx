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
  light = false,
}: {
  className?: string
  showText?: boolean
  size?: "sm" | "md" | "lg"
  light?: boolean
}) {
  const dimensions = {
    sm: { img: "h-7 w-9 sm:h-8 sm:w-11", text: "h-7 w-25 sm:h-8 sm:w-29" },
    md: { img: "h-9 w-12 sm:h-11 sm:w-15 lg:h-12 lg:w-16", text: "h-8 w-29 sm:h-10 sm:w-36 lg:h-11 lg:w-40" },
    lg: { img: "h-12 w-16 sm:h-14 sm:w-18", text: "h-11 w-40 sm:h-13 sm:w-47" },
  }[size]

  return (
    <div className={cn("inline-flex items-center gap-2 sm:gap-2.5 select-none cursor-pointer transition-opacity duration-200 group-hover:opacity-85", className)}>
      <div className={cn("relative shrink-0", dimensions.img)}>
        <Image
          src="/images/logo.png"
          alt="2SR Logo"
          fill
          priority
          sizes="(max-width: 640px) 50px, 70px"
          className="object-contain"
        />
      </div>
      {showText && (
        <div className={cn("relative shrink-0", dimensions.text)}>
          <Image
            src="/images/logo-text.png"
            alt="2SR Innovations"
            fill
            priority
            sizes="(max-width: 640px) 150px, 200px"
            className="object-contain"
          />
        </div>
      )}
    </div>
  )
}

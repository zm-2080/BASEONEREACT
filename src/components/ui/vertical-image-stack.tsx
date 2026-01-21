"use client"

import { useState, useCallback, useEffect, useRef } from "react"
import { motion, type PanInfo } from "framer-motion"
import Image from "next/image"

type StackImage = {
  id: number
  src: string
  alt: string
}

const defaultImages: StackImage[] = [
  {
    id: 1,
    src: "/Architectural.png",
    alt: "Gold Coast Construction website",
  },
  {
    id: 2,
    src: "/new.png",
    alt: "Gold Coast Landscaping website",
  },
  {
    id: 3,
    src: "/Electrical.png",
    alt: "Gold Coast Electrical website",
  },
]

export function VerticalImageStack({
  images = defaultImages,
  className,
}: {
  images?: StackImage[]
  className?: string
}) {
  const [currentIndex, setCurrentIndex] = useState(0)
  const lastNavigationTime = useRef(0)
  const navigationCooldown = 400 // ms between navigations
  const containerRef = useRef<HTMLDivElement>(null)

  const navigate = useCallback((newDirection: number) => {
    const now = Date.now()
    if (now - lastNavigationTime.current < navigationCooldown) return
    lastNavigationTime.current = now

    setCurrentIndex((prev) => {
      if (newDirection > 0) {
        return prev === images.length - 1 ? 0 : prev + 1
      }
      return prev === 0 ? images.length - 1 : prev - 1
    })
  }, [images.length])

  const handleDragEnd = (_: MouseEvent | TouchEvent | PointerEvent, info: PanInfo) => {
    const threshold = 50
    if (info.offset.y < -threshold) {
      navigate(1)
    } else if (info.offset.y > threshold) {
      navigate(-1)
    }
  }

  const handleWheel = useCallback(
    (e: WheelEvent) => {
      if (Math.abs(e.deltaY) > 30) {
        if (e.deltaY > 0) {
          navigate(1)
        } else {
          navigate(-1)
        }
      }
    },
    [navigate],
  )

  useEffect(() => {
    const container = containerRef.current
    if (!container) return
    container.addEventListener("wheel", handleWheel, { passive: true })
    return () => container.removeEventListener("wheel", handleWheel)
  }, [handleWheel])

  const getCardStyle = (index: number) => {
    const total = images.length
    let diff = index - currentIndex
    if (diff > total / 2) diff -= total
    if (diff < -total / 2) diff += total

    if (diff === 0) {
      return { y: 0, scale: 1, opacity: 1, zIndex: 5, rotateX: 0 }
    } else if (diff === -1) {
      return { y: -140, scale: 0.86, opacity: 0.6, zIndex: 4, rotateX: 8 }
    } else if (diff === -2) {
      return { y: -240, scale: 0.74, opacity: 0.3, zIndex: 3, rotateX: 15 }
    } else if (diff === 1) {
      return { y: 140, scale: 0.86, opacity: 0.6, zIndex: 4, rotateX: -8 }
    } else if (diff === 2) {
      return { y: 240, scale: 0.74, opacity: 0.3, zIndex: 3, rotateX: -15 }
    } else {
      return {
        y: diff > 0 ? 360 : -360,
        scale: 0.6,
        opacity: 0,
        zIndex: 0,
        rotateX: diff > 0 ? -20 : 20,
      }
    }
  }

  const isVisible = (index: number) => {
    const total = images.length
    let diff = index - currentIndex
    if (diff > total / 2) diff -= total
    if (diff < -total / 2) diff += total
    return Math.abs(diff) <= 2
  }

  return (
    <div
      ref={containerRef}
      className={`relative flex h-[520px] w-full items-center justify-center overflow-hidden rounded-3xl border border-white/10 bg-white/5 backdrop-blur-sm ${className ?? ""}`}
    >
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute left-1/2 top-1/2 h-[420px] w-[420px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-white/[0.03] blur-3xl" />
      </div>

      <div className="relative flex h-[440px] w-[320px] items-center justify-center" style={{ perspective: "1200px" }}>
        {images.map((image, index) => {
          if (!isVisible(index)) return null
          const style = getCardStyle(index)
          const isCurrent = index === currentIndex

          return (
            <motion.div
              key={image.id}
              className="absolute cursor-grab active:cursor-grabbing"
              animate={{
                y: style.y,
                scale: style.scale,
                opacity: style.opacity,
                rotateX: style.rotateX,
                zIndex: style.zIndex,
              }}
              transition={{
                type: "spring",
                stiffness: 300,
                damping: 30,
                mass: 1,
              }}
              drag={isCurrent ? "y" : false}
              dragConstraints={{ top: 0, bottom: 0 }}
              dragElastic={0.2}
              onDragEnd={handleDragEnd}
              style={{
                transformStyle: "preserve-3d",
                zIndex: style.zIndex,
              }}
            >
              <div
                className="relative h-[360px] w-[300px] overflow-hidden rounded-2xl bg-black ring-1 ring-white/10"
                style={{
                  boxShadow: isCurrent
                    ? "0 25px 50px -12px rgba(0,0,0,0.35), 0 0 0 1px rgba(255,255,255,0.08)"
                    : "0 10px 30px -10px rgba(0,0,0,0.25)",
                }}
              >
                <Image
                  src={image.src}
                  alt={image.alt}
                  fill
                  className="object-cover"
                  draggable={false}
                  priority={isCurrent}
                />
                <div className="absolute inset-x-0 bottom-0 h-20 bg-gradient-to-t from-black/50 to-transparent" />
              </div>
            </motion.div>
          )
        })}
      </div>

      <div className="absolute right-4 top-1/2 hidden -translate-y-1/2 flex-col gap-2 sm:flex">
        {images.map((_, index) => (
          <button
            key={index}
            onClick={() => {
              if (index !== currentIndex) setCurrentIndex(index)
            }}
            className={`h-2 w-2 rounded-full transition-all duration-300 ${
              index === currentIndex ? "h-6 bg-white" : "bg-white/30 hover:bg-white/50"
            }`}
            aria-label={`Go to image ${index + 1}`}
          />
        ))}
      </div>

      <div className="absolute left-4 top-1/2 hidden -translate-y-1/2 sm:block">
        <div className="flex flex-col items-center">
          <span className="text-3xl font-light text-white tabular-nums">
            {String(currentIndex + 1).padStart(2, "0")}
          </span>
          <div className="my-2 h-px w-8 bg-white/20" />
          <span className="text-xs text-white/60 tabular-nums">
            {String(images.length).padStart(2, "0")}
          </span>
        </div>
      </div>
    </div>
  )
}

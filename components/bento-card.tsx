"use client"

import type React from "react"

import { useState, useEffect, useRef } from "react"
import { Card, CardContent } from "@/components/ui/card"
import Image from "next/image"
import { cn } from "@/lib/utils" // Assuming cn utility is available

interface BentoCardProps {
  icon: string
  title: string
  description: string
  className?: string
  style?: React.CSSProperties
  delay?: number
  backgroundPattern?: string
  iconColor?: string
  titleFontWeight?: string
  hoverEffect?: string
}

export default function BentoCard({
  icon,
  title,
  description,
  className,
  delay = 0,
  backgroundPattern,
  iconColor,
  titleFontWeight,
  hoverEffect,
}: BentoCardProps) {
  const [isVisible, setIsVisible] = useState(false)
  const cardRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true)
          observer.disconnect()
        }
      },
      { threshold: 0.1 },
    )

    if (cardRef.current) {
      observer.observe(cardRef.current)
    }

    return () => {
      if (cardRef.current) {
        observer.unobserve(cardRef.current)
      }
    }
  }, [])

  const animationClasses = isVisible ? "animate-bento-enter" : "opacity-0 blur-md"
  const animationStyle = {
    animationDelay: `${delay}ms`,
    animationFillMode: "forwards",
  } as React.CSSProperties

  return (
    <Card
      ref={cardRef}
      className={cn(
        `bg-card rounded-lg shadow-[0_2px_8px_rgba(0,0,0,0.05)] transition-all duration-300 group`,
        animationClasses,
        className,
        "hover:ring-2 ring-primary",
        backgroundPattern,
      )}
      style={animationStyle}
    >
      <CardContent className="p-8">
        <div
          className={cn(
            "w-16 h-16 bg-gradient-to-br from-primary to-accent rounded-xl flex items-center justify-center mb-6 transition-transform duration-200",
            iconColor,
            hoverEffect === "icon-scale" && "group-hover:scale-110",
          )}
        >
          <Image
            src={icon || "/placeholder.svg"}
            alt={title}
            width={32}
            height={32}
            className="filter brightness-0 invert"
          />
        </div>
        <h3 className={cn("text-2xl font-semibold text-foreground mb-4 leading-[1.3]", titleFontWeight)}>{title}</h3>
        <p className="text-muted-foreground leading-[1.5]">{description}</p>
      </CardContent>
    </Card>
  )
}

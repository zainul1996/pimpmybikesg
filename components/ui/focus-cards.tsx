"use client";

import React, { useState, useEffect } from "react";
import { cn } from "@/lib/utils";
import Image from "next/image";

type CardType = {
  title: string;
  src: string;
};

export const Card = React.memo(
  ({
    card,
    index,
    hovered,
    setHovered,
    isMobile,
  }: {
    card: CardType;
    index: number;
    hovered: number | null;
    setHovered: React.Dispatch<React.SetStateAction<number | null>>;
    isMobile?: boolean;
  }) => (
    <div
      onMouseEnter={() => setHovered(index)}
      onMouseLeave={() => setHovered(null)}
      className={cn(
        "rounded-lg relative bg-gray-100 dark:bg-neutral-900 overflow-hidden transition-all duration-300 ease-out",
        isMobile ? "h-32 md:h-40" : "h-60 md:h-96",
        "w-full",
        hovered !== null && hovered !== index 
          ? "opacity-60 scale-[0.96]" 
          : "opacity-100 scale-100"
      )}
      style={{
        transition: "all 0.2s cubic-bezier(0.4, 0, 0.2, 1)",
      }}
    >
      <Image
        src={card.src}
        alt={card.title}
        fill
        sizes="(max-width: 768px) 100vw, 33vw"
        className="object-cover"
        priority
      />
      <div
        className={cn(
          "absolute inset-0 bg-black/50 dark:bg-black/70 flex items-end py-4 px-3 md:py-8 md:px-4 transition-opacity duration-200",
          hovered === index ? "opacity-100" : "opacity-0"
        )}
        style={{
          transition: "opacity 0.15s ease-in-out",
        }}
      >
        <div className={cn(
          "text-transparent bg-clip-text bg-gradient-to-b from-white to-neutral-200 dark:from-white dark:to-neutral-300",
          isMobile ? "text-base md:text-lg" : "text-xl md:text-2xl",
          "font-medium"
        )}>
          {card.title}
        </div>
      </div>
    </div>
  )
);

Card.displayName = "Card";

type Card = {
  title: string;
  src: string;
};

export function FocusCards({ 
  cards,
  externalHovered,
  phoneLayout = false
}: { 
  cards: Card[];
  externalHovered?: number | null;
  phoneLayout?: boolean;
}) {
  const [internalHovered, setInternalHovered] = useState<number | null>(null);
  const [isMobileView, setIsMobileView] = useState(false);
  
  // Detect if we're in mobile view based on window width
  useEffect(() => {
    const checkMobile = () => {
      setIsMobileView(window.innerWidth < 768);
    };
    
    checkMobile();
    window.addEventListener('resize', checkMobile);
    
    return () => {
      window.removeEventListener('resize', checkMobile);
    };
  }, []);
  
  // Use external hover control if provided, otherwise use internal state
  const hovered = externalHovered !== undefined ? externalHovered : internalHovered;
  
  return (
    <div className={cn(
      "grid gap-3 md:gap-5 max-w-6xl mx-auto px-4 md:px-8 w-full",
      phoneLayout || isMobileView
        ? "grid-cols-3" // 3 columns on phone
        : "grid-cols-1 md:grid-cols-3" // 1 column on small phones, 3 on larger screens
    )}>
      {cards.map((card, index) => (
        <Card
          key={card.title}
          card={card}
          index={index}
          hovered={hovered}
          setHovered={setInternalHovered}
          isMobile={phoneLayout || isMobileView}
        />
      ))}
    </div>
  );
}

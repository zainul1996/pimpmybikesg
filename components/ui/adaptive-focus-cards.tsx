"use client";

import { useEffect, useState, useRef, useCallback } from "react";
import { FocusCards } from "./focus-cards";

type Card = {
  title: string;
  src: string;
};

// Sample bike images - you can replace with your own
const bikeImages: Card[] = [
  {
    title: "Polished",
    src: "/images/washed_image_1.jpeg"
  },
  {
    title: "Shined",
    src: "/images/washed_image_2.jpeg"
  },
  {
    title: "Waxed",
    src: "/images/washed_image_3.jpeg"
  },
  {
    title: "Detailed",
    src: "/images/washed_image_4.jpeg"
  },
  {
    title: "Restored",
    src: "/images/washed_image_5.jpeg"
  },
  {
    title: "Perfected",
    src: "/images/washed_image_6.jpeg"
  }
];

interface AdaptiveFocusCardsProps {
  cards?: Card[];
  interval?: number;
  title?: string;
  description?: string;
}

export function AdaptiveFocusCards({ 
  cards = bikeImages, 
  interval = 250, // Each card shows for 250ms
  title, 
  description
}: AdaptiveFocusCardsProps) {
  const [externalHovered, setExternalHovered] = useState<number | null>(null);
  const [isTouchDevice, setIsTouchDevice] = useState(false);
  const intervalRef = useRef<NodeJS.Timeout | null>(null);
  const cardIndexRef = useRef(0);

  // Detect touch device
  useEffect(() => {
    const hasTouchScreen = (
      'ontouchstart' in window ||
      navigator.maxTouchPoints > 0
    );
    setIsTouchDevice(hasTouchScreen);
    
    // Start auto-cycling if it's a touch device
    if (hasTouchScreen) {
      startCycling();
    }
    
    return () => {
      if (intervalRef.current) {
        clearInterval(intervalRef.current);
      }
    };
    // We're intentionally excluding startCycling to avoid unnecessary re-runs
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  
  const startCycling = useCallback(() => {
    if (intervalRef.current) {
      clearInterval(intervalRef.current);
    }
    
    // Initialize with first card
    cardIndexRef.current = 0;
    setExternalHovered(cardIndexRef.current);
    
    // Set main interval for switching cards - using a simpler approach
    // that directly cycles without the unhover/hover sequence
    intervalRef.current = setInterval(() => {
      cardIndexRef.current = (cardIndexRef.current + 1) % cards.length;
      setExternalHovered(cardIndexRef.current);
    }, interval);
  }, [interval, cards.length]);

  useEffect(() => {
    if (isTouchDevice) {
      startCycling();
    }
    
    return () => {
      if (intervalRef.current) {
        clearInterval(intervalRef.current);
      }
    };
  }, [isTouchDevice, startCycling]);

  return (
    <div className="w-full py-8">
      {title && <h2 className="text-3xl md:text-5xl font-bold text-center mb-4 text-foreground">{title}</h2>}
      {description && (
        <p className="text-lg md:text-xl text-center text-muted-foreground mb-8 max-w-3xl mx-auto px-4 leading-relaxed">
          {description}
        </p>
      )}
      <div className="grid-cards-container">
        <FocusCards 
          cards={cards} 
          externalHovered={isTouchDevice ? externalHovered : undefined}
          phoneLayout={true}
        />
      </div>
    </div>
  );
} 
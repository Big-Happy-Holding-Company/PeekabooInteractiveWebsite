/**
 * Author: Sonnet 4
 * Date: 2025-09-18
 * PURPOSE: Touch-friendly screenshot gallery component for app screenshots
 * SRP and DRY check: Pass - Single responsibility of displaying app screenshots in a gallery format
 */

import { useState } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { Button } from "@/components/ui/button";

interface Screenshot {
  src: string;
  alt: string;
}

interface ScreenshotGalleryProps {
  screenshots: Screenshot[];
  appName?: string;
  className?: string;
}

export default function ScreenshotGallery({
  screenshots,
  appName = "App",
  className = ""
}: ScreenshotGalleryProps) {
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextImage = () => {
    setCurrentIndex((prev) => (prev + 1) % screenshots.length);
  };

  const prevImage = () => {
    setCurrentIndex((prev) => (prev - 1 + screenshots.length) % screenshots.length);
  };

  const goToSlide = (index: number) => {
    setCurrentIndex(index);
  };

  if (!screenshots.length) {
    return (
      <div className={`text-center p-8 ${className}`}>
        <div className="aspect-[9/16] bg-slate-100 rounded-lg flex items-center justify-center max-w-xs mx-auto">
          <p className="text-slate-500">Screenshots coming soon</p>
        </div>
      </div>
    );
  }

  return (
    <div className={`${className}`}>
      {/* Main Screenshot Display */}
      <div className="relative max-w-xs mx-auto mb-6">
        <div className="aspect-[9/16] bg-slate-100 rounded-lg overflow-hidden shadow-lg">
          <img
            src={screenshots[currentIndex].src}
            alt={screenshots[currentIndex].alt}
            className="w-full h-full object-cover"
          />
        </div>

        {/* Navigation Arrows */}
        {screenshots.length > 1 && (
          <>
            <Button
              variant="outline"
              size="sm"
              className="absolute left-2 top-1/2 -translate-y-1/2 bg-white/90 hover:bg-white"
              onClick={prevImage}
              aria-label="Previous screenshot"
            >
              <ChevronLeft className="w-4 h-4" />
            </Button>
            <Button
              variant="outline"
              size="sm"
              className="absolute right-2 top-1/2 -translate-y-1/2 bg-white/90 hover:bg-white"
              onClick={nextImage}
              aria-label="Next screenshot"
            >
              <ChevronRight className="w-4 h-4" />
            </Button>
          </>
        )}

        {/* Current Position Indicator */}
        {screenshots.length > 1 && (
          <div className="absolute bottom-4 left-1/2 -translate-x-1/2">
            <div className="bg-black/50 rounded-full px-3 py-1">
              <span className="text-white text-sm">
                {currentIndex + 1} / {screenshots.length}
              </span>
            </div>
          </div>
        )}
      </div>

      {/* Thumbnail Navigation */}
      {screenshots.length > 1 && (
        <div className="flex gap-2 justify-center overflow-x-auto pb-2">
          {screenshots.map((screenshot, index) => (
            <button
              key={index}
              onClick={() => goToSlide(index)}
              className={`flex-shrink-0 w-16 h-24 rounded-md overflow-hidden border-2 transition-all ${
                index === currentIndex
                  ? "border-blue-500 ring-2 ring-blue-200"
                  : "border-slate-200 hover:border-slate-300"
              }`}
              aria-label={`View screenshot ${index + 1}`}
            >
              <img
                src={screenshot.src}
                alt={screenshot.alt}
                className="w-full h-full object-cover"
              />
            </button>
          ))}
        </div>
      )}

      {/* Accessibility Info */}
      <div className="text-center mt-4">
        <p className="text-sm text-slate-500">
          {appName} screenshots
          {screenshots.length > 1 && " • Tap thumbnails or use arrows to navigate"}
        </p>
      </div>
    </div>
  );
}
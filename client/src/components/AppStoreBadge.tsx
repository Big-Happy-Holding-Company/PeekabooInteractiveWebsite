/**
 * Author: Sonnet 4
 * Date: 2025-09-18
 * PURPOSE: Reusable App Store badge component with proper tracking and styling
 * SRP and DRY check: Pass - Single responsibility of rendering App Store download badges
 */

import { Button } from "@/components/ui/button";
import { ExternalLink } from "lucide-react";

interface AppStoreBadgeProps {
  appName: "calm" | "plunk";
  variant?: "default" | "large" | "small";
  className?: string;
}

const appData = {
  calm: {
    name: "Peekaboo Calm",
    url: "https://apps.apple.com/us/app/peekaboo-calm/id6748668506",
    color: "bg-blue-600 hover:bg-blue-700",
  },
  plunk: {
    name: "Peekaboo Plunk",
    url: "https://apps.apple.com/us/app/peekaboo-plunk/id6749132469",
    color: "bg-orange-600 hover:bg-orange-700",
  },
};

export default function AppStoreBadge({
  appName,
  variant = "default",
  className = ""
}: AppStoreBadgeProps) {
  const app = appData[appName];

  const sizeClasses = {
    small: "text-sm py-2 px-4",
    default: "text-base py-3 px-6",
    large: "text-lg py-4 px-8",
  };

  return (
    <a
      href={app.url}
      target="_blank"
      rel="noopener noreferrer"
      className={`inline-block ${className}`}
    >
      <Button
        size={variant === "large" ? "lg" : variant === "small" ? "sm" : "default"}
        className={`${app.color} ${sizeClasses[variant]} transition-all duration-200 hover:scale-105`}
      >
        <ExternalLink className="w-4 h-4 mr-2" />
        Get {app.name}
      </Button>
    </a>
  );
}
/**
 * Author: Sonnet 4
 * Date: 2025-09-18
 * PURPOSE: Reusable feature list component with icon support for app features
 * SRP and DRY check: Pass - Single responsibility of displaying features with consistent formatting
 */

import { LucideIcon } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

interface Feature {
  icon: LucideIcon;
  title: string;
  description: string;
  iconColor?: string;
}

interface FeatureListProps {
  features: Feature[];
  layout?: "grid" | "list";
  className?: string;
}

export default function FeatureList({
  features,
  layout = "grid",
  className = ""
}: FeatureListProps) {
  const gridClasses = layout === "grid"
    ? "grid gap-6 md:grid-cols-2 lg:grid-cols-3"
    : "space-y-4";

  return (
    <div className={`${gridClasses} ${className}`}>
      {features.map((feature, index) => {
        const IconComponent = feature.icon;
        const iconColorClass = feature.iconColor || "text-blue-600";

        if (layout === "list") {
          return (
            <div key={index} className="flex items-start gap-4 p-4 bg-white rounded-lg">
              <div className="flex-shrink-0">
                <IconComponent className={`w-6 h-6 ${iconColorClass}`} />
              </div>
              <div>
                <h3 className="font-semibold text-slate-800 mb-1">{feature.title}</h3>
                <p className="text-slate-600 text-sm">{feature.description}</p>
              </div>
            </div>
          );
        }

        return (
          <Card key={index} className="hover:shadow-md transition-shadow">
            <CardContent className="p-6">
              <div className="flex items-center gap-3 mb-3">
                <IconComponent className={`w-6 h-6 ${iconColorClass}`} />
                <h3 className="font-semibold text-slate-800">{feature.title}</h3>
              </div>
              <p className="text-slate-600 text-sm leading-relaxed">{feature.description}</p>
            </CardContent>
          </Card>
        );
      })}
    </div>
  );
}
/**
 * Author: Sonnet 4
 * Date: 2025-09-18
 * PURPOSE: Shared layout component that provides consistent navigation and footer across all pages
 * SRP and DRY check: Pass - Single responsibility of providing shared layout structure
 */

import { ReactNode } from "react";
import Navigation from "./Navigation";

interface LayoutProps {
  children: ReactNode;
  className?: string;
}

export default function Layout({ children, className = "" }: LayoutProps) {
  return (
    <div className="min-h-screen flex flex-col bg-slate-50">
      <Navigation />

      <main className={`flex-1 ${className}`}>
        {children}
      </main>

      <footer className="py-8 px-4 bg-white border-t border-slate-200">
        <div className="max-w-4xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-6">
            {/* App Store Links */}
            <div className="text-center md:text-left">
              <h3 className="text-sm font-semibold text-slate-800 mb-3">Our Apps</h3>
              <div className="space-y-2">
                <div>
                  <a
                    href="https://apps.apple.com/us/app/peekaboo-calm/id6748668506"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-sm text-blue-600 hover:text-blue-700 block"
                  >
                    Peekaboo Calm
                  </a>
                </div>
                <div>
                  <a
                    href="https://apps.apple.com/us/app/peekaboo-plunk/id6749132469"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-sm text-blue-600 hover:text-blue-700 block"
                  >
                    Peekaboo Plunk
                  </a>
                </div>
              </div>
            </div>

            {/* Quick Links */}
            <div className="text-center md:text-left">
              <h3 className="text-sm font-semibold text-slate-800 mb-3">Learn More</h3>
              <div className="space-y-2">
                <div>
                  <a href="/why-it-works" className="text-sm text-slate-600 hover:text-slate-800 block">
                    Why It Works
                  </a>
                </div>
                <div>
                  <a href="/for-families" className="text-sm text-slate-600 hover:text-slate-800 block">
                    For Families
                  </a>
                </div>
                <div>
                  <a href="/research" className="text-sm text-slate-600 hover:text-slate-800 block">
                    Research
                  </a>
                </div>
              </div>
            </div>

            {/* Company */}
            <div className="text-center md:text-left">
              <h3 className="text-sm font-semibold text-slate-800 mb-3">Company</h3>
              <div className="space-y-2">
                <div>
                  <a href="/about" className="text-sm text-slate-600 hover:text-slate-800 block">
                    About
                  </a>
                </div>
                <div>
                  <a href="/press" className="text-sm text-slate-600 hover:text-slate-800 block">
                    Press
                  </a>
                </div>
                <div>
                  <a href="/privacy" className="text-sm text-slate-600 hover:text-slate-800 block">
                    Privacy Policy
                  </a>
                </div>
              </div>
            </div>
          </div>

          {/* Bottom section */}
          <div className="pt-6 border-t border-slate-200 text-center">
            <p className="text-sm text-slate-500">
              &copy; {new Date().getFullYear()} Peekaboo Interactive Games
              <span className="mx-2 text-slate-300">•</span>
              Calm, gentle apps for toddlers
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}
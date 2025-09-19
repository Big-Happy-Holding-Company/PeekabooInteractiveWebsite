/**
 * Author: Sonnet 4
 * Date: 2025-09-18
 * PURPOSE: Global navigation component with mobile-responsive design for app-focused website
 * SRP and DRY check: Pass - Single responsibility of navigation with reusable mobile/desktop patterns
 */

import { useState } from "react";
import { Link, useLocation } from "wouter";
import { Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";

const navigationItems = [
  { href: "/", label: "Home" },
  { href: "/apps", label: "Apps" },
  { href: "/why-it-works", label: "Why It Works" },
  { href: "/for-families", label: "For Families" },
  { href: "/about", label: "About" },
  { href: "/press", label: "Press" },
];

export default function Navigation() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [location] = useLocation();

  const isActiveRoute = (href: string) => {
    if (href === "/") {
      return location === "/";
    }
    return location.startsWith(href);
  };

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  const closeMobileMenu = () => {
    setIsMobileMenuOpen(false);
  };

  return (
    <nav className="bg-white border-b border-slate-200 sticky top-0 z-50">
      <div className="max-w-6xl mx-auto px-4">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <Link href="/" className="flex items-center space-x-2">
            <div className="text-2xl font-bold text-slate-800">
              Peekaboo
            </div>
            <div className="text-sm text-slate-600 hidden sm:block">
              Interactive
            </div>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            {navigationItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className={`text-sm font-medium transition-colors hover:text-slate-800 ${
                  isActiveRoute(item.href)
                    ? "text-slate-800 border-b-2 border-blue-500 pb-1"
                    : "text-slate-600"
                }`}
              >
                {item.label}
              </Link>
            ))}
          </div>

          {/* App Store Quick Links - Desktop */}
          <div className="hidden lg:flex items-center space-x-3">
            <a
              href="https://apps.apple.com/us/app/peekaboo-calm/id6748668506"
              target="_blank"
              rel="noopener noreferrer"
              className="text-xs text-blue-600 hover:text-blue-700 px-3 py-1 border border-blue-200 rounded-full transition-colors"
            >
              Get Calm
            </a>
            <a
              href="https://apps.apple.com/us/app/peekaboo-plunk/id6749132469"
              target="_blank"
              rel="noopener noreferrer"
              className="text-xs text-blue-600 hover:text-blue-700 px-3 py-1 border border-blue-200 rounded-full transition-colors"
            >
              Get Plunk
            </a>
          </div>

          {/* Mobile Menu Button */}
          <Button
            variant="ghost"
            size="sm"
            className="md:hidden"
            onClick={toggleMobileMenu}
            aria-label="Toggle mobile menu"
          >
            {isMobileMenuOpen ? <X size={20} /> : <Menu size={20} />}
          </Button>
        </div>

        {/* Mobile Navigation Menu */}
        {isMobileMenuOpen && (
          <div className="md:hidden border-t border-slate-200 bg-white">
            <div className="py-4 space-y-1">
              {navigationItems.map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  onClick={closeMobileMenu}
                  className={`block px-4 py-3 text-base font-medium transition-colors ${
                    isActiveRoute(item.href)
                      ? "text-blue-600 bg-blue-50 border-r-4 border-blue-500"
                      : "text-slate-600 hover:text-slate-800 hover:bg-slate-50"
                  }`}
                >
                  {item.label}
                </Link>
              ))}

              {/* Mobile App Store Links */}
              <div className="px-4 py-3 border-t border-slate-100 mt-4">
                <div className="text-sm font-medium text-slate-800 mb-3">Our Apps</div>
                <div className="space-y-2">
                  <a
                    href="https://apps.apple.com/us/app/peekaboo-calm/id6748668506"
                    target="_blank"
                    rel="noopener noreferrer"
                    onClick={closeMobileMenu}
                    className="block text-blue-600 hover:text-blue-700 text-sm py-1"
                  >
                    Peekaboo Calm - Peaceful play
                  </a>
                  <a
                    href="https://apps.apple.com/us/app/peekaboo-plunk/id6749132469"
                    target="_blank"
                    rel="noopener noreferrer"
                    onClick={closeMobileMenu}
                    className="block text-blue-600 hover:text-blue-700 text-sm py-1"
                  >
                    Peekaboo Plunk - Active play
                  </a>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
}
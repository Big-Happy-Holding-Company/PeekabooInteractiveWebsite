/**
 * Author: Sonnet 4
 * Date: 2025-09-18
 * PURPOSE: Peekaboo Calm app detail page with features, screenshots, and App Store links
 * SRP and DRY check: Pass - Single responsibility of showcasing Peekaboo Calm app details
 */

import Layout from "@/components/Layout";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { Heart, Volume2, Moon, Sparkles, Shield, Clock, ArrowLeft } from "lucide-react";

export default function PeekabooCalm() {
  return (
    <Layout>
      <div className="py-12 px-4">
        <div className="max-w-4xl mx-auto">
          {/* Back to Apps */}
          <div className="mb-8">
            <a
              href="/apps"
              className="inline-flex items-center gap-2 text-blue-600 hover:text-blue-700 text-sm"
            >
              <ArrowLeft className="w-4 h-4" />
              Back to Apps
            </a>
          </div>

          {/* Hero Section */}
          <div className="text-center mb-12">
            <div className="w-32 h-32 bg-gradient-to-br from-blue-100 to-blue-200 rounded-3xl mx-auto mb-6 flex items-center justify-center">
              <Heart className="w-16 h-16 text-blue-600" />
            </div>
            <h1 className="text-4xl md:text-5xl font-bold text-slate-800 mb-4">
              Peekaboo Calm
            </h1>
            <p className="text-lg text-slate-600 leading-relaxed max-w-2xl mx-auto mb-8">
              Peaceful nature backgrounds with gentle animal surprises. Perfect for bedtime routines,
              quiet time, and creating moments of calm throughout your toddler's day.
            </p>

            {/* Primary CTA */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center max-w-md mx-auto">
              <a
                href="https://apps.apple.com/us/app/peekaboo-calm/id6748668506"
                target="_blank"
                rel="noopener noreferrer"
                className="flex-1"
              >
                <Button size="lg" className="w-full bg-blue-600 hover:bg-blue-700">
                  Download for $1.99
                </Button>
              </a>
            </div>
          </div>

          {/* Screenshot Gallery Placeholder */}
          <div className="mb-12">
            <h2 className="text-2xl font-bold text-slate-800 mb-6 text-center">
              Gentle Discoveries Await
            </h2>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              {[1, 2, 3, 4].map((i) => (
                <div
                  key={i}
                  className="aspect-[9/16] bg-gradient-to-br from-blue-50 to-blue-100 rounded-lg flex items-center justify-center"
                >
                  <div className="text-center">
                    <Heart className="w-8 h-8 text-blue-400 mx-auto mb-2" />
                    <div className="text-xs text-blue-600">Screenshot {i}</div>
                  </div>
                </div>
              ))}
            </div>
            <p className="text-center text-sm text-slate-500 mt-4">
              Screenshots will be added here
            </p>
          </div>

          {/* Features */}
          <div className="mb-12">
            <h2 className="text-2xl font-bold text-slate-800 mb-8 text-center">
              Designed for Peaceful Play
            </h2>
            <div className="grid md:grid-cols-2 gap-6">
              <Card>
                <CardHeader>
                  <div className="flex items-center gap-3">
                    <Volume2 className="w-6 h-6 text-blue-600" />
                    <CardTitle className="text-lg">Soft Sounds</CardTitle>
                  </div>
                </CardHeader>
                <CardContent>
                  <p className="text-slate-600">
                    Gentle nature sounds and quiet animal noises that soothe rather than stimulate.
                    Perfect volume levels for sensitive ears.
                  </p>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <div className="flex items-center gap-3">
                    <Moon className="w-6 h-6 text-blue-600" />
                    <CardTitle className="text-lg">Bedtime Ready</CardTitle>
                  </div>
                </CardHeader>
                <CardContent>
                  <p className="text-slate-600">
                    Calm colors and peaceful animations make this perfect for winding down.
                    Helps create a relaxing transition to sleep time.
                  </p>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <div className="flex items-center gap-3">
                    <Sparkles className="w-6 h-6 text-blue-600" />
                    <CardTitle className="text-lg">Sensory Friendly</CardTitle>
                  </div>
                </CardHeader>
                <CardContent>
                  <p className="text-slate-600">
                    Designed with sensory sensitivities in mind. No flashing lights,
                    no overwhelming sounds, just gentle discoveries.
                  </p>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <div className="flex items-center gap-3">
                    <Shield className="w-6 h-6 text-blue-600" />
                    <CardTitle className="text-lg">Completely Safe</CardTitle>
                  </div>
                </CardHeader>
                <CardContent>
                  <p className="text-slate-600">
                    No ads, no data collection, no online features.
                    Just pure, safe exploration for your little one.
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>

          {/* Use Cases */}
          <div className="mb-12">
            <h2 className="text-2xl font-bold text-slate-800 mb-8 text-center">
              Perfect for These Moments
            </h2>
            <div className="grid md:grid-cols-3 gap-6">
              <div className="text-center p-6 bg-blue-50 rounded-lg">
                <Moon className="w-8 h-8 text-blue-600 mx-auto mb-3" />
                <h3 className="font-semibold text-slate-800 mb-2">Bedtime Routine</h3>
                <p className="text-sm text-slate-600">
                  A gentle transition activity that helps signal it's time to slow down and prepare for sleep.
                </p>
              </div>

              <div className="text-center p-6 bg-green-50 rounded-lg">
                <Clock className="w-8 h-8 text-green-600 mx-auto mb-3" />
                <h3 className="font-semibold text-slate-800 mb-2">Quiet Time</h3>
                <p className="text-sm text-slate-600">
                  Perfect for those moments when you need 5 minutes of calm during a busy day.
                </p>
              </div>

              <div className="text-center p-6 bg-purple-50 rounded-lg">
                <Heart className="w-8 h-8 text-purple-600 mx-auto mb-3" />
                <h3 className="font-semibold text-slate-800 mb-2">Sensory Break</h3>
                <p className="text-sm text-slate-600">
                  Helps highly sensitive children find moments of peace and sensory regulation.
                </p>
              </div>
            </div>
          </div>

          {/* FAQ */}
          <div className="mb-12">
            <h2 className="text-2xl font-bold text-slate-800 mb-8 text-center">
              Questions Parents Ask
            </h2>
            <Accordion type="single" collapsible className="bg-white rounded-lg">
              <AccordionItem value="item-1">
                <AccordionTrigger className="px-6">
                  Is this appropriate for very young toddlers?
                </AccordionTrigger>
                <AccordionContent className="px-6 pb-6">
                  Yes! Peekaboo Calm is designed for ages 0-4, with large touch targets and simple
                  interactions that even the youngest children can enjoy. The gentle pace makes it
                  perfect for developing motor skills without frustration.
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="item-2">
                <AccordionTrigger className="px-6">
                  Will this help with my child's sleep routine?
                </AccordionTrigger>
                <AccordionContent className="px-6 pb-6">
                  Many parents find that the calm colors, soft sounds, and peaceful animations help
                  their children transition to a quieter state of mind. While every child is different,
                  the app is specifically designed to be soothing rather than stimulating.
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="item-3">
                <AccordionTrigger className="px-6">
                  Does it work without an internet connection?
                </AccordionTrigger>
                <AccordionContent className="px-6 pb-6">
                  Absolutely! Peekaboo Calm works completely offline. Once downloaded, your child can
                  enjoy it anywhere without needing WiFi or cellular data. Perfect for travel,
                  doctor's visits, or anywhere you need a moment of calm.
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="item-4">
                <AccordionTrigger className="px-6">
                  Is there any data collection or advertising?
                </AccordionTrigger>
                <AccordionContent className="px-6 pb-6">
                  No data collection, no advertising, no social features. We believe children's apps
                  should be purely about the child's experience, not about collecting information or
                  showing ads. Your child's privacy is completely protected.
                </AccordionContent>
              </AccordionItem>
            </Accordion>
          </div>

          {/* Final CTA */}
          <div className="text-center bg-blue-50 rounded-lg p-8">
            <h2 className="text-2xl font-bold text-slate-800 mb-4">
              Ready for Peaceful Play?
            </h2>
            <p className="text-slate-600 mb-6 max-w-md mx-auto">
              Join thousands of families who have discovered the gentle joy of Peekaboo Calm.
            </p>
            <a
              href="https://apps.apple.com/us/app/peekaboo-calm/id6748668506"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Button size="lg" className="bg-blue-600 hover:bg-blue-700">
                Download Peekaboo Calm for $1.99
              </Button>
            </a>
          </div>
        </div>
      </div>
    </Layout>
  );
}
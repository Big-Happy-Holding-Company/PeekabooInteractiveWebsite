/**
 * Author: Sonnet 4
 * Date: 2025-09-18
 * PURPOSE: Peekaboo Plunk app detail page with features, screenshots, and App Store links
 * SRP and DRY check: Pass - Single responsibility of showcasing Peekaboo Plunk app details
 */

import Layout from "@/components/Layout";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { Gamepad2, Target, Sparkles, Brain, Shield, Zap, ArrowLeft } from "lucide-react";

export default function PeekabooPlunk() {
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
            <div className="w-32 h-32 bg-gradient-to-br from-orange-100 to-orange-200 rounded-3xl mx-auto mb-6 flex items-center justify-center">
              <Gamepad2 className="w-16 h-16 text-orange-600" />
            </div>
            <h1 className="text-4xl md:text-5xl font-bold text-slate-800 mb-4">
              Peekaboo Plunk
            </h1>
            <p className="text-lg text-slate-600 leading-relaxed max-w-2xl mx-auto mb-8">
              Drop animals down the Galton board and watch them bounce! A gentle introduction to
              cause-and-effect learning that develops coordination and problem-solving skills.
            </p>

            {/* Primary CTA */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center max-w-md mx-auto">
              <a
                href="https://apps.apple.com/us/app/peekaboo-plunk/id6749132469"
                target="_blank"
                rel="noopener noreferrer"
                className="flex-1"
              >
                <Button size="lg" className="w-full bg-orange-600 hover:bg-orange-700">
                  Download for $1.99
                </Button>
              </a>
            </div>
          </div>

          {/* Screenshot Gallery Placeholder */}
          <div className="mb-12">
            <h2 className="text-2xl font-bold text-slate-800 mb-6 text-center">
              Watch the Animals Bounce!
            </h2>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              {[1, 2, 3, 4].map((i) => (
                <div
                  key={i}
                  className="aspect-[9/16] bg-gradient-to-br from-orange-50 to-orange-100 rounded-lg flex items-center justify-center"
                >
                  <div className="text-center">
                    <Gamepad2 className="w-8 h-8 text-orange-400 mx-auto mb-2" />
                    <div className="text-xs text-orange-600">Screenshot {i}</div>
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
              Learning Through Gentle Play
            </h2>
            <div className="grid md:grid-cols-2 gap-6">
              <Card>
                <CardHeader>
                  <div className="flex items-center gap-3">
                    <Target className="w-6 h-6 text-orange-600" />
                    <CardTitle className="text-lg">Coordination Skills</CardTitle>
                  </div>
                </CardHeader>
                <CardContent>
                  <p className="text-slate-600">
                    Large touch targets help develop fine motor skills and hand-eye coordination
                    in a pressure-free environment.
                  </p>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <div className="flex items-center gap-3">
                    <Brain className="w-6 h-6 text-orange-600" />
                    <CardTitle className="text-lg">Problem Solving</CardTitle>
                  </div>
                </CardHeader>
                <CardContent>
                  <p className="text-slate-600">
                    Watch how different animals bounce and discover patterns.
                    Early introduction to cause-and-effect thinking.
                  </p>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <div className="flex items-center gap-3">
                    <Sparkles className="w-6 h-6 text-orange-600" />
                    <CardTitle className="text-lg">Gentle Rewards</CardTitle>
                  </div>
                </CardHeader>
                <CardContent>
                  <p className="text-slate-600">
                    Delightful animal sounds and movements reward interaction
                    without being overwhelming or addictive.
                  </p>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <div className="flex items-center gap-3">
                    <Shield className="w-6 h-6 text-orange-600" />
                    <CardTitle className="text-lg">Safe Exploration</CardTitle>
                  </div>
                </CardHeader>
                <CardContent>
                  <p className="text-slate-600">
                    No ads, no data collection, no online features.
                    Just pure, educational fun for curious minds.
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>

          {/* Use Cases */}
          <div className="mb-12">
            <h2 className="text-2xl font-bold text-slate-800 mb-8 text-center">
              Perfect for These Activities
            </h2>
            <div className="grid md:grid-cols-3 gap-6">
              <div className="text-center p-6 bg-orange-50 rounded-lg">
                <Zap className="w-8 h-8 text-orange-600 mx-auto mb-3" />
                <h3 className="font-semibold text-slate-800 mb-2">Active Play Time</h3>
                <p className="text-sm text-slate-600">
                  Engaging enough to capture attention during active play periods while still being gentle and educational.
                </p>
              </div>

              <div className="text-center p-6 bg-blue-50 rounded-lg">
                <Brain className="w-8 h-8 text-blue-600 mx-auto mb-3" />
                <h3 className="font-semibold text-slate-800 mb-2">Learning Moments</h3>
                <p className="text-sm text-slate-600">
                  Great for talking about animals, colors, and patterns. Lots of opportunities for parent-child interaction.
                </p>
              </div>

              <div className="text-center p-6 bg-green-50 rounded-lg">
                <Target className="w-8 h-8 text-green-600 mx-auto mb-3" />
                <h3 className="font-semibold text-slate-800 mb-2">Skill Building</h3>
                <p className="text-sm text-slate-600">
                  Helps develop coordination and predictive thinking through cause-and-effect play.
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
                  What age is this most appropriate for?
                </AccordionTrigger>
                <AccordionContent className="px-6 pb-6">
                  Peekaboo Plunk is designed for ages 0-4, but it's particularly engaging for toddlers
                  who are developing their motor skills and beginning to understand cause and effect.
                  The simple tap-and-watch gameplay is perfect for little hands.
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="item-2">
                <AccordionTrigger className="px-6">
                  Will my child learn anything educational?
                </AccordionTrigger>
                <AccordionContent className="px-6 pb-6">
                  Yes! The app introduces concepts of gravity, cause-and-effect, and pattern recognition.
                  Children also practice fine motor skills, hand-eye coordination, and learn animal names
                  and sounds. All of this happens naturally through play.
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="item-3">
                <AccordionTrigger className="px-6">
                  Is it too stimulating for sensitive children?
                </AccordionTrigger>
                <AccordionContent className="px-6 pb-6">
                  While more active than Peekaboo Calm, Plunk is still designed with sensitivity in mind.
                  The sounds are gentle, the colors are warm rather than bright, and there are no flashing
                  lights or overwhelming effects. Many parents find it strikes a good balance.
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="item-4">
                <AccordionTrigger className="px-6">
                  Does it encourage screen addiction?
                </AccordionTrigger>
                <AccordionContent className="px-6 pb-6">
                  The app is designed for short, satisfying play sessions rather than extended engagement.
                  There are no points, levels, or other addictive game mechanics. Children naturally
                  explore for a while and then move on to other activities.
                </AccordionContent>
              </AccordionItem>
            </Accordion>
          </div>

          {/* Final CTA */}
          <div className="text-center bg-orange-50 rounded-lg p-8">
            <h2 className="text-2xl font-bold text-slate-800 mb-4">
              Ready for Gentle Learning?
            </h2>
            <p className="text-slate-600 mb-6 max-w-md mx-auto">
              Join thousands of families discovering the joy of cause-and-effect learning with Peekaboo Plunk.
            </p>
            <a
              href="https://apps.apple.com/us/app/peekaboo-plunk/id6749132469"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Button size="lg" className="bg-orange-600 hover:bg-orange-700">
                Download Peekaboo Plunk for $1.99
              </Button>
            </a>
          </div>
        </div>
      </div>
    </Layout>
  );
}
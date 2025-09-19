/**
 * Author: Sonnet 4
 * Date: 2025-09-18
 * PURPOSE: Educational content page explaining the research-backed design principles behind Peekaboo apps
 * SRP and DRY check: Pass - Single responsibility of explaining educational effectiveness
 */

import Layout from "@/components/Layout";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Target, Heart, Brain, Eye, Volume2, Users, BookOpen, Sparkles } from "lucide-react";

export default function WhyItWorks() {
  return (
    <Layout>
      <div className="py-12 px-4">
        <div className="max-w-4xl mx-auto">
          {/* Header */}
          <div className="text-center mb-12">
            <h1 className="text-4xl md:text-5xl font-bold text-slate-800 mb-4">
              Why It Works
            </h1>
            <p className="text-lg text-slate-600 leading-relaxed max-w-2xl mx-auto">
              Calm, toddler-first design that feels natural. Gentle play for toddlers 0–4 based on
              research and thoughtful design principles.
            </p>

            {/* App Store Badges */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center max-w-md mx-auto mt-8">
              <a
                href="https://apps.apple.com/us/app/peekaboo-calm/id6748668506"
                target="_blank"
                rel="noopener noreferrer"
                className="flex-1"
              >
                <Button className="w-full bg-blue-600 hover:bg-blue-700">
                  Download Peekaboo Calm
                </Button>
              </a>
              <a
                href="https://apps.apple.com/us/app/peekaboo-plunk/id6749132469"
                target="_blank"
                rel="noopener noreferrer"
                className="flex-1"
              >
                <Button className="w-full bg-orange-600 hover:bg-orange-700">
                  Download Peekaboo Plunk
                </Button>
              </a>
            </div>
          </div>

          {/* Design Principles from why-it-works.md */}
          <div className="mb-12">
            <div className="grid md:grid-cols-2 gap-8">
              <Card>
                <CardHeader>
                  <div className="flex items-center gap-3">
                    <Target className="w-6 h-6 text-blue-600" />
                    <CardTitle className="text-lg">One tap is enough</CardTitle>
                  </div>
                </CardHeader>
                <CardContent>
                  <p className="text-slate-600">
                    Large touch targets and simple, repeatable actions match toddlers' motor skills.
                    Research on toddler touch use shows that swiping requires more advanced control,
                    so single-tap with big hit areas is more accessible.
                  </p>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <div className="flex items-center gap-3">
                    <Heart className="w-6 h-6 text-pink-600" />
                    <CardTitle className="text-lg">Calming design</CardTitle>
                  </div>
                </CardHeader>
                <CardContent>
                  <p className="text-slate-600">
                    Predictable rhythms and quiet feedback help little ones settle. This "contingent"
                    response pattern supports attention while keeping arousal low. Short, familiar
                    cycles further reduce cognitive load and keep things soothing.
                  </p>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <div className="flex items-center gap-3">
                    <Users className="w-6 h-6 text-green-600" />
                    <CardTitle className="text-lg">Joint play</CardTitle>
                  </div>
                </CardHeader>
                <CardContent>
                  <p className="text-slate-600">
                    Tiny talk prompts (like "Can you whisper like the owl?") invite you to explore together.
                    Parent–child co-play is linked to stronger language learning; research highlights how
                    guided interaction and simple narration can scaffold vocabulary and connection during playful media use.
                  </p>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <div className="flex items-center gap-3">
                    <Sparkles className="w-6 h-6 text-purple-600" />
                    <CardTitle className="text-lg">Repetition and soft surprise</CardTitle>
                  </div>
                </CardHeader>
                <CardContent>
                  <p className="text-slate-600">
                    Short loops with gentle novelty keep kids engaged without overwhelming them.
                    Repetition builds recognition; small surprises (what will appear next?) spark
                    delight while staying calm and predictable.
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>

          {/* Parents Appreciate */}
          <div className="mb-12">
            <h2 className="text-2xl font-bold text-slate-800 mb-8 text-center">
              Parents appreciate
            </h2>
            <div className="bg-blue-50 rounded-lg p-8">
              <div className="grid md:grid-cols-2 gap-6">
                <div className="space-y-4">
                  <div className="flex items-start gap-3">
                    <Target className="w-5 h-5 text-blue-600 mt-1 flex-shrink-0" />
                    <span className="text-slate-700">One‑tap play with large touch areas</span>
                  </div>
                  <div className="flex items-start gap-3">
                    <Volume2 className="w-5 h-5 text-blue-600 mt-1 flex-shrink-0" />
                    <span className="text-slate-700">Soft, friendly audio with no surprise loudness</span>
                  </div>
                </div>
                <div className="space-y-4">
                  <div className="flex items-start gap-3">
                    <Shield className="w-5 h-5 text-blue-600 mt-1 flex-shrink-0" />
                    <span className="text-slate-700">No scoring, timers, or ads; low‑stimulation visuals</span>
                  </div>
                  <div className="flex items-start gap-3">
                    <Heart className="w-5 h-5 text-blue-600 mt-1 flex-shrink-0" />
                    <span className="text-slate-700">Designed with sensory‑sensitive kiddos and diverse developmental needs in mind</span>
                  </div>
                </div>
              </div>

              <div className="mt-8 pt-6 border-t border-blue-200">
                <p className="text-slate-600 text-center">
                  Want practical tips for bedtime, sensory breaks, and transitions?
                  <a href="/for-families" className="text-blue-600 hover:text-blue-700 ml-1">
                    See For Families → Tips for calm routines
                  </a>
                </p>
              </div>
            </div>
          </div>

          {/* Accessibility and Comfort */}
          <div className="mb-12">
            <h2 className="text-2xl font-bold text-slate-800 mb-8 text-center">
              Notes for accessibility and comfort
            </h2>
            <div className="grid md:grid-cols-3 gap-6">
              <Card>
                <CardContent className="p-6">
                  <div className="flex items-center gap-3 mb-3">
                    <Eye className="w-6 h-6 text-green-600" />
                    <h3 className="font-semibold text-slate-800">Visual Accessibility</h3>
                  </div>
                  <ul className="space-y-2 text-slate-600 text-sm">
                    <li>• Alt text is provided for images</li>
                    <li>• High-contrast text and large tap targets support little hands and eyes</li>
                  </ul>
                </CardContent>
              </Card>

              <Card>
                <CardContent className="p-6">
                  <div className="flex items-center gap-3 mb-3">
                    <Sparkles className="w-6 h-6 text-purple-600" />
                    <h3 className="font-semibold text-slate-800">Motion Sensitivity</h3>
                  </div>
                  <ul className="space-y-2 text-slate-600 text-sm">
                    <li>• Motion is subtle and always optional</li>
                    <li>• We respect device "Reduce Motion" settings</li>
                  </ul>
                </CardContent>
              </Card>

              <Card>
                <CardContent className="p-6">
                  <div className="flex items-center gap-3 mb-3">
                    <Heart className="w-6 h-6 text-pink-600" />
                    <h3 className="font-semibold text-slate-800">Inclusive Design</h3>
                  </div>
                  <ul className="space-y-2 text-slate-600 text-sm">
                    <li>• Designed with sensory-sensitive children in mind</li>
                    <li>• Supports diverse developmental needs</li>
                  </ul>
                </CardContent>
              </Card>
            </div>
          </div>

          {/* Research Foundation */}
          <div className="mb-12">
            <h2 className="text-2xl font-bold text-slate-800 mb-8 text-center">
              Research Foundation
            </h2>
            <Card className="bg-slate-50">
              <CardHeader>
                <div className="flex items-center gap-3">
                  <BookOpen className="w-6 h-6 text-slate-700" />
                  <div>
                    <CardTitle className="text-lg">Evidence-Based Design</CardTitle>
                    <CardDescription>
                      Our approach is grounded in early childhood development research
                    </CardDescription>
                  </div>
                </div>
              </CardHeader>
              <CardContent className="space-y-4">
                <p className="text-slate-600">
                  The effectiveness of interactive applications like Peekaboo in early childhood
                  development has been demonstrated in academic research, showing significant
                  positive outcomes in learning engagement and knowledge retention.
                </p>
                <p className="text-slate-600">
                  Our design principles draw from research in early childhood development,
                  sensory processing, and human-computer interaction specifically focused
                  on very young children.
                </p>
                <div className="pt-4">
                  <a href="/research" className="inline-block">
                    <Button variant="outline" className="text-slate-700 border-slate-300">
                      <BookOpen className="w-4 h-4 mr-2" />
                      Read the Research
                    </Button>
                  </a>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Call to Action */}
          <div className="text-center bg-slate-50 rounded-lg p-8">
            <h2 className="text-2xl font-bold text-slate-800 mb-4">
              Experience Thoughtful Design
            </h2>
            <p className="text-slate-600 mb-6 max-w-2xl mx-auto">
              See how research-backed design principles create meaningful, gentle experiences
              for your toddler.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center max-w-md mx-auto">
              <a
                href="/apps"
                className="flex-1"
              >
                <Button className="w-full">
                  Explore Our Apps
                </Button>
              </a>
              <a
                href="/for-families"
                className="flex-1"
              >
                <Button variant="outline" className="w-full">
                  Tips for Families
                </Button>
              </a>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
}
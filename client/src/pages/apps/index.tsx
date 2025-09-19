/**
 * Author: Sonnet 4
 * Date: 2025-09-18
 * PURPOSE: Apps showcase page displaying both Peekaboo Calm and Peekaboo Plunk with App Store links
 * SRP and DRY check: Pass - Single responsibility of showcasing available apps
 */

import Layout from "@/components/Layout";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Heart, Gamepad2, Sparkles, Clock, Volume2, Shield } from "lucide-react";

export default function AppsIndex() {
  return (
    <Layout>
      <div className="py-12 px-4">
        <div className="max-w-4xl mx-auto">
          {/* Header */}
          <div className="text-center mb-12">
            <h1 className="text-4xl md:text-5xl font-bold text-slate-800 mb-4">
              Calm, Gentle Apps for Toddlers
            </h1>
            <p className="text-lg text-slate-600 leading-relaxed max-w-2xl mx-auto">
              Two peaceful experiences designed for tiny hands and growing minds.
              No pressure, no rush—just gentle play and quiet discoveries.
            </p>
          </div>

          {/* Apps Grid */}
          <div className="grid md:grid-cols-2 gap-8 mb-12">
            {/* Peekaboo Calm */}
            <Card className="hover:shadow-lg transition-shadow duration-300">
              <CardHeader className="text-center">
                <div className="w-20 h-20 bg-gradient-to-br from-blue-100 to-blue-200 rounded-2xl mx-auto mb-4 flex items-center justify-center">
                  <Heart className="w-10 h-10 text-blue-600" />
                </div>
                <CardTitle className="text-2xl text-slate-800">Peekaboo Calm</CardTitle>
                <CardDescription className="text-slate-600">
                  Peaceful nature backgrounds with gentle animal surprises
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="space-y-2">
                  <div className="flex items-center gap-2 text-sm text-slate-600">
                    <Volume2 className="w-4 h-4" />
                    <span>Soft sounds and gentle animations</span>
                  </div>
                  <div className="flex items-center gap-2 text-sm text-slate-600">
                    <Clock className="w-4 h-4" />
                    <span>Perfect for bedtime and quiet time</span>
                  </div>
                  <div className="flex items-center gap-2 text-sm text-slate-600">
                    <Sparkles className="w-4 h-4" />
                    <span>Sensory-friendly design</span>
                  </div>
                </div>

                <div className="pt-4 space-y-3">
                  <a
                    href="https://apps.apple.com/us/app/peekaboo-calm/id6748668506"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="block"
                  >
                    <Button className="w-full bg-blue-600 hover:bg-blue-700">
                      Download for $1.99
                    </Button>
                  </a>
                  <a
                    href="/apps/calm"
                    className="block"
                  >
                    <Button variant="outline" className="w-full">
                      Learn More
                    </Button>
                  </a>
                </div>
              </CardContent>
            </Card>

            {/* Peekaboo Plunk */}
            <Card className="hover:shadow-lg transition-shadow duration-300">
              <CardHeader className="text-center">
                <div className="w-20 h-20 bg-gradient-to-br from-orange-100 to-orange-200 rounded-2xl mx-auto mb-4 flex items-center justify-center">
                  <Gamepad2 className="w-10 h-10 text-orange-600" />
                </div>
                <CardTitle className="text-2xl text-slate-800">Peekaboo Plunk</CardTitle>
                <CardDescription className="text-slate-600">
                  Drop animals down the Galton board and watch them bounce
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="space-y-2">
                  <div className="flex items-center gap-2 text-sm text-slate-600">
                    <Gamepad2 className="w-4 h-4" />
                    <span>Develops coordination and problem-solving</span>
                  </div>
                  <div className="flex items-center gap-2 text-sm text-slate-600">
                    <Sparkles className="w-4 h-4" />
                    <span>Cause-and-effect learning</span>
                  </div>
                  <div className="flex items-center gap-2 text-sm text-slate-600">
                    <Heart className="w-4 h-4" />
                    <span>Engaging yet gentle gameplay</span>
                  </div>
                </div>

                <div className="pt-4 space-y-3">
                  <a
                    href="https://apps.apple.com/us/app/peekaboo-plunk/id6749132469"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="block"
                  >
                    <Button className="w-full bg-orange-600 hover:bg-orange-700">
                      Download for $1.99
                    </Button>
                  </a>
                  <a
                    href="/apps/plunk"
                    className="block"
                  >
                    <Button variant="outline" className="w-full">
                      Learn More
                    </Button>
                  </a>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Why These Apps */}
          <div className="bg-white rounded-lg p-8 mb-8">
            <h2 className="text-2xl font-bold text-slate-800 mb-6 text-center">
              Why Parents Choose Peekaboo
            </h2>
            <div className="grid md:grid-cols-3 gap-6 text-center">
              <div>
                <Shield className="w-8 h-8 text-green-600 mx-auto mb-3" />
                <h3 className="font-semibold text-slate-800 mb-2">Completely Private</h3>
                <p className="text-sm text-slate-600">
                  No data collection, no ads, no online features. Just safe play.
                </p>
              </div>
              <div>
                <Heart className="w-8 h-8 text-pink-600 mx-auto mb-3" />
                <h3 className="font-semibold text-slate-800 mb-2">Gentle by Design</h3>
                <p className="text-sm text-slate-600">
                  Created by children's illustrator Brianne Baker with love and care.
                </p>
              </div>
              <div>
                <Sparkles className="w-8 h-8 text-purple-600 mx-auto mb-3" />
                <h3 className="font-semibold text-slate-800 mb-2">Research-Backed</h3>
                <p className="text-sm text-slate-600">
                  Designed following early childhood development principles.
                </p>
              </div>
            </div>
          </div>

          {/* Call to Action */}
          <div className="text-center">
            <p className="text-slate-600 mb-4">
              Ready to discover gentle play experiences your toddler will love?
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center max-w-md mx-auto">
              <a
                href="https://apps.apple.com/us/app/peekaboo-calm/id6748668506"
                target="_blank"
                rel="noopener noreferrer"
                className="flex-1"
              >
                <Button className="w-full bg-blue-600 hover:bg-blue-700">
                  Get Peekaboo Calm
                </Button>
              </a>
              <a
                href="https://apps.apple.com/us/app/peekaboo-plunk/id6749132469"
                target="_blank"
                rel="noopener noreferrer"
                className="flex-1"
              >
                <Button className="w-full bg-orange-600 hover:bg-orange-700">
                  Get Peekaboo Plunk
                </Button>
              </a>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
}
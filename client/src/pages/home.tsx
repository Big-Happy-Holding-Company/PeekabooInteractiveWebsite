/**
 * Author: Sonnet 4
 * Date: 2025-09-18
 * PURPOSE: Transformed home page focused on driving App Store installs for Peekaboo Calm and Peekaboo Plunk
 * SRP and DRY check: Pass - Single responsibility of promoting apps while maintaining educational credibility
 */

import Layout from "@/components/Layout";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Heart, Gamepad2, Shield, Sparkles, Star } from "lucide-react";

export default function Home() {
  return (
    <Layout>
      {/* Hero Section - Above the Fold */}
      <section className="py-16 px-4 bg-gradient-to-b from-blue-50 to-white">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-4xl md:text-6xl font-bold text-slate-800 mb-6">
            Calm, gentle tap-to-discover apps for toddlers
          </h1>
          <p className="text-xl text-slate-600 leading-relaxed mb-8 max-w-2xl mx-auto">
            Tiny surprises. Soft sounds. No pressure—just peaceful play that delights
            your little one and gives you moments of calm together.
          </p>

          {/* App Store Badges - Immediately Visible */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center max-w-lg mx-auto mb-12">
            <a
              href="https://apps.apple.com/us/app/peekaboo-calm/id6748668506"
              target="_blank"
              rel="noopener noreferrer"
              className="flex-1"
            >
              <Button size="lg" className="w-full bg-blue-600 hover:bg-blue-700 text-lg py-6">
                <Heart className="w-5 h-5 mr-2" />
                Get Peekaboo Calm
              </Button>
            </a>
            <a
              href="https://apps.apple.com/us/app/peekaboo-plunk/id6749132469"
              target="_blank"
              rel="noopener noreferrer"
              className="flex-1"
            >
              <Button size="lg" className="w-full bg-orange-600 hover:bg-orange-700 text-lg py-6">
                <Gamepad2 className="w-5 h-5 mr-2" />
                Get Peekaboo Plunk
              </Button>
            </a>
          </div>

          {/* App Icons from App Store */}
          <div className="flex justify-center gap-8 max-w-lg mx-auto">
            <div className="text-center">
              <img
                src="https://is1-ssl.mzstatic.com/image/thumb/Purple211/v4/07/fe/8a/07fe8a3a-c8bb-4b2c-2ed9-6fe48dcde553/AppIcon-0-0-1x_U007emarketing-0-8-0-85-220.png/1200x630wa.png"
                alt="Peekaboo Calm App Icon"
                className="w-24 h-24 rounded-2xl shadow-lg mx-auto mb-2"
              />
              <p className="text-sm text-slate-600">Peekaboo Calm</p>
            </div>
            <div className="text-center">
              <img
                src="https://is1-ssl.mzstatic.com/image/thumb/Purple211/v4/cc/8c/6b/cc8c6bbb-b034-b4dd-c132-97a7fa9c5644/AppIcon-0-0-1x_U007emarketing-0-8-0-85-220.png/1200x630wa.png"
                alt="Peekaboo Plunk App Icon"
                className="w-24 h-24 rounded-2xl shadow-lg mx-auto mb-2"
              />
              <p className="text-sm text-slate-600">Peekaboo Plunk</p>
            </div>
          </div>
        </div>
      </section>

      {/* Why Parents Like This */}
      <section className="py-16 px-4">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold text-slate-800 mb-12 text-center">
            Why parents choose these gentle experiences
          </h2>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center">
              <Shield className="w-12 h-12 text-green-600 mx-auto mb-4" />
              <h3 className="text-xl font-semibold text-slate-800 mb-3">Completely private</h3>
              <p className="text-slate-600">
                No data collection, no ads, no social features. Works offline.
                Just pure, safe exploration for your little one.
              </p>
            </div>
            <div className="text-center">
              <Heart className="w-12 h-12 text-pink-600 mx-auto mb-4" />
              <h3 className="text-xl font-semibold text-slate-800 mb-3">Gentle by design</h3>
              <p className="text-slate-600">
                Created by children's artist Brianne Baker with love and care.
                Soft sounds, calm colors, and peaceful animations.
              </p>
            </div>
            <div className="text-center">
              <Sparkles className="w-12 h-12 text-purple-600 mx-auto mb-4" />
              <h3 className="text-xl font-semibold text-slate-800 mb-3">Research-backed</h3>
              <p className="text-slate-600">
                Designed following early childhood development principles.
                Trusted by educators and therapists worldwide.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Meet the Apps */}
      <section className="py-16 px-4 bg-slate-50">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold text-slate-800 mb-12 text-center">
            Meet the calming apps
          </h2>
          <div className="grid md:grid-cols-2 gap-8">
            <Card className="hover:shadow-lg transition-shadow duration-300 group">
              <CardHeader className="text-center">
                <img
                  src="https://is1-ssl.mzstatic.com/image/thumb/Purple211/v4/07/fe/8a/07fe8a3a-c8bb-4b2c-2ed9-6fe48dcde553/AppIcon-0-0-1x_U007emarketing-0-8-0-85-220.png/1200x630wa.png"
                  alt="Peekaboo Calm App Icon"
                  className="w-20 h-20 rounded-2xl mx-auto mb-4 shadow-lg group-hover:scale-105 transition-transform"
                />
                <CardTitle className="text-2xl">Peekaboo Calm</CardTitle>
                <CardDescription className="text-lg">
                  Gently discover nature and animals in a soothing, sensory app made for toddlers
                </CardDescription>
              </CardHeader>
              <CardContent className="text-center space-y-4">
                <p className="text-slate-600">
                  Peaceful natural backgrounds with animated animal marbles. Calming audio with soft ambient sounds.
                  No ads, timers, or scoring. Perfect for ages 1-4.
                </p>
                <div className="space-y-3">
                  <a
                    href="https://apps.apple.com/us/app/peekaboo-calm/id6748668506"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <Button className="w-full bg-blue-600 hover:bg-blue-700">
                      Download for $1.99
                    </Button>
                  </a>
                  <a href="/apps/calm">
                    <Button variant="outline" className="w-full">
                      Learn More
                    </Button>
                  </a>
                </div>
              </CardContent>
            </Card>

            <Card className="hover:shadow-lg transition-shadow duration-300 group">
              <CardHeader className="text-center">
                <img
                  src="https://is1-ssl.mzstatic.com/image/thumb/Purple211/v4/cc/8c/6b/cc8c6bbb-b034-b4dd-c132-97a7fa9c5644/AppIcon-0-0-1x_U007emarketing-0-8-0-85-220.png/1200x630wa.png"
                  alt="Peekaboo Plunk App Icon"
                  className="w-20 h-20 rounded-2xl mx-auto mb-4 shadow-lg group-hover:scale-105 transition-transform"
                />
                <CardTitle className="text-2xl">Peekaboo Plunk</CardTitle>
                <CardDescription className="text-lg">
                  Watch adorable animals drop down a colorful Galton board filled with pegs
                </CardDescription>
              </CardHeader>
              <CardContent className="text-center space-y-4">
                <p className="text-slate-600">
                  A delightful experience designed for toddlers and babies. Animals bounce and giggle along the way
                  with soothing sounds and music. Safe, encouraging, and replayable fun.
                </p>
                <div className="space-y-3">
                  <a
                    href="https://apps.apple.com/us/app/peekaboo-plunk/id6749132469"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <Button className="w-full bg-orange-600 hover:bg-orange-700">
                      Download for $1.99
                    </Button>
                  </a>
                  <a href="/apps/plunk">
                    <Button variant="outline" className="w-full">
                      Learn More
                    </Button>
                  </a>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Gentle by Design */}
      <section className="py-16 px-4">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-3xl font-bold text-slate-800 mb-8">
            Gentle by design
          </h2>
          <p className="text-lg text-slate-600 leading-relaxed mb-8">
            Every tap, sound, and animation is carefully crafted following early childhood
            development research. We believe the best experiences for toddlers are calm,
            predictable, and filled with gentle discoveries—not overstimulating or addictive.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center max-w-md mx-auto">
            <a href="/why-it-works" className="flex-1">
              <Button variant="outline" className="w-full">
                See the Research
              </Button>
            </a>
            <a href="/for-families" className="flex-1">
              <Button variant="outline" className="w-full">
                Tips for Families
              </Button>
            </a>
          </div>
        </div>
      </section>

      {/* Final Call to Action */}
      <section className="py-16 px-4 bg-gradient-to-b from-blue-50 to-slate-50">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-3xl font-bold text-slate-800 mb-6">
            Ready for peaceful play?
          </h2>
          <p className="text-lg text-slate-600 mb-8 max-w-2xl mx-auto">
            Join millions of families who have discovered the gentle joy of Peekaboo.
            Two beautiful experiences, designed with love for the littlest learners.
          </p>

          {/* Repeated App Store Badges */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center max-w-lg mx-auto">
            <a
              href="https://apps.apple.com/us/app/peekaboo-calm/id6748668506"
              target="_blank"
              rel="noopener noreferrer"
              className="flex-1"
            >
              <Button size="lg" className="w-full bg-blue-600 hover:bg-blue-700">
                <Heart className="w-5 h-5 mr-2" />
                Get Peekaboo Calm
              </Button>
            </a>
            <a
              href="https://apps.apple.com/us/app/peekaboo-plunk/id6749132469"
              target="_blank"
              rel="noopener noreferrer"
              className="flex-1"
            >
              <Button size="lg" className="w-full bg-orange-600 hover:bg-orange-700">
                <Gamepad2 className="w-5 h-5 mr-2" />
                Get Peekaboo Plunk
              </Button>
            </a>
          </div>

          <p className="text-sm text-slate-500 mt-6">
            $1.99 each • No ads • No data collection • Works offline
          </p>
        </div>
      </section>
    </Layout>
  );
}

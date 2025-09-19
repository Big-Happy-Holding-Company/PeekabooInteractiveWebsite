/**
 * Author: Sonnet 4
 * Date: 2025-09-18
 * PURPOSE: Practical family usage guide with tips for different contexts and conversation prompts
 * SRP and DRY check: Pass - Single responsibility of providing family usage guidance
 */

import Layout from "@/components/Layout";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Button } from "@/components/ui/button";
import { Moon, Car, Clock, RefreshCw, Volume2, Eye, MessageCircle, Heart } from "lucide-react";

export default function ForFamilies() {
  return (
    <Layout>
      <div className="py-12 px-4">
        <div className="max-w-4xl mx-auto">
          {/* Header */}
          <div className="text-center mb-12">
            <h1 className="text-4xl md:text-5xl font-bold text-slate-800 mb-4">
              For Families
            </h1>
            <p className="text-lg text-slate-600 leading-relaxed max-w-2xl mx-auto">
              Practical tips for making the most of gentle play time with your toddler.
              From bedtime routines to travel moments, here's how to create meaningful
              shared experiences.
            </p>
          </div>

          {/* Usage Tips by Context */}
          <div className="mb-12">
            <h2 className="text-2xl font-bold text-slate-800 mb-8 text-center">
              Perfect Moments for Peekaboo Play
            </h2>

            <Tabs defaultValue="bedtime" className="w-full">
              <TabsList className="grid w-full grid-cols-4">
                <TabsTrigger value="bedtime" className="text-sm">Bedtime</TabsTrigger>
                <TabsTrigger value="travel" className="text-sm">On-the-go</TabsTrigger>
                <TabsTrigger value="quiet" className="text-sm">Quiet Time</TabsTrigger>
                <TabsTrigger value="transitions" className="text-sm">Transitions</TabsTrigger>
              </TabsList>

              <TabsContent value="bedtime" className="mt-6">
                <Card>
                  <CardHeader>
                    <div className="flex items-center gap-3">
                      <Moon className="w-6 h-6 text-blue-600" />
                      <div>
                        <CardTitle>Bedtime Routines</CardTitle>
                        <CardDescription>Winding down with gentle play</CardDescription>
                      </div>
                    </div>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <p className="text-slate-600">
                      Use Peekaboo Calm as part of your wind-down routine. The soft sounds and
                      peaceful animations help signal that it's time to slow down.
                    </p>
                    <div className="bg-blue-50 p-4 rounded-lg">
                      <h4 className="font-semibold text-slate-800 mb-2">Tips for Success:</h4>
                      <ul className="space-y-1 text-sm text-slate-600">
                        <li>• Dim the screen brightness on your device</li>
                        <li>• Play for just 5-10 minutes before story time</li>
                        <li>• Sit close together and use quiet voices</li>
                        <li>• Talk about the peaceful animals getting ready for sleep too</li>
                      </ul>
                    </div>
                  </CardContent>
                </Card>
              </TabsContent>

              <TabsContent value="travel" className="mt-6">
                <Card>
                  <CardHeader>
                    <div className="flex items-center gap-3">
                      <Car className="w-6 h-6 text-green-600" />
                      <div>
                        <CardTitle>Travel & Waiting</CardTitle>
                        <CardDescription>Calm entertainment anywhere</CardDescription>
                      </div>
                    </div>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <p className="text-slate-600">
                      Both apps work completely offline, making them perfect for planes, car rides,
                      and waiting rooms where you need a few minutes of peaceful engagement.
                    </p>
                    <div className="bg-green-50 p-4 rounded-lg">
                      <h4 className="font-semibold text-slate-800 mb-2">Travel Tips:</h4>
                      <ul className="space-y-1 text-sm text-slate-600">
                        <li>• Download both apps before your trip</li>
                        <li>• Bring child-sized headphones for public spaces</li>
                        <li>• Use Calm for quiet moments, Plunk for more active times</li>
                        <li>• Set a timer so screen time has a clear endpoint</li>
                      </ul>
                    </div>
                  </CardContent>
                </Card>
              </TabsContent>

              <TabsContent value="quiet" className="mt-6">
                <Card>
                  <CardHeader>
                    <div className="flex items-center gap-3">
                      <Clock className="w-6 h-6 text-purple-600" />
                      <div>
                        <CardTitle>Daily Quiet Time</CardTitle>
                        <CardDescription>Peaceful breaks during busy days</CardDescription>
                      </div>
                    </div>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <p className="text-slate-600">
                      When you need 5-10 minutes of calm during a hectic day, Peekaboo apps
                      provide gentle engagement that soothes rather than stimulates.
                    </p>
                    <div className="bg-purple-50 p-4 rounded-lg">
                      <h4 className="font-semibold text-slate-800 mb-2">Creating Calm:</h4>
                      <ul className="space-y-1 text-sm text-slate-600">
                        <li>• Find a comfortable spot to sit together</li>
                        <li>• Let your child guide the pace of play</li>
                        <li>• Use these moments for gentle conversation</li>
                        <li>• Notice what captures their attention most</li>
                      </ul>
                    </div>
                  </CardContent>
                </Card>
              </TabsContent>

              <TabsContent value="transitions" className="mt-6">
                <Card>
                  <CardHeader>
                    <div className="flex items-center gap-3">
                      <RefreshCw className="w-6 h-6 text-orange-600" />
                      <div>
                        <CardTitle>Transition Times</CardTitle>
                        <CardDescription>Smooth changes between activities</CardDescription>
                      </div>
                    </div>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <p className="text-slate-600">
                      Use brief play sessions to help toddlers transition between activities,
                      especially when moving from high-energy to low-energy times.
                    </p>
                    <div className="bg-orange-50 p-4 rounded-lg">
                      <h4 className="font-semibold text-slate-800 mb-2">Transition Strategies:</h4>
                      <ul className="space-y-1 text-sm text-slate-600">
                        <li>• Use Plunk after active play to start winding down</li>
                        <li>• Use Calm before nap time or quiet activities</li>
                        <li>• Keep sessions short (5 minutes) to maintain boundaries</li>
                        <li>• Talk about what comes next while playing</li>
                      </ul>
                    </div>
                  </CardContent>
                </Card>
              </TabsContent>
            </Tabs>
          </div>

          {/* Conversation Prompts */}
          <div className="mb-12">
            <h2 className="text-2xl font-bold text-slate-800 mb-8 text-center">
              Conversation Starters
            </h2>
            <p className="text-center text-slate-600 mb-8 max-w-2xl mx-auto">
              Turn play time into language learning with these gentle prompts
              that encourage exploration and communication.
            </p>

            <div className="grid md:grid-cols-2 gap-6">
              <Card className="bg-blue-50">
                <CardHeader>
                  <div className="flex items-center gap-3">
                    <Heart className="w-6 h-6 text-blue-600" />
                    <CardTitle className="text-lg">For Peekaboo Calm</CardTitle>
                  </div>
                </CardHeader>
                <CardContent>
                  <div className="space-y-3">
                    <div className="p-3 bg-white rounded-lg">
                      <p className="text-sm text-slate-700">"Who's hiding behind the tree?"</p>
                    </div>
                    <div className="p-3 bg-white rounded-lg">
                      <p className="text-sm text-slate-700">"What sound does the owl make?"</p>
                    </div>
                    <div className="p-3 bg-white rounded-lg">
                      <p className="text-sm text-slate-700">"Is the barn sleeping too?"</p>
                    </div>
                    <div className="p-3 bg-white rounded-lg">
                      <p className="text-sm text-slate-700">"Can you find the quiet mouse?"</p>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card className="bg-orange-50">
                <CardHeader>
                  <div className="flex items-center gap-3">
                    <MessageCircle className="w-6 h-6 text-orange-600" />
                    <CardTitle className="text-lg">For Peekaboo Plunk</CardTitle>
                  </div>
                </CardHeader>
                <CardContent>
                  <div className="space-y-3">
                    <div className="p-3 bg-white rounded-lg">
                      <p className="text-sm text-slate-700">"Where do you think the cow will go?"</p>
                    </div>
                    <div className="p-3 bg-white rounded-lg">
                      <p className="text-sm text-slate-700">"Which animal bounces the most?"</p>
                    </div>
                    <div className="p-3 bg-white rounded-lg">
                      <p className="text-sm text-slate-700">"Can you help the pig find a path?"</p>
                    </div>
                    <div className="p-3 bg-white rounded-lg">
                      <p className="text-sm text-slate-700">"What happens when we tap here?"</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>

          {/* Accessibility & Sensory Support */}
          <div className="mb-12">
            <h2 className="text-2xl font-bold text-slate-800 mb-8 text-center">
              Making It Work for Your Child
            </h2>

            <div className="grid md:grid-cols-2 gap-6">
              <Card>
                <CardHeader>
                  <div className="flex items-center gap-3">
                    <Volume2 className="w-6 h-6 text-green-600" />
                    <CardTitle className="text-lg">Audio Adjustments</CardTitle>
                  </div>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2 text-slate-600">
                    <li className="flex items-start gap-2">
                      <div className="w-2 h-2 bg-green-500 rounded-full mt-2 flex-shrink-0"></div>
                      <span>Lower device volume for sensitive ears</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <div className="w-2 h-2 bg-green-500 rounded-full mt-2 flex-shrink-0"></div>
                      <span>Use headphones in public spaces</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <div className="w-2 h-2 bg-green-500 rounded-full mt-2 flex-shrink-0"></div>
                      <span>Play with sound off for silent play</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <div className="w-2 h-2 bg-green-500 rounded-full mt-2 flex-shrink-0"></div>
                      <span>Provide narration if child has hearing differences</span>
                    </li>
                  </ul>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <div className="flex items-center gap-3">
                    <Eye className="w-6 h-6 text-blue-600" />
                    <CardTitle className="text-lg">Visual Comfort</CardTitle>
                  </div>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2 text-slate-600">
                    <li className="flex items-start gap-2">
                      <div className="w-2 h-2 bg-blue-500 rounded-full mt-2 flex-shrink-0"></div>
                      <span>Adjust screen brightness for comfort</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <div className="w-2 h-2 bg-blue-500 rounded-full mt-2 flex-shrink-0"></div>
                      <span>Enable "Reduce Motion" in device settings</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <div className="w-2 h-2 bg-blue-500 rounded-full mt-2 flex-shrink-0"></div>
                      <span>Take breaks if child seems overstimulated</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <div className="w-2 h-2 bg-blue-500 rounded-full mt-2 flex-shrink-0"></div>
                      <span>Hold device at comfortable viewing distance</span>
                    </li>
                  </ul>
                </CardContent>
              </Card>
            </div>
          </div>

          {/* Call to Action */}
          <div className="text-center bg-slate-50 rounded-lg p-8">
            <h2 className="text-2xl font-bold text-slate-800 mb-4">
              Ready to Create Gentle Moments?
            </h2>
            <p className="text-slate-600 mb-6 max-w-2xl mx-auto">
              Start building calm, connected play experiences with your toddler today.
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
                href="/why-it-works"
                className="flex-1"
              >
                <Button variant="outline" className="w-full">
                  Learn the Science
                </Button>
              </a>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
}
/**
 * Author: Sonnet 4
 * Date: 2025-09-18
 * PURPOSE: Lightweight press page with media kit resources and contact information
 * SRP and DRY check: Pass - Single responsibility of providing press resources and media kit
 */

import Layout from "@/components/Layout";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Download, Mail, ExternalLink, FileText, Image, Award, Users } from "lucide-react";

export default function Press() {
  return (
    <Layout>
      <div className="py-12 px-4">
        <div className="max-w-4xl mx-auto">
          {/* Header */}
          <div className="text-center mb-12">
            <h1 className="text-4xl md:text-5xl font-bold text-slate-800 mb-4">
              Press & Media
            </h1>
            <p className="text-lg text-slate-600 leading-relaxed max-w-2xl mx-auto">
              Resources for journalists, educators, and researchers covering Peekaboo Interactive
              and our gentle approach to early childhood digital experiences.
            </p>
          </div>

          {/* Quick Facts */}
          <div className="mb-12">
            <h2 className="text-2xl font-bold text-slate-800 mb-8 text-center">
              Quick Facts
            </h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4">
              <Card className="text-center">
                <CardContent className="pt-6">
                  <Award className="w-8 h-8 text-blue-600 mx-auto mb-2" />
                  <div className="text-2xl font-bold text-slate-800">2008</div>
                  <div className="text-sm text-slate-600">Founded by Brianne Baker</div>
                </CardContent>
              </Card>

              <Card className="text-center">
                <CardContent className="pt-6">
                  <Users className="w-8 h-8 text-green-600 mx-auto mb-2" />
                  <div className="text-2xl font-bold text-slate-800">Millions</div>
                  <div className="text-sm text-slate-600">Families worldwide</div>
                </CardContent>
              </Card>

              <Card className="text-center">
                <CardContent className="pt-6">
                  <FileText className="w-8 h-8 text-purple-600 mx-auto mb-2" />
                  <div className="text-2xl font-bold text-slate-800">0-4</div>
                  <div className="text-sm text-slate-600">Age range focus</div>
                </CardContent>
              </Card>

              <Card className="text-center">
                <CardContent className="pt-6">
                  <Download className="w-8 h-8 text-orange-600 mx-auto mb-2" />
                  <div className="text-2xl font-bold text-slate-800">$1.99</div>
                  <div className="text-sm text-slate-600">Per app price</div>
                </CardContent>
              </Card>
            </div>
          </div>

          {/* App Descriptions */}
          <div className="mb-12">
            <h2 className="text-2xl font-bold text-slate-800 mb-8 text-center">
              App Descriptions
            </h2>
            <div className="grid md:grid-cols-2 gap-6">
              <Card>
                <CardHeader>
                  <CardTitle className="text-lg">Peekaboo Calm</CardTitle>
                  <CardDescription>Peaceful play for bedtime and quiet moments</CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div>
                    <h4 className="font-semibold text-slate-800 mb-2">150-word description:</h4>
                    <p className="text-sm text-slate-600 leading-relaxed">
                      Peekaboo Calm offers peaceful nature backgrounds with gentle animal surprises
                      designed specifically for toddlers ages 0-4. Created by renowned children's
                      illustrator Brianne Baker, the app features soft sounds, calming animations,
                      and sensory-friendly design principles. Perfect for bedtime routines, quiet
                      time, and sensory breaks, Peekaboo Calm helps create moments of peace
                      throughout a toddler's day. The app works completely offline with zero data
                      collection, no advertising, and no social features—ensuring pure, safe
                      exploration. Large touch targets and simple interactions support developing
                      motor skills without frustration. Used by families, therapists, and
                      educators worldwide, Peekaboo Calm demonstrates how thoughtful design can
                      create meaningful digital experiences that soothe rather than stimulate,
                      supporting emotional regulation and gentle learning.
                    </p>
                  </div>
                  <div>
                    <h4 className="font-semibold text-slate-800 mb-2">25-word description:</h4>
                    <p className="text-sm text-slate-600">
                      Peaceful nature backgrounds with gentle animal surprises. Perfect for bedtime
                      routines and quiet moments. Ages 0-4. Completely private and ad-free.
                    </p>
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle className="text-lg">Peekaboo Plunk</CardTitle>
                  <CardDescription>Gentle cause-and-effect learning through play</CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div>
                    <h4 className="font-semibold text-slate-800 mb-2">150-word description:</h4>
                    <p className="text-sm text-slate-600 leading-relaxed">
                      Peekaboo Plunk introduces toddlers ages 0-4 to cause-and-effect learning
                      through gentle animal-dropping gameplay on a Galton board. Created by
                      renowned children's illustrator Brianne Baker, the app develops coordination
                      and problem-solving skills through delightful interactions. Children tap to
                      drop animals and watch them bounce down the board, learning about gravity,
                      patterns, and prediction in a pressure-free environment. The app features
                      large touch targets, gentle rewards, and educational design principles that
                      engage without overwhelming. Working completely offline with zero data
                      collection and no advertising, Peekaboo Plunk provides pure educational fun.
                      Used by families, educators, and therapists worldwide, the app demonstrates
                      how cause-and-effect learning can be both gentle and engaging, supporting
                      cognitive development through natural play patterns and meaningful
                      interactions.
                    </p>
                  </div>
                  <div>
                    <h4 className="font-semibold text-slate-800 mb-2">25-word description:</h4>
                    <p className="text-sm text-slate-600">
                      Drop animals down a Galton board and watch them bounce. Develops coordination
                      and problem-solving. Ages 0-4. Educational and ad-free.
                    </p>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>

          {/* App Store Links */}
          <div className="mb-12">
            <h2 className="text-2xl font-bold text-slate-800 mb-8 text-center">
              Official App Store Pages
            </h2>
            <div className="grid md:grid-cols-2 gap-6">
              <Card>
                <CardContent className="pt-6">
                  <div className="text-center space-y-4">
                    <h3 className="font-semibold text-slate-800">Peekaboo Calm</h3>
                    <a
                      href="https://apps.apple.com/us/app/peekaboo-calm/id6748668506"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 text-blue-600 hover:text-blue-700"
                    >
                      <ExternalLink className="w-4 h-4" />
                      View on App Store
                    </a>
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardContent className="pt-6">
                  <div className="text-center space-y-4">
                    <h3 className="font-semibold text-slate-800">Peekaboo Plunk</h3>
                    <a
                      href="https://apps.apple.com/us/app/peekaboo-plunk/id6749132469"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 text-blue-600 hover:text-blue-700"
                    >
                      <ExternalLink className="w-4 h-4" />
                      View on App Store
                    </a>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>

          {/* Media Kit */}
          <div className="mb-12">
            <h2 className="text-2xl font-bold text-slate-800 mb-8 text-center">
              Media Kit Resources
            </h2>
            <Card className="bg-slate-50">
              <CardHeader>
                <CardTitle className="text-center">Downloadable Assets</CardTitle>
                <CardDescription className="text-center">
                  High-resolution images and brand materials for media use
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="grid md:grid-cols-2 gap-4">
                  <div className="space-y-3">
                    <h4 className="font-semibold text-slate-800">App Icons & Screenshots:</h4>
                    <ul className="space-y-1 text-sm text-slate-600">
                      <li>• High-resolution app icons (1024x1024)</li>
                      <li>• App Store screenshots (various device sizes)</li>
                      <li>• Promotional banner images</li>
                      <li>• Brand logos and mark variations</li>
                    </ul>
                  </div>
                  <div className="space-y-3">
                    <h4 className="font-semibold text-slate-800">Brand Assets:</h4>
                    <ul className="space-y-1 text-sm text-slate-600">
                      <li>• Company logo files</li>
                      <li>• Brianne Baker artwork samples</li>
                      <li>• Color palette and brand guidelines</li>
                      <li>• Founder photos (where available)</li>
                    </ul>
                  </div>
                </div>
                <div className="text-center mt-6">
                  <Button variant="outline" className="text-slate-600">
                    <Download className="w-4 h-4 mr-2" />
                    Media Kit Coming Soon
                  </Button>
                  <p className="text-xs text-slate-500 mt-2">
                    Contact us for immediate asset needs
                  </p>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Research & Background */}
          <div className="mb-12">
            <h2 className="text-2xl font-bold text-slate-800 mb-8 text-center">
              Research & Background
            </h2>
            <div className="grid md:grid-cols-2 gap-6">
              <Card>
                <CardHeader>
                  <CardTitle className="text-lg">Educational Research</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-slate-600 mb-4">
                    Our approach is validated by academic research demonstrating positive
                    outcomes in early childhood learning engagement and knowledge retention.
                  </p>
                  <a href="/research" className="inline-flex items-center gap-2 text-blue-600 hover:text-blue-700">
                    <FileText className="w-4 h-4" />
                    View Research Papers
                  </a>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle className="text-lg">Design Philosophy</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-slate-600 mb-4">
                    Learn about our toddler-first design principles and why gentle play
                    matters for early childhood development.
                  </p>
                  <a href="/why-it-works" className="inline-flex items-center gap-2 text-blue-600 hover:text-blue-700">
                    <FileText className="w-4 h-4" />
                    Design Principles
                  </a>
                </CardContent>
              </Card>
            </div>
          </div>

          {/* Contact */}
          <div className="text-center bg-blue-50 rounded-lg p-8">
            <h2 className="text-2xl font-bold text-slate-800 mb-4">
              Press Inquiries
            </h2>
            <p className="text-slate-600 mb-6 max-w-2xl mx-auto">
              For interviews, additional assets, or story development, we're here to help.
              We respond to all press inquiries within 24 hours.
            </p>
            <a
              href="mailto:press@peekaboointeractive.com"
              className="inline-flex items-center gap-2 px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors"
            >
              <Mail className="w-5 h-5" />
              press@peekaboointeractive.com
            </a>
            <p className="text-sm text-slate-500 mt-4">
              Please include your publication, deadline, and specific needs
            </p>
          </div>
        </div>
      </div>
    </Layout>
  );
}
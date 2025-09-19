/**
 * Author: Sonnet 4
 * Date: 2025-09-18
 * PURPOSE: About page condensing Brianne Baker legacy and studio story for educational credibility
 * SRP and DRY check: Pass - Single responsibility of telling the studio story and heritage
 */

import Layout from "@/components/Layout";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Heart, Users, Shield, Palette, Mail, Award } from "lucide-react";
import pigLogoPath from "@assets/IMG_8259.png";
import pigFarmPath from "@assets/IMG_8260.png";

export default function About() {
  return (
    <Layout>
      <div className="py-12 px-4">
        <div className="max-w-4xl mx-auto">
          {/* Header */}
          <div className="text-center mb-12">
            <div className="mb-6">
              <img
                src={pigLogoPath}
                alt="Peekaboo Interactive - Pig Logo"
                className="w-32 h-auto mx-auto rounded-lg shadow-lg"
              />
            </div>
            <h1 className="text-4xl md:text-5xl font-bold text-slate-800 mb-4">
              Our Story
            </h1>
            <p className="text-lg text-slate-600 leading-relaxed max-w-2xl mx-auto">
              Where legendary design meets modern innovation for the next generation
              of gentle, educational experiences.
            </p>
          </div>

          {/* Main Story */}
          <div className="mb-12">
            <div className="grid md:grid-cols-2 gap-8 items-center mb-8">
              <div>
                <h2 className="text-2xl font-bold text-slate-800 mb-4">
                  The Brianne Baker Legacy
                </h2>
                <p className="text-slate-600 leading-relaxed mb-4">
                  Since 2008, renowned children's illustrator Brianne Baker's distinctive artistry
                  has defined childhood wonder for millions of families worldwide. Her intuitive
                  understanding of early development, paired with extraordinary artistic vision,
                  created some of the most beloved characters in children's digital media.
                </p>
                <p className="text-slate-600 leading-relaxed">
                  Baker's artistic philosophy centers on respect for developing minds—every curve,
                  color, and character emerges from deep understanding of what captivates young
                  hearts while supporting cognitive growth.
                </p>
              </div>
              <div className="flex justify-center">
                <img
                  src={pigFarmPath}
                  alt="Peekaboo Farm Scene with Pig, Chickens, and Barn"
                  className="w-full max-w-sm h-auto rounded-lg shadow-lg"
                />
              </div>
            </div>
          </div>

          {/* Our Mission */}
          <div className="mb-12">
            <h2 className="text-2xl font-bold text-slate-800 mb-8 text-center">
              Carrying the Vision Forward
            </h2>
            <div className="grid md:grid-cols-2 gap-6">
              <Card>
                <CardHeader>
                  <div className="flex items-center gap-3">
                    <Palette className="w-6 h-6 text-purple-600" />
                    <CardTitle className="text-lg">Artistic Excellence</CardTitle>
                  </div>
                </CardHeader>
                <CardContent>
                  <p className="text-slate-600">
                    We preserve and extend Brianne Baker's artistic legacy, maintaining the
                    geometric precision and vibrant palette that create visual experiences
                    which engage without overwhelming.
                  </p>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <div className="flex items-center gap-3">
                    <Heart className="w-6 h-6 text-pink-600" />
                    <CardTitle className="text-lg">Developmental Care</CardTitle>
                  </div>
                </CardHeader>
                <CardContent>
                  <p className="text-slate-600">
                    Every interaction is designed with early childhood development in mind,
                    creating meaningful learning experiences that educate without lecturing
                    and delight without distraction.
                  </p>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <div className="flex items-center gap-3">
                    <Shield className="w-6 h-6 text-green-600" />
                    <CardTitle className="text-lg">Privacy First</CardTitle>
                  </div>
                </CardHeader>
                <CardContent>
                  <p className="text-slate-600">
                    We stand as unwavering guardians of safe play experiences with zero data
                    collection, complete offline functionality, and absolute freedom from
                    advertising or social features.
                  </p>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <div className="flex items-center gap-3">
                    <Users className="w-6 h-6 text-blue-600" />
                    <CardTitle className="text-lg">Professional Trust</CardTitle>
                  </div>
                </CardHeader>
                <CardContent>
                  <p className="text-slate-600">
                    Trusted by thousands of classrooms, therapy centers, and special education
                    programs worldwide. From early intervention specialists to ESL educators,
                    professionals rely on our research-based designs.
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>

          {/* Studio Values */}
          <div className="mb-12">
            <h2 className="text-2xl font-bold text-slate-800 mb-8 text-center">
              Independent Studio Values
            </h2>
            <div className="bg-slate-50 rounded-lg p-8">
              <div className="grid md:grid-cols-3 gap-6 text-center">
                <div>
                  <Award className="w-8 h-8 text-gold-600 mx-auto mb-3" />
                  <h3 className="font-semibold text-slate-800 mb-2">Woman-Led</h3>
                  <p className="text-sm text-slate-600">
                    As a woman-led indie kids educational studio, every creation reflects our
                    dedication to meaningful childhood experiences.
                  </p>
                </div>
                <div>
                  <Heart className="w-8 h-8 text-pink-600 mx-auto mb-3" />
                  <h3 className="font-semibold text-slate-800 mb-2">Love-Driven</h3>
                  <p className="text-sm text-slate-600">
                    We believe exceptional children's technology emerges from love, expertise,
                    and unwavering commitment to developmental appropriateness.
                  </p>
                </div>
                <div>
                  <Shield className="w-8 h-8 text-green-600 mx-auto mb-3" />
                  <h3 className="font-semibold text-slate-800 mb-2">Value-Driven</h3>
                  <p className="text-sm text-slate-600">
                    Not corporate algorithms or market trends—our decisions prioritize
                    child development, family connection, and educational integrity.
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Technical Innovation */}
          <div className="mb-12">
            <Card className="bg-blue-50">
              <CardHeader>
                <CardTitle className="text-xl text-center">Innovation Rooted in Excellence</CardTitle>
                <CardDescription className="text-center">
                  Modern technology serving timeless educational principles
                </CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-slate-600 text-center max-w-2xl mx-auto">
                  While honoring Brianne Baker's artistic vision, we're pioneering new approaches
                  to educational technology. Our complete app rebuilds utilize cutting-edge frameworks
                  designed for longevity and institutional reliability, ensuring these cherished
                  experiences will serve generations of learners ahead.
                </p>
              </CardContent>
            </Card>
          </div>

          {/* Legacy & Contact */}
          <div className="text-center space-y-6">
            <div>
              <h2 className="text-xl font-bold text-slate-800 mb-4">
                Continuing the Journey
              </h2>
              <p className="text-slate-600 mb-4 max-w-2xl mx-auto">
                Peekaboo Interactive Games proudly carries forward this extraordinary creative legacy,
                breathing new life into beloved classics while maintaining the artistic integrity
                that has made these experiences treasured by educators, therapists, and families globally.
              </p>
            </div>

            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <p className="text-sm text-slate-600">
                Legacy information:
                <a
                  href="https://www.nightandday.co/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-blue-600 hover:text-blue-700 underline ml-1"
                >
                  nightandday.co
                </a>
              </p>
              <div className="hidden sm:block w-px h-4 bg-slate-300"></div>
              <a
                href="mailto:support@peekaboointeractive.com"
                className="inline-flex items-center gap-2 text-sm text-blue-600 hover:text-blue-700"
              >
                <Mail className="w-4 h-4" />
                Contact Us
              </a>
            </div>

            <div className="pt-8">
              <div className="flex flex-col sm:flex-row gap-4 justify-center max-w-md mx-auto">
                <a href="/apps" className="flex-1">
                  <Button className="w-full">
                    Explore Our Apps
                  </Button>
                </a>
                <a href="/why-it-works" className="flex-1">
                  <Button variant="outline" className="w-full">
                    See the Research
                  </Button>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
}
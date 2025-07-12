import Image from "next/image";
import { Card, CardContent } from "@/components/ui/card";
import { GraduationCap, Briefcase, Award } from "lucide-react";

export function AboutSection() {
  return (
    <section id="about" className="py-24 px-6">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <p className="text-lg text-white/70 mb-4 font-light tracking-wide">
            Get to know
          </p>
          <h2 className="text-5xl font-bold text-white mb-6 bg-gradient-to-r from-white to-purple-200 bg-clip-text text-transparent">
            About Me
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-purple-400 to-pink-400 mx-auto rounded-full"></div>
        </div>

        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <div className="relative">
            <div className="aspect-[3/4] max-w-md mx-auto relative">
              <Image
                src="/placeholder.svg?height=500&width=400"
                alt="Ahnaf Sayem"
                width={400}
                height={500}
                className="w-full h-full object-cover rounded-2xl shadow-2xl"
              />
              <div className="absolute -inset-4 bg-gradient-to-r from-purple-400/20 to-pink-400/20 rounded-2xl blur-xl"></div>
            </div>
          </div>

          <div className="space-y-8">
            <p className="text-xl text-white/80 leading-relaxed font-light">
              Aspiring Data Scientist & Machine Learning enthusiast with a
              passion for transforming raw data into actionable insights.
              Proficient in SQL, analytics, and various ML algorithms, I
              specialize in solving real-world problems through data-driven
              solutions.
            </p>

            <div className="grid gap-6">
              <Card className="bg-white/10 backdrop-blur-xl border-white/20 hover:bg-white/15 transition-all duration-300">
                <CardContent className="p-6">
                  <div className="flex items-start gap-4">
                    <div className="p-3 bg-gradient-to-r from-purple-500 to-pink-500 rounded-lg">
                      <GraduationCap className="w-6 h-6 text-white" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-white text-lg mb-2">
                        Education
                      </h3>
                      <p className="text-white/80">
                        BSc in Computer & Engineering, BU (2019-2022)
                        <br />
                        <span className="text-purple-200">CGPA: 3.18/4.00</span>
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card className="bg-white/10 backdrop-blur-xl border-white/20 hover:bg-white/15 transition-all duration-300">
                <CardContent className="p-6">
                  <div className="flex items-start gap-4">
                    <div className="p-3 bg-gradient-to-r from-purple-500 to-pink-500 rounded-lg">
                      <Briefcase className="w-6 h-6 text-white" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-white text-lg mb-2">
                        Experience
                      </h3>
                      <p className="text-white/80">
                        Data Science & ML Projects
                        <br />
                        <span className="text-purple-200">
                          January 2024 to present
                        </span>
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card className="bg-white/10 backdrop-blur-xl border-white/20 hover:bg-white/15 transition-all duration-300">
                <CardContent className="p-6">
                  <div className="flex items-start gap-4">
                    <div className="p-3 bg-gradient-to-r from-purple-500 to-pink-500 rounded-lg">
                      <Award className="w-6 h-6 text-white" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-white text-lg mb-2">
                        Expertise
                      </h3>
                      <div className="flex flex-wrap gap-2 mt-2">
                        {[
                          "Python",
                          "Machine Learning",
                          "SQL",
                          "Data Science",
                          "Generative AI",
                        ].map((skill) => (
                          <span
                            key={skill}
                            className="px-3 py-1 bg-white/20 text-white text-sm rounded-full backdrop-blur-sm"
                          >
                            {skill}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

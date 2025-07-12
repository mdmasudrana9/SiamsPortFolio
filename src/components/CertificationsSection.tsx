import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Trophy, Award, Star, Medal } from "lucide-react";

const certifications = [
  {
    title: "Top Performer in the 'Battle of Insights' by Data Solutions 360",
    description:
      "Achieved recognition as a top performer in a major data analytics competition, demonstrating exceptional skills in data analysis, visualization, and insight generation.",
    icon: Trophy,
    color: "from-orange-500 to-red-500",
    year: "2024",
    type: "Competition Award",
  },
  {
    title: "Machine Learning Engineer - DataCamp",
    description:
      "Comprehensive certification covering end-to-end ML workflow, from data preprocessing to model deployment, including supervised and unsupervised learning techniques.",
    icon: Award,
    color: "from-green-500 to-emerald-500",
    year: "2024",
    type: "Professional Certification",
  },
  {
    title: "Associate Data Scientist in Python: DataCamp",
    description:
      "Validates proficiency in Python for data science applications, covering data manipulation, statistical analysis, and machine learning implementation.",
    icon: Star,
    color: "from-blue-500 to-cyan-500",
    year: "2023",
    type: "Professional Certification",
  },
  {
    title: "Python Fundamentals Skill Track: DataCamp",
    description:
      "Foundational certification demonstrating solid understanding of Python programming concepts including data types, control structures, and OOP.",
    icon: Medal,
    color: "from-purple-500 to-pink-500",
    year: "2023",
    type: "Skill Certification",
  },
];

export function CertificationsSection() {
  return (
    <section id="certifications" className="py-24 px-6">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <p className="text-lg text-white/70 mb-4 font-light tracking-wide">
            Proud Moments
          </p>
          <h2 className="text-5xl font-bold text-white mb-6 bg-gradient-to-r from-white to-purple-200 bg-clip-text text-transparent">
            Certifications & Awards
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-purple-400 to-pink-400 mx-auto rounded-full"></div>
        </div>

        <div className="grid lg:grid-cols-2 gap-8">
          {certifications.map((cert, index) => (
            <Card
              key={index}
              className="bg-white/10 backdrop-blur-xl border-white/20 hover:bg-white/15 transition-all duration-300 group"
            >
              <CardContent className="p-8">
                <div className="flex items-start gap-6">
                  <div
                    className={`p-4 bg-gradient-to-r ${cert.color} rounded-2xl flex-shrink-0 group-hover:scale-110 transition-transform duration-300`}
                  >
                    <cert.icon className="w-8 h-8 text-white" />
                  </div>
                  <div className="flex-1 space-y-4">
                    <div>
                      <div className="flex items-center gap-3 mb-2">
                        <Badge
                          variant="secondary"
                          className="bg-white/20 text-white border-white/30"
                        >
                          {cert.type}
                        </Badge>
                        <span className="text-purple-300 text-sm font-medium">
                          {cert.year}
                        </span>
                      </div>
                      <h3 className="text-xl font-bold text-white mb-3 group-hover:text-purple-200 transition-colors">
                        {cert.title}
                      </h3>
                      <p className="text-white/70 leading-relaxed">
                        {cert.description}
                      </p>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}

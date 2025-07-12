import { Card, CardContent } from "@/components/ui/card";
import { Code, Database, BarChart3 } from "lucide-react";

export function SkillsSection() {
  const skillCategories = [
    {
      title: "Programming Languages",
      icon: Code,
      skills: [
        { name: "Python", level: 90 },
        { name: "R", level: 85 },
        { name: "SQL", level: 88 },
        { name: "JavaScript", level: 75 },
        { name: "HTML/CSS", level: 80 },
        { name: "C++", level: 70 },
        { name: "Java", level: 65 },
        { name: "MATLAB", level: 60 },
      ],
    },
    {
      title: "Libraries & Frameworks",
      icon: Database,
      skills: [
        { name: "Pandas", level: 95 },
        { name: "NumPy", level: 90 },
        { name: "Matplotlib", level: 85 },
        { name: "Seaborn", level: 85 },
        { name: "Scikit-learn", level: 88 },
        { name: "TensorFlow", level: 80 },
        { name: "Keras", level: 78 },
        { name: "Flask", level: 70 },
      ],
    },
    {
      title: "Software & Tools",
      icon: BarChart3,
      skills: [
        { name: "Jupyter Notebook", level: 95 },
        { name: "Google Colab", level: 90 },
        { name: "VS Code", level: 88 },
        { name: "Git & GitHub", level: 85 },
        { name: "Tableau", level: 82 },
        { name: "Power BI", level: 78 },
        { name: "Excel", level: 90 },
        { name: "MS Office", level: 85 },
      ],
    },
  ];

  return (
    <section id="skills" className="py-24 px-6">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <p className="text-lg text-white/70 mb-4 font-light tracking-wide">
            Explore my
          </p>
          <h2 className="text-5xl font-bold text-white mb-6 bg-gradient-to-r from-white to-purple-200 bg-clip-text text-transparent">
            Technical Skills
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-purple-400 to-pink-400 mx-auto rounded-full"></div>
        </div>

        <div className="grid lg:grid-cols-3 gap-8">
          {skillCategories.map((category, index) => (
            <Card
              key={index}
              className="bg-white/10 backdrop-blur-xl border-white/20 hover:bg-white/15 transition-all duration-300"
            >
              <CardContent className="p-8">
                <div className="text-center mb-8">
                  <div className="inline-flex p-4 bg-gradient-to-r from-purple-500 to-pink-500 rounded-2xl mb-4">
                    <category.icon className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-xl font-bold text-white">
                    {category.title}
                  </h3>
                </div>

                <div className="space-y-4">
                  {category.skills.map((skill, skillIndex) => (
                    <div key={skillIndex} className="space-y-2">
                      <div className="flex justify-between items-center">
                        <span className="text-white/90 font-medium">
                          {skill.name}
                        </span>
                        <span className="text-purple-300 text-sm">
                          {skill.level}%
                        </span>
                      </div>
                      <div className="w-full bg-white/20 rounded-full h-2 overflow-hidden">
                        <div
                          className="h-full bg-gradient-to-r from-purple-400 to-pink-400 rounded-full transition-all duration-1000 ease-out"
                          style={{ width: `${skill.level}%` }}
                        ></div>
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}

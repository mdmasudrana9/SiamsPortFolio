import Image from "next/image";
import { Card, CardContent } from "@/components/ui/card";
import { Quote } from "lucide-react";

const appraisals = [
  {
    name: "Nifis Tarik",
    role: "Software Engineer",
    company: "Therap (BD) Ltd.",
    image: "/placeholder.svg?height=100&width=100",
    testimonial:
      "Siam is experienced and talented. He has the ability to understand complex problems and provide effective solutions. His analytical mindset is truly impressive.",
    rating: 5,
  },
  {
    name: "Ahnaf Sayem",
    role: "Research Scientist",
    company: "Therap (BD) Ltd.",
    image: "/placeholder.svg?height=100&width=100",
    testimonial:
      "Working with siam has been a great experience. His analytical skills and attention to detail are remarkable. He consistently delivers high-quality work.",
    rating: 5,
  },
  {
    name: "Anindya Basak",
    role: "Software Engineer",
    company: "Therap (BD) Ltd.",
    image: "/placeholder.svg?height=100&width=100",
    testimonial:
      "Siam is an exceptional team player with strong technical skills and great problem-solving abilities. His dedication to learning is inspiring.",
    rating: 5,
  },
];

export function AppraisalsSection() {
  return (
    <section className="py-24 px-6">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <p className="text-lg text-white/70 mb-4 font-light tracking-wide">
            What people say
          </p>
          <h2 className="text-5xl font-bold text-white mb-6 bg-gradient-to-r from-white to-purple-200 bg-clip-text text-transparent">
            Testimonials
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-purple-400 to-pink-400 mx-auto rounded-full"></div>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {appraisals.map((appraisal, index) => (
            <Card
              key={index}
              className="bg-white/10 backdrop-blur-xl border-white/20 hover:bg-white/15 transition-all duration-300 group"
            >
              <CardContent className="p-8 text-center space-y-6">
                <Quote className="w-8 h-8 text-purple-300 mx-auto" />

                <p className="text-white/80 italic leading-relaxed text-lg">
                  &quot;{appraisal.testimonial}&quot;
                </p>

                <div className="flex justify-center mb-4">
                  {[...Array(appraisal.rating)].map((_, i) => (
                    <div
                      key={i}
                      className="w-5 h-5 bg-gradient-to-r from-yellow-400 to-orange-400 rounded-full mr-1"
                    ></div>
                  ))}
                </div>

                <div className="flex items-center justify-center gap-4">
                  <div className="w-16 h-16 rounded-full overflow-hidden border-2 border-white/30">
                    <Image
                      src={appraisal.image || "/placeholder.svg"}
                      alt={appraisal.name}
                      width={64}
                      height={64}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div className="text-left">
                    <h3 className="font-bold text-white text-lg">
                      {appraisal.name}
                    </h3>
                    <p className="text-purple-300 text-sm">{appraisal.role}</p>
                    <p className="text-white/60 text-xs">{appraisal.company}</p>
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

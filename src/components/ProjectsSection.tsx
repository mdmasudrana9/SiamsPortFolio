import Image from "next/image";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { ExternalLink, Github } from "lucide-react";

const projects = [
  {
    title: "Retail Transaction Insights and Trends (EDA)",
    description:
      "Comprehensive exploratory data analysis of retail transactions to identify patterns and trends",
    image: "/48eb8750-e8b8-4348-81f3-d5630af4bf0b.jpeg?height=250&width=400",
    category: "Data Science",
    tags: ["Python", "Pandas", "Matplotlib"],
  },
  {
    title: "From Goals to Glory: UCL EDA (2009-2017)",
    description:
      "Statistical analysis of UEFA Champions League data spanning 8 years of football history",
    image: "/4de2b8fe-172c-4d45-8b24-d5c7b92ce1f1.jpeg?height=250&width=400",
    category: "Sports Analytics",
    tags: ["R", "ggplot2", "Statistics"],
  },
  {
    title: "Exploring Telecom Customer Churn Trends",
    description:
      "Machine learning model to predict customer churn and identify key retention factors",
    image: "/702ed499-b271-41a7-b9f7-5e0ffcfcc401.jpeg?height=250&width=400",
    category: "Machine Learning",
    tags: ["Scikit-learn", "XGBoost", "Feature Engineering"],
  },
  {
    title: "Sales Forecasting Dashboard",
    description:
      "Interactive dashboard for sales prediction using time series analysis",
    image: "/7c7af1ab-67f3-4eed-8bda-c29605af41bf.jpeg?height=250&width=400",
    category: "Business Intelligence",
    tags: ["Tableau", "Time Series", "Forecasting"],
  },
  {
    title: "Sentiment Analysis Engine",
    description:
      "NLP model for analyzing customer sentiment from social media data",
    image: "/956fc919-1dd4-4810-ba7f-df0fe3d2be7c.jpeg?height=250&width=400",
    category: "Natural Language Processing",
    tags: ["NLTK", "Transformers", "Deep Learning"],
  },
  {
    title: "Python Playtime: Coding Classic Games",
    description:
      "Recreation of classic games using Python and object-oriented programming",
    image: "/e1a579c7-c253-4d17-93db-e4858519620e.jpeg?height=250&width=400",
    category: "Programming",
    tags: ["Python", "Pygame", "OOP"],
  },
];

export function ProjectsSection() {
  return (
    <section id="projects" className="py-24 px-6">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <p className="text-lg text-white/70 mb-4 font-light tracking-wide">
            Browse my recent
          </p>
          <h2 className="text-5xl font-bold text-white mb-6 bg-gradient-to-r from-white to-purple-200 bg-clip-text text-transparent">
            Projects
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-purple-400 to-pink-400 mx-auto rounded-full"></div>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <Card
              key={index}
              className="bg-white/10 backdrop-blur-xl border-white/20 hover:bg-white/15 transition-all duration-300 group overflow-hidden"
            >
              <CardContent className="p-0">
                <div className="aspect-video relative overflow-hidden">
                  <Image
                    src={project.image || "/placeholder.svg"}
                    alt={project.title}
                    fill
                    className="object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                </div>
                <div className="p-6 space-y-4">
                  <div>
                    <span className="text-xs text-purple-300 font-medium uppercase tracking-wide">
                      {project.category}
                    </span>
                    <h3 className="font-bold text-white text-lg mt-2 line-clamp-2 group-hover:text-purple-200 transition-colors">
                      {project.title}
                    </h3>
                    <p className="text-white/70 text-sm mt-2 line-clamp-2">
                      {project.description}
                    </p>
                  </div>

                  <div className="flex flex-wrap gap-2">
                    {project.tags.map((tag) => (
                      <span
                        key={tag}
                        className="px-2 py-1 bg-white/20 text-white text-xs rounded-md backdrop-blur-sm"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>

                  <div className="flex gap-2 pt-2">
                    <Button
                      size="sm"
                      className="flex-1 bg-gradient-to-r from-purple-500 to-pink-500 hover:from-purple-600 hover:to-pink-600 text-white"
                    >
                      <Github className="w-4 h-4 mr-2" />
                      Code
                    </Button>
                    <Button
                      size="sm"
                      variant="outline"
                      className="border-white/30 text-white hover:bg-white/10 bg-transparent"
                    >
                      <ExternalLink className="w-4 h-4" />
                    </Button>
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

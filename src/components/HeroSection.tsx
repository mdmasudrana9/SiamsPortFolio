import Image from "next/image";
import { Button } from "@/components/ui/button";
import { Download, MessageCircle, ArrowDown } from "lucide-react";

export function HeroSection() {
  return (
    <section className="min-h-screen flex items-center justify-center px-6 pt-20">
      <div className="max-w-6xl mx-auto text-center">
        <div className="mb-8">
          <p className="text-lg text-white/70 mb-6 font-light tracking-wide">
            Hello! This is
          </p>
          <div className="flex flex-col lg:flex-row items-center justify-center gap-12 mb-12">
            <div className="relative">
              <div className="w-48 h-48 rounded-full overflow-hidden border-4 border-white/20 shadow-2xl">
                <Image
                  src="/placeholder.svg?height=192&width=192"
                  alt="Siam"
                  width={192}
                  height={192}
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="absolute -inset-4 bg-gradient-to-r from-purple-400/20 to-pink-400/20 rounded-full blur-xl"></div>
            </div>
            <div className="text-center lg:text-left">
              <h1 className="text-4xl lg:text-7xl font-bold text-white mb-4 bg-gradient-to-r from-white via-purple-100 to-pink-100 bg-clip-text text-transparent">
                Shahad Parvez Siam
              </h1>
              <div className="space-y-2 mb-6">
                <p className="text-2xl text-white/90 font-medium">
                  Data Scientist | Data Analyst
                </p>
                <p className="text-xl text-purple-200 font-light">
                  ML Enthusiast
                </p>
              </div>
              <p className="text-lg text-white/70 max-w-lg leading-relaxed">
                Bridging the gap between Data & Insights through innovative
                machine learning solutions
              </p>
            </div>
          </div>
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Button
              size="lg"
              className="bg-white/20 hover:bg-white/30 text-white border-white/30 backdrop-blur-sm transition-all duration-300 px-8 py-3 text-lg font-medium"
            >
              <Download className="w-5 h-5 mr-2" />
              Download Resume
            </Button>
            <Button
              size="lg"
              className="bg-gradient-to-r from-purple-500 to-pink-500 hover:from-purple-600 hover:to-pink-600 text-white shadow-xl transition-all duration-300 px-8 py-3 text-lg font-medium"
            >
              <MessageCircle className="w-5 h-5 mr-2" />
              Let&quots Connect
            </Button>
          </div>
        </div>
        <div className="animate-bounce mt-16">
          <ArrowDown className="w-6 h-6 text-white/50 mx-auto" />
        </div>
      </div>
    </section>
  );
}

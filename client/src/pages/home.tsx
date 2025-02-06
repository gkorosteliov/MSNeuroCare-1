import Hero from "@/components/sections/hero";
import { Card, CardContent } from "@/components/ui/card";
import { Brain, Heart, BookOpen } from "lucide-react";

export default function Home() {
  const highlights = [
    {
      title: "Expert Care",
      description: "Specialized in Multiple Sclerosis treatment and management",
      icon: Brain
    },
    {
      title: "Patient-Centered",
      description: "Personalized care plans tailored to individual needs",
      icon: Heart
    },
    {
      title: "Research-Driven",
      description: "Staying current with the latest MS research and treatments",
      icon: BookOpen
    }
  ];

  return (
    <div>
      <Hero />

      <section className="py-20 bg-gradient-to-b from-white to-gray-50/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 gap-8 md:grid-cols-3">
            {highlights.map((item, index) => (
              <Card key={index} className="border-0 shadow-lg hover:shadow-xl transition-shadow duration-300 bg-white/80 backdrop-blur-sm">
                <CardContent className="p-8">
                  <div className="flex items-center justify-center h-16 w-16 rounded-2xl bg-gradient-to-br from-primary to-primary/80 text-white mb-6 transform -rotate-6 hover:rotate-0 transition-transform duration-300">
                    <item.icon className="h-8 w-8" />
                  </div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-3">{item.title}</h3>
                  <p className="text-gray-600 leading-relaxed">{item.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
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
      
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 gap-8 md:grid-cols-3">
            {highlights.map((item, index) => (
              <Card key={index}>
                <CardContent className="p-6">
                  <div className="flex items-center justify-center h-12 w-12 rounded-md bg-primary text-white mb-4">
                    <item.icon className="h-6 w-6" />
                  </div>
                  <h3 className="text-lg font-medium text-gray-900 mb-2">{item.title}</h3>
                  <p className="text-gray-500">{item.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}

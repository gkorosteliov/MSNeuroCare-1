import { Brain } from "lucide-react";

export default function Hero() {
  return (
    <div className="relative bg-gradient-to-br from-primary/5 to-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 lg:py-20">
        <div className="lg:grid lg:grid-cols-12 lg:gap-12">
          <div className="sm:text-center md:max-w-2xl md:mx-auto lg:col-span-7 lg:text-left">
            <div className="relative">
              {/* Animated brain icon background */}
              <div className="absolute -top-10 -left-10 text-primary/10 animate-pulse">
                <Brain className="w-40 h-40" />
              </div>

              <h1 className="text-4xl tracking-tight font-extrabold text-gray-900 sm:text-5xl md:text-6xl lg:text-5xl xl:text-6xl relative z-10">
                <span className="block bg-clip-text text-transparent bg-gradient-to-r from-primary to-primary/80">
                  Anastasia Korosteliov
                </span>
                <span className="block text-gray-800 mt-3 text-3xl sm:text-4xl">
                  MS Specialist Nurse Practitioner
                </span>
              </h1>
            </div>

            <p className="mt-6 text-lg text-gray-600 sm:text-xl max-w-3xl leading-relaxed">
              Dedicated to advancing Multiple Sclerosis care through expertise, research, 
              and compassionate patient support. Empowering patients with knowledge and 
              personalized care strategies for better outcomes.
            </p>

            {/* Decorative elements */}
            <div className="mt-8 grid grid-cols-3 gap-4 max-w-lg mx-auto lg:mx-0">
              {[1, 2, 3].map((i) => (
                <div
                  key={i}
                  className="h-2 rounded-full bg-gradient-to-r from-primary/20 to-primary/40 animate-pulse"
                  style={{ animationDelay: `${i * 0.2}s` }}
                />
              ))}
            </div>
          </div>

          <div className="mt-12 relative lg:mt-0 lg:col-span-5">
            <div className="relative mx-auto rounded-2xl shadow-xl overflow-hidden bg-white transform hover:scale-105 transition-transform duration-300">
              <div className="aspect-w-4 aspect-h-5">
                {/* Placeholder for Anastasia's photo */}
                <div className="absolute inset-0 bg-gradient-to-br from-primary/10 to-primary/5">
                  <div className="absolute inset-0 bg-white/40 backdrop-blur-sm" />
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="text-center p-6">
                      <div className="mx-auto w-32 h-32 rounded-full bg-primary/20 flex items-center justify-center mb-4 animate-pulse">
                        <Brain className="w-16 h-16 text-primary" />
                      </div>
                      <p className="text-sm text-gray-600 font-medium">Professional Photo</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Decorative background pattern */}
            <div className="absolute -bottom-6 -right-6 w-40 h-40 bg-dot-pattern opacity-10 transform rotate-12" />
          </div>
        </div>
      </div>

      {/* Bottom wave decoration */}
      <div className="absolute bottom-0 left-0 right-0 h-16 bg-gradient-to-b from-transparent to-white" />
    </div>
  );
}
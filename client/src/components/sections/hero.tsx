import { Brain } from "lucide-react";

export default function Hero() {
  return (
    <div className="relative bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 lg:py-16">
        <div className="lg:grid lg:grid-cols-12 lg:gap-8">
          <div className="sm:text-center md:max-w-2xl md:mx-auto lg:col-span-6 lg:text-left">
            <div className="relative">
              {/* Decorative brain icon background */}
              <div className="absolute -top-10 -left-10 text-primary/5">
                <Brain className="w-32 h-32" />
              </div>

              <h1 className="text-4xl tracking-tight font-extrabold text-gray-900 sm:text-5xl md:text-6xl lg:text-5xl xl:text-6xl">
                <span className="block">Anastasia Korosteliov</span>
                <span className="block text-primary mt-3">MS Specialist Nurse Practitioner</span>
              </h1>
            </div>

            <p className="mt-3 text-lg text-gray-500 sm:mt-5 sm:text-xl lg:text-lg xl:text-xl">
              Dedicated to advancing Multiple Sclerosis care through expertise, research, and compassionate patient support.
              Empowering patients with knowledge and personalized care strategies.
            </p>
          </div>

          <div className="mt-12 relative sm:max-w-lg sm:mx-auto lg:mt-0 lg:max-w-none lg:mx-0 lg:col-span-6 lg:flex lg:items-center">
            <div className="relative mx-auto w-full rounded-lg shadow-lg lg:max-w-md">
              <div className="relative block w-full bg-white rounded-lg overflow-hidden">
                {/* Placeholder for Anastasia's professional photo */}
                <div className="w-full h-[400px] bg-gradient-to-r from-blue-50 to-indigo-50 flex items-center justify-center">
                  <div className="text-center p-6">
                    <div className="mx-auto w-24 h-24 rounded-full bg-primary/10 flex items-center justify-center mb-4">
                      <Brain className="w-12 h-12 text-primary" />
                    </div>
                    <p className="text-sm text-gray-500">Professional Photo</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Decorative pattern */}
      <div className="absolute top-0 right-0 -z-10">
        <svg width="404" height="384" fill="none" viewBox="0 0 404 384">
          <defs>
            <pattern id="de316486-4a29-4312-bdfc-fbce2132a2c1" x="0" y="0" width="20" height="20" patternUnits="userSpaceOnUse">
              <rect x="0" y="0" width="4" height="4" className="text-primary/10" fill="currentColor" />
            </pattern>
          </defs>
          <rect width="404" height="384" fill="url(#de316486-4a29-4312-bdfc-fbce2132a2c1)" />
        </svg>
      </div>
    </div>
  );
}
import { Brain } from "lucide-react";

export default function Hero() {
  return (
    <div className="relative bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
        <div className="lg:grid lg:grid-cols-12 lg:gap-16">
          <div className="lg:col-span-7">
            <h1 className="text-4xl font-semibold tracking-tight text-gray-900 sm:text-5xl md:text-6xl">
              <span className="block">Anastasia Korosteliov</span>
              <span className="block text-primary mt-2 text-3xl font-normal">
                MS Specialist Nurse Practitioner
              </span>
            </h1>
            <p className="mt-6 text-xl text-gray-600 leading-relaxed max-w-3xl">
              Dedicated to advancing Multiple Sclerosis care through expertise, research, 
              and compassionate patient support.
            </p>
          </div>

          <div className="mt-12 lg:mt-0 lg:col-span-5">
            <div className="relative mx-auto rounded-md overflow-hidden bg-gray-100">
              <div className="aspect-w-4 aspect-h-5">
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="text-center p-6">
                    <div className="mx-auto w-24 h-24 rounded-full bg-gray-200 flex items-center justify-center">
                      <Brain className="w-12 h-12 text-gray-400" />
                    </div>
                    <p className="mt-4 text-sm text-gray-500">Professional Photo</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
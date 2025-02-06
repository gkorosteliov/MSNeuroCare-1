import { Card, CardContent } from "@/components/ui/card";

export default function About() {
  return (
    <div className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h1 className="text-3xl font-bold text-gray-900 sm:text-4xl">About Me</h1>
          <p className="mt-4 text-lg text-gray-500">Dedicated to advancing MS care and research</p>
        </div>

        <div className="grid grid-cols-1 gap-8 lg:grid-cols-2">
          <Card>
            <CardContent className="p-6">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">Professional Background</h2>
              <p className="text-gray-600 mb-4">
                As a Nurse Practitioner specializing in Multiple Sclerosis, I bring extensive experience
                in treating and managing complex neurological conditions. My practice combines clinical
                expertise with a deep understanding of the latest research in MS treatment.
              </p>
              <p className="text-gray-600">
                I received my medical education from leading institutions and have dedicated my career
                to improving the lives of patients with MS through comprehensive care and education.
              </p>
            </CardContent>
          </Card>

          <Card>
            <CardContent className="p-6">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">My Approach</h2>
              <p className="text-gray-600 mb-4">
                I believe in a patient-centered approach that combines evidence-based treatment with
                personalized care strategies. Each patient's journey with MS is unique, and I work
                closely with them to develop treatment plans that address their specific needs and goals.
              </p>
              <p className="text-gray-600">
                My focus extends beyond symptom management to include patient education, lifestyle
                modifications, and emotional support - all crucial elements in managing MS effectively.
              </p>
            </CardContent>
          </Card>
        </div>

        <Card className="mt-8">
          <CardContent className="p-6">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">Professional Philosophy</h2>
            <p className="text-gray-600">
              I am committed to staying at the forefront of MS research and treatment advances,
              ensuring my patients have access to the most current and effective care options.
              My goal is to empower patients with knowledge and support, enabling them to
              make informed decisions about their health and maintain the highest possible
              quality of life while living with MS.
            </p>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}

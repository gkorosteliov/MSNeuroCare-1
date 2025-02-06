import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Stethoscope, Brain, Video, ClipboardList, Users, HeartPulse } from "lucide-react";

export default function Services() {
  const services = [
    {
      title: "Patient Education",
      description: "Comprehensive education about MS diagnosis, treatment options, and management strategies.",
      icon: Brain
    },
    {
      title: "Treatment Planning",
      description: "Personalized treatment plans incorporating the latest evidence-based approaches.",
      icon: ClipboardList
    },
    {
      title: "Telehealth Consultations",
      description: "Remote consultations for ongoing care and support, making healthcare more accessible.",
      icon: Video
    },
    {
      title: "Symptom Management",
      description: "Expert guidance on managing MS symptoms and improving quality of life.",
      icon: HeartPulse
    },
    {
      title: "Care Coordination",
      description: "Coordination with other healthcare providers to ensure comprehensive care.",
      icon: Users
    },
    {
      title: "Regular Assessments",
      description: "Ongoing monitoring and assessment of disease progression and treatment effectiveness.",
      icon: Stethoscope
    }
  ];

  return (
    <div className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h1 className="text-3xl font-bold text-gray-900 sm:text-4xl">Services & Expertise</h1>
          <p className="mt-4 text-lg text-gray-500">
            Comprehensive MS care focusing on individual patient needs
          </p>
        </div>

        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {services.map((service, index) => (
            <Card key={index} className="border-2 hover:border-primary transition-colors duration-300">
              <CardHeader>
                <div className="flex items-center justify-center h-12 w-12 rounded-md bg-primary/10 text-primary mb-4">
                  <service.icon className="h-6 w-6" />
                </div>
                <CardTitle className="text-xl">{service.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600">{service.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>

        <Card className="mt-12">
          <CardContent className="p-6">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">Accepting New Patients</h2>
            <p className="text-gray-600">
              I am currently accepting new patients for both in-person and telehealth consultations. 
              Referrals from healthcare providers are welcome. Please contact my office to schedule 
              an appointment or discuss your specific needs.
            </p>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}

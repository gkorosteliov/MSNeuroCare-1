import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Brain, ClipboardList, Users, HeartPulse, Stethoscope } from "lucide-react";

export default function Services() {
  const services = [
    {
      title: "MS Patient Care",
      description: "Comprehensive care and management of Multiple Sclerosis, including treatment planning and symptom management.",
      icon: Brain
    },
    {
      title: "Treatment Planning",
      description: "Evidence-based treatment approaches tailored to each patient's specific MS presentation and needs.",
      icon: ClipboardList
    },
    {
      title: "Symptom Management",
      description: "Expert guidance on managing MS symptoms and improving quality of life.",
      icon: HeartPulse
    },
    {
      title: "Care Coordination",
      description: "Seamless coordination with neurologists and other healthcare providers for comprehensive care.",
      icon: Users
    },
    {
      title: "Regular Assessments",
      description: "Ongoing monitoring of disease progression and treatment effectiveness.",
      icon: Stethoscope
    }
  ];

  const clinicExperience = [
    {
      role: "Lead MS Nurse Practitioner",
      clinic: "Boston Medical Center MS Center",
      duration: "2019-Present",
      description: "Managing complex MS cases, coordinating with multidisciplinary teams, and implementing treatment protocols."
    },
    {
      role: "MS Clinical Nurse Specialist",
      clinic: "Partners MS Center",
      duration: "2016-2019",
      description: "Specialized in MS patient care, treatment administration, and patient education."
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
          <CardHeader>
            <CardTitle className="text-2xl">Clinical Experience</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-8">
              {clinicExperience.map((exp, index) => (
                <div key={index} className="border-l-2 border-primary pl-4">
                  <h3 className="font-semibold text-xl text-gray-900">{exp.role}</h3>
                  <p className="text-primary font-medium">{exp.clinic}</p>
                  <p className="text-sm text-gray-500 mb-2">{exp.duration}</p>
                  <p className="text-gray-600">{exp.description}</p>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
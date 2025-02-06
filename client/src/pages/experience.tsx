import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Award, GraduationCap, Building2 } from "lucide-react";

export default function Experience() {
  const education = [
    {
      degree: "Master of Science - MS, Nursing",
      institution: "Boston College",
      year: "2019"
    },
    {
      degree: "Bachelor of Science - BS, Nursing",
      institution: "Endicott College",
      year: "2016"
    }
  ];

  const certifications = [
    "Multiple Sclerosis Certified Nurse (MSCN)",
    "Board Certified Adult-Gerontology Primary Care Nurse Practitioner (AGPCNP-BC)",
    "Registered Nurse (RN)"
  ];

  const affiliations = [
    "International Organization of Multiple Sclerosis Nurses (IOMSN)",
    "American Academy of Neurology (AAN)",
    "American Association of Nurse Practitioners (AANP)"
  ];

  return (
    <div className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h1 className="text-3xl font-bold text-gray-900 sm:text-4xl">Experience & Credentials</h1>
          <p className="mt-4 text-lg text-gray-500">
            Academic excellence and professional expertise in MS care
          </p>
        </div>

        <div className="grid grid-cols-1 gap-8 lg:grid-cols-2">
          <Card>
            <CardHeader>
              <div className="flex items-center gap-3">
                <GraduationCap className="h-6 w-6 text-primary" />
                <CardTitle>Education</CardTitle>
              </div>
            </CardHeader>
            <CardContent>
              <ul className="space-y-4">
                {education.map((edu, index) => (
                  <li key={index} className="border-l-2 border-primary pl-4">
                    <h3 className="font-semibold text-gray-900">{edu.degree}</h3>
                    <p className="text-gray-600">{edu.institution}</p>
                    <p className="text-sm text-gray-500">{edu.year}</p>
                  </li>
                ))}
              </ul>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <div className="flex items-center gap-3">
                <Award className="h-6 w-6 text-primary" />
                <CardTitle>Certifications</CardTitle>
              </div>
            </CardHeader>
            <CardContent>
              <ul className="space-y-3">
                {certifications.map((cert, index) => (
                  <li key={index} className="flex items-center gap-2">
                    <Award className="h-4 w-4 text-primary" />
                    <span className="text-gray-600">{cert}</span>
                  </li>
                ))}
              </ul>
            </CardContent>
          </Card>
        </div>

        <Card className="mt-8">
          <CardHeader>
            <div className="flex items-center gap-3">
              <Building2 className="h-6 w-6 text-primary" />
              <CardTitle>Professional Affiliations</CardTitle>
            </div>
          </CardHeader>
          <CardContent>
            <ul className="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3">
              {affiliations.map((affiliation, index) => (
                <li key={index} className="flex items-center gap-2">
                  <span className="h-2 w-2 bg-primary rounded-full" />
                  <span className="text-gray-600">{affiliation}</span>
                </li>
              ))}
            </ul>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
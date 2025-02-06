import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { BookOpen, FileText, Award } from "lucide-react";

export default function Publications() {
  const publications = [
    {
      title: "Advances in Multiple Sclerosis Treatment: A Review of Current Approaches",
      journal: "Journal of Neurology and Nursing",
      year: "2023",
      type: "Research Article"
    },
    {
      title: "Patient-Centered Care in MS Management: Best Practices and Outcomes",
      journal: "Multiple Sclerosis Care Quarterly",
      year: "2022",
      type: "Clinical Review"
    },
    {
      title: "Telehealth Interventions in MS Care: A Systematic Review",
      journal: "Digital Healthcare Journal",
      year: "2022",
      type: "Research Article"
    }
  ];

  const presentations = [
    {
      title: "Emerging Treatments in Multiple Sclerosis",
      event: "International MS Care Conference",
      year: "2023"
    },
    {
      title: "Nursing Perspectives in MS Management",
      event: "American Academy of Neurology Annual Meeting",
      year: "2022"
    }
  ];

  return (
    <div className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h1 className="text-3xl font-bold text-gray-900 sm:text-4xl">Publications</h1>
          <p className="mt-4 text-lg text-gray-500">
            Contributing to the advancement of MS research and care
          </p>
        </div>

        <Card className="mb-8">
          <CardHeader>
            <div className="flex items-center gap-3">
              <BookOpen className="h-6 w-6 text-primary" />
              <CardTitle>Research Publications</CardTitle>
            </div>
          </CardHeader>
          <CardContent>
            <div className="space-y-6">
              {publications.map((pub, index) => (
                <div key={index} className="border-l-2 border-primary pl-4">
                  <h3 className="font-semibold text-gray-900">{pub.title}</h3>
                  <p className="text-gray-600">{pub.journal}</p>
                  <div className="flex gap-4 mt-1 text-sm text-gray-500">
                    <span>{pub.year}</span>
                    <span>•</span>
                    <span>{pub.type}</span>
                  </div>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <div className="flex items-center gap-3">
              <FileText className="h-6 w-6 text-primary" />
              <CardTitle>Conference Presentations</CardTitle>
            </div>
          </CardHeader>
          <CardContent>
            <div className="space-y-6">
              {presentations.map((pres, index) => (
                <div key={index} className="flex items-start gap-4">
                  <Award className="h-5 w-5 text-primary mt-1" />
                  <div>
                    <h3 className="font-semibold text-gray-900">{pres.title}</h3>
                    <p className="text-gray-600">{pres.event}</p>
                    <p className="text-sm text-gray-500">{pres.year}</p>
                  </div>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}

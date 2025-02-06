import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { BookOpen, Link as LinkIcon, Users, FileText } from "lucide-react";

export default function Resources() {
  const organizations = [
    {
      name: "National Multiple Sclerosis Society",
      url: "https://www.nationalmssociety.org",
      description: "Comprehensive information and support for people affected by MS"
    },
    {
      name: "Multiple Sclerosis Association of America",
      url: "https://mymsaa.org",
      description: "Programs and services to improve lives of MS community"
    }
  ];

  const educationalResources = [
    {
      title: "Understanding MS Symptoms",
      description: "A guide to recognizing and managing common MS symptoms",
      category: "Patient Guide"
    },
    {
      title: "Treatment Options Overview",
      description: "Current treatments and therapeutic approaches in MS care",
      category: "Medical Information"
    },
    {
      title: "Lifestyle Modifications",
      description: "Practical tips for daily living with MS",
      category: "Lifestyle"
    }
  ];

  return (
    <div className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h1 className="text-3xl font-bold text-gray-900 sm:text-4xl">Patient Resources</h1>
          <p className="mt-4 text-lg text-gray-500">
            Educational materials and support resources for MS patients
          </p>
        </div>

        <div className="grid grid-cols-1 gap-8 lg:grid-cols-2">
          <Card>
            <CardHeader>
              <div className="flex items-center gap-3">
                <BookOpen className="h-6 w-6 text-primary" />
                <CardTitle>Educational Materials</CardTitle>
              </div>
            </CardHeader>
            <CardContent>
              <div className="space-y-6">
                {educationalResources.map((resource, index) => (
                  <div key={index} className="border-l-2 border-primary pl-4">
                    <h3 className="font-semibold text-gray-900">{resource.title}</h3>
                    <p className="text-gray-600">{resource.description}</p>
                    <span className="inline-block mt-1 text-sm text-primary bg-primary/10 px-2 py-1 rounded">
                      {resource.category}
                    </span>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <div className="flex items-center gap-3">
                <Users className="h-6 w-6 text-primary" />
                <CardTitle>Support Organizations</CardTitle>
              </div>
            </CardHeader>
            <CardContent>
              <div className="space-y-6">
                {organizations.map((org, index) => (
                  <div key={index} className="group">
                    <h3 className="font-semibold text-gray-900 flex items-center gap-2">
                      {org.name}
                      <LinkIcon className="h-4 w-4 text-primary" />
                    </h3>
                    <p className="text-gray-600 mb-2">{org.description}</p>
                    <a href={org.url} target="_blank" rel="noopener noreferrer">
                      <Button variant="outline" size="sm">
                        Visit Website
                      </Button>
                    </a>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </div>

        <Card className="mt-8">
          <CardHeader>
            <div className="flex items-center gap-3">
              <FileText className="h-6 w-6 text-primary" />
              <CardTitle>Additional Resources</CardTitle>
            </div>
          </CardHeader>
          <CardContent>
            <p className="text-gray-600 mb-4">
              For more detailed information about MS management or to request specific resources,
              please don't hesitate to contact my office. We're here to support your journey
              with MS through education and guidance.
            </p>
            <Button variant="outline">
              Request Additional Materials
            </Button>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}

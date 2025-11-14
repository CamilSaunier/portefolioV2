import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Briefcase, GraduationCap } from "lucide-react";

export default function Experience() {
  const experiences = [
    {
      type: "work",
      title: "Développeur Full Stack",
      company: "Tech Startup",
      period: "2022 - 2024",
      description: "Développement d'une plateforme SaaS en React/Node.js. Mise en place de CI/CD et optimisation des performances.",
      tags: ["React", "Node.js", "PostgreSQL", "AWS"],
    },
    {
      type: "work",
      title: "Développeur Frontend",
      company: "Agence Web",
      period: "2021 - 2022",
      description: "Création d'interfaces utilisateurs modernes et responsive pour divers clients. Collaboration étroite avec l'équipe design.",
      tags: ["React", "TypeScript", "Tailwind", "Figma"],
    },
  ];

  const education = [
    {
      type: "education",
      title: "Master Informatique",
      school: "Université Paris",
      period: "2019 - 2021",
      description: "Spécialisation développement web et applications mobiles",
    },
    {
      type: "education",
      title: "Licence Informatique",
      school: "Université Paris",
      period: "2016 - 2019",
      description: "Fondamentaux de l'informatique et programmation",
    },
  ];

  return (
    <section id="experience" className="py-20 bg-gradient-to-b from-gray-50 to-white">
      <div className="max-w-6xl mx-auto px-6">
        <div className="text-center mb-16 space-y-4">
          <Badge variant="secondary" className="mb-4">
            <Briefcase className="w-4 h-4 mr-2" />
            Mon Parcours
          </Badge>
          <h2 className="text-5xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-purple-600">Expérience & Formation</h2>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {/* Expérience professionnelle */}
          <div className="space-y-6">
            <h3 className="text-2xl font-bold flex items-center gap-2">
              <Briefcase className="w-6 h-6 text-blue-600" />
              Expérience professionnelle
            </h3>
            {experiences.map((exp, i) => (
              <Card key={i} className="border-2 hover:border-blue-200 transition-colors">
                <CardHeader>
                  <CardTitle className="text-xl">{exp.title}</CardTitle>
                  <div className="flex justify-between items-center text-sm text-gray-600">
                    <span className="font-medium">{exp.company}</span>
                    <span>{exp.period}</span>
                  </div>
                </CardHeader>
                <CardContent className="space-y-4">
                  <p className="text-gray-600">{exp.description}</p>
                  <div className="flex flex-wrap gap-2">
                    {exp.tags.map((tag) => (
                      <Badge key={tag} variant="secondary">
                        {tag}
                      </Badge>
                    ))}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          {/* Formation */}
          <div className="space-y-6">
            <h3 className="text-2xl font-bold flex items-center gap-2">
              <GraduationCap className="w-6 h-6 text-purple-600" />
              Formation
            </h3>
            {education.map((edu, i) => (
              <Card key={i} className="border-2 hover:border-purple-200 transition-colors">
                <CardHeader>
                  <CardTitle className="text-xl">{edu.title}</CardTitle>
                  <div className="flex justify-between items-center text-sm text-gray-600">
                    <span className="font-medium">{edu.school}</span>
                    <span>{edu.period}</span>
                  </div>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600">{edu.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Code2, Rocket, Users, Award } from "lucide-react";

export default function About() {
  const highlights = [
    {
      icon: Code2,
      title: "3 ans d'expérience",
      description: "Développement d'applications web full stack",
    },
    {
      icon: Rocket,
      title: "10+ projets réalisés",
      description: "De la conception au déploiement",
    },
    {
      icon: Users,
      title: "Travail d'équipe",
      description: "Collaboration avec designers et product managers",
    },
    {
      icon: Award,
      title: "Clean Code",
      description: "Passionné par les bonnes pratiques et la qualité",
    },
  ];

  return (
    <section id="about" className="py-20 bg-white">
      <div className="max-w-6xl mx-auto px-6">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Partie gauche - Texte */}
          <div className="space-y-6">
            <Badge variant="secondary">👋 À propos</Badge>
            <h2 className="text-4xl font-bold">
              Développeur passionné par les{" "}
              <span className="bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-purple-600">technologies modernes</span>
            </h2>
            <p className="text-lg text-gray-600 leading-relaxed">
              Fort de 3 années d'expérience en développement web, je maîtrise l'écosystème JavaScript moderne (React, Node.js, TypeScript) et les
              bonnes pratiques de développement.
            </p>
            <p className="text-lg text-gray-600 leading-relaxed">
              Je recherche une entreprise innovante où je pourrai contribuer à des projets ambitieux tout en continuant à apprendre et évoluer
              techniquement.
            </p>
            <div className="flex flex-wrap gap-2 pt-4">
              {["React", "TypeScript", "Node.js", "PostgreSQL", "MongoDB", "Docker", "Git"].map((tech) => (
                <Badge key={tech} variant="outline">
                  {tech}
                </Badge>
              ))}
            </div>
          </div>

          {/* Partie droite - Highlights */}
          <div className="grid grid-cols-2 gap-4">
            {highlights.map((item) => (
              <Card key={item.title} className="border-2 hover:border-blue-200 hover:shadow-lg transition-all">
                <CardContent className="p-6 space-y-3">
                  <div className="bg-blue-100 w-12 h-12 rounded-lg flex items-center justify-center">
                    <item.icon className="w-6 h-6 text-blue-600" />
                  </div>
                  <h3 className="font-bold text-lg">{item.title}</h3>
                  <p className="text-sm text-gray-600">{item.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

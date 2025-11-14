import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Code2, Rocket, Users, Award } from "lucide-react";

export default function About() {
  const highlights = [
    {
      icon: Code2,
      title: "1 ans d'expérience",
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
  ];

  return (
    <section id="about" className="py-12 md:py-20 bg-background">
      <div className="max-w-6xl mx-auto px-4 md:px-6">
        <div className="grid md:grid-cols-2 gap-8 md:gap-12 items-center">
          {/* Partie gauche - Texte */}
          <div className="space-y-4 md:space-y-6">
            <Badge variant="secondary" className="text-xs md:text-sm">
              À propos
            </Badge>
            <h2 className="text-3xl md:text-4xl font-bold">
              Développeur passionné par les{" "}
              <span className="bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-purple-600 dark:from-blue-400 dark:to-purple-400">
                technologies modernes
              </span>
            </h2>
            <p className="text-base md:text-lg text-muted-foreground leading-relaxed">
              Suite à une reconversion professionnel et fort de 1 années d'expérience en développement web, je comprends l'écosystème JavaScript
              moderne (React, Node.js, TypeScript) et les bonnes pratiques de développement.
            </p>
            <p className="text-base md:text-lg text-muted-foreground leading-relaxed">
              Je recherche une entreprise où je pourrai contribuer à des projets ambitieux tout en continuant à apprendre et évoluer techniquement.
            </p>
            <div className="flex flex-wrap gap-2 pt-2 md:pt-4">
              {["Adaptabilité", "Polyvalent", "Résolution de problèmes", "Travail d'équipe", "Curieux", "Autonome"].map((tech) => (
                <Badge key={tech} variant="outline" className="text-xs md:text-sm">
                  {tech}
                </Badge>
              ))}
            </div>
          </div>

          {/* Partie droite - Highlights */}
          <div className="grid grid-cols-2 gap-3 md:gap-4">
            {highlights.map((item) => (
              <Card key={item.title} className="border-2 hover:border-primary/50 hover:shadow-lg transition-all">
                <CardContent className="p-4 md:p-6 space-y-2 md:space-y-3">
                  <div className="bg-primary/10 w-10 h-10 md:w-12 md:h-12 rounded-lg flex items-center justify-center">
                    <item.icon className="w-5 h-5 md:w-6 md:h-6 text-primary" />
                  </div>
                  <h3 className="font-bold text-sm md:text-lg">{item.title}</h3>
                  <p className="text-xs md:text-sm text-muted-foreground">{item.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

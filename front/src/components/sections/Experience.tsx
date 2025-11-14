import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Briefcase, GraduationCap } from "lucide-react";

export default function Experience() {
  const experiences = [
    {
      type: "work",
      title: "Stage Développeur Web Full Stack",
      company: "Moustache Bikes",
      period: "2025 - 2025",
      description:
        "Developpement d'outils de gestion interne en react, intégration d'API REST et manipulation de données en adéquation avec des besoins métier et la documentation existante, collaboration avec l'équipe technique pour assurer la qualité du code et la montée en compétences.",
      tags: ["Réseau", "Dépannage", "Résolution de problèmes", "Adaptabilité", "Gestion d’incidents", "Autonomie", "Infrastructure"],
    },
    {
      type: "work",
      title: "Technicien d'exploitation / Maintenance réseau",
      company: "ERT Technologies",
      period: "2020 - 2025",
      description:
        "Dépannage et maintenance des infrastructures réseau pour des clients variés. Gestion des incidents des performances réseau mixte FTTB/FTTH. Faculté d'adaptation aux nouveau process et outils de travail.",
      tags: ["Réseau", "Dépannage", "Résolution de problèmes", "Adaptabilité", "Gestion d’incidents", "Autonomie", "Infrastructure"],
    },
    {
      type: "work",
      title: "Travailleur Polyvalent",
      company: "NQ Fresh Queensland Australia",
      period: "2018 - 2020",
      description:
        "Travail saisonnier dans la récolte de fruits tropicaux en Australie. Adaptation rapide à un environnement de travail exigeant et dynamique. Flexibilité, travail en collaboration avec une équipe diverse, application des consignes en langue anglaise.",
      tags: [
        "Adaptabilité",
        "Apprentissage rapide",
        "Polyvalence",
        "Travail en équipe",
        "Autonomie",
        "Gestion de situations complexes",
        "Communication en anglais",
      ],
    },
    {
      type: "work",
      title: "Agent de développement régional",
      company: "Ligue Taekwondo Grand Est",
      period: "2014 - 2017",
      description: "Organisation et mise en oeuvre projet, communication a des fins pédagogiques et promotionnelles, Gestion d'équipes bénévoles.",
      tags: [
        "Gestion de projet",
        "Organisation",
        "Communication",
        "Leadership",
        "Coordination d'équipe",
        "Autonomie",
        "Planification",
        "Travail collaboratif",
      ],
    },
  ];

  const education = [
    {
      type: "education",
      title: "Titre professionnel Développeur Web et Web Mobile",
      school: "École O'Clock",
      period: "2024 - 2025",
      description:
        "Suite à une reconversion professionnelle, j'ai acquis les compétences nécessaires pour devenir développeur web full stack, maîtrisant React, Node.js, TypeScript et les bonnes pratiques de développement. J’ai également réalisé plusieurs projets complets de A à Z, renforçant ma logique, mon autonomie et ma capacité à travailler en équipe.",
    },
    {
      type: "education",
      title: "DEJEPS Spécialité Taekwondo et disciplines Associées",
      school: "Ligue IDF Taekwondo",
      period: "2015 - 2016",
      description:
        "Formation professionnelle pour encadrer et former des pratiquants de Taekwondo et des enseignants à différents niveaux, ainsi que gérer des événements sportifs. Cette expérience m’a permis de développer des compétences en gestion de projet, leadership, organisation et communication, toutes transférables à des projets techniques ou en équipe.",
    },
  ];

  return (
    <section id="experience" className="py-12 md:py-20 bg-muted/30">
      <div className="max-w-6xl mx-auto px-4 md:px-6">
        <div className="text-center mb-12 md:mb-16 space-y-3 md:space-y-4">
          <Badge variant="secondary" className="mb-2 md:mb-4 text-xs md:text-sm">
            <Briefcase className="w-3 h-3 md:w-4 md:h-4 mr-2" />
            Mon Parcours
          </Badge>
          <h2 className="text-4xl md:text-5xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-purple-600 dark:from-blue-400 dark:to-purple-400 px-4">
            Expérience & Formation
          </h2>
        </div>

        <div className="grid md:grid-cols-2 gap-6 md:gap-8">
          {/* Expérience professionnelle */}
          <div className="space-y-4 md:space-y-6">
            <h3 className="text-xl md:text-2xl font-bold flex items-center gap-2">
              <Briefcase className="w-5 h-5 md:w-6 md:h-6 text-blue-600 dark:text-blue-400" />
              Expérience professionnelle
            </h3>
            {experiences.map((exp, i) => (
              <Card key={i} className="border-2 hover:border-primary/50 transition-colors">
                <CardHeader className="pb-3 md:pb-6">
                  <CardTitle className="text-lg md:text-xl">{exp.title}</CardTitle>
                  <div className="flex flex-col sm:flex-row sm:justify-between sm:items-center gap-1 text-xs md:text-sm text-muted-foreground">
                    <span className="font-medium">{exp.company}</span>
                    <span>{exp.period}</span>
                  </div>
                </CardHeader>
                <CardContent className="space-y-3 md:space-y-4">
                  <p className="text-sm md:text-base text-muted-foreground">{exp.description}</p>
                  <div className="flex flex-wrap gap-2">
                    {exp.tags.map((tag) => (
                      <Badge key={tag} variant="secondary" className="text-xs">
                        {tag}
                      </Badge>
                    ))}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          {/* Formation */}
          <div className="space-y-4 md:space-y-6">
            <h3 className="text-xl md:text-2xl font-bold flex items-center gap-2">
              <GraduationCap className="w-5 h-5 md:w-6 md:h-6 text-purple-600 dark:text-purple-400" />
              Formation
            </h3>
            {education.map((edu, i) => (
              <Card key={i} className="border-2 hover:border-primary/50 transition-colors">
                <CardHeader className="pb-3 md:pb-6">
                  <CardTitle className="text-lg md:text-xl">{edu.title}</CardTitle>
                  <div className="flex flex-col sm:flex-row sm:justify-between sm:items-center gap-1 text-xs md:text-sm text-muted-foreground">
                    <span className="font-medium">{edu.school}</span>
                    <span>{edu.period}</span>
                  </div>
                </CardHeader>
                <CardContent>
                  <p className="text-sm md:text-base text-muted-foreground">{edu.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

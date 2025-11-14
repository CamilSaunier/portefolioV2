import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Github, ExternalLink, Star, Briefcase } from "lucide-react";

export default function Projects() {
  const projectList = [
    {
      title: "E-Commerce Platform",
      description: "Plateforme e-commerce complète avec panier, paiement et gestion des commandes",
      image: "https://images.unsplash.com/photo-1557821552-17105176677c?w=800&q=80",
      tags: ["React", "Node.js", "MongoDB", "Stripe"],
      github: "#",
      demo: "#",
      stars: 124,
    },
    {
      title: "Task Management App",
      description: "Application de gestion de tâches collaborative avec temps réel",
      image: "https://images.unsplash.com/photo-1507925921958-8a62f3d1a50d?w=800&q=80",
      tags: ["TypeScript", "Socket.io", "PostgreSQL"],
      github: "#",
      demo: "#",
      stars: 89,
    },
    {
      title: "Analytics Dashboard",
      description: "Tableau de bord d'analyse avec graphiques interactifs et exports",
      image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&q=80",
      tags: ["React", "Chart.js", "Tailwind"],
      github: "#",
      demo: "#",
      stars: 156,
    },
    {
      title: "Social Media App",
      description: "Réseau social avec posts, likes, commentaires et messagerie",
      image: "https://images.unsplash.com/photo-1611162617474-5b21e879e113?w=800&q=80",
      tags: ["Next.js", "Prisma", "AWS"],
      github: "#",
      demo: "#",
      stars: 203,
    },
  ];

  return (
    <section id="projects" className="py-12 md:py-20 bg-muted/30">
      <div className="max-w-7xl mx-auto px-4 md:px-6">
        {/* Header */}
        <div className="text-center mb-12 md:mb-16 space-y-3 md:space-y-4">
          <Badge variant="secondary" className="mb-2 md:mb-4 text-xs md:text-sm">
            <Briefcase className="w-3 h-3 md:w-4 md:h-4 mr-2" />
            Portfolio
          </Badge>
          <h2 className="text-4xl md:text-5xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-purple-600 dark:from-blue-400 dark:to-purple-400 px-4">
            Mes Projets
          </h2>
          <p className="text-base md:text-xl text-muted-foreground max-w-2xl mx-auto px-4">
            Découvrez mes réalisations récentes et mes projets open-source
          </p>
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 md:gap-8">
          {projectList.map((project, i) => (
            <Card key={i} className="group hover:shadow-2xl transition-all duration-300 overflow-hidden border-2 hover:border-primary/50">
              {/* Image */}
              <div className="relative h-40 md:h-48 overflow-hidden bg-muted">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                />
                <div className="absolute top-3 right-3 md:top-4 md:right-4 flex items-center gap-1 bg-background/90 backdrop-blur-sm px-2 py-1 rounded-full">
                  <Star className="w-3 h-3 md:w-4 md:h-4 fill-yellow-400 text-yellow-400" />
                  <span className="text-xs md:text-sm font-medium">{project.stars}</span>
                </div>
              </div>

              <CardHeader className="pb-3 md:pb-6">
                <CardTitle className="text-xl md:text-2xl group-hover:text-primary transition-colors">{project.title}</CardTitle>
                <CardDescription className="text-sm md:text-base">{project.description}</CardDescription>
              </CardHeader>

              <CardContent className="pb-3 md:pb-6">
                <div className="flex flex-wrap gap-2">
                  {project.tags.map((tag) => (
                    <Badge key={tag} variant="secondary" className="text-xs">
                      {tag}
                    </Badge>
                  ))}
                </div>
              </CardContent>

              <CardFooter className="gap-2 md:gap-3">
                <Button variant="default" className="flex-1 gap-2 text-sm md:text-base" asChild>
                  <a href={project.demo} target="_blank" rel="noopener">
                    <ExternalLink className="w-3 h-3 md:w-4 md:h-4" />
                    Démo
                  </a>
                </Button>
                <Button variant="outline" className="flex-1 gap-2 text-sm md:text-base" asChild>
                  <a href={project.github} target="_blank" rel="noopener">
                    <Github className="w-3 h-3 md:w-4 md:h-4" />
                    Code
                  </a>
                </Button>
              </CardFooter>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}

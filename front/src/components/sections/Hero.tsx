import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Github, Linkedin, Mail, FileText, Briefcase } from "lucide-react";

export default function Hero() {
  const skills = ["React", "TypeScript", "Node.js", "PostgreSQL", "Git"];

  return (
    <section id="hero" className="min-h-screen flex flex-col justify-center items-center text-center relative overflow-hidden bg-background px-4">
      {/* Gradient animé en arrière-plan */}
      <div className="absolute inset-0 bg-gradient-to-br from-blue-50 via-indigo-50 to-purple-50 dark:from-gray-950 dark:via-blue-950/20 dark:to-purple-950/20 -z-10" />
      <div className="absolute inset-0 bg-grid-slate-100 dark:bg-grid-slate-800 [mask-image:linear-gradient(0deg,white,rgba(255,255,255,0.6))] dark:[mask-image:linear-gradient(0deg,black,rgba(0,0,0,0.6))] -z-10" />

      <div className="max-w-4xl mx-auto w-full space-y-6 md:space-y-8">
        {/* Badge statut */}
        <Badge variant="secondary" className="animate-bounce text-xs md:text-sm">
          <Briefcase className="w-3 h-3 md:w-4 md:h-4 mr-2" />À la recherche d'opportunités
        </Badge>

        {/* Titre principal */}
        <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-extrabold bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-purple-600 dark:from-blue-400 dark:to-purple-400 animate-fade-in">
          Développeur Full Stack
        </h1>

        <p className="text-base sm:text-lg md:text-xl lg:text-2xl text-muted-foreground max-w-2xl mx-auto leading-relaxed px-4">
          Passionné par le développement web moderne, je recherche un poste de{" "}
          <span className="font-semibold text-blue-600 dark:text-blue-400">développeur full stack</span> pour contribuer à des projets innovants
        </p>

        {/* Stack technique */}
        <div className="flex flex-wrap justify-center gap-2 pt-2 md:pt-4 px-4">
          {skills.map((skill) => (
            <Badge key={skill} variant="outline" className="px-3 py-1.5 md:px-4 md:py-2 text-xs md:text-sm hover:bg-accent transition-colors">
              {skill}
            </Badge>
          ))}
        </div>

        {/* CTA Buttons */}
        <div className="flex flex-col sm:flex-row gap-3 md:gap-4 justify-center pt-4 md:pt-6 px-4">
          <Button size="lg" className="gap-2 group w-full sm:w-auto" asChild>
            <a href="#contact">
              Me contacter
              <span className="group-hover:translate-x-1 transition-transform">→</span>
            </a>
          </Button>
          <Button size="lg" variant="outline" className="gap-2 w-full sm:w-auto" asChild>
            <a href="/cv.pdf" download>
              <FileText className="w-4 h-4" />
              Télécharger mon CV
            </a>
          </Button>
        </div>

        {/* Social Links */}
        <div className="flex justify-center gap-3 md:gap-4 pt-6 md:pt-8">
          <Button variant="ghost" size="icon" className="hover:bg-accent" asChild>
            <a href="https://github.com/CamilSaunier" target="_blank" rel="noopener">
              <Github className="w-5 h-5" />
            </a>
          </Button>
          <Button variant="ghost" size="icon" className="hover:bg-accent" asChild>
            <a href="https://www.linkedin.com/in/camil-saunier-770078167/" target="_blank" rel="noopener">
              <Linkedin className="w-5 h-5" />
            </a>
          </Button>
          <Button variant="ghost" size="icon" className="hover:bg-accent" asChild>
            <a href="mailto:camilsaunier@gmail.com">
              <Mail className="w-5 h-5" />
            </a>
          </Button>
        </div>
      </div>
    </section>
  );
}

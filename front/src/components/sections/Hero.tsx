import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Github, Linkedin, Mail, FileText, Briefcase } from "lucide-react";

export default function Hero() {
  const skills = ["React", "TypeScript", "Node.js", "PostgreSQL", "Docker"];

  return (
    <section id="hero" className="min-h-screen flex flex-col justify-center items-center text-center relative overflow-hidden">
      {/* Gradient animé en arrière-plan */}
      <div className="absolute inset-0 bg-gradient-to-br from-blue-50 via-indigo-50 to-purple-50 -z-10" />
      <div className="absolute inset-0 bg-grid-slate-100 [mask-image:linear-gradient(0deg,white,rgba(255,255,255,0.6))] -z-10" />

      <div className="max-w-4xl mx-auto px-6 space-y-8">
        {/* Badge statut */}
        <Badge variant="secondary" className="animate-bounce">
          <Briefcase className="w-4 h-4 mr-2" />À la recherche d'opportunités
        </Badge>

        {/* Titre principal */}
        <h1 className="text-6xl md:text-7xl font-extrabold bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-purple-600 animate-fade-in">
          Développeur Full Stack
        </h1>

        <p className="text-xl md:text-2xl text-gray-600 max-w-2xl mx-auto leading-relaxed">
          Passionné par le développement web moderne, je recherche un poste de{" "}
          <span className="font-semibold text-blue-600">développeur full stack</span> pour contribuer à des projets innovants
        </p>

        {/* Stack technique */}
        <div className="flex flex-wrap justify-center gap-2 pt-4">
          {skills.map((skill) => (
            <Badge key={skill} variant="outline" className="px-4 py-2 text-sm hover:bg-blue-50 transition-colors">
              {skill}
            </Badge>
          ))}
        </div>

        {/* CTA Buttons */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center pt-6">
          <Button size="lg" className="gap-2 group" asChild>
            <a href="#contact">
              Me contacter
              <span className="group-hover:translate-x-1 transition-transform">→</span>
            </a>
          </Button>
          <Button size="lg" variant="outline" className="gap-2" asChild>
            <a href="/cv.pdf" download>
              <FileText className="w-4 h-4" />
              Télécharger mon CV
            </a>
          </Button>
        </div>

        {/* Social Links */}
        <div className="flex justify-center gap-4 pt-8">
          <Button variant="ghost" size="icon" className="hover:bg-blue-50" asChild>
            <a href="https://github.com/votre-profil" target="_blank" rel="noopener">
              <Github className="w-5 h-5" />
            </a>
          </Button>
          <Button variant="ghost" size="icon" className="hover:bg-blue-50" asChild>
            <a href="https://linkedin.com/in/votre-profil" target="_blank" rel="noopener">
              <Linkedin className="w-5 h-5" />
            </a>
          </Button>
          <Button variant="ghost" size="icon" className="hover:bg-blue-50" asChild>
            <a href="mailto:votre.email@exemple.com">
              <Mail className="w-5 h-5" />
            </a>
          </Button>
        </div>
      </div>
    </section>
  );
}

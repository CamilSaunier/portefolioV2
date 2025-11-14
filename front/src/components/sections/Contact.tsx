import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Mail, Linkedin, Github, MapPin, FileText, Calendar } from "lucide-react";

export default function Contact() {
  return (
    <section id="contact" className="py-12 md:py-20 bg-background">
      <div className="max-w-4xl mx-auto px-4 md:px-6">
        <div className="text-center mb-12 md:mb-16 space-y-3 md:space-y-4">
          <h2 className="text-4xl md:text-5xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-purple-600 dark:from-blue-400 dark:to-purple-400 px-4">
            Discutons de votre projet
          </h2>
          <p className="text-base md:text-xl text-muted-foreground px-4">Vous recrutez un développeur Full Stack ? Je suis disponible !</p>
        </div>

        {/* CTA Principal */}
        <Card className="border-2 border-primary/50 mb-8 md:mb-12">
          <CardContent className="p-6 md:p-8 text-center space-y-4 md:space-y-6">
            <div className="space-y-2">
              <h3 className="text-xl md:text-2xl font-bold">Intéressé par mon profil ?</h3>
              <p className="text-sm md:text-base text-muted-foreground">Téléchargez mon CV ou contactez-moi directement pour échanger</p>
            </div>
            <div className="flex flex-col sm:flex-row gap-3 md:gap-4 justify-center">
              <Button size="lg" className="gap-2 w-full sm:w-auto" asChild>
                <a href="mailto:votre.email@exemple.com">
                  <Mail className="w-4 h-4" />
                  M'envoyer un email
                </a>
              </Button>
              <Button size="lg" variant="outline" className="gap-2 w-full sm:w-auto" asChild>
                <a href="/cv.pdf" download>
                  <FileText className="w-4 h-4" />
                  Télécharger mon CV
                </a>
              </Button>
            </div>
          </CardContent>
        </Card>

        {/* Méthodes de contact */}
        <div className="grid sm:grid-cols-2 gap-4 md:gap-6">
          <Card className="border-2 hover:border-primary/50 transition-colors group cursor-pointer">
            <CardContent className="p-4 md:p-6">
              <a href="mailto:votre.email@exemple.com" className="flex items-center gap-3 md:gap-4">
                <div className="bg-blue-500/10 p-3 md:p-4 rounded-lg group-hover:bg-blue-500/20 transition-colors">
                  <Mail className="w-6 h-6 md:w-8 md:h-8 text-blue-600 dark:text-blue-400" />
                </div>
                <div>
                  <p className="font-medium text-base md:text-lg">Email</p>
                  <p className="text-xs md:text-sm text-muted-foreground break-all">votre.email@exemple.com</p>
                </div>
              </a>
            </CardContent>
          </Card>

          <Card className="border-2 hover:border-primary/50 transition-colors group cursor-pointer">
            <CardContent className="p-4 md:p-6">
              <a href="https://linkedin.com/in/votre-profil" target="_blank" rel="noopener" className="flex items-center gap-3 md:gap-4">
                <div className="bg-blue-500/10 p-3 md:p-4 rounded-lg group-hover:bg-blue-500/20 transition-colors">
                  <Linkedin className="w-6 h-6 md:w-8 md:h-8 text-blue-600 dark:text-blue-400" />
                </div>
                <div>
                  <p className="font-medium text-base md:text-lg">LinkedIn</p>
                  <p className="text-xs md:text-sm text-muted-foreground">Mon profil professionnel</p>
                </div>
              </a>
            </CardContent>
          </Card>

          <Card className="border-2 hover:border-primary/50 transition-colors group cursor-pointer">
            <CardContent className="p-4 md:p-6">
              <a href="https://github.com/votre-profil" target="_blank" rel="noopener" className="flex items-center gap-3 md:gap-4">
                <div className="bg-foreground/10 p-3 md:p-4 rounded-lg group-hover:bg-foreground/20 transition-colors">
                  <Github className="w-6 h-6 md:w-8 md:h-8 text-foreground" />
                </div>
                <div>
                  <p className="font-medium text-base md:text-lg">GitHub</p>
                  <p className="text-xs md:text-sm text-muted-foreground">Mes projets open-source</p>
                </div>
              </a>
            </CardContent>
          </Card>

          <Card className="border-2">
            <CardContent className="p-4 md:p-6 flex items-center gap-3 md:gap-4">
              <div className="bg-purple-500/10 p-3 md:p-4 rounded-lg">
                <MapPin className="w-6 h-6 md:w-8 md:h-8 text-purple-600 dark:text-purple-400" />
              </div>
              <div>
                <p className="font-medium text-base md:text-lg">Localisation</p>
                <p className="text-xs md:text-sm text-muted-foreground">Paris, France 🇫🇷</p>
                <p className="text-xs text-muted-foreground/70 mt-1">Télétravail possible</p>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Disponibilité */}
        <Card className="border-2 border-green-500/50 mt-6 md:mt-8 bg-green-500/5">
          <CardContent className="p-4 md:p-6 flex items-center gap-3 md:gap-4">
            <div className="bg-green-500/10 p-2.5 md:p-3 rounded-lg">
              <Calendar className="w-5 h-5 md:w-6 md:h-6 text-green-600 dark:text-green-400" />
            </div>
            <div>
              <p className="font-medium text-sm md:text-base">Disponibilité</p>
              <p className="text-xs md:text-sm text-muted-foreground">Disponible immédiatement / Préavis de X semaines</p>
            </div>
          </CardContent>
        </Card>
      </div>
    </section>
  );
}

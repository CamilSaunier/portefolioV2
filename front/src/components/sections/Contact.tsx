import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Mail, Linkedin, Github, MapPin, FileText, Calendar } from "lucide-react";

export default function Contact() {
  return (
    <section id="contact" className="py-20 bg-gradient-to-b from-white to-gray-50">
      <div className="max-w-4xl mx-auto px-6">
        <div className="text-center mb-16 space-y-4">
          <h2 className="text-5xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-purple-600">Discutons de votre projet</h2>
          <p className="text-xl text-gray-600">Vous recrutez un développeur Full Stack ? Je suis disponible !</p>
        </div>

        {/* CTA Principal */}
        <Card className="border-2 border-blue-200 mb-12">
          <CardContent className="p-8 text-center space-y-6">
            <div className="space-y-2">
              <h3 className="text-2xl font-bold">Intéressé par mon profil ?</h3>
              <p className="text-gray-600">Téléchargez mon CV ou contactez-moi directement pour échanger</p>
            </div>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" className="gap-2" asChild>
                <a href="mailto:votre.email@exemple.com">
                  <Mail className="w-4 h-4" />
                  M'envoyer un email
                </a>
              </Button>
              <Button size="lg" variant="outline" className="gap-2" asChild>
                <a href="/cv.pdf" download>
                  <FileText className="w-4 h-4" />
                  Télécharger mon CV
                </a>
              </Button>
            </div>
          </CardContent>
        </Card>

        {/* Méthodes de contact */}
        <div className="grid md:grid-cols-2 gap-6">
          <Card className="border-2 hover:border-blue-200 transition-colors group cursor-pointer">
            <CardContent className="p-6">
              <a href="mailto:votre.email@exemple.com" className="flex items-center gap-4">
                <div className="bg-blue-100 p-4 rounded-lg group-hover:bg-blue-200 transition-colors">
                  <Mail className="w-8 h-8 text-blue-600" />
                </div>
                <div>
                  <p className="font-medium text-lg">Email</p>
                  <p className="text-gray-600">votre.email@exemple.com</p>
                </div>
              </a>
            </CardContent>
          </Card>

          <Card className="border-2 hover:border-blue-200 transition-colors group cursor-pointer">
            <CardContent className="p-6">
              <a href="https://linkedin.com/in/votre-profil" target="_blank" rel="noopener" className="flex items-center gap-4">
                <div className="bg-blue-100 p-4 rounded-lg group-hover:bg-blue-200 transition-colors">
                  <Linkedin className="w-8 h-8 text-blue-600" />
                </div>
                <div>
                  <p className="font-medium text-lg">LinkedIn</p>
                  <p className="text-gray-600">Mon profil professionnel</p>
                </div>
              </a>
            </CardContent>
          </Card>

          <Card className="border-2 hover:border-blue-200 transition-colors group cursor-pointer">
            <CardContent className="p-6">
              <a href="https://github.com/votre-profil" target="_blank" rel="noopener" className="flex items-center gap-4">
                <div className="bg-gray-100 p-4 rounded-lg group-hover:bg-gray-200 transition-colors">
                  <Github className="w-8 h-8 text-gray-700" />
                </div>
                <div>
                  <p className="font-medium text-lg">GitHub</p>
                  <p className="text-gray-600">Mes projets open-source</p>
                </div>
              </a>
            </CardContent>
          </Card>

          <Card className="border-2">
            <CardContent className="p-6 flex items-center gap-4">
              <div className="bg-purple-100 p-4 rounded-lg">
                <MapPin className="w-8 h-8 text-purple-600" />
              </div>
              <div>
                <p className="font-medium text-lg">Localisation</p>
                <p className="text-gray-600">Paris, France 🇫🇷</p>
                <p className="text-sm text-gray-500 mt-1">Télétravail possible</p>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Disponibilité */}
        <Card className="border-2 border-green-200 mt-8 bg-green-50/50">
          <CardContent className="p-6 flex items-center gap-4">
            <div className="bg-green-100 p-3 rounded-lg">
              <Calendar className="w-6 h-6 text-green-600" />
            </div>
            <div>
              <p className="font-medium">Disponibilité</p>
              <p className="text-gray-600">Disponible immédiatement / Préavis de X semaines</p>
            </div>
          </CardContent>
        </Card>
      </div>
    </section>
  );
}

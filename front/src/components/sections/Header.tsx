import { Button } from "@/components/ui/button";
import { Menu, FileText } from "lucide-react";

export default function Header() {
  const navItems = [
    { name: "Accueil", href: "#hero" },
    { name: "À propos", href: "#about" },
    { name: "Expérience", href: "#experience" },
    { name: "Projets", href: "#projects" },
    { name: "Contact", href: "#contact" },
  ];

  return (
    <header className="sticky top-0 bg-white/80 backdrop-blur-md shadow-sm z-50 border-b">
      <div className="max-w-7xl mx-auto flex justify-between items-center px-6 py-4">
        <h1 className="text-2xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-purple-600">Votre Nom</h1>

        <nav className="hidden md:flex gap-8">
          {navItems.map((item) => (
            <a key={item.name} href={item.href} className="text-gray-600 hover:text-blue-600 font-medium transition-colors relative group">
              {item.name}
              <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-blue-600 group-hover:w-full transition-all" />
            </a>
          ))}
        </nav>

        <Button variant="default" className="hidden md:flex gap-2" asChild>
          <a href="/cv.pdf" download>
            <FileText className="w-4 h-4" />
            CV
          </a>
        </Button>

        <Button variant="outline" size="icon" className="md:hidden">
          <Menu className="w-5 h-5" />
        </Button>
      </div>
    </header>
  );
}

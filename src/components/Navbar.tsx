
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import { Menu, X } from "lucide-react";

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 10) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

  const navLinks = [
    { name: "Início", href: "#home" },
    { name: "Serviços", href: "#services" },
    { name: "Sobre", href: "#about" },
    { name: "Depoimentos", href: "#testimonials" },
    { name: "Contato", href: "#contact" },
  ];

  return (
    <header
      className={cn(
        "fixed top-0 left-0 right-0 z-50 transition-all duration-300 ease-in-out py-4",
        isScrolled
          ? "bg-white/80 dark:bg-gray-900/80 backdrop-blur-lg shadow-sm"
          : "bg-transparent"
      )}
    >
      <div className="container mx-auto px-4 md:px-6 flex items-center justify-between">
        <Link 
          to="/" 
          className="text-2xl font-display font-semibold text-finance-800 dark:text-white transition-all hover:text-finance-500"
        >
          <span className="text-finance-500">Finança</span>Mentor
        </Link>

        {/* Desktop navigation */}
        <nav className="hidden md:flex items-center space-x-8">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              className="text-sm font-medium text-gray-700 dark:text-gray-200 hover:text-finance-500 dark:hover:text-finance-400 transition-colors duration-200"
            >
              {link.name}
            </a>
          ))}
          <Button size="sm" className="bg-finance-500 hover:bg-finance-600 text-white">
            Agendar Consulta
          </Button>
        </nav>

        {/* Mobile menu button */}
        <button
          onClick={toggleMenu}
          className="flex md:hidden rounded-md p-2 text-gray-700 dark:text-gray-200 hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors duration-200"
          aria-expanded={isMenuOpen}
        >
          <span className="sr-only">Abrir menu</span>
          {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
        </button>
      </div>

      {/* Mobile navigation */}
      <div
        className={cn(
          "fixed inset-0 top-[68px] bg-white dark:bg-gray-900 md:hidden z-40 transform transition-transform duration-300 ease-in-out",
          isMenuOpen ? "translate-x-0" : "translate-x-full"
        )}
      >
        <nav className="flex flex-col space-y-6 pt-10 px-6">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              className="text-lg font-medium text-gray-700 dark:text-gray-200 hover:text-finance-500 dark:hover:text-finance-400 transition-colors duration-200"
              onClick={() => setIsMenuOpen(false)}
            >
              {link.name}
            </a>
          ))}
          <Button size="lg" className="mt-4 w-full bg-finance-500 hover:bg-finance-600 text-white">
            Agendar Consulta
          </Button>
        </nav>
      </div>
    </header>
  );
};

export default Navbar;

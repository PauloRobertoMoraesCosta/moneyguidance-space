
import { useEffect } from "react";
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Services from "@/components/Services";
import About from "@/components/About";
import Testimonials from "@/components/Testimonials";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

const Index = () => {
  // Smooth scroll to sections when clicking on anchor links
  useEffect(() => {
    const handleAnchorClick = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      const anchor = target.closest('a');
      
      if (anchor && anchor.hash && anchor.hash.startsWith('#')) {
        e.preventDefault();
        const targetElement = document.querySelector(anchor.hash);
        
        if (targetElement) {
          window.scrollTo({
            top: targetElement.getBoundingClientRect().top + window.scrollY - 80,
            behavior: 'smooth'
          });
        }
      }
    };

    document.addEventListener('click', handleAnchorClick);
    
    return () => document.removeEventListener('click', handleAnchorClick);
  }, []);

  // Add scroll reveal animations
  useEffect(() => {
    const handleScrollAnimation = () => {
      const elements = document.querySelectorAll('.animate-fade-in-up');
      
      elements.forEach((element) => {
        const elementPosition = element.getBoundingClientRect().top;
        const elementVisible = 150;
        
        if (elementPosition < window.innerHeight - elementVisible) {
          element.classList.add('opacity-100');
        }
      });
    };

    window.addEventListener('scroll', handleScrollAnimation);
    handleScrollAnimation(); // Initial check on page load
    
    return () => window.removeEventListener('scroll', handleScrollAnimation);
  }, []);

  return (
    <div className="min-h-screen bg-white dark:bg-gray-900">
      <Navbar />
      <main>
        <Hero />
        <Services />
        <About />
        <Testimonials />
        <Contact />
      </main>
      <Footer />
    </div>
  );
};

export default Index;

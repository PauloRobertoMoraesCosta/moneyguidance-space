
import { useState } from "react";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import { ChevronLeft, ChevronRight, Star } from "lucide-react";

const testimonials = [
  {
    id: 1,
    content: "A mentoria da FinançaMentor transformou completamente minha relação com o dinheiro. Em apenas 6 meses, consegui eliminar minhas dívidas e começar a investir com segurança.",
    author: "Carlos Oliveira",
    role: "Engenheiro de Software",
    rating: 5,
  },
  {
    id: 2,
    content: "Graças ao planejamento financeiro personalizado, consegui realizar o sonho de comprar meu apartamento muito antes do que imaginava. O conhecimento e dedicação dos mentores fazem toda diferença.",
    author: "Ana Paula Souza",
    role: "Médica",
    rating: 5,
  },
  {
    id: 3,
    content: "Sempre tive medo de investir, mas os mentores da FinançaMentor me ajudaram a entender o mercado de forma descomplicada. Hoje tenho uma carteira diversificada e consistente.",
    author: "Roberto Almeida",
    role: "Professor",
    rating: 5,
  },
  {
    id: 4,
    content: "O curso de educação financeira para empreendedores mudou a forma como gerencio meu negócio. Aprendi a separar as finanças pessoais das empresariais e os resultados são impressionantes.",
    author: "Juliana Costa",
    role: "Empresária",
    rating: 5,
  },
];

const Testimonials = () => {
  const [activeIndex, setActiveIndex] = useState(0);

  const nextTestimonial = () => {
    setActiveIndex((prev) => (prev + 1) % testimonials.length);
  };

  const prevTestimonial = () => {
    setActiveIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  return (
    <section id="testimonials" className="py-20 bg-finance-50 dark:bg-gray-900/30">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center max-w-2xl mx-auto mb-16 animate-fade-in-up">
          <span className="inline-flex items-center px-3 py-1 text-xs font-medium bg-finance-100 text-finance-800 dark:bg-finance-900/50 dark:text-finance-200 rounded-full">
            Depoimentos
          </span>
          <h2 className="mt-4 text-3xl md:text-4xl font-display font-bold text-gray-900 dark:text-white">
            O que nossos clientes dizem
          </h2>
          <p className="mt-4 text-lg text-gray-600 dark:text-gray-300">
            Histórias reais de pessoas que transformaram suas finanças 
            com nossa mentoria personalizada.
          </p>
        </div>

        <div className="max-w-5xl mx-auto">
          <div className="relative bg-white dark:bg-gray-800 rounded-2xl shadow-lg p-8 md:p-10 animate-fade-in-up animate-delay-200">
            {/* Decorative elements */}
            <div className="absolute top-4 right-10 text-6xl leading-none text-finance-200 dark:text-finance-800/40 font-serif">"</div>
            
            <div className="relative z-10">
              <div className="flex mb-6">
                {[...Array(testimonials[activeIndex].rating)].map((_, i) => (
                  <Star key={i} className="h-5 w-5 text-yellow-400 fill-yellow-400" />
                ))}
              </div>
              
              <p className="text-xl md:text-2xl text-gray-700 dark:text-gray-200 font-medium leading-relaxed mb-8">
                {testimonials[activeIndex].content}
              </p>
              
              <div className="flex items-center justify-between">
                <div>
                  <h4 className="font-semibold text-gray-900 dark:text-white">
                    {testimonials[activeIndex].author}
                  </h4>
                  <p className="text-gray-500 dark:text-gray-400">
                    {testimonials[activeIndex].role}
                  </p>
                </div>
                
                <div className="flex space-x-3">
                  <Button
                    variant="outline"
                    size="icon"
                    className="h-10 w-10 rounded-full border-gray-200 dark:border-gray-700"
                    onClick={prevTestimonial}
                  >
                    <ChevronLeft className="h-5 w-5" />
                    <span className="sr-only">Depoimento anterior</span>
                  </Button>
                  <Button
                    variant="outline"
                    size="icon"
                    className="h-10 w-10 rounded-full border-gray-200 dark:border-gray-700"
                    onClick={nextTestimonial}
                  >
                    <ChevronRight className="h-5 w-5" />
                    <span className="sr-only">Próximo depoimento</span>
                  </Button>
                </div>
              </div>
            </div>
          </div>

          <div className="mt-8 flex justify-center space-x-2">
            {testimonials.map((_, index) => (
              <button
                key={index}
                className={cn(
                  "h-2 rounded-full transition-all duration-300",
                  index === activeIndex 
                    ? "w-8 bg-finance-500" 
                    : "w-2 bg-gray-300 dark:bg-gray-600"
                )}
                onClick={() => setActiveIndex(index)}
                aria-label={`Ver depoimento ${index + 1}`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;

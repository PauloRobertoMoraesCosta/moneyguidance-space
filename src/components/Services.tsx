
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import { 
  ChevronRight, 
  PieChart, 
  Briefcase, 
  Building, 
  CreditCard, 
  Landmark, 
  Wallet 
} from "lucide-react";

const serviceItems = [
  {
    icon: <PieChart className="h-6 w-6 text-finance-500" />,
    title: "Planejamento Financeiro",
    description: "Desenvolvemos planos financeiros personalizados para atender seus objetivos de curto e longo prazo.",
    delay: 0,
  },
  {
    icon: <Briefcase className="h-6 w-6 text-finance-500" />,
    title: "Consultoria de Investimentos",
    description: "Orientação especializada para construir e otimizar sua carteira de investimentos.",
    delay: 100,
  },
  {
    icon: <Building className="h-6 w-6 text-finance-500" />,
    title: "Planejamento de Aposentadoria",
    description: "Estratégias para garantir segurança financeira e qualidade de vida na aposentadoria.",
    delay: 200,
  },
  {
    icon: <CreditCard className="h-6 w-6 text-finance-500" />,
    title: "Gestão de Dívidas",
    description: "Soluções eficientes para eliminar dívidas e reconstruir sua saúde financeira.",
    delay: 300,
  },
  {
    icon: <Landmark className="h-6 w-6 text-finance-500" />,
    title: "Planejamento Tributário",
    description: "Estratégias para minimizar impostos e maximizar seus retornos financeiros.",
    delay: 400,
  },
  {
    icon: <Wallet className="h-6 w-6 text-finance-500" />,
    title: "Educação Financeira",
    description: "Cursos e workshops para desenvolver habilidades financeiras essenciais.",
    delay: 500,
  },
];

const Services = () => {
  return (
    <section id="services" className="py-20 bg-gray-50 dark:bg-gray-900/50">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center max-w-2xl mx-auto mb-16 animate-fade-in-up">
          <span className="inline-flex items-center px-3 py-1 text-xs font-medium bg-finance-100 text-finance-800 dark:bg-finance-900/50 dark:text-finance-200 rounded-full">
            Nossos serviços
          </span>
          <h2 className="mt-4 text-3xl md:text-4xl font-display font-bold text-gray-900 dark:text-white">
            Soluções financeiras completas para cada etapa da sua vida
          </h2>
          <p className="mt-4 text-lg text-gray-600 dark:text-gray-300">
            Oferecemos uma gama completa de serviços de mentoria financeira para ajudar você 
            a alcançar seus objetivos e construir um futuro financeiro sólido.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          {serviceItems.map((service, index) => (
            <div 
              key={index}
              className={cn(
                "bg-white dark:bg-gray-800 rounded-xl p-6 shadow-sm",
                "transform transition-all duration-300 hover:shadow-lg hover:-translate-y-1",
                "border border-gray-100 dark:border-gray-700",
                "animate-fade-in-up"
              )}
              style={{ animationDelay: `${service.delay}ms` }}
            >
              <div className="h-12 w-12 rounded-lg bg-finance-50 dark:bg-finance-900/30 flex items-center justify-center mb-5">
                {service.icon}
              </div>
              <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-3">
                {service.title}
              </h3>
              <p className="text-gray-600 dark:text-gray-300 mb-6">
                {service.description}
              </p>
              <Button 
                variant="ghost" 
                className="p-0 h-auto text-finance-600 dark:text-finance-400 hover:text-finance-700 hover:bg-transparent dark:hover:text-finance-300"
              >
                Saiba mais <ChevronRight className="ml-1 h-4 w-4" />
              </Button>
            </div>
          ))}
        </div>

        <div className="mt-16 text-center animate-fade-in-up animate-delay-300">
          <Button 
            size="lg" 
            className="bg-finance-500 hover:bg-finance-600 text-white"
          >
            Ver todos os serviços
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Services;

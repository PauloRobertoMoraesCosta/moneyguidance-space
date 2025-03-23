
import { Button } from "@/components/ui/button";
import { CheckCircle2, Award, Users, BarChart2 } from "lucide-react";

const statsItems = [
  {
    value: "12+",
    label: "Anos de experiência",
    icon: <Award className="h-10 w-10 text-finance-500" />,
  },
  {
    value: "540+",
    label: "Clientes satisfeitos",
    icon: <Users className="h-10 w-10 text-finance-500" />,
  },
  {
    value: "90%",
    label: "Taxa de sucesso",
    icon: <BarChart2 className="h-10 w-10 text-finance-500" />,
  },
];

const benefitsItems = [
  "Aconselhamento financeiro personalizado",
  "Estratégias de investimento baseadas em pesquisa",
  "Planejamento financeiro de longo prazo",
  "Educação financeira contínua",
  "Monitoramento regular do progresso",
  "Suporte financeiro dedicado",
];

const About = () => {
  return (
    <section id="about" className="py-20 bg-white dark:bg-gray-800">
      <div className="container mx-auto px-4 md:px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div className="space-y-8 animate-fade-in-up">
            <div>
              <span className="inline-flex items-center px-3 py-1 text-xs font-medium bg-finance-100 text-finance-800 dark:bg-finance-900/50 dark:text-finance-200 rounded-full">
                Sobre nós
              </span>
              <h2 className="mt-4 text-3xl md:text-4xl font-display font-bold text-gray-900 dark:text-white leading-tight">
                Especialistas em transformação financeira
              </h2>
              <p className="mt-4 text-lg text-gray-600 dark:text-gray-300">
                A FinançaMentor nasceu com o propósito de democratizar o conhecimento financeiro 
                e ajudar pessoas a conquistarem independência e tranquilidade financeira.
              </p>
            </div>

            <p className="text-gray-600 dark:text-gray-300">
              Nossa equipe é formada por profissionais certificados com ampla experiência 
              no mercado financeiro. Combinamos conhecimento técnico com uma abordagem 
              humana e acessível, focada nas necessidades únicas de cada cliente.
            </p>

            <div className="space-y-4">
              <h3 className="text-xl font-semibold text-gray-900 dark:text-white">
                Por que escolher a FinançaMentor?
              </h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                {benefitsItems.map((item, index) => (
                  <div key={index} className="flex items-start space-x-2">
                    <CheckCircle2 className="h-5 w-5 text-finance-500 mt-0.5 flex-shrink-0" />
                    <span className="text-gray-600 dark:text-gray-300">{item}</span>
                  </div>
                ))}
              </div>
            </div>

            <div>
              <Button 
                size="lg" 
                className="bg-finance-500 hover:bg-finance-600 text-white"
              >
                Conheça nossa equipe
              </Button>
            </div>
          </div>

          <div className="relative animate-fade-in-up animate-delay-200">
            <div className="absolute -top-10 -left-10 w-64 h-64 bg-finance-100 dark:bg-finance-900/20 rounded-full blur-3xl -z-10"></div>
            
            <div className="bg-white dark:bg-gray-900 rounded-2xl shadow-xl border border-gray-100 dark:border-gray-700 overflow-hidden">
              <div className="p-8 md:p-10">
                <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">
                  Nossa missão é o seu sucesso financeiro
                </h3>
                
                <div className="grid grid-cols-1 gap-8">
                  {statsItems.map((stat, index) => (
                    <div 
                      key={index} 
                      className="flex items-center space-x-6 p-4 bg-gray-50 dark:bg-gray-800 rounded-xl"
                    >
                      <div className="flex-shrink-0">
                        {stat.icon}
                      </div>
                      <div>
                        <div className="text-3xl font-bold text-gray-900 dark:text-white">
                          {stat.value}
                        </div>
                        <p className="text-gray-500 dark:text-gray-400">
                          {stat.label}
                        </p>
                      </div>
                    </div>
                  ))}
                </div>
                
                <div className="mt-8 pt-6 border-t border-gray-100 dark:border-gray-700">
                  <p className="text-gray-600 dark:text-gray-300 text-center font-medium">
                    "Ajudamos nossos clientes a construir um patrimônio de mais de R$ 500 milhões nos últimos 5 anos"
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;

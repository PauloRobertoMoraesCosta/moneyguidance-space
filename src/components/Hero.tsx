
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { ArrowRight, BarChart2, TrendingUp, DollarSign, LineChart } from "lucide-react";

const Hero = () => {
  return (
    <section 
      id="home" 
      className="relative pt-36 pb-20 lg:pt-48 lg:pb-28 overflow-hidden"
    >
      {/* Background elements */}
      <div className="absolute top-0 left-0 right-0 h-[70vh] bg-gradient-to-b from-finance-50 to-transparent dark:from-gray-900/20 dark:to-transparent -z-10"></div>
      <div className="absolute top-32 right-[-10%] w-96 h-96 bg-finance-100 dark:bg-finance-900/20 rounded-full blur-3xl -z-10 animate-float"></div>
      <div className="absolute bottom-10 left-[-10%] w-72 h-72 bg-finance-100 dark:bg-finance-900/20 rounded-full blur-3xl -z-10 animate-float animation-delay-300"></div>
      
      <div className="container mx-auto px-4 md:px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-8 max-w-xl">
            <div className="space-y-4">
              <div className="inline-block animate-fade-in">
                <span className="inline-flex items-center px-3 py-1 text-xs font-medium bg-finance-100 text-finance-800 dark:bg-finance-900/50 dark:text-finance-200 rounded-full">
                  Mentoria financeira especializada
                </span>
              </div>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-display font-bold text-gray-900 dark:text-white leading-tight animate-fade-in-up">
                Transforme suas <span className="text-finance-500">finanças</span>, construa seu futuro
              </h1>
              <p className="text-lg text-gray-600 dark:text-gray-300 animate-fade-in-up animate-delay-100">
                Descubra como tomar decisões financeiras inteligentes com mentoria personalizada que 
                ajuda você a alcançar independência financeira e realizar seus objetivos.
              </p>
            </div>
            
            <div className="flex flex-col sm:flex-row gap-4 animate-fade-in-up animate-delay-200">
              <Button size="lg" className="bg-finance-500 hover:bg-finance-600 text-white">
                Começar agora
                <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
              <Button size="lg" variant="outline" className="border-finance-200 hover:bg-finance-50 text-finance-700">
                Conhecer os planos
              </Button>
            </div>
            
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 pt-4 animate-fade-in-up animate-delay-300">
              <div className="flex items-center space-x-2">
                <TrendingUp className="h-5 w-5 text-finance-500" />
                <span className="text-sm text-gray-600 dark:text-gray-400">Investimentos</span>
              </div>
              <div className="flex items-center space-x-2">
                <BarChart2 className="h-5 w-5 text-finance-500" />
                <span className="text-sm text-gray-600 dark:text-gray-400">Planejamento</span>
              </div>
              <div className="flex items-center space-x-2">
                <DollarSign className="h-5 w-5 text-finance-500" />
                <span className="text-sm text-gray-600 dark:text-gray-400">Economia</span>
              </div>
              <div className="flex items-center space-x-2">
                <LineChart className="h-5 w-5 text-finance-500" />
                <span className="text-sm text-gray-600 dark:text-gray-400">Crescimento</span>
              </div>
            </div>
          </div>
          
          <div className="relative lg:h-[600px] flex items-center justify-center animate-fade-in-up animate-delay-200">
            <div className="relative w-full max-w-md">
              <div className="absolute top-0 left-0 w-full h-full bg-finance-200/30 dark:bg-finance-800/10 rounded-3xl transform rotate-3 -z-10"></div>
              <div className={cn(
                "relative rounded-2xl overflow-hidden shadow-2xl glass glass-hover",
                "transform transition-transform duration-500 hover:scale-[1.02]"
              )}>
                <div className="bg-white dark:bg-gray-800 p-8 sm:p-10">
                  <div className="mb-8 flex items-center justify-between">
                    <div>
                      <h3 className="text-xl font-bold text-gray-900 dark:text-white">Análise Financeira</h3>
                      <p className="text-sm text-gray-500 dark:text-gray-400">Visualize seu progresso</p>
                    </div>
                    <div className="h-12 w-12 rounded-full bg-finance-50 dark:bg-finance-900/30 flex items-center justify-center">
                      <BarChart2 className="h-6 w-6 text-finance-500" />
                    </div>
                  </div>
                  
                  <div className="space-y-6">
                    <div className="space-y-2">
                      <div className="flex justify-between text-sm">
                        <span className="font-medium text-gray-700 dark:text-gray-300">Investimentos</span>
                        <span className="text-finance-600 dark:text-finance-400">32%</span>
                      </div>
                      <div className="h-2 bg-gray-100 dark:bg-gray-700 rounded-full overflow-hidden">
                        <div className="h-full bg-finance-500 rounded-full" style={{ width: "32%" }}></div>
                      </div>
                    </div>
                    
                    <div className="space-y-2">
                      <div className="flex justify-between text-sm">
                        <span className="font-medium text-gray-700 dark:text-gray-300">Economias</span>
                        <span className="text-finance-600 dark:text-finance-400">68%</span>
                      </div>
                      <div className="h-2 bg-gray-100 dark:bg-gray-700 rounded-full overflow-hidden">
                        <div className="h-full bg-finance-500 rounded-full" style={{ width: "68%" }}></div>
                      </div>
                    </div>
                    
                    <div className="space-y-2">
                      <div className="flex justify-between text-sm">
                        <span className="font-medium text-gray-700 dark:text-gray-300">Objetivos</span>
                        <span className="text-finance-600 dark:text-finance-400">45%</span>
                      </div>
                      <div className="h-2 bg-gray-100 dark:bg-gray-700 rounded-full overflow-hidden">
                        <div className="h-full bg-finance-500 rounded-full" style={{ width: "45%" }}></div>
                      </div>
                    </div>
                  </div>
                  
                  <div className="mt-8 pt-6 border-t border-gray-200 dark:border-gray-700">
                    <div className="flex items-center justify-between">
                      <div>
                        <p className="text-sm text-gray-500 dark:text-gray-400">Progresso total</p>
                        <p className="text-xl font-bold text-gray-900 dark:text-white">48.5%</p>
                      </div>
                      <Button size="sm" className="bg-finance-500 hover:bg-finance-600 text-white">
                        Detalhes
                      </Button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;

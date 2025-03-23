
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { toast } from "@/components/ui/sonner";
import { Mail, Phone, MapPin, Send } from "lucide-react";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  });

  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate form submission
    setTimeout(() => {
      toast.success("Mensagem enviada com sucesso! Entraremos em contato em breve.");
      setFormData({
        name: "",
        email: "",
        phone: "",
        message: "",
      });
      setIsSubmitting(false);
    }, 1500);
  };

  const contactInfo = [
    {
      icon: <Phone className="h-5 w-5 text-finance-500" />,
      title: "Telefone",
      content: "+55 (11) 3456-7890",
    },
    {
      icon: <Mail className="h-5 w-5 text-finance-500" />,
      title: "Email",
      content: "contato@financamentor.com.br",
    },
    {
      icon: <MapPin className="h-5 w-5 text-finance-500" />,
      title: "Endereço",
      content: "Av. Paulista, 1000, São Paulo - SP",
    },
  ];

  return (
    <section id="contact" className="py-20 bg-white dark:bg-gray-800">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center max-w-2xl mx-auto mb-16 animate-fade-in-up">
          <span className="inline-flex items-center px-3 py-1 text-xs font-medium bg-finance-100 text-finance-800 dark:bg-finance-900/50 dark:text-finance-200 rounded-full">
            Contato
          </span>
          <h2 className="mt-4 text-3xl md:text-4xl font-display font-bold text-gray-900 dark:text-white">
            Vamos começar sua jornada financeira
          </h2>
          <p className="mt-4 text-lg text-gray-600 dark:text-gray-300">
            Entre em contato conosco para agendar uma consulta inicial gratuita 
            e descobrir como podemos ajudar você.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-start max-w-5xl mx-auto">
          <div className="bg-white dark:bg-gray-900 rounded-2xl shadow-lg p-8 animate-fade-in-up">
            <h3 className="text-2xl font-semibold text-gray-900 dark:text-white mb-6">
              Envie uma mensagem
            </h3>
            
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="space-y-4">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
                    Nome completo
                  </label>
                  <Input
                    id="name"
                    name="name"
                    placeholder="Seu nome"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="w-full"
                  />
                </div>
                
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
                    Email
                  </label>
                  <Input
                    id="email"
                    name="email"
                    type="email"
                    placeholder="seu.email@exemplo.com"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="w-full"
                  />
                </div>
                
                <div>
                  <label htmlFor="phone" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
                    Telefone
                  </label>
                  <Input
                    id="phone"
                    name="phone"
                    placeholder="(00) 00000-0000"
                    value={formData.phone}
                    onChange={handleChange}
                    className="w-full"
                  />
                </div>
                
                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
                    Mensagem
                  </label>
                  <Textarea
                    id="message"
                    name="message"
                    placeholder="Como podemos ajudar você?"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    className="min-h-[120px]"
                  />
                </div>
              </div>
              
              <Button 
                type="submit" 
                className="w-full bg-finance-500 hover:bg-finance-600 text-white"
                disabled={isSubmitting}
              >
                {isSubmitting ? (
                  <span className="flex items-center">
                    <svg className="animate-spin -ml-1 mr-2 h-4 w-4 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                      <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                      <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                    </svg>
                    Enviando...
                  </span>
                ) : (
                  <span className="flex items-center">
                    Enviar mensagem <Send className="ml-2 h-4 w-4" />
                  </span>
                )}
              </Button>
            </form>
          </div>
          
          <div className="lg:pl-6 animate-fade-in-up animate-delay-200">
            <div className="bg-gray-50 dark:bg-gray-900 rounded-2xl p-8">
              <h3 className="text-2xl font-semibold text-gray-900 dark:text-white mb-6">
                Informações de contato
              </h3>
              
              <div className="space-y-6">
                {contactInfo.map((item, index) => (
                  <div key={index} className="flex space-x-4">
                    <div className="h-10 w-10 rounded-full bg-finance-100 dark:bg-finance-900/30 flex items-center justify-center">
                      {item.icon}
                    </div>
                    <div>
                      <h4 className="font-medium text-gray-900 dark:text-white">
                        {item.title}
                      </h4>
                      <p className="text-gray-600 dark:text-gray-300">
                        {item.content}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
              
              <div className="mt-10">
                <h4 className="font-medium text-gray-900 dark:text-white mb-4">
                  Horário de atendimento
                </h4>
                <ul className="space-y-2 text-gray-600 dark:text-gray-300">
                  <li className="flex justify-between">
                    <span>Segunda - Sexta:</span>
                    <span>09:00 - 18:00</span>
                  </li>
                  <li className="flex justify-between">
                    <span>Sábado:</span>
                    <span>10:00 - 14:00</span>
                  </li>
                  <li className="flex justify-between">
                    <span>Domingo:</span>
                    <span>Fechado</span>
                  </li>
                </ul>
              </div>
              
              <div className="mt-10">
                <Button 
                  variant="outline" 
                  className="w-full border-finance-200 hover:bg-finance-50 text-finance-700"
                >
                  Agendar uma consulta
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;

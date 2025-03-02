
import { useEffect, useRef } from "react";
import ServiceCard from "./ServiceCard";
import {
  Code,
  Database,
  Globe,
  LineChart,
  Smartphone,
  Tablet,
} from "lucide-react";

const Services = () => {
  const animatedElements = useRef<NodeListOf<Element> | null>(null);

  useEffect(() => {
    const options = {
      root: null,
      rootMargin: "0px",
      threshold: 0.1,
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("animate-fade-in");
          observer.unobserve(entry.target);
        }
      });
    }, options);

    animatedElements.current = document.querySelectorAll("[data-animate]");
    animatedElements.current.forEach((el) => observer.observe(el));

    return () => {
      if (animatedElements.current) {
        animatedElements.current.forEach((el) => observer.unobserve(el));
      }
    };
  }, []);

  const services = [
    {
      title: "Desenvolvimento Web",
      description:
        "Criamos sites e aplicações web responsivos, modernos e otimizados para todos os dispositivos e navegadores.",
      icon: Globe,
    },
    {
      title: "Aplicativos Mobile",
      description:
        "Desenvolvemos aplicativos nativos e híbridos para iOS e Android que elevam a experiência do usuário.",
      icon: Smartphone,
    },
    {
      title: "Integração de Sistemas",
      description:
        "Conectamos diferentes plataformas e sistemas para otimizar processos e aumentar a produtividade.",
      icon: Database,
    },
    {
      title: "Consultoria em TI",
      description:
        "Orientamos empresas na escolha das melhores soluções tecnológicas para seus desafios específicos.",
      icon: LineChart,
    },
    {
      title: "Desenvolvimento de Software",
      description:
        "Criamos soluções de software personalizadas para atender às necessidades específicas do seu negócio.",
      icon: Code,
    },
    {
      title: "UI/UX Design",
      description:
        "Projetamos interfaces intuitivas e experiências de usuário que encantam e facilitam o uso de produtos digitais.",
      icon: Tablet,
    },
  ];

  return (
    <section id="servicos" className="section-padding bg-gray-50">
      <div className="container-custom">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="inline-block px-3 py-1 bg-alfatech-100 text-alfatech-700 rounded-full text-sm font-medium mb-4 animate-fade-in">
            Nossos Serviços
          </span>
          <h2 className="section-title animate-fade-in">
            Soluções Tecnológicas Completas
          </h2>
          <p className="text-muted-foreground animate-fade-in-delayed">
            Combinamos expertise técnica com visão estratégica para desenvolver
            soluções personalizadas que impulsionam o crescimento do seu negócio.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          {services.map((service, index) => (
            <ServiceCard
              key={service.title}
              title={service.title}
              description={service.description}
              icon={service.icon}
              delay={index * 100}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;

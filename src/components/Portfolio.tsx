
import { useEffect, useRef } from "react";
import PortfolioItem from "./PortfolioItem";

const Portfolio = () => {
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

  const portfolioItems = [
    {
      title: "Plataforma E-commerce",
      category: "Desenvolvimento Web",
      description:
        "Desenvolvimento de uma plataforma completa de e-commerce com integração de pagamentos, gestão de estoque e painel administrativo personalizado. O sistema foi construído utilizando React, Node.js e MongoDB, oferecendo uma experiência de compra fluida e responsiva para os usuários finais e ferramentas poderosas de gestão para os administradores.",
      imageSrc: "https://images.unsplash.com/photo-1487058792275-0ad4aaf24ca7?auto=format&fit=crop&q=80&w=800",
    },
    {
      title: "Aplicativo Mobile de Finanças",
      category: "Desenvolvimento Mobile",
      description:
        "Criação de um aplicativo de gestão financeira pessoal para iOS e Android, com recursos de categorização de despesas, gráficos de análise, metas de economia e sincronização com contas bancárias. Desenvolvido com React Native e Firebase, o app oferece uma interface intuitiva e funcionalidades que ajudam os usuários a ter mais controle sobre suas finanças.",
      imageSrc: "https://images.unsplash.com/photo-1498050108023-c5249f4df085?auto=format&fit=crop&q=80&w=800",
    },
    {
      title: "Sistema de Gestão Empresarial",
      category: "Software Corporativo",
      description:
        "Desenvolvimento de um ERP personalizado para uma empresa de manufatura, integrando processos de produção, logística, vendas e financeiro em uma única plataforma. O sistema foi construído com .NET Core e React, e permitiu à empresa reduzir em 40% o tempo gasto em processos administrativos e melhorar a precisão das informações gerenciais.",
      imageSrc: "https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d?auto=format&fit=crop&q=80&w=800",
    },
    {
      title: "Website Institucional",
      category: "Design & Desenvolvimento",
      description:
        "Criação de website institucional para uma empresa de consultoria, com design moderno, responsivo e otimizado para SEO. O site inclui sistema de blog, formulários de contato integrados com CRM e área de cliente. Desenvolvido com WordPress customizado, o projeto aumentou em 60% as conversões de leads através do site.",
      imageSrc: "https://images.unsplash.com/photo-1488590528505-98d2b5aba04b?auto=format&fit=crop&q=80&w=800",
    },
    {
      title: "Plataforma de Ensino Online",
      category: "E-learning",
      description:
        "Desenvolvimento de uma plataforma de ensino online completa, com recursos de vídeo-aulas, materiais para download, fóruns de discussão, avaliações automatizadas e emissão de certificados. Construída com Vue.js e Laravel, a plataforma atende mais de 5.000 alunos simultâneos e integra-se a sistemas de pagamento e marketing digital.",
      imageSrc: "https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&q=80&w=800",
    },
    {
      title: "Dashboard de Analytics",
      category: "Business Intelligence",
      description:
        "Criação de um dashboard interativo para visualização e análise de dados de vendas, marketing e operações, com recursos de filtragem, exportação e alertas automáticos. Desenvolvido com Power BI e integrado a múltiplas fontes de dados, o dashboard ajudou a empresa a identificar oportunidades de otimização que resultaram em economia de 15% nos custos operacionais.",
      imageSrc: "https://images.unsplash.com/photo-1487058792275-0ad4aaf24ca7?auto=format&fit=crop&q=80&w=800",
    },
  ];

  return (
    <section id="portfolio" className="section-padding bg-gray-50">
      <div className="container-custom">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span
            className="inline-block px-3 py-1 bg-alfatech-100 text-alfatech-700 rounded-full text-sm font-medium mb-4"
            style={{ opacity: 0 }}
            data-animate="true"
          >
            Portfólio
          </span>
          <h2
            className="section-title"
            style={{ opacity: 0 }}
            data-animate="true"
          >
            Nossos Projetos de Sucesso
          </h2>
          <p
            className="text-muted-foreground"
            style={{ opacity: 0 }}
            data-animate="true"
          >
            Conheça alguns dos projetos que desenvolvemos e como eles
            transformaram os negócios de nossos clientes.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {portfolioItems.map((item, index) => (
            <PortfolioItem
              key={item.title}
              title={item.title}
              category={item.category}
              description={item.description}
              imageSrc={item.imageSrc}
              delay={index * 100}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Portfolio;

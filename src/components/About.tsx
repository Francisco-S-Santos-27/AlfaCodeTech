
import { useEffect, useRef } from "react";
import { CheckCircle, Users, Code, LineChart } from "lucide-react";

const About = () => {
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

  const stats = [
    { value: "5+", label: "Anos de experiência", icon: LineChart },
    { value: "50+", label: "Projetos entregues", icon: Code },
    { value: "30+", label: "Clientes satisfeitos", icon: Users },
  ];

  const values = [
    {
      title: "Inovação Constante",
      description:
        "Buscamos sempre as mais recentes tecnologias e metodologias para oferecer soluções de ponta.",
    },
    {
      title: "Qualidade Premium",
      description:
        "Cada linha de código e cada elemento de design é cuidadosamente criado com atenção aos detalhes.",
    },
    {
      title: "Foco no Cliente",
      description:
        "Trabalhamos em estreita colaboração com nossos clientes para entender e superar suas expectativas.",
    },
    {
      title: "Resultados Mensuráveis",
      description:
        "Nosso compromisso é entregar soluções que gerem impacto real e retorno sobre o investimento.",
    },
  ];

  return (
    <section id="sobre" className="section-padding">
      <div className="container-custom">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div>
            <span
              className="inline-block px-3 py-1 bg-alfatech-100 text-alfatech-700 rounded-full text-sm font-medium mb-4"
              style={{ opacity: 0 }}
              data-animate="true"
            >
              Sobre Nós
            </span>
            <h2
              className="section-title mb-6"
              style={{ opacity: 0 }}
              data-animate="true"
            >
              Transformando Ideias em Soluções Digitais de Alto Impacto
            </h2>
            <p
              className="text-muted-foreground mb-8"
              style={{ opacity: 0 }}
              data-animate="true"
            >
              A AlfaCodeTech nasceu da paixão por tecnologia e da vontade de
              criar soluções que realmente fazem a diferença. Desde 2018,
              ajudamos empresas de diversos segmentos a transformar desafios em
              oportunidades através de tecnologia inovadora e design
              centrado no usuário.
            </p>
            <p
              className="text-muted-foreground mb-8"
              style={{ opacity: 0 }}
              data-animate="true"
            >
              Nossa equipe é formada por profissionais experientes e apaixonados
              por tecnologia, que combinam expertise técnica com visão
              estratégica para entregar projetos de alta qualidade, dentro do
              prazo e do orçamento.
            </p>

            <div
              className="grid grid-cols-1 sm:grid-cols-3 gap-6 mb-8"
              style={{ opacity: 0 }}
              data-animate="true"
            >
              {stats.map((stat) => (
                <div
                  key={stat.label}
                  className="bg-alfatech-50 rounded-xl p-4 text-center"
                >
                  <div className="flex justify-center mb-2">
                    <stat.icon
                      size={24}
                      className="text-alfatech-600"
                    />
                  </div>
                  <div className="text-3xl font-bold text-alfatech-950 mb-1">
                    {stat.value}
                  </div>
                  <div className="text-sm text-muted-foreground">
                    {stat.label}
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div
            className="grid grid-cols-1 sm:grid-cols-2 gap-6"
            style={{ opacity: 0 }}
            data-animate="true"
          >
            {values.map((value, index) => (
              <div
                key={value.title}
                className="p-6 rounded-xl border border-border bg-white shadow-sm"
              >
                <div className="mb-4 text-alfatech-600">
                  <CheckCircle size={24} />
                </div>
                <h3 className="text-xl font-semibold mb-2 text-alfatech-950">
                  {value.title}
                </h3>
                <p className="text-muted-foreground">
                  {value.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;

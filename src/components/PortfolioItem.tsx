
import { useState } from "react";
import { Eye, X, ArrowRight } from "lucide-react";
import { cn } from "@/lib/utils";

interface PortfolioItemProps {
  title: string;
  category: string;
  description: string;
  imageSrc: string;
  delay?: number;
}

const PortfolioItem = ({
  title,
  category,
  description,
  imageSrc,
  delay = 0,
}: PortfolioItemProps) => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const animationDelay = `${delay}ms`;

  return (
    <>
      <div
        className="group relative overflow-hidden rounded-xl bg-alfatech-50 hover-lift"
        style={{
          animationDelay,
          opacity: 0,
          transform: "translateY(20px)",
        }}
        data-animate="true"
      >
        <div className="aspect-[4/3] overflow-hidden">
          <img
            src={imageSrc}
            alt={title}
            className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
            loading="lazy"
          />
        </div>
        
        <div className="absolute inset-0 bg-gradient-to-t from-alfatech-950/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end">
          <div className="p-6 w-full">
            <span className="text-alfatech-100 text-sm font-medium inline-block mb-2">
              {category}
            </span>
            <h3 className="text-white text-xl font-semibold mb-3">{title}</h3>
            <button
              onClick={() => setIsModalOpen(true)}
              className="text-white text-sm font-medium flex items-center gap-2 animated-underline"
            >
              Ver detalhes <ArrowRight size={16} />
            </button>
          </div>
        </div>
      </div>

      {/* Modal */}
      {isModalOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
          <div
            className="absolute inset-0 bg-alfatech-950/80 backdrop-blur-sm"
            onClick={() => setIsModalOpen(false)}
          />
          <div className="relative bg-white rounded-2xl shadow-xl max-w-3xl w-full max-h-[90vh] overflow-auto animate-scale-up">
            <button
              onClick={() => setIsModalOpen(false)}
              className="absolute top-4 right-4 text-alfatech-950 hover:text-alfatech-600 z-10"
              aria-label="Fechar modal"
            >
              <X size={24} />
            </button>
            
            <div className="aspect-video w-full overflow-hidden">
              <img
                src={imageSrc}
                alt={title}
                className="w-full h-full object-cover"
              />
            </div>
            
            <div className="p-6 md:p-8">
              <div className="flex flex-wrap items-center justify-between gap-2 mb-4">
                <h3 className="text-2xl font-semibold text-alfatech-950">{title}</h3>
                <span className="px-3 py-1 bg-alfatech-50 text-alfatech-600 rounded-full text-sm font-medium">
                  {category}
                </span>
              </div>
              <p className="text-muted-foreground leading-relaxed mb-6">
                {description}
              </p>
              <div className="flex justify-between items-center border-t border-border pt-6">
                <div className="flex items-center gap-4">
                  <span className="text-sm font-medium text-alfatech-950">Compartilhar:</span>
                  <div className="flex gap-2">
                    {/* Social share buttons can be added here */}
                  </div>
                </div>
                <a
                  href="#"
                  className="inline-flex items-center gap-2 px-4 py-2 bg-alfatech-600 text-white rounded-lg text-sm font-medium hover:bg-alfatech-700 transition-colors"
                >
                  Visitar projeto <ArrowRight size={16} />
                </a>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default PortfolioItem;

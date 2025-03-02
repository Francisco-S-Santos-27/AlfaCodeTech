
export const fadeInUpAnimation = {
  hidden: { opacity: 0, y: 20 },
  visible: { 
    opacity: 1, 
    y: 0,
    transition: {
      duration: 0.7,
      ease: "easeOut"
    }
  }
};

export const fadeInDownAnimation = {
  hidden: { opacity: 0, y: -20 },
  visible: { 
    opacity: 1, 
    y: 0,
    transition: {
      duration: 0.7,
      ease: "easeOut"
    }
  }
};

export const fadeInLeftAnimation = {
  hidden: { opacity: 0, x: -20 },
  visible: { 
    opacity: 1, 
    x: 0,
    transition: {
      duration: 0.7,
      ease: "easeOut"
    }
  }
};

export const fadeInRightAnimation = {
  hidden: { opacity: 0, x: 20 },
  visible: { 
    opacity: 1, 
    x: 0,
    transition: {
      duration: 0.7,
      ease: "easeOut"
    }
  }
};

export const scaleAnimation = {
  hidden: { opacity: 0, scale: 0.95 },
  visible: { 
    opacity: 1, 
    scale: 1,
    transition: {
      duration: 0.5,
      ease: "easeOut"
    }
  }
};

export const staggerChildren = (staggerTime = 0.1) => ({
  hidden: { opacity: 0 },
  visible: { 
    opacity: 1,
    transition: {
      staggerChildren: staggerTime
    }
  }
});

export const blurInAnimation = {
  hidden: { opacity: 0, filter: "blur(8px)" },
  visible: { 
    opacity: 1, 
    filter: "blur(0px)",
    transition: {
      duration: 0.7,
      ease: "easeOut"
    }
  }
};

export function useIntersectionObserver(options = {}) {
  const defaultOptions = {
    root: null,
    rootMargin: "0px",
    threshold: 0.1,
  };

  const mergedOptions = { ...defaultOptions, ...options };

  return (element: Element) => {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("animate-fade-in");
          observer.unobserve(entry.target);
        }
      });
    }, mergedOptions);

    observer.observe(element);

    return () => {
      observer.unobserve(element);
    };
  };
}

import { useEffect, useRef, useState } from 'react';

const ScrollAnimation = ({ children, direction = 'up', className = '', viewport = {} }) => {
  const ref = useRef(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.unobserve(entry.target);
        }
      },
      {
        threshold: viewport.amount || 0.1,
        rootMargin: viewport.margin || '0px',
      }
    );

    if (ref.current) {
      observer.observe(ref.current);
    }

    return () => {
      if (ref.current) {
        observer.unobserve(ref.current);
      }
    };
  }, [viewport]);

  const getAnimationClass = () => {
    if (!isVisible) return '';
    if (direction === 'left') return 'animate-scroll-left';
    if (direction === 'right') return 'animate-scroll-right';
    return 'animate-scroll-up';
  };

  return (
    <div
      ref={ref}
      className={`${className} ${getAnimationClass()}`}
      style={{
        opacity: isVisible ? 1 : 0,
        transform: isVisible ? 'translateY(0)' : 'translateY(20px)',
        transition: 'all 0.8s cubic-bezier(0.34, 1.56, 0.64, 1)',
      }}
    >
      {children}
    </div>
  );
};

export default ScrollAnimation;

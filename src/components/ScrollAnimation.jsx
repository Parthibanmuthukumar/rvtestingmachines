import { useEffect, useRef, useState } from 'react';

const ScrollAnimation = ({ children, direction = 'up', delay = 0, className = '', viewport = {} }) => {
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

    const el = ref.current;
    if (el) {
      observer.observe(el);
    }

    return () => {
      if (el) {
        observer.unobserve(el);
      }
    };
  }, [viewport.amount, viewport.margin]);

  const getAnimationClass = () => {
    if (!isVisible) return '';
    if (direction === 'left') return 'animate-scroll-left';
    if (direction === 'right') return 'animate-scroll-right';
    if (direction === 'scale') return 'animate-scroll-scale';
    return 'animate-scroll-up';
  };

  const getInitialTransform = () => {
    switch (direction) {
      case 'left': return 'translateX(-60px)';
      case 'right': return 'translateX(60px)';
      case 'scale': return 'scale(0.92)';
      case 'up':
      default: return 'translateY(40px)';
    }
  };

  const getVisibleTransform = () => {
    switch (direction) {
      case 'left':
      case 'right': return 'translateX(0)';
      case 'scale': return 'scale(1)';
      case 'up':
      default: return 'translateY(0)';
    }
  };

  return (
    <div
      ref={ref}
      className={`${className} ${getAnimationClass()}`}
      style={{
        opacity: isVisible ? 1 : 0,
        transform: isVisible ? getVisibleTransform() : getInitialTransform(),
        transition: `opacity 0.7s cubic-bezier(0.16, 1, 0.3, 1) ${delay}ms, transform 0.7s cubic-bezier(0.16, 1, 0.3, 1) ${delay}ms`,
      }}
    >
      {children}
    </div>
  );
};

export default ScrollAnimation;


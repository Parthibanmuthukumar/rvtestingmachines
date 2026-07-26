import { useEffect, useRef } from 'react';

/**
 * TiltCard — applies a smooth 3D tilt effect on mouse move.
 * Use only on service/product/feature cards where it adds value.
 */
const TiltCard = ({ children, className = '', intensity = 12, ...props }) => {
  const ref = useRef(null);
  const frameRef = useRef(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const onMove = e => {
      cancelAnimationFrame(frameRef.current);
      frameRef.current = requestAnimationFrame(() => {
        const rect = el.getBoundingClientRect();
        const x = ((e.clientX - rect.left) / rect.width  - 0.5) * intensity;
        const y = ((e.clientY - rect.top)  / rect.height - 0.5) * intensity;
        el.style.transform = `perspective(800px) rotateX(${-y}deg) rotateY(${x}deg) scale3d(1.02, 1.02, 1.02)`;
        el.style.boxShadow = `${-x * 0.8}px ${y * 0.8}px 40px rgba(10,30,61,0.18)`;
      });
    };

    const onLeave = () => {
      cancelAnimationFrame(frameRef.current);
      el.style.transform = 'perspective(800px) rotateX(0deg) rotateY(0deg) scale3d(1,1,1)';
      el.style.boxShadow = '';
    };

    el.addEventListener('mousemove', onMove);
    el.addEventListener('mouseleave', onLeave);
    return () => {
      el.removeEventListener('mousemove', onMove);
      el.removeEventListener('mouseleave', onLeave);
      cancelAnimationFrame(frameRef.current);
    };
  }, [intensity]);

  return (
    <div
      ref={ref}
      className={className}
      style={{ willChange: 'transform', transition: 'transform 0.15s ease, box-shadow 0.15s ease' }}
      {...props}
    >
      {children}
    </div>
  );
};

export default TiltCard;

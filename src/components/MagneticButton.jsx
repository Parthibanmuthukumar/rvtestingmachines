import { useRef, useCallback } from 'react';

/**
 * MagneticButton — attracts the button toward the cursor on hover.
 * Use on primary CTAs only (hero buttons, contact submit, etc.)
 */
const MagneticButton = ({ children, className = '', strength = 0.35, ...props }) => {
  const btnRef  = useRef(null);
  const frameRef = useRef(null);

  const onMove = useCallback(e => {
    const el = btnRef.current;
    if (!el) return;
    cancelAnimationFrame(frameRef.current);
    frameRef.current = requestAnimationFrame(() => {
      const rect = el.getBoundingClientRect();
      const cx   = rect.left + rect.width  / 2;
      const cy   = rect.top  + rect.height / 2;
      const dx   = (e.clientX - cx) * strength;
      const dy   = (e.clientY - cy) * strength;
      el.style.transform = `translate(${dx}px, ${dy}px)`;
    });
  }, [strength]);

  const onLeave = useCallback(() => {
    cancelAnimationFrame(frameRef.current);
    const el = btnRef.current;
    if (el) el.style.transform = '';
  }, []);

  return (
    <button
      ref={btnRef}
      className={className}
      onMouseMove={onMove}
      onMouseLeave={onLeave}
      style={{ transition: 'transform 0.25s cubic-bezier(0.16, 1, 0.3, 1)' }}
      {...props}
    >
      {children}
    </button>
  );
};

export default MagneticButton;

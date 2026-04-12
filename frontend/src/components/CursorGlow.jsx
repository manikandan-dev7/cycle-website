import React, { useState, useEffect } from 'react';

export default function CursorGlow() {
  const [pos, setPos] = useState({ x: -300, y: -300 });
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const onMove = (e) => {
      setPos({ x: e.clientX, y: e.clientY });
      setVisible(true);
    };
    const onLeave = () => setVisible(false);
    window.addEventListener('mousemove', onMove, { passive: true });
    document.addEventListener('mouseleave', onLeave);
    return () => {
      window.removeEventListener('mousemove', onMove);
      document.removeEventListener('mouseleave', onLeave);
    };
  }, []);

  return (
    <div
      className="fixed pointer-events-none z-30 rounded-full"
      style={{
        width: 450,
        height: 450,
        background: 'radial-gradient(circle, rgba(249, 115, 22, 0.055) 0%, transparent 65%)',
        left: pos.x - 225,
        top: pos.y - 225,
        transition: 'left 0.1s ease-out, top 0.1s ease-out',
        willChange: 'left, top',
        opacity: visible ? 1 : 0,
      }}
    />
  );
}

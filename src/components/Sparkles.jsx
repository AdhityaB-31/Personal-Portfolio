import { useState, useEffect } from "react";

export default function Sparkles({ count = 15 }) {
  const [sparkles, setSparkles] = useState([]);

  useEffect(() => {
    // Generate randomized sparkles on mount to prevent SSR/hydration issues
    const items = Array.from({ length: count }).map((_, i) => ({
      id: i,
      left: `${(i * 90 / count) + 5 + Math.random() * 5}%`,
      delay: `${(i * 0.4).toFixed(1)}s`,
      speed: `${(6 + Math.random() * 6).toFixed(1)}s`,
      size: `${(3 + Math.random() * 5).toFixed(0)}px`,
      drift: `${(Math.random() * 140 - 70).toFixed(0)}px`,
    }));
    setSparkles(items);
  }, [count]);

  return (
    <>
      {/* Mystical Drifting Fog */}
      <div className="magic-fog" />
      {/* Diagonal Spell Beams */}
      <div className="magic-beams" />
      {/* Floating Sparkles */}
      <div className="magic-sparks-container">
        {sparkles.map((s) => (
          <div
            key={s.id}
            className="sparkle"
            style={{
              left: s.left,
              animationDelay: s.delay,
              animationDuration: s.speed,
              "--size": s.size,
              "--drift": s.drift,
            }}
          />
        ))}
      </div>
    </>
  );
}

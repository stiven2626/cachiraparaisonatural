import { useEffect, useRef } from "react";

// Cordillera dibujada en canvas con capas de verdes pastel y niebla.
const CAPAS = ["#d5ffba", "#a5df8e", "#74bf63", "#449f37"];

export default function Montanas({ className = "" }) {
  const ref = useRef(null);

  useEffect(() => {
    const canvas = ref.current;
    if (!canvas) return;

    const dibujar = () => {
      const { width, height } = canvas.getBoundingClientRect();
      const dpr = Math.min(2, window.devicePixelRatio || 1);
      canvas.width = width * dpr;
      canvas.height = height * dpr;
      const g = canvas.getContext("2d");
      g.scale(dpr, dpr);

      const cielo = g.createLinearGradient(0, 0, 0, height);
      cielo.addColorStop(0, "#f6ffef");
      cielo.addColorStop(1, "#eaffdc");
      g.fillStyle = cielo;
      g.fillRect(0, 0, width, height);

      // sol suave
      g.fillStyle = "rgba(255,255,255,0.9)";
      g.beginPath();
      g.arc(width * 0.78, height * 0.28, Math.min(width, height) * 0.08, 0, Math.PI * 2);
      g.fill();

      let semilla = 7;
      const azar = () => ((semilla = (semilla * 16807) % 2147483647) / 2147483647);

      CAPAS.forEach((color, i) => {
        const base = height * (0.5 + i * 0.13);
        const amp = height * (0.15 - i * 0.022);
        const f1 = azar() * 6;
        const f2 = azar() * 6;
        g.beginPath();
        g.moveTo(0, height);
        for (let x = 0; x <= width; x += 6) {
          const t = x / width;
          const y = base - amp * (0.55 * Math.sin(t * 5 + f1) + 0.3 * Math.sin(t * 12 + f2) + 0.15 * Math.sin(t * 29 + i));
          g.lineTo(x, y);
        }
        g.lineTo(width, height);
        g.closePath();
        g.fillStyle = color;
        g.fill();

        // franja de niebla
        const niebla = g.createLinearGradient(0, base - amp, 0, base + amp * 0.6);
        niebla.addColorStop(0, "rgba(246,255,239,0)");
        niebla.addColorStop(1, "rgba(246,255,239,0.45)");
        g.fillStyle = niebla;
        g.fillRect(0, base - amp, width, amp * 1.6);
      });
    };

    dibujar();
    const ro = new ResizeObserver(dibujar);
    ro.observe(canvas);
    return () => ro.disconnect();
  }, []);

  return <canvas ref={ref} aria-hidden="true" className={`absolute inset-0 h-full w-full ${className}`} />;
}

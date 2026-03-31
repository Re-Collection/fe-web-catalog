import { useEffect, useRef } from 'react';

interface Star {
  x: number;
  y: number;
  vx: number;
  vy: number;
  radius: number;
  parallax: number;
}

const STAR_COUNT = 90;
const MAX_DISTANCE = 140;

function createStar(width: number, height: number): Star {
  const speed = 0.02 + Math.random() * 0.15;
  const direction = Math.random() * Math.PI * 2;

  return {
    x: Math.random() * width,
    y: Math.random() * height,
    vx: Math.cos(direction) * speed,
    vy: Math.sin(direction) * speed,
    radius: Math.random() * 1.2 + 0.2,
    parallax: 0.4 + Math.random() * 0.8,
  };
}

export function ConstellationBackground() {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const animationRef = useRef<number>();

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    let width = window.innerWidth;
    let height = window.innerHeight;
    let dpr = window.devicePixelRatio || 1;

    const stars: Star[] = Array.from({ length: STAR_COUNT }, () => createStar(width, height));

    const resize = () => {
      width = window.innerWidth;
      height = window.innerHeight;
      dpr = window.devicePixelRatio || 1;
      canvas.width = width * dpr;
      canvas.height = height * dpr;
      canvas.style.width = `${width}px`;
      canvas.style.height = `${height}px`;
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
    };

    const wrapStar = (star: Star) => {
      if (star.x < -20) star.x = width + 20;
      if (star.x > width + 20) star.x = -20;
      if (star.y < -20) star.y = height + 20;
      if (star.y > height + 20) star.y = -20;
    };

    const draw = () => {
      ctx.clearRect(0, 0, width, height);
      ctx.globalCompositeOperation = 'lighter';

      stars.forEach((star) => {
        star.x += star.vx * star.parallax;
        star.y += star.vy * star.parallax;
        wrapStar(star);

        const pulse = 0.5 + Math.sin(Date.now() * 0.001 + star.x) * 0.5;

        ctx.beginPath();
        ctx.fillStyle = `rgba(180, 228, 255, ${0.2 + pulse * 0.3})`;
        ctx.arc(star.x, star.y, star.radius * (0.5 + pulse * 0.8), 0, Math.PI * 2);
        ctx.fill();
      });

      for (let i = 0; i < stars.length; i++) {
        for (let j = i + 1; j < stars.length; j++) {
          const dx = stars[i].x - stars[j].x;
          const dy = stars[i].y - stars[j].y;
          const dist = Math.hypot(dx, dy);

          if (dist < MAX_DISTANCE) {
            ctx.beginPath();
            ctx.strokeStyle = `rgba(94, 234, 212, ${0.15 * (1 - dist / MAX_DISTANCE)})`;
            ctx.lineWidth = 0.6;
            ctx.moveTo(stars[i].x, stars[i].y);
            ctx.lineTo(stars[j].x, stars[j].y);
            ctx.stroke();
          }
        }
      }

      animationRef.current = requestAnimationFrame(draw);
    };

    resize();
    draw();
    window.addEventListener('resize', resize);

    return () => {
      window.removeEventListener('resize', resize);
      if (animationRef.current) {
        cancelAnimationFrame(animationRef.current);
      }
    };
  }, []);

  return (
    <div className="pointer-events-none fixed inset-0 -z-10 opacity-70">
      <canvas ref={canvasRef} className="absolute inset-0" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,_rgba(255,255,255,0.07),_transparent_55%)]" />
    </div>
  );
}

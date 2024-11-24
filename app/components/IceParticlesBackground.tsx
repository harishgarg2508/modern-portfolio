"use client"

import React, { useEffect, useRef } from 'react';

const FuturisticBackground: React.FC = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    const setCanvasSize = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };
    setCanvasSize();
    window.addEventListener('resize', setCanvasSize);

    class Particle {
      x: number;
      y: number;
      size: number;
      speedX: number;
      speedY: number;
      opacity: number;
      color: string;

      constructor() {
        this.x = Math.random() * canvas.width;
        this.y = Math.random() * canvas.height;
        this.size = Math.random() * 2.5 + 0.5;
        this.speedX = Math.random() * 0.8 - 0.8;
        this.speedY = Math.random() * 0.8 + 0.8;
        this.opacity = Math.random() * 0.4 + 0.2;
        this.color = this.getRandomColor();
      }

      getRandomColor() {
        const colors = [
          'rgba(147, 51, 234, 0.7)',  // Bright purple
          'rgba(192, 132, 252, 0.7)', // Light purple
          'rgba(79, 70, 229, 0.7)',   // Indigo
          'rgba(59, 130, 246, 0.7)',  // Blue
        ];
        return colors[Math.floor(Math.random() * colors.length)];
      }

      update() {
        this.y += this.speedY;
        this.x += this.speedX;

        if (this.y > canvas.height) {
          this.y = -10;
          this.x = Math.random() * canvas.width;
          this.opacity = Math.random() * 0.4 + 0.2;
          this.color = this.getRandomColor();
        }
        if (this.x < 0) this.x = canvas.width;
        if (this.x > canvas.width) this.x = 0;

        this.opacity += Math.sin(Date.now() * 0.001) * 0.002;
      }

      draw() {
        if (!ctx) return;
        ctx.beginPath();
        ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2);
        ctx.fillStyle = this.color;
        ctx.fill();
      }
    }

    const particles: Particle[] = [];
    const particleCount = Math.floor((canvas.width * canvas.height) / 8000);
    for (let i = 0; i < particleCount; i++) {
      particles.push(new Particle());
    }

    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      
      // Updated gradient with deep purple and dark blue colors for a futuristic look
      const gradient = ctx.createRadialGradient(
        canvas.width / 2, canvas.height / 2, 0,
        canvas.width / 2, canvas.height / 2, Math.max(canvas.width, canvas.height) / 2
      );
      gradient.addColorStop(0, 'rgba(49, 10, 94, 1)');    // Deep purple
      gradient.addColorStop(0.5, 'rgba(36, 7, 70, 1)');   // Darker purple
      gradient.addColorStop(1, 'rgba(17, 24, 39, 1)');    // Very dark blue/gray

      ctx.fillStyle = gradient;
      ctx.fillRect(0, 0, canvas.width, canvas.height);

      particles.forEach(particle => {
        particle.update();
        particle.draw();
      });

      particles.forEach(particleA => {
        particles.forEach(particleB => {
          const dx = particleA.x - particleB.x;
          const dy = particleA.y - particleB.y;
          const distance = Math.sqrt(dx * dx + dy * dy);

          if (distance < 120) {
            ctx.beginPath();
            const opacity = 0.1 * (1 - distance / 120);
            ctx.strokeStyle = `rgba(147, 51, 234, ${opacity})`;
            ctx.lineWidth = 0.4;
            ctx.moveTo(particleA.x, particleA.y);
            ctx.lineTo(particleB.x, particleB.y);
            ctx.stroke();
          }
        });
      });

      requestAnimationFrame(animate);
    };

    animate();

    return () => {
      window.removeEventListener('resize', setCanvasSize);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="fixed inset-0 w-full h-full pointer-events-none"
      style={{ zIndex: -1 }}
    />
  );
};

export default FuturisticBackground;
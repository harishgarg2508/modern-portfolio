import { Particle } from './Particle';

export class ParticleSystem {
  particles: Particle[];
  width: number;
  height: number;

  constructor(width: number, height: number) {
    this.width = width;
    this.height = height;
    this.particles = [];
    this.initParticles();
  }

  private initParticles() {
    const particleCount = Math.floor((this.width * this.height) / 8000);
    for (let i = 0; i < particleCount; i++) {
      this.particles.push(new Particle(this.width, this.height));
    }
  }

  update() {
    this.particles.forEach(particle => {
      particle.update(this.width, this.height);
    });
  }

  draw(ctx: CanvasRenderingContext2D) {
    // Draw background gradient
    const gradient = ctx.createRadialGradient(
      this.width / 2, this.height / 2, 0,
      this.width / 2, this.height / 2, Math.max(this.width, this.height) / 2
    );
    gradient.addColorStop(0, 'rgba(49, 10, 94, 1)');    // Deep purple
    gradient.addColorStop(0.5, 'rgba(36, 7, 70, 1)');   // Darker purple
    gradient.addColorStop(1, 'rgba(17, 24, 39, 1)');    // Very dark blue/gray

    ctx.fillStyle = gradient;
    ctx.fillRect(0, 0, this.width, this.height);

    // Draw particles
    this.particles.forEach(particle => {
      particle.draw(ctx);
    });

    // Draw connections
    this.drawConnections(ctx);
  }

  private drawConnections(ctx: CanvasRenderingContext2D) {
    this.particles.forEach(particleA => {
      this.particles.forEach(particleB => {
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
  }
}
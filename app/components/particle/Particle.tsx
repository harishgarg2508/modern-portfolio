export class Particle {
    x: number;
    y: number;
    size: number;
    speedX: number;
    speedY: number;
    opacity: number;
    color: string;
  
    constructor(width: number, height: number) {
      this.x = Math.random() * width;
      this.y = Math.random() * height;
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
  
    update(width: number, height: number) {
      this.y += this.speedY;
      this.x += this.speedX;
  
      if (this.y > height) {
        this.y = -10;
        this.x = Math.random() * width;
        this.opacity = Math.random() * 0.4 + 0.2;
        this.color = this.getRandomColor();
      }
      if (this.x < 0) this.x = width;
      if (this.x > width) this.x = 0;
  
      this.opacity += Math.sin(Date.now() * 0.001) * 0.002;
    }
  
    draw(ctx: CanvasRenderingContext2D) {
      ctx.beginPath();
      ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2);
      ctx.fillStyle = this.color;
      ctx.fill();
    }
  }
import { useEffect, useRef } from "react";

export default function BackgroundParticles() {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    let animationFrameId: number;
    let width = (canvas.width = window.innerWidth);
    let height = (canvas.height = window.innerHeight);

    // Particle class
    class Particle {
      x: number;
      y: number;
      size: number;
      speedX: number;
      speedY: number;
      color: string;

      constructor() {
        this.x = Math.random() * width;
        this.y = Math.random() * height;
        this.size = Math.random() * 2 + 0.5;
        this.speedX = (Math.random() - 0.5) * 0.3;
        this.speedY = (Math.random() - 0.5) * 0.3;
        
        // Randomly select between cyan, blue, purple
        const r = Math.random();
        if (r < 0.4) {
          this.color = "rgba(6, 182, 212, 0.4)"; // Cyan
        } else if (r < 0.8) {
          this.color = "rgba(59, 130, 246, 0.3)"; // Blue
        } else {
          this.color = "rgba(168, 85, 247, 0.3)"; // Purple
        }
      }

      update() {
        this.x += this.speedX;
        this.y += this.speedY;

        if (this.x < 0 || this.x > width) this.speedX = -this.speedX;
        if (this.y < 0 || this.y > height) this.speedY = -this.speedY;
      }

      draw() {
        if (!ctx) return;
        ctx.beginPath();
        ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2);
        ctx.fillStyle = this.color;
        ctx.fill();
      }
    }

    // Initialize particles
    const particleCount = Math.min(Math.floor((width * height) / 15000), 100);
    const particlesArray: Particle[] = [];
    for (let i = 0; i < particleCount; i++) {
      particlesArray.push(new Particle());
    }

    // Static Circuit Nodes (Coordinates for subtle circuit pattern lines)
    const circuitPoints = [
      { x1: 0.1, y1: 0.1, x2: 0.15, y2: 0.1, x3: 0.18, y3: 0.15, active: true },
      { x1: 0.85, y1: 0.2, x2: 0.8, y2: 0.2, x3: 0.77, y3: 0.25, active: false },
      { x1: 0.05, y1: 0.8, x2: 0.1, y2: 0.8, x3: 0.12, y3: 0.75, active: true },
      { x1: 0.9, y1: 0.85, x2: 0.85, y2: 0.85, x3: 0.82, y3: 0.8, active: false }
    ];

    // Mouse coordinates
    const mouse = {
      x: -1000,
      y: -1000,
      radius: 150
    };

    const handleMouseMove = (event: MouseEvent) => {
      mouse.x = event.clientX;
      mouse.y = event.clientY;
    };

    const handleMouseLeave = () => {
      mouse.x = -1000;
      mouse.y = -1000;
    };

    window.addEventListener("mousemove", handleMouseMove);
    document.addEventListener("mouseleave", handleMouseLeave);

    const handleResize = () => {
      width = canvas.width = window.innerWidth;
      height = canvas.height = window.innerHeight;
    };
    window.addEventListener("resize", handleResize);

    // Animation Loop
    let lastTime = 0;
    const animate = (time: number) => {
      ctx.clearRect(0, 0, width, height);

      // Draw subtle futuristic cyber grids (large scale)
      ctx.strokeStyle = "rgba(15, 23, 42, 0.15)";
      ctx.lineWidth = 1;
      const gridSize = 80;
      
      // Draw grid lines
      for (let x = 0; x < width; x += gridSize) {
        ctx.beginPath();
        ctx.moveTo(x, 0);
        ctx.lineTo(x, height);
        ctx.stroke();
      }
      for (let y = 0; y < height; y += gridSize) {
        ctx.beginPath();
        ctx.moveTo(0, y);
        ctx.lineTo(width, y);
        ctx.stroke();
      }

      // Draw subtle high-tech HUD rings or nodes
      circuitPoints.forEach((pt) => {
        const x1 = pt.x1 * width;
        const y1 = pt.y1 * height;
        const x2 = pt.x2 * width;
        const y2 = pt.y2 * height;
        const x3 = pt.x3 * width;
        const y3 = pt.y3 * height;

        ctx.strokeStyle = "rgba(6, 182, 212, 0.05)";
        ctx.lineWidth = 1;
        ctx.beginPath();
        ctx.moveTo(x1, y1);
        ctx.lineTo(x2, y2);
        ctx.lineTo(x3, y3);
        ctx.stroke();

        // Node circle
        ctx.fillStyle = pt.active ? "rgba(6, 182, 212, 0.15)" : "rgba(168, 85, 247, 0.1)";
        ctx.beginPath();
        ctx.arc(x3, y3, 3, 0, Math.PI * 2);
        ctx.fill();
      });

      // Draw dynamic particles and their connections
      particlesArray.forEach((p, index) => {
        p.update();
        p.draw();

        // Connect particles close to each other
        for (let j = index + 1; j < particlesArray.length; j++) {
          const other = particlesArray[j];
          const dx = p.x - other.x;
          const dy = p.y - other.y;
          const dist = Math.sqrt(dx * dx + dy * dy);

          if (dist < 120) {
            const alpha = (1 - dist / 120) * 0.15;
            ctx.strokeStyle = `rgba(6, 182, 212, ${alpha})`;
            ctx.lineWidth = 0.5;
            ctx.beginPath();
            ctx.moveTo(p.x, p.y);
            ctx.lineTo(other.x, other.y);
            ctx.stroke();
          }
        }

        // Connect particles to mouse
        const dxMouse = p.x - mouse.x;
        const dyMouse = p.y - mouse.y;
        const distMouse = Math.sqrt(dxMouse * dxMouse + dyMouse * dyMouse);
        if (distMouse < mouse.radius) {
          const alpha = (1 - distMouse / mouse.radius) * 0.25;
          ctx.strokeStyle = `rgba(168, 85, 247, ${alpha})`;
          ctx.lineWidth = 0.8;
          ctx.beginPath();
          ctx.moveTo(p.x, p.y);
          ctx.lineTo(mouse.x, mouse.y);
          ctx.stroke();
        }
      });

      // Interactive mouse HUD coordinates details (subtle)
      if (mouse.x > 0 && mouse.y > 0) {
        ctx.strokeStyle = "rgba(6, 182, 212, 0.08)";
        ctx.lineWidth = 0.5;
        // Horizontal line
        ctx.beginPath();
        ctx.moveTo(0, mouse.y);
        ctx.lineTo(width, mouse.y);
        ctx.stroke();

        // Vertical line
        ctx.beginPath();
        ctx.moveTo(mouse.x, 0);
        ctx.lineTo(mouse.x, height);
        ctx.stroke();
      }

      animationFrameId = requestAnimationFrame(animate);
    };

    animationFrameId = requestAnimationFrame(animate);

    return () => {
      cancelAnimationFrame(animationFrameId);
      window.removeEventListener("mousemove", handleMouseMove);
      document.removeEventListener("mouseleave", handleMouseLeave);
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <div className="fixed inset-0 w-full h-full bg-[#020617] pointer-events-none z-0 overflow-hidden">
      {/* Background Ambient Elements from Immersive UI */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-[-10%] left-[-10%] w-[40%] h-[40%] bg-blue-600/20 blur-[120px] rounded-full"></div>
        <div className="absolute bottom-[-10%] right-[-10%] w-[40%] h-[40%] bg-purple-600/20 blur-[120px] rounded-full"></div>
        <div className="absolute inset-0" style={{ backgroundImage: "radial-gradient(circle at 1px 1px, rgba(255,255,255,0.035) 1px, transparent 0)", backgroundSize: "40px 40px" }}></div>
        <div className="absolute inset-0 opacity-10" style={{ background: "repeating-linear-gradient(0deg, transparent, transparent 39px, rgba(6, 182, 212, 0.15) 40px), repeating-linear-gradient(90deg, transparent, transparent 39px, rgba(6, 182, 212, 0.15) 40px)" }}></div>
      </div>
      <canvas
        ref={canvasRef}
        className="absolute inset-0 w-full h-full bg-transparent pointer-events-none"
        style={{ backfaceVisibility: "hidden" }}
      />
    </div>
  );
}

import React from "react";

const ParallaxBackground = ({ scrollY, scrollProgress }) => {
  const zoomScale = 1 + scrollProgress * 2;
  const opacity = 1 - scrollProgress * 0.3;

  return (
    <>
      {/* Deep Space Background Layer */}
      <div
        className="fixed inset-0 pointer-events-none overflow-hidden"
        style={{
          transform: `scale(${zoomScale})`,
          opacity,
          transformStyle: "preserve-3d",
          zIndex: -30,
        }}
      >
        {/* Large Gold Gradient Orbs - Far back */}
        <div
          className="absolute w-[600px] h-[600px] rounded-full opacity-20 blur-3xl"
          style={{
            background:
              "radial-gradient(circle, #b8956a 0%, #c0a068 50%, transparent 70%)",
            top: "5%",
            left: "10%",
            transform: `translateZ(-100px) translateY(${
              scrollY * 0.1
            }px) scale(${1 + scrollProgress * 0.5})`,
          }}
        />
        <div
          className="absolute w-[500px] h-[500px] rounded-full opacity-15 blur-3xl"
          style={{
            background:
              "radial-gradient(circle, #b8956a 0%, #B8960F 50%, transparent 70%)",
            top: "40%",
            right: "5%",
            transform: `translateZ(-80px) translateY(${
              scrollY * 0.15
            }px) scale(${1 + scrollProgress * 0.4})`,
          }}
        />
        <div
          className="absolute w-[700px] h-[700px] rounded-full opacity-10 blur-3xl"
          style={{
            background:
              "radial-gradient(circle, #c0a068 0%, #b8956a 50%, transparent 70%)",
            bottom: "10%",
            left: "50%",
            transform: `translateZ(-120px) translateY(${
              scrollY * 0.08
            }px) scale(${1 + scrollProgress * 0.6})`,
          }}
        />
      </div>

      {/* Mid Layer - Geometric Shapes */}
      <div
        className="fixed inset-0 pointer-events-none overflow-hidden"
        style={{
          transform: `translateZ(-50px) scale(${1 + scrollProgress * 0.5})`,
          transformStyle: "preserve-3d",
          zIndex: -20,
        }}
      >
        {/* Rotating Golden Squares */}
        <div
          className="absolute border-2 border-gold-500/30 w-80 h-80"
          style={{
            top: "15%",
            right: "10%",
            transform: `rotate(${45 + scrollY * 0.1}deg) translateY(${
              scrollY * 0.3
            }px)`,
            boxShadow: "0 0 30px rgba(212, 175, 55, 0.2)",
            borderColor: "rgba(192,160,104,0.3)",
          }}
        />
        <div
          className="absolute border-2 border-gold-400/20 w-48 h-48"
          style={{
            bottom: "25%",
            left: "8%",
            transform: `rotate(${-30 + scrollY * 0.08}deg) translateY(${
              scrollY * 0.25
            }px)`,
            boxShadow: "0 0 20px rgba(212, 175, 55, 0.15)",
            borderColor: "rgba(192,160,104,0.2)",
          }}
        />

        {/* Hexagon */}
        <div
          className="absolute w-64 h-64"
          style={{
            top: "50%",
            left: "5%",
            transform: `translateY(${scrollY * 0.4}px) rotate(${
              scrollY * 0.05
            }deg)`,
          }}
        >
          <svg viewBox="0 0 100 100" className="w-full h-full opacity-20">
            <polygon
              points="50 1 95 25 95 75 50 99 5 75 5 25"
              fill="none"
              stroke="#c0a068"
              strokeWidth="0.5"
              style={{
                filter:
                  "drop-shadow(0 0 10px rgba(212, 175, 55, 0.3))",
              }}
            />
          </svg>
        </div>
      </div>

      {/* Front Layer - Particles and Lines */}
      <div
        className="fixed inset-0 pointer-events-none overflow-hidden"
        style={{
          transform: `translateZ(0px) scale(${1 + scrollProgress * 0.2})`,
          zIndex: -10,
        }}
      >
        {/* Vertical Golden Lines */}
        <div
          className="absolute w-px h-[500px] bg-gradient-to-b from-transparent via-gold-500/40 to-transparent"
          style={{
            top: "20%",
            left: "25%",
            transform: `translateY(${scrollY * 0.6}px)`,
            boxShadow: "0 0 10px rgba(212, 175, 55, 0.4)",
            background:
              "linear-gradient(to bottom, transparent, rgba(192,160,104,0.4), transparent)",
          }}
        />
        <div
          className="absolute w-px h-[600px] bg-gradient-to-b from-transparent via-gold-400/30 to-transparent"
          style={{
            top: "5%",
            right: "30%",
            transform: `translateY(${scrollY * 0.55}px)`,
            boxShadow: "0 0 10px rgba(212, 175, 55, 0.3)",
            background:
              "linear-gradient(to bottom, transparent, rgba(192,160,104,0.3), transparent)",
          }}
        />
        <div
          className="absolute w-px h-[400px] bg-gradient-to-b from-transparent via-gold-600/35 to-transparent"
          style={{
            top: "40%",
            left: "70%",
            transform: `translateY(${scrollY * 0.5}px)`,
            boxShadow: "0 0 10px rgba(212, 175, 55, 0.35)",
            background:
              "linear-gradient(to bottom, transparent, rgba(192,160,104,0.35), transparent)",
          }}
        />

        {/* Floating Particles */}
        {Array.from({ length: 30 }).map((_, i) => {
          const size = 2 + Math.random() * 3;
          const left = Math.random() * 100;
          const top = Math.random() * 100;
          const speed = 0.3 + Math.random() * 0.4;
          const glow = 5 + Math.random() * 10;
          const alpha = 0.3 + Math.random() * 0.4;

          return (
            <div
              key={i}
              className="absolute rounded-full"
              style={{
                width: `${size}px`,
                height: `${size}px`,
                background: `rgba(212, 175, 55, ${alpha})`,
                left: `${left}%`,
                top: `${top}%`,
                transform: `translateY(${scrollY * speed}px)`,
                boxShadow: `0 0 ${glow}px rgba(212, 175, 55, 0.5)`,
              }}
            />
          );
        })}
      </div>
    </>
  );
};

export default ParallaxBackground;

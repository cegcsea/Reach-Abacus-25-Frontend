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

      {/* Mid Layer - (geometric shapes removed) */}
      <div
        className="fixed inset-0 pointer-events-none overflow-hidden"
        style={{
          transform: `translateZ(-50px) scale(${1 + scrollProgress * 0.5})`,
          transformStyle: "preserve-3d",
          zIndex: -20,
        }}
      />

      {/* Front Layer - Particles and Lines */}
      <div
        className="fixed inset-0 pointer-events-none overflow-hidden"
        style={{
          transform: `translateZ(0px) scale(${1 + scrollProgress * 0.2})`,
          zIndex: -10,
        }}
      >

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

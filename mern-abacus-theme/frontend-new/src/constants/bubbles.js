export const bubbles = Array.from({ length: 50 }, () => ({
    delay: Math.random() * 10,
    duration: 4 + Math.random() * 2,
    size: Math.random() * 20 + 10,
    left: Math.random() * 100,
  }));
  
export const bubbles = Array.from({ length: 20 }, () => ({
    delay: Math.random() * 10,
    duration: 4 + Math.random() * 2,
    size: Math.random() * 40 + 10,
    left: Math.random() * 100,
  }));
  
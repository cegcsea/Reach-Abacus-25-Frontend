// src/utils/deviceProfile.js
export function getDeviceProfile() {
  const isMobile = typeof window !== "undefined" && window.innerWidth < 768;
  const cores = navigator.hardwareConcurrency || 4;

  const prefersReducedMotion = typeof window !== "undefined" 
    ? window.matchMedia("(prefers-reduced-motion: reduce)").matches 
    : false;

  // We only block the effect if the CPU is extremely weak (<= 2 cores)
  const lowCPU = cores <= 2; 

  return {
    isMobile,
    lowCPU,
    prefersReducedMotion,
    // Enable heavy GPU on mobile by default unless the CPU is very weak
    allowHeavyGPU: !lowCPU && !prefersReducedMotion,
  };
}
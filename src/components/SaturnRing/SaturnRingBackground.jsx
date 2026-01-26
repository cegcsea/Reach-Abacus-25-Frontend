import {
  Renderer,
  Camera,
  Transform,
  Geometry,
  Program,
  Mesh,
  Texture,
  Plane,
  Color,
} from "ogl";
import { useEffect, useRef, useState } from "react";
import logoImg from "../../assets/images/logo26.png";

/* ===================== PARTICLE SHADERS ===================== */
const vertexShader = `
attribute vec3 position;
attribute float aSize;
attribute float aSpeed;
attribute float aOffset;
attribute vec3 aColor;

uniform float uTime;
uniform float uScaleFactor;
uniform mat4 modelViewMatrix;
uniform mat4 projectionMatrix;

varying vec3 vColor;

void main() {
  vColor = aColor;

  float angle = aOffset + uTime * aSpeed;

  float x = position.x * cos(angle) - position.z * sin(angle);
  float z = position.x * sin(angle) + position.z * cos(angle);

  vec3 newPos = vec3(x, position.y, z);

  vec4 mvPosition = modelViewMatrix * vec4(newPos, 1.0);

  // Scale particle size based on device
  gl_PointSize = aSize * (170.0 / -mvPosition.z) * uScaleFactor;
  gl_Position = projectionMatrix * mvPosition;
}
`;

const fragmentShader = `
precision highp float;
varying vec3 vColor;

float rand(vec2 c) {
  return fract(sin(dot(c, vec2(12.9898,78.233))) * 43758.5453);
}

void main() {
  vec2 uv = gl_PointCoord - vec2(0.5);
  float dist = length(uv);

  float alpha = exp(-dist * 10.0);
  alpha *= rand(gl_PointCoord * 25.0);

  if(alpha < 0.02) discard;

  vec3 glow = vColor * 3.5;
  gl_FragColor = vec4(glow, alpha * 1.5);
}
`;

/* ===================== LOGO/ORB VERTEX ===================== */
const logoVertex = `
attribute vec3 position;
attribute vec2 uv;
uniform mat4 modelViewMatrix;
uniform mat4 projectionMatrix;
varying vec2 vUv;
void main() {
  vUv = uv;
  gl_Position = projectionMatrix * modelViewMatrix * vec4(position,1.0);
}
`;

/* ===================== GOLD ORB FRAGMENT ===================== */
const orbRingFragment = `
precision highp float;
varying vec2 vUv;

uniform float iTime;
uniform float hue;
uniform float hover;
uniform float hoverIntensity;
uniform float uScaleFactor;

vec3 rgb2yiq(vec3 c) {
  float y = dot(c, vec3(0.299, 0.587, 0.114));
  float i = dot(c, vec3(0.596, -0.274, -0.322));
  float q = dot(c, vec3(0.211, -0.523, 0.312));
  return vec3(y, i, q);
}
vec3 yiq2rgb(vec3 c) {
  float r = c.x + 0.956 * c.y + 0.621 * c.z;
  float g = c.x - 0.272 * c.y - 0.647 * c.z;
  float b = c.x - 1.106 * c.y + 1.703 * c.z;
  return vec3(r, g, b);
}
vec3 adjustHue(vec3 color, float hueDeg) {
  float hueRad = hueDeg * 3.14159265 / 180.0;
  vec3 yiq = rgb2yiq(color);
  float cosA = cos(hueRad);
  float sinA = sin(hueRad);
  float i = yiq.y * cosA - yiq.z * sinA;
  float q = yiq.y * sinA + yiq.z * cosA;
  yiq.y = i; yiq.z = q;
  return yiq2rgb(yiq);
}

vec3 hash33(vec3 p3) {
  p3 = fract(p3 * vec3(0.1031, 0.11369, 0.13787));
  p3 += dot(p3, p3.yxz + 19.19);
  return -1.0 + 2.0 * fract(vec3(p3.x + p3.y, p3.x + p3.z, p3.y + p3.z) * p3.zyx);
}

float snoise3(vec3 p) {
  const float K1 = 0.333333333;
  const float K2 = 0.166666667;
  vec3 i = floor(p + (p.x + p.y + p.z) * K1);
  vec3 d0 = p - (i - (i.x + i.y + i.z) * K2);
  vec3 e = step(vec3(0.0), d0 - d0.yzx);
  vec3 i1 = e * (1.0 - e.zxy);
  vec3 i2 = 1.0 - e.zxy * (1.0 - e);
  vec3 d1 = d0 - (i1 - K2);
  vec3 d2 = d0 - (i2 - K1);
  vec3 d3 = d0 - 0.5;
  vec4 h = max(0.6 - vec4(dot(d0, d0), dot(d1, d1), dot(d2, d2), dot(d3, d3)), 0.0);
  vec4 n = h * h * h * h * vec4(dot(d0, hash33(i)), dot(d1, hash33(i + i1)), dot(d2, hash33(i + i2)), dot(d3, hash33(i + 1.0)));
  return dot(vec4(31.316), n);
}

float light1(float intensity, float attenuation, float dist) { return intensity / (1.0 + dist * attenuation); }
float light2(float intensity, float attenuation, float dist) { return intensity / (1.0 + dist * dist * attenuation); }

const vec3 baseColor1 = vec3(0.95, 0.72, 0.18); 
const vec3 baseColor2 = vec3(0.48, 0.32, 0.06); 

void main() {
  vec2 uv = (vUv - 0.5) * 2.0;
  
  // Adjust wobble intensity based on device scale
  float adjustedIntensity = hoverIntensity * uScaleFactor;
  
  uv.x += hover * adjustedIntensity * 0.1 * sin(uv.y * 10.0 + iTime);
  uv.y += hover * adjustedIntensity * 0.1 * sin(uv.x * 10.0 + iTime);

  float len = length(uv);
  float innerRadius = 0.78;
  float outerRadius = 0.84;
  
  float n0 = snoise3(vec3(uv * 0.65, iTime * 0.5)) * 0.5 + 0.5;
  float r0 = mix(innerRadius, outerRadius, n0);
  float d0 = distance(uv, (r0 / (len + 1e-5)) * uv);
  
  float v0 = light1(1.0, 15.0, d0);
  v0 *= smoothstep(r0 * 1.1, r0, len);
  
  vec3 color1 = adjustHue(baseColor1, hue);
  vec3 color2 = adjustHue(baseColor2, hue);
  
  float cl = cos(atan(uv.y, uv.x) + iTime * 2.5) * 0.5 + 0.5;
  vec3 colBase = mix(color1, color2, cl);
  
  float d = distance(uv, vec2(cos(iTime * 1.5), sin(iTime * 1.5)) * r0);
  float v1 = light2(2.0, 6.0, d) * light1(1.0, 40.0, d0);
  
  float ringMask = smoothstep(outerRadius + 0.05, outerRadius, len) * smoothstep(innerRadius - 0.05, innerRadius, len);
  
  vec3 finalCol = (colBase + v1) * v0;
  float alpha = v0 * ringMask * 2.0 * uScaleFactor; // Scale alpha for mobile
  
  if(alpha < 0.01) discard;
  gl_FragColor = vec4(finalCol, alpha);
}
`;

/* ===================== LOGO FRAGMENT ===================== */
const logoFragment = `
precision highp float;
uniform sampler2D uTex;
varying vec2 vUv;
void main() {
  vec4 tex = texture2D(uTex, vUv);
  if(tex.a < 0.05) discard;
  gl_FragColor = tex;
}
`;

export default function SaturnRingBackground() {
  const containerRef = useRef(null);
  const mousePos = useRef({ targetHover: 0 });
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    // Check if mobile on mount
    const checkMobile = () => {
      setIsMobile(window.innerWidth <= 768);
    };
    checkMobile();
    window.addEventListener('resize', checkMobile);

    if (!containerRef.current) return;
    const container = containerRef.current;

    const renderer = new Renderer({ 
      alpha: true, 
      depth: true, 
      dpr: Math.min(window.devicePixelRatio, 2),
      antialias: true 
    });
    const gl = renderer.gl;
    gl.enable(gl.BLEND);
    gl.blendFunc(gl.SRC_ALPHA, gl.ONE_MINUS_SRC_ALPHA);
    container.appendChild(gl.canvas);

    const camera = new Camera(gl, { fov: 45 });
    camera.position.set(0, 4, 9);
    camera.lookAt([0, 0, 0]);

    const scene = new Transform();
    const system = new Transform();
    system.rotation.x = 0.78;
    system.rotation.z = 0.4;
    system.setParent(scene);

    // Scale factor for mobile responsiveness
    const scaleFactor = isMobile ? 1.8 : 1.0;

    /* ===================== DUST RING ===================== */
    // Adjust particle count based on device
    const count = isMobile ? 15000 : 30000;
    
    const positions = new Float32Array(count * 3);
    const sizes = new Float32Array(count);
    const speeds = new Float32Array(count);
    const offsets = new Float32Array(count);
    const colors = new Float32Array(count * 3);
    
    // Enhanced gold palette
    const palette = [
      new Color("#D4AF37"), // Metallic Gold
      new Color("#FFD700"), // Gold
      new Color("#B8860B"), // Dark Goldenrod
      new Color("#FFE55C"), // Light Gold
      new Color("#4B3621"), // Dark Brown
      new Color("#FFEC8B"), // Light Goldenrod
    ];

    for (let i = 0; i < count; i++) {
      // Adjust radius distribution for mobile
      const minRadius = isMobile ? 2.0 : 2.2;
      const maxRadius = isMobile ? 5.2 : 7.4;
      const radius = minRadius + Math.pow(Math.random(), 1.9) * (maxRadius - minRadius);

      const angle = Math.random() * Math.PI * 2;
      const y = (Math.random() - 0.5) * 0.08;

      const x = Math.cos(angle) * radius * 2.0;
      const z = Math.sin(angle) * radius * 0.85;

      positions.set([x, y, z], i * 3);

      // Adjust speeds for mobile
      speeds[i] = (isMobile ? 1.5 : 1.2) / (radius * radius);
      offsets[i] = Math.random() * Math.PI * 2;
      
      // Larger particles on mobile
      sizes[i] = Math.random() * (isMobile ? 2.2 : 1.5) + (isMobile ? 0.8 : 0.5);

      const c = palette[Math.floor(Math.random() * palette.length)];
      colors.set([c.r, c.g, c.b], i * 3);
    }

    const ringGeometry = new Geometry(gl, {
      position: { size: 3, data: positions },
      aSize: { size: 1, data: sizes },
      aSpeed: { size: 1, data: speeds },
      aOffset: { size: 1, data: offsets },
      aColor: { size: 3, data: colors },
    });

    const dustProgram = new Program(gl, { 
      vertex: vertexShader, 
      fragment: fragmentShader, 
      transparent: true, 
      uniforms: { 
        uTime: { value: 0 },
        uScaleFactor: { value: scaleFactor }
      } 
    });

    const dustRing = new Mesh(gl, {
      mode: gl.POINTS,
      geometry: ringGeometry,
      program: dustProgram
    });
    dustRing.setParent(system);

    /* ===================== HIGH QUALITY LOGO ===================== */
    const texture = new Texture(gl, {
      generateMipmaps: true,
      minFilter: gl.LINEAR_MIPMAP_LINEAR,
      magFilter: gl.LINEAR,
      premultiplyAlpha: true,
      anisotropy: renderer.gl.renderer.isWebgl2 ? 16 : 4,
    });
    const img = new Image();
    img.src = logoImg;
    img.onload = () => (texture.image = img);

    const logo = new Mesh(gl, {
      geometry: new Plane(gl),
      program: new Program(gl, {
        vertex: logoVertex,
        fragment: logoFragment,
        transparent: true,
        cullFace: false,
        uniforms: { uTex: { value: texture } },
      }),
    });
    
    // Adjust logo scale for mobile
    const logoScale = isMobile ? 2.3 : 2.8;
    logo.scale.set(logoScale, logoScale, logoScale);
    logo.rotation.x = -Math.PI / 2;
    logo.setParent(system);

    /* ===================== PRECISION ORB RING ===================== */
    const orbRingProgram = new Program(gl, {
      vertex: logoVertex,
      fragment: orbRingFragment,
      transparent: true,
      cullFace: false,
      uniforms: {
        iTime: { value: 0 },
        hue: { value: 0 }, 
        hover: { value: 0 },
        hoverIntensity: { value: 0.8 },
        uScaleFactor: { value: scaleFactor },
      },
    });

    const createOrbPlane = (offsetY) => {
      const m = new Mesh(gl, { geometry: new Plane(gl), program: orbRingProgram });
      
      // Adjust orb ring scale for mobile
      const orbScale = isMobile? 3.3 : 3.8;
      m.scale.set(orbScale, orbScale, orbScale);
      m.rotation.x = -Math.PI / 2;
      m.position.y = offsetY;
      m.setParent(system);
      return m;
    };

    const orbBack = createOrbPlane(-0.012);
    const orbFront = createOrbPlane(0.012);

    /* ===================== INTERACTION ===================== */
    const handleMouseMove = (e) => {
      const rect = container.getBoundingClientRect();
      const x = ((e.clientX - rect.left) / rect.width) * 2 - 1;
      const y = ((e.clientY - rect.top) / rect.height) * 2 - 1;
      mousePos.current.targetHover = Math.sqrt(x * x + y * y) < 0.6 ? 1 : 0;
    };
    
    // Only add mouse events on non-touch devices
    if (!('ontouchstart' in window)) {
      window.addEventListener("mousemove", handleMouseMove);
    }

    /* ===================== LOOP ===================== */
    let animationId;
    let currentHover = 0;

    function update(t) {
      animationId = requestAnimationFrame(update);
      const time = t * 0.001;

      // Update programs
      dustProgram.uniforms.uTime.value = time;
      dustProgram.uniforms.uScaleFactor.value = isMobile ? 1.8 : 1.0;
      orbRingProgram.uniforms.iTime.value = time;
      orbRingProgram.uniforms.uScaleFactor.value = isMobile ? 1.8 : 1.0;
      
      // Smooth hover animation
      currentHover += (mousePos.current.targetHover - currentHover) * 0.08;
      orbRingProgram.uniforms.hover.value = currentHover;

      // System rotation
      system.rotation.y += 0.0025;
      
      // Floating animation
      const floatY = Math.sin(time * 1.5) * 0.15;
      logo.position.y = floatY;
      orbBack.position.y = floatY - 0.01;
      orbFront.position.y = floatY + 0.01;

      renderer.render({ scene, camera });
    }
    update(0);

    const resize = () => {
      renderer.setSize(container.offsetWidth, container.offsetHeight);
      camera.perspective({ aspect: gl.canvas.width / gl.canvas.height });
    };
    window.addEventListener("resize", resize);
    resize();

    return () => {
      cancelAnimationFrame(animationId);
      window.removeEventListener("resize", resize);
      window.removeEventListener('resize', checkMobile);
      
      if (!('ontouchstart' in window)) {
        window.removeEventListener("mousemove", handleMouseMove);
      }
      
      if (container.contains(gl.canvas)) container.removeChild(gl.canvas);
    };
  }, [isMobile]);

  return (
    <div
      ref={containerRef}
      className="absolute inset-0"
      style={{
        width: "100%", 
        height: "100%", 
        zIndex: -1,
        background: "radial-gradient(circle at center, #0a0600 0%, #000000 100%)",
        overflow: "hidden"
      }}
    />
  );
}
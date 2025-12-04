import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import Lenis from 'lenis';
import { useEffect, useRef } from 'react';

// Register GSAP plugins
if (typeof window !== 'undefined') {
  gsap.registerPlugin(ScrollTrigger);
}

// Animation utilities
export const animations = {
  // Terminal typing effect
  typeText: (element: HTMLElement, text: string, speed: number = 50) => {
    let i = 0;
    element.textContent = '';

    const timer = setInterval(() => {
      if (i < text.length) {
        element.textContent += text.charAt(i);
        i++;
      } else {
        clearInterval(timer);
      }
    }, speed);

    return timer;
  },

  // Glitch effect
  glitch: (element: HTMLElement, duration: number = 1000) => {
    const originalText = element.textContent || '';
    const glitchChars = '!<>-_\\/[]{}—=+*^?#________';

    let iterations = 0;
    const maxIterations = duration / 50;

    const glitchInterval = setInterval(() => {
      element.textContent = originalText
        .split('')
        .map((char) => {
          if (Math.random() < 0.1) {
            return glitchChars[Math.floor(Math.random() * glitchChars.length)];
          }
          return char;
        })
        .join('');

      iterations++;
      if (iterations >= maxIterations) {
        clearInterval(glitchInterval);
        element.textContent = originalText;
      }
    }, 50);

    return glitchInterval;
  },

  // Magnetic hover effect
  magneticHover: (element: HTMLElement, strength: number = 0.3) => {
    const handleMouseMove = (e: MouseEvent) => {
      const rect = element.getBoundingClientRect();
      const centerX = rect.left + rect.width / 2;
      const centerY = rect.top + rect.height / 2;

      const deltaX = (e.clientX - centerX) * strength;
      const deltaY = (e.clientY - centerY) * strength;

      gsap.to(element, {
        x: deltaX,
        y: deltaY,
        duration: 0.3,
        ease: 'power2.out'
      });
    };

    const handleMouseLeave = () => {
      gsap.to(element, {
        x: 0,
        y: 0,
        duration: 0.5,
        ease: 'elastic.out(1, 0.3)'
      });
    };

    element.addEventListener('mousemove', handleMouseMove);
    element.addEventListener('mouseleave', handleMouseLeave);

    return () => {
      element.removeEventListener('mousemove', handleMouseMove);
      element.removeEventListener('mouseleave', handleMouseLeave);
    };
  },

  // Scroll-triggered reveal
  scrollReveal: (element: HTMLElement, direction: 'up' | 'down' | 'left' | 'right' = 'up') => {
    const directions = {
      up: { y: 50, x: 0 },
      down: { y: -50, x: 0 },
      left: { y: 0, x: 50 },
      right: { y: 0, x: -50 }
    };

    gsap.set(element, {
      opacity: 0,
      ...directions[direction]
    });

    ScrollTrigger.create({
      trigger: element,
      start: 'top 80%',
      end: 'bottom 20%',
      onEnter: () => {
        gsap.to(element, {
          opacity: 1,
          x: 0,
          y: 0,
          duration: 1,
          ease: 'power2.out'
        });
      },
      onLeaveBack: () => {
        gsap.to(element, {
          opacity: 0,
          ...directions[direction],
          duration: 0.5,
          ease: 'power2.in'
        });
      }
    });
  },

  // Floating particles
  floatingParticles: (container: HTMLElement, count: number = 20) => {
    const particles: HTMLElement[] = [];

    for (let i = 0; i < count; i++) {
      const particle = document.createElement('div');
      particle.className = 'absolute w-1 h-1 bg-electric-blue rounded-full opacity-30';
      particle.style.left = Math.random() * 100 + '%';
      particle.style.top = Math.random() * 100 + '%';

      container.appendChild(particle);
      particles.push(particle);

      gsap.to(particle, {
        y: 'random(-100, 100)',
        x: 'random(-50, 50)',
        opacity: 'random(0.1, 0.6)',
        duration: 'random(3, 8)',
        ease: 'none',
        repeat: -1,
        yoyo: true
      });
    }

    return () => {
      particles.forEach(particle => {
        if (particle.parentNode) {
          particle.parentNode.removeChild(particle);
        }
      });
    };
  },

  // Cyberpunk grid animation
  cyberGrid: (element: HTMLElement) => {
    const gridSize = 50;
    const cols = Math.ceil(window.innerWidth / gridSize);
    const rows = Math.ceil(window.innerHeight / gridSize);

    for (let i = 0; i < cols; i++) {
      for (let j = 0; j < rows; j++) {
        if (Math.random() > 0.95) { // Only animate 5% of cells
          const cell = document.createElement('div');
          cell.className = 'absolute border border-electric-blue opacity-10';
          cell.style.left = i * gridSize + 'px';
          cell.style.top = j * gridSize + 'px';
          cell.style.width = gridSize + 'px';
          cell.style.height = gridSize + 'px';

          element.appendChild(cell);

          gsap.to(cell, {
            opacity: 0.3,
            duration: 0.5,
            ease: 'power2.inOut',
            repeat: -1,
            yoyo: true,
            delay: Math.random() * 2
          });
        }
      }
    }
  },

  // Parallax effect
  parallax: (element: HTMLElement, speed: number = 0.5) => {
    ScrollTrigger.create({
      trigger: element,
      start: 'top bottom',
      end: 'bottom top',
      onUpdate: (self) => {
        const progress = self.progress;
        gsap.set(element, {
          y: -progress * speed * 100
        });
      }
    });
  },

  // Staggered reveal for multiple elements
  staggerReveal: (elements: NodeListOf<Element> | HTMLElement[], direction: 'up' | 'down' | 'left' | 'right' = 'up', stagger: number = 0.1) => {
    const directions = {
      up: { y: 50, x: 0 },
      down: { y: -50, x: 0 },
      left: { y: 0, x: 50 },
      right: { y: 0, x: -50 }
    };

    gsap.set(elements, {
      opacity: 0,
      ...directions[direction]
    });

    ScrollTrigger.create({
      trigger: elements[0],
      start: 'top 80%',
      onEnter: () => {
        gsap.to(elements, {
          opacity: 1,
          x: 0,
          y: 0,
          duration: 0.8,
          stagger: stagger,
          ease: 'power2.out'
        });
      }
    });
  },

  // Scale on scroll
  scaleOnScroll: (element: HTMLElement, startScale: number = 1, endScale: number = 1.2) => {
    ScrollTrigger.create({
      trigger: element,
      start: 'top 80%',
      end: 'bottom 20%',
      onUpdate: (self) => {
        const progress = self.progress;
        const scale = startScale + (endScale - startScale) * progress;
        gsap.set(element, { scale });
      }
    });
  },

  // Rotate on scroll
  rotateOnScroll: (element: HTMLElement, rotation: number = 360) => {
    ScrollTrigger.create({
      trigger: element,
      start: 'top bottom',
      end: 'bottom top',
      onUpdate: (self) => {
        const progress = self.progress;
        gsap.set(element, {
          rotation: progress * rotation
        });
      }
    });
  },

  // Text scramble effect
  textScramble: (element: HTMLElement, finalText: string, speed: number = 50) => {
    const chars = '!<>-_\\/[]{}—=+*^?#________';
    let currentText = '';
    let iteration = 0;

    const scrambleInterval = setInterval(() => {
      currentText = finalText
        .split('')
        .map((char, index) => {
          if (index < iteration) {
            return finalText[index];
          }
          return chars[Math.floor(Math.random() * chars.length)];
        })
        .join('');

      element.textContent = currentText;

      if (iteration >= finalText.length) {
        clearInterval(scrambleInterval);
        element.textContent = finalText;
      }

      iteration += 1 / 3;
    }, speed);

    return scrambleInterval;
  },

  // Morphing shapes
  morphShape: (element: HTMLElement, shapes: string[], duration: number = 3000) => {
    let currentShape = 0;

    const morph = () => {
      gsap.to(element, {
        morphSVG: shapes[currentShape],
        duration: duration / 1000,
        ease: 'power2.inOut',
        onComplete: () => {
          currentShape = (currentShape + 1) % shapes.length;
          morph();
        }
      });
    };

    morph();
  },

  // Interactive hover glow
  hoverGlow: (element: HTMLElement, color: string = '#00ffff') => {
    const glow = document.createElement('div');
    glow.className = 'absolute inset-0 rounded-lg opacity-0 transition-opacity duration-300';
    glow.style.background = `radial-gradient(circle, ${color}20 0%, transparent 70%)`;
    glow.style.filter = 'blur(20px)';

    element.style.position = 'relative';
    element.appendChild(glow);

    const handleMouseEnter = () => {
      glow.style.opacity = '1';
    };

    const handleMouseLeave = () => {
      glow.style.opacity = '0';
    };

    element.addEventListener('mouseenter', handleMouseEnter);
    element.addEventListener('mouseleave', handleMouseLeave);

    return () => {
      element.removeEventListener('mouseenter', handleMouseEnter);
      element.removeEventListener('mouseleave', handleMouseLeave);
      if (glow.parentNode) {
        glow.parentNode.removeChild(glow);
      }
    };
  }
};

// React hooks for animations
export const useAnimation = () => {
  const elementRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const currentElement = elementRef.current;
    return () => {
      // Cleanup animations on unmount
      if (currentElement) {
        ScrollTrigger.getAll().forEach(trigger => trigger.kill());
      }
    };
  }, []);

  return elementRef;
};

export const useMagneticHover = (strength: number = 0.3) => {
  const elementRef = useRef<HTMLElement>(null);

  useEffect(() => {
    if (!elementRef.current) return;

    const cleanup = animations.magneticHover(elementRef.current, strength);

    return cleanup;
  }, [strength]);

  return elementRef;
};

export const useScrollReveal = (direction: 'up' | 'down' | 'left' | 'right' = 'up') => {
  const elementRef = useRef<HTMLElement>(null);

  useEffect(() => {
    if (!elementRef.current) return;

    animations.scrollReveal(elementRef.current, direction);
  }, [direction]);

  return elementRef;
};

export const useTypingEffect = (text: string, speed: number = 50) => {
  const elementRef = useRef<HTMLElement>(null);

  useEffect(() => {
    if (!elementRef.current || !text) return;

    const timer = animations.typeText(elementRef.current, text, speed);

    return () => clearInterval(timer);
  }, [text, speed]);

  return elementRef;
};

// Lenis smooth scrolling setup
export const initSmoothScroll = () => {
  if (typeof window === 'undefined') return;

  const lenis = new Lenis({
    duration: 1.2,
    easing: (t: number) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
  });

  function raf(time: number) {
    lenis.raf(time);
    requestAnimationFrame(raf);
  }

  requestAnimationFrame(raf);

  return lenis;
};
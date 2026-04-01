// src/animations/gsap-animations.js
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { SplitText } from "gsap/SplitText";

// Register plugins
gsap.registerPlugin(ScrollTrigger, SplitText);

export const initHeroAnimations = () => {
  // Hero text animation (complements your existing Framer Motion)
  gsap.from(".hero-title, .hero-subtitle", {
    duration: 1.2,
    y: 50,
    opacity: 0,
    stagger: 0.2,
    ease: "back.out(1.7)"
  });
};

export const initSkillBarAnimations = () => {
  // Animate skill bars on scroll
  gsap.utils.toArray(".skill-bar-fill").forEach(bar => {
    gsap.from(bar, {
      width: 0,
      duration: 1.5,
      scrollTrigger: {
        trigger: bar.parentElement,
        start: "top 80%"
      },
      ease: "power3.out"
    });
  });
};

export const initProjectCardAnimations = () => {
  // 3D tilt effect on project cards
  gsap.utils.toArray(".project-card").forEach(card => {
    gsap.set(card, { transformStyle: "preserve-3d" });
    
    card.addEventListener("mousemove", (e) => {
      const rect = card.getBoundingClientRect();
      const x = (e.clientX - rect.left) / rect.width - 0.5;
      const y = (e.clientY - rect.top) / rect.height - 0.5;
      
      gsap.to(card, {
        rotationY: x * 10,
        rotationX: y * -10,
        duration: 0.8,
        ease: "power2.out"
      });
    });
    
    card.addEventListener("mouseleave", () => {
      gsap.to(card, {
        rotationY: 0,
        rotationX: 0,
        duration: 0.8,
        ease: "elastic.out(1, 0.5)"
      });
    });
  });
};
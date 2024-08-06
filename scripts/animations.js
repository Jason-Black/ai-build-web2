import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

// Register ScrollTrigger plugin
gsap.registerPlugin(ScrollTrigger);

document.addEventListener("DOMContentLoaded", () => {
  // Hero section animation
  gsap.from(".hero h2", { duration: 1.5, opacity: 0, y: -50, ease: "bounce.out" });
  gsap.from(".hero p", { duration: 1.5, opacity: 0, y: -50, delay: 0.5, ease: "bounce.out" });
  gsap.from(".hero a", { duration: 1.5, opacity: 0, y: -50, delay: 1, ease: "bounce.out" });

  // Services section animation
  gsap.from("#services .service", { duration: 1, opacity: 0, y: 50, stagger: 0.3, ease: "power2.out" });

  // Portfolio section animation
  gsap.from("#portfolio .project", { duration: 1, opacity: 0, y: 50, stagger: 0.3, ease: "power2.out" });

  // About Us section animation
  gsap.from("#about h3", { duration: 1, opacity: 0, y: 50, ease: "power2.out" });
  gsap.from("#about p", { duration: 1, opacity: 0, y: 50, delay: 0.3, ease: "power2.out" });

  // Contact Us section animation
  gsap.from("#contact h3", { duration: 1, opacity: 0, y: 50, ease: "power2.out" });
  gsap.from("#contact form", { duration: 1, opacity: 0, y: 50, delay: 0.3, ease: "power2.out" });

  // Footer section animation
  gsap.from("footer p", { duration: 1, opacity: 0, y: 50, ease: "power2.out" });
  gsap.from("footer .social-links a", { duration: 1, opacity: 0, y: 50, stagger: 0.3, ease: "power2.out" });

  // Scroll animations for section headers
  gsap.utils.toArray('section').forEach(section => {
    gsap.from(section.querySelector('h3'), {
      scrollTrigger: {
        trigger: section,
        start: 'top 80%',
        end: 'bottom 20%',
        toggleActions: 'play none none none'
      },
      opacity: 0,
      y: 50,
      duration: 1,
      ease: "power2.out"
    });
  });

  // Hover effects for buttons
  gsap.utils.toArray('a').forEach(button => {
    button.addEventListener('mouseenter', () => {
      gsap.to(button, { scale: 1.1, backgroundColor: '#ff00ff', color: '#ffffff', duration: 0.3, ease: "power2.out" });
    });
    button.addEventListener('mouseleave', () => {
      gsap.to(button, { scale: 1, backgroundColor: '#ffffff', color: '#0000ff', duration: 0.3, ease: "power2.out" });
    });
  });

  // Smooth scrolling for navigation links
  gsap.utils.toArray('nav a').forEach(link => {
    link.addEventListener('click', (e) => {
      e.preventDefault();
      const target = document.querySelector(e.target.getAttribute('href'));
      gsap.to(window, { scrollTo: target, duration: 1, ease: "power2.out" });
    });
  });

  // Additional animations for more dynamic effects
  gsap.from(".hero", {
    scrollTrigger: {
      trigger: ".hero",
      start: "top top",
      end: "bottom top",
      scrub: true
    },
    backgroundPosition: "50% 100%",
    ease: "none"
  });

  gsap.from("#services .service", {
    scrollTrigger: {
      trigger: "#services",
      start: "top center",
      end: "bottom center",
      scrub: true
    },
    opacity: 0,
    y: 100,
    stagger: 0.2,
    ease: "power2.out"
  });

  gsap.from("#portfolio .project", {
    scrollTrigger: {
      trigger: "#portfolio",
      start: "top center",
      end: "bottom center",
      scrub: true
    },
    opacity: 0,
    y: 100,
    stagger: 0.2,
    ease: "power2.out"
  });

  gsap.from("#about p", {
    scrollTrigger: {
      trigger: "#about",
      start: "top center",
      end: "bottom center",
      scrub: true
    },
    opacity: 0,
    y: 100,
    ease: "power2.out"
  });

  gsap.from("#contact form", {
    scrollTrigger: {
      trigger: "#contact",
      start: "top center",
      end: "bottom center",
      scrub: true
    },
    opacity: 0,
    y: 100,
    ease: "power2.out"
  });

  gsap.from("footer", {
    scrollTrigger: {
      trigger: "footer",
      start: "top center",
      end: "bottom center",
      scrub: true
    },
    opacity: 0,
    y: 100,
    ease: "power2.out"
  });
});

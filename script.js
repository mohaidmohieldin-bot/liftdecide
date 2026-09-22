// =============================================
// script.js — Interactions & Animations
// =============================================

// Mark that JavaScript is running. The CSS only hides
// .reveal elements when the <html> has the "js" class,
// so the page stays readable even without JavaScript.
document.documentElement.classList.add('js');

// =============================================
// Scroll reveal (Stage 5, Step 4)
// Sections fade up as they scroll into view.
// This is the one scroll effect in the motion
// budget — it reveals each section once.
// =============================================

const revealElements = document.querySelectorAll('.reveal');

const revealObserver = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add('is-visible');
        // Stop watching it after it appears, so it only reveals once.
        revealObserver.unobserve(entry.target);
      }
    });
  },
  { threshold: 0.15 }
);

revealElements.forEach((el) => revealObserver.observe(el));
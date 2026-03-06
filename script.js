// Set current year in footer
document.querySelectorAll('#yr').forEach(el => el.textContent = new Date().getFullYear());

// Fade-in-up on scroll
const observer = new IntersectionObserver((entries) => {
  entries.forEach((entry, i) => {
    if (entry.isIntersecting) {
      setTimeout(() => entry.target.classList.add('visible'), i * 60);
      observer.unobserve(entry.target);
    }
  });
}, { threshold: 0.1 });

document.querySelectorAll('.fade-in-up').forEach(el => observer.observe(el));

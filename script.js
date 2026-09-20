const cursorGlow = document.querySelector(".cursor-glow");
window.addEventListener("pointermove", e => {
  cursorGlow.style.left = e.clientX + "px";
  cursorGlow.style.top = e.clientY + "px";
});

const observer = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      entry.target.classList.add("visible");
      observer.unobserve(entry.target);
    }
  });
}, { threshold: 0.12 });

document.querySelectorAll(".reveal").forEach((el, i) => {
  el.style.transitionDelay = `${Math.min(i % 6, 5) * 70}ms`;
  observer.observe(el);
});

// Slight parallax on the hero portrait while the portrait itself stays in place.
const hero = document.querySelector(".hero");
const photo = document.querySelector(".photo-card");
window.addEventListener("scroll", () => {
  if (!hero || !photo) return;
  const y = window.scrollY;
  const limit = Math.min(y, window.innerHeight * 0.55);
  photo.style.transform = `translateY(${limit * 0.055}px)`;
}, { passive: true });

// Highlight the navigation link for the section currently in view.
const sections = document.querySelectorAll("main section[id]");
const navLinks = document.querySelectorAll("nav a");
const sectionObserver = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (!entry.isIntersecting) return;
    navLinks.forEach(a => a.classList.toggle("active", a.getAttribute("href") === "#" + entry.target.id));
  });
}, { rootMargin: "-40% 0px -50% 0px" });
sections.forEach(s => sectionObserver.observe(s));

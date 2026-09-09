
document.getElementById("year").textContent = new Date().getFullYear();

const observer = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) entry.target.classList.add("visible");
  });
}, { threshold: 0.12 });

document.querySelectorAll(".role, .project-card, .about-copy, .recognition-list").forEach((el) => {
  el.classList.add("reveal");
  observer.observe(el);
});

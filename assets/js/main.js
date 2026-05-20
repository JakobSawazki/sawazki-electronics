const header = document.querySelector("[data-header]");
const navToggle = document.querySelector("[data-nav-toggle]");
const navLinks = document.querySelector("[data-nav-links]");
const revealItems = document.querySelectorAll(".reveal");
const contactForm = document.querySelector("[data-contact-form]");
const formStatus = document.querySelector("[data-form-status]");
const subjectField = document.querySelector("[data-subject-field]");

document.documentElement.classList.add("js-ready");

function updateHeader() {
  if (!header) return;
  const forceSolidHeader = document.body.classList.contains("legal-body");
  header.classList.toggle("is-scrolled", forceSolidHeader || window.scrollY > 12);
}

function closeMenu() {
  if (!navToggle || !navLinks) return;
  navToggle.setAttribute("aria-expanded", "false");
  navLinks.classList.remove("is-open");
}

updateHeader();
window.addEventListener("scroll", updateHeader, { passive: true });

if (navToggle && navLinks) {
  navToggle.addEventListener("click", () => {
    const isOpen = navLinks.classList.toggle("is-open");
    navToggle.setAttribute("aria-expanded", String(isOpen));
  });

  navLinks.addEventListener("click", (event) => {
    if (event.target instanceof HTMLAnchorElement) {
      closeMenu();
    }
  });
}

if ("IntersectionObserver" in window) {
  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("is-visible");
          observer.unobserve(entry.target);
        }
      });
    },
    { threshold: 0.14 }
  );

  revealItems.forEach((item) => {
    const rect = item.getBoundingClientRect();
    if (rect.top < window.innerHeight * 0.95) {
      item.classList.add("is-visible");
      return;
    }

    observer.observe(item);
  });
} else {
  revealItems.forEach((item) => item.classList.add("is-visible"));
}

function getFormValue(data, key) {
  return String(data.get(key) || "").trim();
}

if (contactForm && formStatus) {
  contactForm.addEventListener("submit", (event) => {
    if (!contactForm.reportValidity()) {
      event.preventDefault();
      return;
    }

    const data = new FormData(contactForm);
    const topic = getFormValue(data, "topic");

    if (subjectField) {
      subjectField.value = topic
        ? `Neue Anfrage über Sawazki Electronics: ${topic}`
        : "Neue Anfrage über Sawazki Electronics";
    }

    formStatus.textContent = "Anfrage wird gesendet...";
  });
}

const CONTACT_EMAIL = "kontakt@sawazki-electronics.de";

const header = document.querySelector("[data-header]");
const navToggle = document.querySelector("[data-nav-toggle]");
const navLinks = document.querySelector("[data-nav-links]");
const revealItems = document.querySelectorAll(".reveal");
const contactForm = document.querySelector("[data-contact-form]");
const formStatus = document.querySelector("[data-form-status]");

document.documentElement.classList.add("js-ready");

function updateHeader() {
  if (!header) return;
  header.classList.toggle("is-scrolled", window.scrollY > 12);
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

function buildMessage(data) {
  const name = getFormValue(data, "name");
  const email = getFormValue(data, "email");
  const phone = getFormValue(data, "phone") || "Nicht angegeben";
  const topic = getFormValue(data, "topic");
  const message = getFormValue(data, "message");

  return [
    "Hallo Sawazki Electronics,",
    "",
    "ich möchte eine Anfrage stellen.",
    "",
    `Name: ${name}`,
    `E-Mail: ${email}`,
    `Telefon: ${phone}`,
    `Thema: ${topic}`,
    "",
    "Nachricht:",
    message,
    "",
    "Viele Grüße",
    name,
  ].join("\n");
}

if (contactForm && formStatus) {
  contactForm.addEventListener("submit", async (event) => {
    event.preventDefault();

    if (!contactForm.reportValidity()) {
      return;
    }

    const data = new FormData(contactForm);
    const topic = getFormValue(data, "topic");
    const body = buildMessage(data);
    const subject = `Anfrage über Website: ${topic}`;
    const mailto = `mailto:${CONTACT_EMAIL}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;

    try {
      await navigator.clipboard?.writeText(body);
      formStatus.textContent = "Nachricht vorbereitet und in die Zwischenablage kopiert. Dein E-Mail-Programm wird geöffnet.";
    } catch {
      formStatus.textContent = "Nachricht vorbereitet. Dein E-Mail-Programm wird geöffnet.";
    }

    window.location.href = mailto;
  });
}

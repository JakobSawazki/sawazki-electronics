const header = document.querySelector("[data-header]");
const navToggle = document.querySelector("[data-nav-toggle]");
const navLinks = document.querySelector("[data-nav-links]");
const revealItems = document.querySelectorAll(".reveal");
const contactForm = document.querySelector("[data-contact-form]");
const formStatus = document.querySelector("[data-form-status]");
const subjectField = document.querySelector("[data-subject-field]");
const topicField = document.querySelector('select[name="topic"]');

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

if (topicField) {
  const requestedTopic = new URLSearchParams(window.location.search).get("topic");
  const matchingOption = requestedTopic
    ? Array.from(topicField.options).find((option) => option.value === requestedTopic)
    : null;

  if (matchingOption) {
    topicField.value = requestedTopic;
  }
}

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
      const subjectPrefix = subjectField.dataset.subjectPrefix || "Neue Anfrage über Sawazki Electronics";
      subjectField.value = topic
        ? `${subjectPrefix}: ${topic}`
        : subjectPrefix;
    }

    formStatus.textContent = "Anfrage wird gesendet...";
  });
}

const priceCalc = document.querySelector("[data-price-calc]");

if (priceCalc) {
  const qtyField = priceCalc.querySelector("[data-calc-qty]");
  const runtimeField = priceCalc.querySelector("[data-calc-runtime]");
  const usbField = priceCalc.querySelector("[data-calc-usb]");
  const resultField = priceCalc.querySelector("[data-calc-result]");

  const euro = (value) => value.toLocaleString("de-DE", { style: "currency", currency: "EUR" });

  // Staffel muss der veroeffentlichten Preistabelle auf der Seite entsprechen.
  function baseTotal(qty) {
    if (qty === 1) return 19.9;
    if (qty === 2) return 37.8;
    if (qty === 3) return 53.7;
    if (qty <= 5) return qty * 16.9;
    return qty * 15.9;
  }

  function updateEstimate() {
    const qty = Math.floor(Number(qtyField.value));

    if (!Number.isFinite(qty) || qty < 1) {
      resultField.textContent = "Bitte eine Kassettenanzahl ab 1 angeben.";
      return;
    }

    if (qty > 10) {
      resultField.textContent =
        "Ab 11 Kassetten lohnt sich ein individuelles Angebot – einfach unverbindlich anfragen.";
      return;
    }

    if (runtimeField.value === "check") {
      resultField.textContent =
        "Über 240 Minuten je Kassette: Preis nach kurzer technischer Prüfung – bitte unverbindlich anfragen.";
      return;
    }

    let total = baseTotal(qty) + qty * Number(runtimeField.value);
    const usbSelected = usbField.checked;
    if (usbSelected) {
      total += 12.9;
    }

    const cassetteWord = qty === 1 ? "Kassette" : "Kassetten";
    const prefix = usbSelected ? "ab" : "ca.";
    resultField.textContent = `Geschätzter Preis für ${qty} ${cassetteWord}: ${prefix} ${euro(total)}`;
  }

  [qtyField, runtimeField, usbField].forEach((field) => {
    field.addEventListener("input", updateEstimate);
  });

  updateEstimate();
}

const header = document.querySelector("[data-header]");
const navToggle = document.querySelector("[data-nav-toggle]");
const navLinks = document.querySelector("[data-nav-links]");
const revealItems = document.querySelectorAll(".reveal");
const contactForm = document.querySelector("[data-contact-form]");
const formStatus = document.querySelector("[data-form-status]");
const subjectField = document.querySelector("[data-subject-field]");
const topicField = document.querySelector('select[name="topic"]');

document.documentElement.classList.add("js-ready");

// Keep old project-group links useful after moving the directory off the homepage.
if (document.body.classList.contains("home-page")) {
  const projectAnchors = new Set([
    "gruppe-lern-labs", "inhalt-lern-labs", "gruppe-berufsschule", "inhalt-berufsschule",
    "gruppe-schuelerprojekte", "inhalt-schuelerprojekte", "gruppe-gaming", "inhalt-gaming",
    "gruppe-wissen-bildung", "inhalt-wissen-bildung",
  ]);
  function redirectProjectAnchor() {
    const anchor = window.location.hash.slice(1);
    if (projectAnchors.has(anchor)) window.location.replace(`projekte.html#${anchor}`);
  }
  redirectProjectAnchor();
  window.addEventListener("hashchange", redirectProjectAnchor);
}

// Native details remain usable without JavaScript; enhance both directions.
const projectGroupControllers = new Map();
document.querySelectorAll("[data-project-group]").forEach((group) => {
  const summary = group.querySelector("summary");
  const content = group.querySelector(".project-group-content");
  if (!summary || !content) return;
  let animation = null;
  let targetOpen = group.open;
  summary.setAttribute("aria-expanded", String(targetOpen));
  group.addEventListener("toggle", () => {
    if (!animation) {
      targetOpen = group.open;
      summary.setAttribute("aria-expanded", String(targetOpen));
    }
  });
  function setOpen(nextOpen) {
    if (nextOpen === targetOpen) return;
    const from = group.open ? content.getBoundingClientRect().height : 0;
    animation?.cancel();
    targetOpen = nextOpen;
    summary.setAttribute("aria-expanded", String(targetOpen));
    group.classList.toggle("is-closing", !targetOpen);
    if (!content.animate || window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      animation = null;
      group.open = targetOpen;
      group.classList.remove("is-closing");
      return;
    }
    group.open = true;
    const transition = content.animate(
      [{ height: `${from}px`, opacity: from ? 1 : 0 }, { height: targetOpen ? `${content.scrollHeight}px` : "0px", opacity: targetOpen ? 1 : 0 }],
      { duration: 300, easing: "cubic-bezier(.22,1,.36,1)" }
    );
    animation = transition;
    transition.finished.then(() => {
      if (animation !== transition) return;
      group.open = targetOpen;
      animation = null;
      group.classList.remove("is-closing");
    }).catch(() => {}); // A new click intentionally cancels the old transition.
  }
  projectGroupControllers.set(group, setOpen);
  summary.addEventListener("click", (event) => {
    event.preventDefault();
    setOpen(!targetOpen);
  });
});

document.querySelectorAll("[data-project-group-controls]").forEach((controls) => {
  const groups = controls.closest(".project-groups, .side-project")?.querySelectorAll("[data-project-group]");
  if (!groups?.length) return;
  controls.hidden = false;
  controls.querySelectorAll("[data-project-groups-action]").forEach((button) => {
    button.addEventListener("click", () => {
      const open = button.dataset.projectGroupsAction === "expand";
      groups.forEach((group) => projectGroupControllers.get(group)?.(open));
    });
  });
});

function updateHeader() {
  if (!header) return;
  const forceSolidHeader = document.body.classList.contains("legal-body");
  header.classList.toggle("is-scrolled", forceSolidHeader || window.scrollY > 12);
}

function closeMenu() {
  if (!navToggle || !navLinks) return;
  navToggle.setAttribute("aria-expanded", "false");
  navLinks.classList.remove("is-open");
  setServicesOpen(false);
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

  // Themenabhängige Bereiche (z. B. Webdesign-Angaben im Anfrage-Assistenten):
  // ausgeblendete Felder werden deaktiviert und damit nicht mitgesendet.
  const topicBlocks = document.querySelectorAll("[data-topic-show], [data-topic-hide]");
  const topicPlaceholderFields = document.querySelectorAll("[data-topic-placeholder]");
  topicPlaceholderFields.forEach((field) => {
    field.dataset.defaultPlaceholder = field.placeholder;
  });

  function updateTopicBlocks() {
    const topic = topicField.value;
    topicBlocks.forEach((block) => {
      const visible = block.hasAttribute("data-topic-show")
        ? block.dataset.topicShow.split("|").includes(topic)
        : topic !== block.dataset.topicHide;
      block.hidden = !visible;
      block.querySelectorAll("input, select, textarea").forEach((control) => {
        control.disabled = !visible;
      });
    });
    topicPlaceholderFields.forEach((field) => {
      field.placeholder = topic === field.dataset.topicPlaceholderFor
        ? field.dataset.topicPlaceholder
        : field.dataset.defaultPlaceholder;
      const topicHints = {
        "VHS-Digitalisierung": "Welche Kassettenformate und wie viele Kassetten möchten Sie digitalisieren?",
        "3D-Druck": "Was möchten Sie drucken lassen? Nennen Sie Größe, Stückzahl und vorhandene Druckdateien.",
        "Energietechnik": "Welche Geräte möchten Sie versorgen? Gibt es bereits einen Speicher oder eine Anlage?",
        "Datenrettung": "Welcher Datenträger ist betroffen? Was ist passiert und welche Daten benötigen Sie?",
      };
      if (topicHints[topic]) field.placeholder = topicHints[topic];
    });
  }

  if (topicBlocks.length || topicPlaceholderFields.length) {
    updateTopicBlocks();
    topicField.addEventListener("change", updateTopicBlocks);
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
    if (event.defaultPrevented) return;
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

// A normal overview link remains available without JavaScript.
// Jedes .nav-services-Element ist ein eigenes Aufklappmenü (Leistungen, Projekte).
const dropdownMenus = Array.from(document.querySelectorAll('.nav-services'))
  .map(container => ({
    container,
    toggle: container.querySelector('[data-services-toggle]'),
    panel: container.querySelector('[data-services-panel]'),
    closeTimer: 0,
  }))
  .filter(menu => menu.toggle && menu.panel);

function setMenuOpen(menu, open) {
  window.clearTimeout(menu.closeTimer);
  const label = menu.toggle.dataset.menuLabel || 'Leistungen';
  menu.toggle.setAttribute('aria-expanded', String(open));
  menu.toggle.setAttribute('aria-label', `${label} ${open ? 'zuklappen' : 'aufklappen'}`);
  menu.panel.hidden = !open;
  if (open) {
    dropdownMenus.forEach(other => {
      if (other !== menu) setMenuOpen(other, false);
    });
  }
}

function setServicesOpen(open) {
  dropdownMenus.forEach(menu => setMenuOpen(menu, open));
}

if (dropdownMenus.length) {
  const menusMobile = window.matchMedia('(max-width: 1080px)');
  const desktopHover = window.matchMedia('(min-width: 1081px) and (hover: hover) and (pointer: fine)');
  const updateMenuGroups = () => {
    dropdownMenus.forEach(menu => {
      menu.panel.querySelectorAll('details').forEach(group => {
        group.open = !menusMobile.matches;
      });
    });
  };
  updateMenuGroups();
  menusMobile.addEventListener('change', () => {
    updateMenuGroups();
    setServicesOpen(false);
  });
  desktopHover.addEventListener('change', () => setServicesOpen(false));

  dropdownMenus.forEach(menu => {
    menu.toggle.hidden = false;
    menu.toggle.addEventListener('click', () => setMenuOpen(menu, menu.panel.hidden));
    menu.container.addEventListener('pointerenter', event => {
      if (event.pointerType === 'mouse' && desktopHover.matches) setMenuOpen(menu, true);
    });
    menu.container.addEventListener('pointerleave', event => {
      if (event.pointerType !== 'mouse' || !desktopHover.matches) return;
      menu.closeTimer = window.setTimeout(() => {
        if (!menu.container.contains(document.activeElement)) setMenuOpen(menu, false);
      }, 180);
    });
  });

  const closeMenusOutside = event => {
    dropdownMenus.forEach(menu => {
      if (!menu.container.contains(event.target)) setMenuOpen(menu, false);
    });
  };
  document.addEventListener('click', closeMenusOutside);
  document.addEventListener('focusin', closeMenusOutside);
  document.addEventListener('keydown', event => {
    if (event.key !== 'Escape') return;
    const openMenu = dropdownMenus.find(menu => !menu.panel.hidden);
    if (openMenu) {
      setMenuOpen(openMenu, false);
      openMenu.toggle.focus();
    } else if (navLinks?.classList.contains('is-open')) {
      closeMenu();
      navToggle?.focus();
    }
  });
}

(() => {
  "use strict";

  const storageKey = "sawazki-electronics-theme";
  const root = document.documentElement;

  function storedTheme() {
    try {
      const value = localStorage.getItem(storageKey);
      return value === "light" || value === "dark" ? value : null;
    } catch {
      return null;
    }
  }

  function ensureThemeToggles() {
    document.querySelectorAll("[data-nav-links], .static-links").forEach((navigation) => {
      if (navigation.querySelector("[data-theme-toggle]")) {
        return;
      }

      const button = document.createElement("button");
      button.className = "theme-toggle";
      button.type = "button";
      button.dataset.themeToggle = "";
      button.innerHTML = `
        <svg class="theme-icon-moon" viewBox="0 0 24 24" aria-hidden="true">
          <path d="M21 12.8A9 9 0 1 1 11.2 3 7 7 0 0 0 21 12.8"></path>
        </svg>
        <svg class="theme-icon-sun" viewBox="0 0 24 24" aria-hidden="true">
          <circle cx="12" cy="12" r="4"></circle>
          <path d="M12 2v2m0 16v2M4.9 4.9l1.4 1.4m11.4 11.4 1.4 1.4M2 12h2m16 0h2M4.9 19.1l1.4-1.4M17.7 6.3l1.4-1.4"></path>
        </svg>`;

      const impressumLink = navigation.querySelector('a[href="impressum.html"]');
      const callToAction = navigation.querySelector(".nav-cta");
      if (impressumLink) {
        impressumLink.insertAdjacentElement("afterend", button);
      } else if (callToAction) {
        callToAction.insertAdjacentElement("beforebegin", button);
      } else {
        navigation.append(button);
      }
    });
  }

  function applyTheme(theme) {
    const isDark = theme === "dark";
    root.dataset.theme = isDark ? "dark" : "light";
    root.style.colorScheme = isDark ? "dark" : "light";

    document.querySelectorAll("[data-theme-toggle]").forEach((button) => {
      const label = isDark ? "Hellen Modus aktivieren" : "Dunklen Modus aktivieren";
      button.setAttribute("aria-label", label);
      button.setAttribute("title", label);
      button.setAttribute("aria-pressed", String(isDark));
    });

    const themeColor = document.querySelector('meta[name="theme-color"]');
    if (themeColor) {
      themeColor.setAttribute("content", isDark ? "#0b151d" : "#082f57");
    }
  }

  // Lesehilfe: Schriftgröße (md/lg/xl) und Kontrast (normal/high), lokal gespeichert.
  const readingKey = "sawazki-electronics-lesehilfe";
  const readingDefaults = { font: "md", contrast: "normal" };

  function storedReading() {
    try {
      const value = JSON.parse(localStorage.getItem(readingKey) || "{}");
      return {
        font: ["md", "lg", "xl"].includes(value.font) ? value.font : "md",
        contrast: ["high", "max"].includes(value.contrast) ? value.contrast : "normal",
      };
    } catch {
      return { ...readingDefaults };
    }
  }

  let reading = storedReading();

  function applyReading() {
    if (reading.font === "md") {
      delete root.dataset.font;
    } else {
      root.dataset.font = reading.font;
    }
    if (reading.contrast !== "normal") {
      root.dataset.contrast = reading.contrast;
    } else {
      delete root.dataset.contrast;
    }
    document.querySelectorAll("[data-reading-font]").forEach((button) => {
      button.setAttribute("aria-pressed", String(button.dataset.readingFont === reading.font));
    });
    document.querySelectorAll("[data-reading-contrast]").forEach((button) => {
      button.setAttribute("aria-pressed", String(button.dataset.readingContrast === reading.contrast));
    });
  }

  function saveReading() {
    try {
      if (reading.font === "md" && reading.contrast === "normal") {
        localStorage.removeItem(readingKey);
      } else {
        localStorage.setItem(readingKey, JSON.stringify(reading));
      }
    } catch {
      // Die Auswahl gilt trotzdem für die aktuelle Seite.
    }
  }

  function setReadingOpen(menu, open) {
    const toggle = menu.querySelector("[data-reading-toggle]");
    const panel = menu.querySelector("[data-reading-panel]");
    panel.hidden = !open;
    toggle.setAttribute("aria-expanded", String(open));
  }

  function ensureReadingMenus() {
    document.querySelectorAll("[data-nav-links]").forEach((navigation, index) => {
      const themeButton = navigation.querySelector("[data-theme-toggle]");
      if (!themeButton || navigation.querySelector("[data-reading-menu]")) {
        return;
      }

      const panelId = `lesehilfe-${index}`;
      const menu = document.createElement("div");
      menu.className = "reading-menu";
      menu.dataset.readingMenu = "";
      menu.innerHTML = `
        <button class="theme-toggle reading-toggle" type="button" aria-label="Lesehilfe öffnen" title="Lesehilfe: Schriftgröße und Kontrast" aria-expanded="false" aria-controls="${panelId}" data-reading-toggle>
          <svg viewBox="0 0 24 24" aria-hidden="true">
            <path d="M4 7h9m4 0h3M4 12h3m4 0h9M4 17h11m4 0h1"></path>
            <circle cx="15" cy="7" r="2"></circle>
            <circle cx="9" cy="12" r="2"></circle>
            <circle cx="17" cy="17" r="2"></circle>
          </svg>
        </button>
        <div class="reading-panel" id="${panelId}" role="group" aria-label="Lesehilfe" data-reading-panel hidden>
          <p class="reading-title">Lesehilfe</p>
          <div class="reading-group" role="group" aria-label="Schriftgröße">
            <span>Schriftgröße</span>
            <div class="reading-options">
              <button type="button" data-reading-font="md">Normal</button>
              <button type="button" data-reading-font="lg">Groß</button>
              <button type="button" data-reading-font="xl">Sehr groß</button>
            </div>
          </div>
          <div class="reading-group" role="group" aria-label="Kontrast">
            <span>Kontrast</span>
            <div class="reading-options">
              <button type="button" data-reading-contrast="normal">Normal</button>
              <button type="button" data-reading-contrast="high">Hoch</button>
              <button type="button" data-reading-contrast="max">Sehr hoch</button>
            </div>
          </div>
          <button class="reading-reset" type="button" data-reading-reset>Zurücksetzen</button>
        </div>`;
      themeButton.insertAdjacentElement("beforebegin", menu);

      menu.querySelector("[data-reading-toggle]").addEventListener("click", () => {
        setReadingOpen(menu, menu.querySelector("[data-reading-panel]").hidden);
      });
      menu.addEventListener("click", (event) => {
        const button = event.target.closest("button");
        if (!button) return;
        if (button.dataset.readingFont) reading.font = button.dataset.readingFont;
        else if (button.dataset.readingContrast) reading.contrast = button.dataset.readingContrast;
        else if (button.hasAttribute("data-reading-reset")) reading = { ...readingDefaults };
        else return;
        saveReading();
        applyReading();
      });
    });

    document.addEventListener("click", (event) => {
      document.querySelectorAll("[data-reading-menu]").forEach((menu) => {
        if (!menu.contains(event.target)) setReadingOpen(menu, false);
      });
    });
    document.addEventListener("keydown", (event) => {
      if (event.key !== "Escape") return;
      document.querySelectorAll("[data-reading-menu]").forEach((menu) => {
        if (!menu.querySelector("[data-reading-panel]").hidden) {
          setReadingOpen(menu, false);
          menu.querySelector("[data-reading-toggle]").focus();
        }
      });
    });
  }

  applyTheme(storedTheme() || "dark");
  applyReading();

  document.addEventListener("DOMContentLoaded", () => {
    ensureThemeToggles();
    ensureReadingMenus();
    applyTheme(root.dataset.theme);
    applyReading();
    document.querySelectorAll("[data-theme-toggle]").forEach((button) => {
      button.addEventListener("click", () => {
        const nextTheme = root.dataset.theme === "dark" ? "light" : "dark";
        try {
          localStorage.setItem(storageKey, nextTheme);
        } catch {
          // The selected theme still applies to the current page.
        }
        applyTheme(nextTheme);
      });
    });
  });
})();

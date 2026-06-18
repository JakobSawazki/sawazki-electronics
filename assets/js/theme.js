(() => {
  "use strict";

  const storageKey = "sawazki-electronics-theme";
  const root = document.documentElement;
  const mediaQuery = window.matchMedia("(prefers-color-scheme: dark)");

  function storedTheme() {
    try {
      const value = localStorage.getItem(storageKey);
      return value === "light" || value === "dark" ? value : null;
    } catch {
      return null;
    }
  }

  function preferredTheme() {
    return mediaQuery.matches ? "dark" : "light";
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

  applyTheme(storedTheme() || preferredTheme());

  document.addEventListener("DOMContentLoaded", () => {
    ensureThemeToggles();
    applyTheme(root.dataset.theme);
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

  mediaQuery.addEventListener?.("change", (event) => {
    if (!storedTheme()) {
      applyTheme(event.matches ? "dark" : "light");
    }
  });
})();

(() => {
  const form = document.querySelector('[data-guided-form]');
  if (!form) return;
  const steps = [...form.querySelectorAll('[data-wizard-step]')];
  const progress = form.querySelector('[data-wizard-progress]');
  const status = form.querySelector('[data-wizard-status]');
  const controls = form.querySelector('[data-wizard-controls]');
  const back = form.querySelector('[data-wizard-back]');
  const next = form.querySelector('[data-wizard-next]');
  const submit = form.querySelector('[data-wizard-submit]');
  const summary = form.querySelector('[data-wizard-summary]');
  const labels = {
    topic: 'Thema', device: 'Gerät', project_type: 'Vorhaben', company: 'Unternehmen',
    domain: 'Website / Domain', goals: 'Ziele', timeframe: 'Zeitrahmen', urgency: 'Dringlichkeit',
    support_type: 'Gewünschte Hilfe', message: 'Beschreibung', name: 'Name', email: 'E-Mail',
    phone: 'Telefon', availability: 'Erreichbarkeit',
  };
  let current = 0;
  function invalidIn(section) {
    return [...section.querySelectorAll('input, select, textarea')]
      .find(field => !field.disabled && !field.checkValidity());
  }
  function renderSummary() {
    summary.replaceChildren();
    const values = new FormData(form);
    for (const [name, label] of Object.entries(labels)) {
      const value = String(values.get(name) || '').trim();
      if (!value) continue;
      const term = document.createElement('dt');
      const description = document.createElement('dd');
      term.textContent = label;
      description.textContent = value;
      summary.append(term, description);
    }
  }
  function showStep(index, focus = true) {
    current = index;
    steps.forEach((step, i) => { step.hidden = i !== current; });
    progress.querySelectorAll('li').forEach((item, i) => {
      if (i === current) item.setAttribute('aria-current', 'step');
      else item.removeAttribute('aria-current');
    });
    status.textContent = `Schritt ${current + 1} von ${steps.length}`;
    back.hidden = current === 0;
    next.hidden = current === steps.length - 1;
    next.textContent = current === steps.length - 2 ? 'Angaben prüfen' : 'Weiter';
    submit.hidden = current !== steps.length - 1;
    if (current === steps.length - 1) renderSummary();
    if (focus) {
      steps[current].querySelector('legend').focus({ preventScroll: true });
      progress.scrollIntoView({ block: 'start', behavior: 'instant' });
    }
  }
  function advance() {
    const invalid = invalidIn(steps[current]);
    if (invalid) { invalid.reportValidity(); return; }
    showStep(Math.min(current + 1, steps.length - 1));
  }
  steps.forEach(step => { step.querySelector('legend').tabIndex = -1; });
  progress.hidden = false;
  controls.hidden = false;
  form.noValidate = true;
  next.addEventListener('click', advance);
  back.addEventListener('click', () => showStep(Math.max(0, current - 1)));
  form.addEventListener('submit', event => {
    if (current !== steps.length - 1) {
      event.preventDefault();
      advance();
      return;
    }
    const invalid = invalidIn(form);
    if (invalid) {
      event.preventDefault();
      const targetStep = steps.findIndex(step => step.contains(invalid));
      if (targetStep >= 0) showStep(targetStep);
      invalid.reportValidity();
    }
  }, true);
  showStep(0, false);
})();

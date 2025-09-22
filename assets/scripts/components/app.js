document.addEventListener('DOMContentLoaded', () => {
  document.querySelectorAll('input[type="checkbox"][aria-controls], input[type="radio"][aria-controls], button[aria-controls]')
    .forEach(ctrl => {
      const targetId = ctrl.getAttribute('aria-controls');
      const target = document.getElementById(targetId);

      if (!target) return;

      // Initialize state
      const syncState = () => {
        const expanded = ctrl.checked || ctrl.getAttribute('aria-pressed') === 'true';
        ctrl.setAttribute('aria-expanded', expanded);
        target.hidden = !expanded;
      };

      // Sync on load
      syncState();

      // Sync on change/click
      ctrl.addEventListener('change', syncState);
      ctrl.addEventListener('click', syncState);
    });
});


document.addEventListener('DOMContentLoaded', () => {
  const tmpl = document.getElementById('feedback-thankyou');
  const panel = document.getElementById('feedback__panel');

  // 1. After successful submit, set flag before redirect
  const forms = document.querySelectorAll('form[data-netlify="true"]');
  forms.forEach(form => {
    form.addEventListener('submit', () => {
      try { localStorage.setItem('feedbackSubmitted', 'true'); } catch(e) {}
    });
  });

  // 2. On page load, check flag
  if (localStorage.getItem('feedbackSubmitted') === 'true') {
    if (tmpl && panel) {
      panel.replaceChildren(tmpl.content.cloneNode(true));
    }
    // 3. Clear flag so it only shows once
    localStorage.removeItem('feedbackSubmitted');
  }
});
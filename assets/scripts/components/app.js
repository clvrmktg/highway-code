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


if (window.location.search.includes('success=true')) {
  document.addEventListener('DOMContentLoaded', () => {
    const tmpl = document.getElementById('feedback-thankyou');
    if (!tmpl) return;

    const clone = tmpl.content.cloneNode(true);
    const panel = document.getElementById('feedback__panel');
    if (panel) panel.replaceWith(clone);
  });
}

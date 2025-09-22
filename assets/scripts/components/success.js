if (window.location.search.includes('success=true')) {
  document.addEventListener('DOMContentLoaded', () => {
    const tmpl = document.getElementById('feedback-thankyou');
    if (!tmpl) return;

    const clone = tmpl.content.cloneNode(true);
    const panel = document.getElementById('feedback__panel');
    if (panel) panel.replaceWith(clone);
  });
}

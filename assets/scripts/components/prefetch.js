// Helpers
const sameOrigin = url => {
  const u = new URL(url, location.href);
  return u.origin === location.origin;
};

const canPrefetchNow = () =>
  !('connection' in navigator && (
     navigator.connection.saveData ||
     (navigator.connection.effectiveType && /2g/.test(navigator.connection.effectiveType))
  ));

// Core
function prefetch(url) {
  const href = new URL(url, location.href).toString();
  if (!sameOrigin(href) || !canPrefetchNow()) return;
  if (!document.querySelector(`link[rel="prefetch"][href="${href}"]`)) {
    const link = document.createElement('link');
    link.rel = 'prefetch';
    link.as = 'document';
    link.href = href;
    document.head.appendChild(link);
  }
}

// Mouse & touch (what you already had)
document.querySelectorAll('a[data-prefetch]').forEach(a => {
  const handler = () => prefetch(a.href);
  a.addEventListener('mouseenter', handler);
  a.addEventListener('mousedown', handler);
  a.addEventListener('touchstart', handler, { passive: true });
});

// Keyboard focus (Tabbing)
let focusTimer = null;
document.addEventListener('focusin', e => {
  const a = e.target.closest('a[data-prefetch]');
  if (!a) return;
  // Small delay so rapid tabbing doesn’t queue many prefetches
  clearTimeout(focusTimer);
  focusTimer = setTimeout(() => prefetch(a.href), 120);
});

// Optional: prefetch on Arrow navigation within menus using Enter/Space fallback
document.addEventListener('keydown', e => {
  if ((e.key === 'Enter' || e.key === ' ') && e.target instanceof HTMLAnchorElement) {
    const a = e.target.closest('a[data-prefetch]');
    if (a) prefetch(a.href);
  }
});


// function normalizePath(path) {
//   // Ensure leading slash and remove trailing slashes
//   return path.replace(/\/+$/, '') || '/';
// }

// function setAnimationDirection(oldPage, newPage) {
//   const oldPath = normalizePath(new URL(oldPage).pathname);
//   const targetPath = normalizePath(new URL(newPage).pathname);

//   const oldIndex = pages.indexOf(oldPath);
//   const targetIndex = pages.indexOf(targetPath);

//   console.log(`Old Path: ${oldPath}, Target Path: ${targetPath}`);
//   console.log(`Old Index: ${oldIndex}, Target Index: ${targetIndex}`);

//   if (oldIndex === -1 || targetIndex === -1) {
//     console.warn(`Unknown path(s): oldPath=${oldPath}, targetPath=${targetPath}`);
//     return 'forward'; // Default fallback for unknown paths
//   }

//   if (oldIndex === targetIndex) {
//     console.log(`Same page navigation detected: ${oldPath} -> ${targetPath}`);
//     return 'forward'; // Or 'none'
//   }
//   console.log(`Normalized Old Path: ${oldPath}`);
//   console.log(`Normalized Target Path: ${targetPath}`);
//   console.log(`Old Index: ${oldIndex}, Target Index: ${targetIndex}`);

//   return oldIndex < targetIndex ? 'forward' : 'backward';

// }

// window.addEventListener('pagereveal', async (event) => {
//   if (!event.viewTransition) return;

//   const oldUrl = navigation.activation.from.url;
//   const targetUrl = navigation.activation.entry.url;

//   console.log(`Old URL: ${oldUrl}`);
//   console.log(`Target URL: ${targetUrl}`);

//   const direction = setAnimationDirection(oldUrl, targetUrl);
//   console.log(`Direction: ${direction}`);

//   document.documentElement.dataset.direction = direction;

//   await event.viewTransition.finished;

//   delete document.documentElement.dataset.direction;

// });
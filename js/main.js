/* =========================================================
   LOVE ALL SPORTS - global UI behaviour
   ========================================================= */

/* ---------- Toast ---------- */
function toast(message) {
  let wrap = document.querySelector('.toast-wrap');
  if (!wrap) {
    wrap = document.createElement('div');
    wrap.className = 'toast-wrap';
    wrap.setAttribute('role', 'status');
    wrap.setAttribute('aria-live', 'polite');
    document.body.appendChild(wrap);
  }
  const t = document.createElement('div');
  t.className = 'toast';
  t.innerHTML = '<i class="fa-solid fa-circle-check"></i><span></span>';
  t.querySelector('span').textContent = message;
  wrap.appendChild(t);
  while (wrap.children.length > 3) wrap.firstChild.remove();
  setTimeout(() => { t.classList.add('out'); setTimeout(() => t.remove(), 320); }, 2400);
}
window.toast = toast;

/* ---------- Scroll reveal ---------- */
const revealObserver = ('IntersectionObserver' in window)
  ? new IntersectionObserver((entries) => {
    entries.forEach((en) => { if (en.isIntersecting) { en.target.classList.add('in'); revealObserver.unobserve(en.target); } });
  }, { threshold: 0.12, rootMargin: '0px 0px -40px 0px' })
  : null;

window.observeReveals = function (root) {
  (root || document).querySelectorAll('.reveal:not(.in)').forEach((el, i) => {
    if (!revealObserver) { el.classList.add('in'); return; }
    el.style.transitionDelay = Math.min(i % 4, 3) * 70 + 'ms';
    revealObserver.observe(el);
  });
};

document.addEventListener('DOMContentLoaded', () => {
  const header = document.getElementById('header');
  const navToggle = document.getElementById('navToggle');
  const nav = document.getElementById('mainNav');

  /* ---------- Veerfit opening product popup ---------- */
  const veerfitPopup = document.getElementById('veerfitPopup');
  if (veerfitPopup) {
    const closeButton = document.getElementById('veerfitPopupClose');
    const closePopup = () => {
      veerfitPopup.classList.remove('is-open');
      veerfitPopup.setAttribute('aria-hidden', 'true');
      document.body.style.overflow = '';
    };
    const openPopup = () => {
      veerfitPopup.classList.add('is-open');
      veerfitPopup.setAttribute('aria-hidden', 'false');
      document.body.style.overflow = 'hidden';
      closeButton.focus();
      window.observeReveals && window.observeReveals(veerfitPopup);
    };
    closeButton.addEventListener('click', closePopup);
    veerfitPopup.addEventListener('click', (event) => {
      if (event.target === veerfitPopup) closePopup();
    });
    document.addEventListener('keydown', (event) => {
      if (event.key === 'Escape' && veerfitPopup.classList.contains('is-open')) closePopup();
    });
    const delay = window.matchMedia('(prefers-reduced-motion: reduce)').matches ? 900 : 3900;
    setTimeout(openPopup, delay);
  }

  /* ---------- Mobile navigation ---------- */
  const setNav = (open) => {
    nav.classList.toggle('open', open);
    navToggle.setAttribute('aria-expanded', open);
    document.body.classList.toggle('nav-open', open);
  };
  navToggle.addEventListener('click', () => setNav(!nav.classList.contains('open')));
  nav.addEventListener('click', (e) => { if (e.target.closest('a')) setNav(false); });
  document.addEventListener('click', (e) => { if (!e.target.closest('#mainNav, #navToggle')) setNav(false); });
  document.addEventListener('keydown', (e) => { if (e.key === 'Escape') setNav(false); });
  window.matchMedia('(min-width: 992px)').addEventListener('change', () => setNav(false));

  /* ---------- Header shadow + back to top ---------- */
  const toTop = document.getElementById('toTop');
  const onScroll = () => {
    const y = window.scrollY;
    header.classList.toggle('scrolled', y > 10);
    toTop.classList.toggle('show', y > 600);
  };
  window.addEventListener('scroll', onScroll, { passive: true });
  onScroll();
  toTop.addEventListener('click', () => window.scrollTo({ top: 0, behavior: 'smooth' }));

  /* ---------- Smooth scroll for in-page links (header offset handled in CSS) ---------- */
  document.querySelectorAll('a[href^="#"]').forEach((a) => {
    a.addEventListener('click', (e) => {
      const id = a.getAttribute('href').slice(1);
      const target = id && document.getElementById(id);
      if (target) { e.preventDefault(); target.scrollIntoView({ behavior: 'smooth' }); history.replaceState && history.replaceState(null, '', '#' + id); }
    });
  });

  /* ---------- Active nav state on the home page (scroll-spy) ---------- */
  const spyLinks = [...document.querySelectorAll('.main-nav a[data-spy]')];
  if (spyLinks.length && 'IntersectionObserver' in window) {
    const sections = spyLinks.map((l) => document.getElementById(l.dataset.spy)).filter(Boolean);
    const spy = new IntersectionObserver((entries) => {
      entries.forEach((en) => {
        if (en.isIntersecting) spyLinks.forEach((l) => l.classList.toggle('active', l.dataset.spy === en.target.id));
      });
    }, { rootMargin: '-45% 0px -50% 0px' });
    sections.forEach((s) => spy.observe(s));
  }

  /* ---------- Contact details from SITE_CONFIG ---------- */
  document.querySelectorAll('[data-whatsapp]').forEach((a) => { a.href = `https://wa.me/${SITE_CONFIG.whatsapp}?text=${encodeURIComponent('Hello ' + SITE_CONFIG.brand + '! I have a question.')}`; a.target = '_blank'; a.rel = 'noopener'; });
  document.querySelectorAll('[data-email]').forEach((a) => { a.href = 'mailto:' + SITE_CONFIG.email; if (!a.textContent.trim()) a.textContent = SITE_CONFIG.email; });
  document.querySelectorAll('[data-year]').forEach((el) => { el.textContent = new Date().getFullYear(); });

  window.observeReveals();
});

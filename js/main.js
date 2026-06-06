/* ============================================================
   main.js — All site JavaScript
   Edit this file to change interactive behaviour
   ============================================================ */

/* ── Product Filter ──────────────────────────────────────── */
function filterProducts(cat, btn) {
  // Remove active from all tab buttons
  document.querySelectorAll('.tab-btn').forEach(b => b.classList.remove('active'));
  btn.classList.add('active');

  // Show/hide product cards
  document.querySelectorAll('.product-card').forEach(card => {
    if (cat === 'all' || card.dataset.cat === cat) {
      card.style.display = 'block';
    } else {
      card.style.display = 'none';
    }
  });
}

/* ── Contact Form Submit ─────────────────────────────────── */
function handleSubmit(btn) {
  // Basic validation
  const form    = btn.closest('.contact-form');
  const name    = form.querySelector('input[type="text"]');
  const email   = form.querySelector('input[type="email"]');

  if (!name.value.trim() || !email.value.trim()) {
    alert('Please fill in your name and email before submitting.');
    return;
  }

  // Success state
  btn.textContent = '✓ Sent! We\'ll be in touch within 24 hours.';
  btn.style.background = '#1A7A4A';
  btn.disabled = true;

  // NOTE: To actually send emails, connect this to a service like
  // Formspree (formspree.io) or EmailJS. Replace the above with
  // a fetch() call to your form endpoint.
}

/* ── Scroll Reveal ───────────────────────────────────────── */
const revealObserver = new IntersectionObserver(
  (entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('visible');
        // Stop observing once visible — no need to re-trigger
        revealObserver.unobserve(entry.target);
      }
    });
  },
  { threshold: 0.1 }
);

document.querySelectorAll('.reveal').forEach(el => revealObserver.observe(el));

/* ── Nav Shadow on Scroll ────────────────────────────────── */
const navEl = document.querySelector('nav');

window.addEventListener('scroll', () => {
  if (window.scrollY > 20) {
    navEl.style.boxShadow = '0 1px 20px rgba(0,0,0,0.08)';
  } else {
    navEl.style.boxShadow = 'none';
  }
});

/* ── Smooth scroll for nav links (fallback for older browsers) */
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', function (e) {
    const target = document.querySelector(this.getAttribute('href'));
    if (target) {
      e.preventDefault();
      target.scrollIntoView({ behavior: 'smooth' });
    }
  });
});

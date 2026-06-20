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
document.addEventListener('DOMContentLoaded', function () {
  var enquiryForm = document.getElementById('enquiry-form');
  if (enquiryForm) {
    enquiryForm.addEventListener('submit', function (e) {
      e.preventDefault();
      var btn = this.querySelector('.form-submit');
      var successMsg = this.querySelector('.form-success');
      var errorMsg = this.querySelector('.form-error');
      btn.textContent = 'Sending...';
      btn.disabled = true;
      successMsg.style.display = 'none';
      errorMsg.style.display = 'none';

      var formData = new FormData(this);
      fetch('https://formsubmit.co/ajax/info@apexplastochem.com', {
        method: 'POST',
        headers: { 'Accept': 'application/json' },
        body: formData
      })
        .then(function (r) { return r.json(); })
        .then(function (data) {
          if (data.success) {
            successMsg.style.display = 'block';
            btn.textContent = '✓ Sent!';
            btn.style.background = '#1A7A4A';
            enquiryForm.reset();
          } else {
            throw new Error();
          }
        })
        .catch(function () {
          errorMsg.style.display = 'block';
          btn.textContent = 'Send Enquiry →';
          btn.disabled = false;
        });
    });
  }
});

/* ── Client Logo Marquee ────────────────────────────────── */
document.querySelectorAll('.clients-track').forEach(track => {
  const items = [...track.children];
  items.forEach(item => track.appendChild(item.cloneNode(true)));
});

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

/* ============================================================
   animations.js — GSAP ScrollTrigger animations (Apple-style)
   ============================================================ */

// Lenis smooth scroll
const lenis = new Lenis({ duration: 1.2, easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)) });
function raf(time) { lenis.raf(time); requestAnimationFrame(raf); }
requestAnimationFrame(raf);

gsap.registerPlugin(ScrollTrigger);

// Sync Lenis with GSAP ScrollTrigger
lenis.on('scroll', ScrollTrigger.update);
gsap.ticker.add((time) => lenis.raf(time * 1000));
gsap.ticker.lagSmoothing(0);

/* ── Hero Entrance ──────────────────────────────────────── */
const heroTl = gsap.timeline({ defaults: { ease: 'power3.out' } });

heroTl
  .from('.hero-badge', { y: 30, opacity: 0, duration: 0.8 })
  .from('.hero h1', { y: 60, opacity: 0, duration: 1, }, '-=0.5')
  .from('.hero-desc', { y: 40, opacity: 0, duration: 0.8 }, '-=0.6')
  .from('.hero-actions', { y: 30, opacity: 0, duration: 0.7 }, '-=0.5')
  .from('.hero-certs .cert-badge', { y: 20, opacity: 0, stagger: 0.1, duration: 0.5 }, '-=0.4')
  .from('.hero-grid', {
    x: 100, opacity: 0, rotationY: 15, duration: 1.2,
    transformPerspective: 800, transformOrigin: 'left center'
  }, '-=1.2')
  .from('.hero-float', { scale: 0, opacity: 0, duration: 0.6, ease: 'back.out(2)' }, '-=0.5');

// Hero parallax on scroll
gsap.to('.hero-grid', {
  y: -80, rotationY: -5,
  scrollTrigger: { trigger: '.hero', start: 'top top', end: 'bottom top', scrub: 1 }
});
gsap.to('.hero > div:first-child', {
  y: -40,
  scrollTrigger: { trigger: '.hero', start: 'top top', end: 'bottom top', scrub: 1 }
});

/* ── Stats Count Up ─────────────────────────────────────── */
document.querySelectorAll('.stat-num').forEach(el => {
  const text = el.textContent;
  const num = parseInt(text);
  if (isNaN(num)) return;
  const suffix = text.replace(String(num), '');

  const obj = { val: 0 };
  gsap.to(obj, {
    val: num, duration: 2, ease: 'power2.out',
    scrollTrigger: { trigger: el, start: 'top 85%', toggleActions: 'play none none none' },
    onUpdate: () => { el.innerHTML = Math.round(obj.val) + suffix; }
  });
});

/* ── Section Headers ────────────────────────────────────── */
gsap.utils.toArray('.section-label').forEach(el => {
  gsap.from(el, {
    x: -40, opacity: 0, duration: 0.8,
    scrollTrigger: { trigger: el, start: 'top 85%' }
  });
});

gsap.utils.toArray('.section-title').forEach(el => {
  gsap.from(el, {
    y: 50, opacity: 0, duration: 1,
    scrollTrigger: { trigger: el, start: 'top 85%' }
  });
});

gsap.utils.toArray('.section-sub').forEach(el => {
  gsap.from(el, {
    y: 30, opacity: 0, duration: 0.8,
    scrollTrigger: { trigger: el, start: 'top 85%' }
  });
});

/* ── Why Us Cards — 3D Tilt Stagger ─────────────────────── */
gsap.from('.why-card', {
  y: 80, opacity: 0, rotationX: 15, scale: 0.9,
  duration: 0.8, stagger: 0.12,
  transformPerspective: 1000, transformOrigin: 'bottom center',
  ease: 'power3.out',
  scrollTrigger: { trigger: '.why-grid', start: 'top 80%' }
});

// 3D tilt on hover for why-cards
document.querySelectorAll('.why-card').forEach(card => {
  card.addEventListener('mousemove', (e) => {
    const rect = card.getBoundingClientRect();
    const x = (e.clientX - rect.left) / rect.width - 0.5;
    const y = (e.clientY - rect.top) / rect.height - 0.5;
    gsap.to(card, {
      rotationY: x * 12, rotationX: -y * 12,
      transformPerspective: 600, duration: 0.4, ease: 'power2.out'
    });
  });
  card.addEventListener('mouseleave', () => {
    gsap.to(card, { rotationY: 0, rotationX: 0, duration: 0.6, ease: 'elastic.out(1, 0.4)' });
  });
});

/* ── Product Cards — Stagger Up with Rotation ───────────── */
gsap.from('.product-card', {
  y: 100, opacity: 0, rotationX: 10, scale: 0.95,
  duration: 0.7, stagger: 0.1,
  transformPerspective: 800,
  ease: 'power3.out',
  scrollTrigger: { trigger: '.product-grid', start: 'top 80%' }
});

/* ── Custom Section — Pin Text, Parallax Images ─────────── */
if (window.innerWidth > 900) {
  gsap.from('.custom-steps .custom-step', {
    x: -60, opacity: 0, duration: 0.7, stagger: 0.15,
    scrollTrigger: { trigger: '.custom-steps', start: 'top 80%' }
  });

  gsap.from('.custom-img', {
    y: 60, opacity: 0, scale: 0.9, duration: 0.8, stagger: 0.2,
    scrollTrigger: { trigger: '.custom-visual', start: 'top 80%' }
  });

  gsap.to('.custom-img:nth-child(1)', {
    y: -30,
    scrollTrigger: { trigger: '.custom', start: 'top bottom', end: 'bottom top', scrub: 1.5 }
  });
  gsap.to('.custom-img:nth-child(2)', {
    y: -50,
    scrollTrigger: { trigger: '.custom', start: 'top bottom', end: 'bottom top', scrub: 1.5 }
  });
  gsap.to('.custom-img:nth-child(3)', {
    y: -20,
    scrollTrigger: { trigger: '.custom', start: 'top bottom', end: 'bottom top', scrub: 1.5 }
  });
}

/* ── Caps Section ───────────────────────────────────────── */
gsap.from('.caps-spec-box', {
  x: 80, opacity: 0, rotationY: -10, duration: 1,
  transformPerspective: 800,
  scrollTrigger: { trigger: '.caps-intro', start: 'top 75%' }
});

gsap.from('.cap-card', {
  y: 50, opacity: 0, scale: 0.85, duration: 0.5, stagger: 0.06,
  ease: 'back.out(1.5)',
  scrollTrigger: { trigger: '.caps-grid', start: 'top 85%' }
});

// 3D tilt on cap cards
document.querySelectorAll('.cap-card').forEach(card => {
  card.addEventListener('mousemove', (e) => {
    const rect = card.getBoundingClientRect();
    const x = (e.clientX - rect.left) / rect.width - 0.5;
    const y = (e.clientY - rect.top) / rect.height - 0.5;
    gsap.to(card, {
      rotationY: x * 20, rotationX: -y * 20,
      transformPerspective: 400, duration: 0.3, ease: 'power2.out'
    });
  });
  card.addEventListener('mouseleave', () => {
    gsap.to(card, { rotationY: 0, rotationX: 0, duration: 0.5, ease: 'elastic.out(1, 0.5)' });
  });
});

/* ── Clients Section ────────────────────────────────────── */
gsap.from('.clients-marquee', {
  opacity: 0, y: 40, duration: 1,
  scrollTrigger: { trigger: '.clients', start: 'top 80%' }
});

/* ── Contact Section ────────────────────────────────────── */
gsap.from('.contact-info .contact-row', {
  x: -40, opacity: 0, duration: 0.6, stagger: 0.12,
  scrollTrigger: { trigger: '.contact-info', start: 'top 80%' }
});

gsap.from('.contact-form', {
  y: 60, opacity: 0, rotationX: 8, duration: 1,
  transformPerspective: 800,
  scrollTrigger: { trigger: '.contact-form', start: 'top 85%' }
});

/* ── Nav hide/show on scroll direction ──────────────────── */
let lastScroll = 0;
const nav = document.querySelector('nav');
ScrollTrigger.create({
  start: 'top -80',
  onUpdate: (self) => {
    const scrollY = self.scroll();
    if (scrollY > lastScroll && scrollY > 200) {
      gsap.to(nav, { y: -100, duration: 0.3 });
    } else {
      gsap.to(nav, { y: 0, duration: 0.3 });
    }
    lastScroll = scrollY;
  }
});

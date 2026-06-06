# Apex Plastochem — Website

Official website for **Apex (Guj.) Plastochem Pvt. Ltd.**  
Live at: [apexplastochem.com](https://apexplastochem.com)

---

## Folder Structure

```
apexplastochem/
│
├── index.html          ← Main HTML — all sections live here
│
├── css/
│   ├── base.css        ← Design tokens (colours, fonts), resets, buttons, animations
│   ├── nav.css         ← Top navigation bar
│   ├── hero.css        ← Hero section, ticker bar, stats bar
│   ├── sections.css    ← Why Us, Custom Manufacturing, Caps & Closures, Clients
│   ├── products.css    ← Products section + filter tabs
│   ├── contact.css     ← Contact section + enquiry form
│   └── footer.css      ← Site footer
│
├── js/
│   └── main.js         ← All JavaScript (filter, form, animations, nav)
│
├── images/             ← Put all your product photos here
│   ├── hero-bottles.jpg
│   ├── hero-caps.jpg
│   ├── hero-jars.jpg
│   ├── product-pharma-bottles.jpg
│   ├── product-open-mouth-jars.jpg
│   ├── product-dairy-jars.jpg
│   ├── product-jerrycans.jpg
│   ├── product-lotion-bottles.jpg
│   ├── product-large-containers.jpg
│   ├── custom-range.jpg
│   ├── custom-protein-jars.jpg
│   └── custom-metalised-caps.jpg
│
└── README.md           ← This file
```

---

## How to Edit Each Part

| What you want to change | File to edit |
|---|---|
| Colours / fonts / brand | `css/base.css` — edit `:root` variables at the top |
| Navigation links or logo | `index.html` — find `<!-- NAVIGATION -->` |
| Hero headline or description | `index.html` — find `<!-- HERO -->` |
| Product cards (name, desc, tags) | `index.html` — find `<!-- PRODUCTS -->` |
| Why Us cards | `index.html` — find `<!-- WHY US -->` |
| Custom manufacturing steps | `index.html` — find `<!-- CUSTOM MANUFACTURING -->` |
| Cap specs and sizes | `index.html` — find `<!-- CAPS & CLOSURES -->` |
| Client names | `index.html` — find `<!-- CLIENTS -->` |
| Contact info (address, phone) | `index.html` — find `<!-- CONTACT -->` |
| Form behaviour | `js/main.js` — edit `handleSubmit()` function |
| Product filter tabs | `js/main.js` — edit `filterProducts()` function |
| Product images | Replace files in `/images/` folder, keep same filenames |

---

## Adding Your Product Photos

1. Export photos from your phone — **JPG format, max 1MB each**
2. Rename them to match the filenames listed in `images/` above
3. Drop them into the `images/` folder
4. The website will automatically show them — no code changes needed

**Recommended photo sizes:**
- Hero images: 600×900px (portrait)
- Product cards: 800×600px (landscape)
- Custom section images: 600×600px (square)

---

## How to Deploy / Update the Live Site

1. Make your edits in VS Code
2. Open Terminal in VS Code (`Ctrl+\`` or `Cmd+\``)
3. Run these commands:

```bash
git add .
git commit -m "describe what you changed"
git push
```

4. GitHub automatically updates the live site within ~60 seconds.

---

## Connecting a Form to Actually Send Emails

Right now the form shows a success message but doesn't send emails.
To make it real, sign up at [formspree.io](https://formspree.io) (free plan works fine).

In `js/main.js`, replace the `handleSubmit` function body with:

```js
const formData = new FormData(btn.closest('form'));
fetch('https://formspree.io/f/YOUR_FORM_ID', {
  method: 'POST',
  body: formData,
  headers: { 'Accept': 'application/json' }
}).then(() => {
  btn.textContent = '✓ Sent! We\'ll reply within 24 hours.';
  btn.style.background = '#1A7A4A';
  btn.disabled = true;
});
```

---

## Built With

- Plain HTML, CSS, JavaScript — no frameworks needed
- [Outfit](https://fonts.google.com/specimen/Outfit) + [DM Mono](https://fonts.google.com/specimen/DM+Mono) fonts via Google Fonts
- Hosted on GitHub Pages

---

*Website by Apex International BD Team · Canada Operations*

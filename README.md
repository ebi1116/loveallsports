# LOVE ALL SPORTS - Multi-sport showcase website

Plain HTML5 + CSS3 + Vanilla JavaScript. No frameworks, no build step.

## Run it
Open `index.html` in a browser (double-click works), or serve the folder:
`python3 -m http.server 8000` then visit http://localhost:8000
Fonts (Google Fonts) and icons (Font Awesome) load from CDNs, so you need an internet connection for them.

## Pages
index.html (home) | pages/products.html (accessories catalogue) | pages/categories.html | pages/about.html | pages/contact.html

## Things to change before going live
1. `js/products.js` - top of the file: `SITE_CONFIG` (WhatsApp number, email and address).
2. Contact page / footer text: address, hours, social links (currently point to each network's home page).
3. Google Maps: paste your embed iframe into `pages/contact.html` (look for the `#map` box).
4. Contact form: it has no server. By default it opens the visitor's email app with the message pre-filled.
   To send for real, set `FORM_ENDPOINT` in `js/contact.js` to a form service URL.
5. Accessories photos: included images are vector illustrations (SVG). Replace them with real photos in
   `assets/images/products/<sport>/` and update the `image` path in `js/products.js`.
   Same for `assets/images/categories/` and the hero: change the `url(...)` in `css/pages.css` (`.hero-bg`).

## Managing the catalogue
Everything comes from the `PRODUCTS` array in `js/products.js`. Add an object, save, refresh. Home page,
accessories catalogue, search and sport filters update automatically.

## Folder structure
```
love-all-sports/
  index.html
  pages/      products, categories, about, contact
  css/        style.css (base + components), pages.css (sections/pages), responsive.css (breakpoints)
  js/         main.js (UI), products.js (catalogue), contact.js
  assets/     images/{products,banners,categories,logo}, icons/
```

/* =========================================================
   LOVE ALL SPORTS - product data (edit this file to manage the catalogue)

   HOW TO ADD A PRODUCT
   1. Put a photo in assets/images/products/<sport>/ (square, about 800x800, JPG/WebP/SVG).
   2. Copy any object in PRODUCTS below, give it a new unique "id", and change:
      name, category (one of the CATEGORIES keys), image (path inside assets/),
      description and popularity metadata.
   3. isNew: true  -> shows in "Recently Added"      featured: true -> shows in "Top Picks"
      popularity (0-100) drives "Popular Picks" and the Popular sort.
      added (higher = newer) drives the Newest sort.
   ========================================================= */
const SITE_CONFIG = {
  brand: "LOVE ALL SPORTS",
  tagline: "ONE PASSION. EVERY SPORT.",
  whatsapp: "919940953335",          // country code + number, digits only
  email: "loveall.sports03@gmail.com",
  address: "Shop 1, No. 2/4, Palkarar Thottam, Vilankuruchi Road, Cheran Managar, Coimbatore - 641035",
};

const CATEGORIES = [
  {
    "key": "badminton",
    "name": "Badminton Items",
    "short": "Badminton Items",
    "icon": "fa-table-tennis-paddle-ball",
    "blurb": "Rackets, shuttles and essentials for fast rallies.",
    "image": "images/products/badminton/yonex-arcsaber-racket.png"
  },
  {
    "key": "sports-wear",
    "name": "Sports Wear",
    "short": "Sports Wear",
    "icon": "fa-shirt",
    "blurb": "Jerseys, track pants and shorts for training and match days.",
    "image": "images/products/sports-wear/manchester-united-black-jersey.png"
  },
  {
    "key": "shoes",
    "name": "Indoor & Outdoor Shoes",
    "short": "Indoor & Outdoor Shoes",
    "icon": "fa-shoe-prints",
    "blurb": "Shoes for indoor courts and outdoor play.",
    "image": "images/products/shoes/victor-badminton-shoe-white-blue-cutout.png"
  },
  {
    "key": "team-jerseys",
    "name": "Team Sublimation Jerseys",
    "short": "Team Sublimation Jerseys",
    "icon": "fa-shirt",
    "blurb": "Custom jersey service: add team names, player names, numbers and your own wording.",
    "image": "images/products/sports-wear/custom-team-sublimation-jersey.png"
  },
  {
    "key": "football-volleyball",
    "name": "Football & Volleyball",
    "short": "Football & Volleyball",
    "icon": "fa-futbol",
    "blurb": "Football and volleyball gear for the pitch, court and beach.",
    "image": "images/products/volleyball/nivia-air-strike-volleyball.png"
  },
  {
    "key": "cricket",
    "name": "Cricket",
    "short": "Cricket",
    "icon": "fa-baseball-bat-ball",
    "blurb": "Bats, balls, pads and everything for the crease.",
    "image": "images/products/cricket/stanford-cricket-ball.png"
  },
  {
    "key": "accessories",
    "name": "General Accessories",
    "short": "General Accessories",
    "icon": "fa-box-open",
    "blurb": "Bottles, bags and the small things you always need.",
    "image": "images/products/accessories/badminton-accessories-display.jpg"
  },
];

const PRODUCTS = [
  {
    "id": "defender-football-white",
    "name": "Defender Football - White & Orange",
    "category": "football-volleyball",
    "image": "images/products/football/defender-football.jpg",
    "description": "Defender football with a textured white, black and orange design.",
    "popularity": 92,
    "isNew": true,
    "featured": true,
    "added": 1
  },
  {
    "id": "defender-football-red",
    "name": "Defender Football - White & Red",
    "category": "football-volleyball",
    "image": "images/products/football/defender-football-detail.jpg",
    "description": "A second Defender football design with a white and red patterned finish.",
    "popularity": 84,
    "isNew": true,
    "featured": true,
    "added": 2
  },
  {
    "id": "stanford-cricket-ball",
    "name": "Stanford Cricket Ball - 5½ oz",
    "category": "cricket",
    "image": "images/products/cricket/stanford-cricket-ball.png",
    "description": "Red Stanford cricket ball marked 5½ oz, made in India.",
    "popularity": 88,
    "isNew": true,
    "featured": true,
    "added": 3
  },
  {
    "id": "white-feather-shuttlecock",
    "name": "White Feather Badminton Shuttlecock",
    "category": "badminton",
    "image": "images/products/badminton/shuttlecock-feather-white.png",
    "description": "White feather shuttlecock with a durable cork base.",
    "popularity": 85,
    "isNew": true,
    "featured": true,
    "added": 9
  },
  {
    "id": "yonex-bg65-string",
    "name": "Yonex BG65 Badminton String - 0.70 mm",
    "category": "badminton",
    "image": "images/products/badminton/yonex-bg65-badminton-string.png",
    "description": "Yonex BG65 badminton string reel, 0.70 mm and 10 m.",
    "popularity": 89,
    "isNew": true,
    "featured": true,
    "added": 10
  },
  {
    "id": "apacs-master-series-racket",
    "name": "Apacs Master Series Badminton Racket",
    "category": "badminton",
    "image": "images/products/badminton/apacs-master-series-racket.png",
    "description": "Apacs Master Series badminton racket with a red frame.",
    "popularity": 87,
    "isNew": true,
    "featured": true,
    "added": 11
  },
  {
    "id": "hundred-lightweight-racket",
    "name": "Hundred Lightweight Badminton Racket",
    "category": "badminton",
    "image": "images/products/badminton/hundred-lightweight-racket.png",
    "description": "Lightweight Hundred badminton racket in pink and aqua.",
    "popularity": 83,
    "isNew": true,
    "featured": false,
    "added": 12
  },
  {
    "id": "yonex-arcsaber-racket",
    "name": "Yonex Arcsaber Badminton Racket",
    "category": "badminton",
    "image": "images/products/badminton/yonex-arcsaber-racket.png",
    "description": "Yonex Arcsaber racket with a black, blue and orange frame.",
    "popularity": 91,
    "isNew": true,
    "featured": true,
    "added": 13
  },
  {
    "id": "victor-high-tension-racket",
    "name": "Victor High Tension Badminton Racket",
    "category": "badminton",
    "image": "images/products/badminton/victor-high-tension-racket.png",
    "description": "Victor badminton racket designed for high string tension.",
    "popularity": 90,
    "isNew": true,
    "featured": true,
    "added": 14
  },
  {
    "id": "victor-badminton-shoe-white-blue",
    "name": "Victor Badminton Shoe - White & Blue",
    "category": "shoes",
    "image": "images/products/shoes/victor-badminton-shoe-white-blue-cutout.png",
    "description": "Victor badminton court shoe in white and navy, with a grippy indoor outsole.",
    "popularity": 98,
    "isNew": true,
    "featured": true,
    "added": 4
  },
  {
    "id": "victor-badminton-shoe-blue-cutout",
    "name": "Victor Badminton Shoe - Blue & Aqua (Cutout)",
    "category": "shoes",
    "image": "images/products/shoes/victor-badminton-shoe-blue-cutout.png",
    "description": "Blue and aqua Victor badminton court shoe in a clean product view.",
    "popularity": 86,
    "isNew": true,
    "featured": false,
    "added": 7
  },
  {
    "id": "victor-badminton-shoe-black",
    "name": "Victor Badminton Shoe - Black & Purple",
    "category": "shoes",
    "image": "images/products/shoes/victor-badminton-shoe-black.png",
    "description": "Black Victor badminton shoe with bright aqua and purple accents.",
    "popularity": 80,
    "isNew": true,
    "featured": false,
    "added": 8
  },
  {
    "id": "team-sublimation-jersey-service",
    "name": "Custom Team Sublimation Jersey Service",
    "category": "team-jerseys",
    "image": "images/products/sports-wear/custom-team-sublimation-jersey.png",
    "description": "Personalize team jerseys with team names, player names, numbers and custom wording.",
    "popularity": 76,
    "isNew": true,
    "featured": false,
    "added": 15
  },
  {
    "id": "manchester-united-black-jersey",
    "name": "Manchester United Black Football Jersey",
    "category": "sports-wear",
    "image": "images/products/sports-wear/manchester-united-black-jersey.png",
    "description": "Black Manchester United football jersey with red detailing.",
    "popularity": 86,
    "isNew": true,
    "featured": false,
    "added": 16
  },
  {
    "id": "black-red-track-pants",
    "name": "Black Track Pants with Red Panels",
    "category": "sports-wear",
    "image": "images/products/sports-wear/black-red-track-pants.png",
    "description": "Black training track pants with red side panels.",
    "popularity": 78,
    "isNew": true,
    "featured": false,
    "added": 17
  },
  {
    "id": "navy-cyan-sports-shorts",
    "name": "Navy Sports Shorts with Cyan Trim",
    "category": "sports-wear",
    "image": "images/products/sports-wear/navy-cyan-sports-shorts.png",
    "description": "Navy sports shorts with white panels and cyan accents.",
    "popularity": 79,
    "isNew": true,
    "featured": false,
    "added": 18
  },
  {
    "id": "manchester-united-red-jersey",
    "name": "Manchester United Red Football Jersey",
    "category": "sports-wear",
    "image": "images/products/sports-wear/manchester-united-red-jersey.png",
    "description": "Red Manchester United football jersey with black accents.",
    "popularity": 88,
    "isNew": true,
    "featured": false,
    "added": 19
  },
  {
    "id": "barcelona-black-jersey",
    "name": "Barcelona Black Football Jersey",
    "category": "sports-wear",
    "image": "images/products/sports-wear/barcelona-black-jersey.png",
    "description": "Black Barcelona football jersey with purple detailing.",
    "popularity": 87,
    "isNew": true,
    "featured": false,
    "added": 20
  },
  {
    "id": "barcelona-home-jersey",
    "name": "Barcelona Blue and Red Football Jersey",
    "category": "sports-wear",
    "image": "images/products/sports-wear/barcelona-home-jersey.png",
    "description": "Blue and red Barcelona football jersey with navy trim.",
    "popularity": 90,
    "isNew": true,
    "featured": false,
    "added": 21
  },
  {
    "id": "nivia-air-strike-volleyball",
    "name": "Nivia Air Strike Volleyball",
    "category": "football-volleyball",
    "image": "images/products/volleyball/nivia-air-strike-volleyball.png",
    "description": "Nivia Air Strike volleyball with a yellow, blue and white panel design.",
    "popularity": 84,
    "isNew": true,
    "featured": true,
    "added": 22
  },
  {
    "id": "badminton-accessories-display",
    "name": "Badminton Grips & Shuttlecocks",
    "category": "accessories",
    "image": "images/products/accessories/badminton-accessories-display.jpg",
    "description": "A selection of badminton grips, shuttlecocks and racket accessories.",
    "popularity": 80,
    "isNew": true,
    "featured": false,
    "added": 23
  },
  {
    "id": "yonex-bg65-string-accessory",
    "name": "Yonex BG65 Badminton String Reel",
    "category": "accessories",
    "image": "images/products/accessories/yonex-bg65-string-accessory.png",
    "description": "Yonex BG65 badminton string, 0.70 mm and 10 m.",
    "popularity": 84,
    "isNew": true,
    "featured": false,
    "added": 24
  }
];

/* =========================================================
   LOGIC - rendering, filtering, product modal.
   You normally don't need to edit below this line.
   ========================================================= */
const ASSET_ROOT = document.body.dataset.root || '';
const PAGES = ASSET_ROOT + 'pages/';

const esc = (s) => String(s).replace(/[&<>"']/g, (c) => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;' }[c]));
const getCategory = (key) => CATEGORIES.find((c) => c.key === key);
const catShort = (key) => (getCategory(key) || {}).short || key;
const imgSrc = (p) => ASSET_ROOT + 'assets/' + p.image;

function productCard(p) {
  return `<article class="product-card reveal" data-id="${p.id}">
  <div class="pc-media">
    ${p.isNew ? '<span class="badge new">New</span>' : ''}
    <img src="${imgSrc(p)}" alt="${esc(p.name)} - ${esc(catShort(p.category))} product" loading="lazy" width="400" height="400">
  </div>
  <div class="pc-body">
    <span class="pc-cat">${esc(catShort(p.category))}</span>
    <h3 class="pc-name">${esc(p.name)}</h3>
    <p>${esc(p.description)}</p>
  </div>
</article>`;
}

function renderGrid(el, list, emptyHTML) {
  if (!el) return;
  el.innerHTML = list.length ? list.map(productCard).join('') : (emptyHTML || '');
  if (window.observeReveals) window.observeReveals(el);
}

/* ---------- Category cards (home + categories page) ---------- */
function categoryCard(c, full) {
  const count = PRODUCTS.filter((p) => p.category === c.key).length;
  return `<a class="cat-card reveal" href="${PAGES}products.html?cat=${c.key}" aria-label="Explore ${esc(c.name)}">
    <img src="${ASSET_ROOT}assets/${c.image}" alt="${esc(c.name)}" loading="lazy" width="600" height="750">
    <span class="cat-count">${count} product${count === 1 ? '' : 's'}</span>
    <div class="cat-info"><h3>${esc(full ? c.name : c.short)}</h3><p>${esc(c.blurb)}</p>
    <span class="cat-btn">Explore this sport <i class="fa-solid fa-arrow-right"></i></span></div></a>`;
}

/* ---------- Home page ---------- */
function initHome() {
  const catGrid = document.getElementById('catGrid');
  if (catGrid) { catGrid.innerHTML = CATEGORIES.map((c) => categoryCard(c, false)).join(''); window.observeReveals && window.observeReveals(catGrid); }

  const featured = document.getElementById('featuredGrid');
  if (featured) {
    const tabs = [
      { key: 'top', label: 'Top Picks', test: (p) => p.featured },
      { key: 'badminton', label: 'Badminton', test: (p) => p.category === 'badminton' },
      { key: 'sports-wear', label: 'Sports Wear', test: (p) => p.category === 'sports-wear' },
      { key: 'shoes', label: 'Shoes', test: (p) => p.category === 'shoes' },
      { key: 'team-jerseys', label: 'Team Sublimation Jerseys', test: (p) => p.category === 'team-jerseys' },
      { key: 'football-volleyball', label: 'Football & Volleyball', test: (p) => p.category === 'football-volleyball' },
      { key: 'cricket', label: 'Cricket', test: (p) => p.category === 'cricket' },
      { key: 'accessories', label: 'General Accessories', test: (p) => p.category === 'accessories' },
    ];
    const tabsEl = document.getElementById('featuredTabs');
    tabsEl.innerHTML = tabs.map((t, i) => `<button class="tab${i === 0 ? ' active' : ''}" role="tab" aria-selected="${i === 0}" data-tab="${t.key}">${t.label}</button>`).join('');
    const show = (key) => {
      const t = tabs.find((x) => x.key === key);
      renderGrid(featured, PRODUCTS.filter(t.test));
    };
    tabsEl.addEventListener('click', (e) => {
      const b = e.target.closest('.tab');
      if (!b) return;
      tabsEl.querySelectorAll('.tab').forEach((x) => { x.classList.toggle('active', x === b); x.setAttribute('aria-selected', x === b); });
      show(b.dataset.tab);
    });
    show('top');
  }
  renderGrid(document.getElementById('newGrid'), PRODUCTS.filter((p) => p.isNew).sort((a, b) => b.added - a.added).slice(0, 4));
  renderGrid(document.getElementById('bestGrid'), [...PRODUCTS].sort((a, b) => b.popularity - a.popularity).slice(0, 4));
}

/* ---------- Categories page ---------- */
function initCategoriesPage() {
  const el = document.getElementById('catPageGrid');
  if (!el) return;
  el.innerHTML = CATEGORIES.map((c) => categoryCard(c, true)).join('');
  window.observeReveals && window.observeReveals(el);
}

/* ---------- Products page ---------- */
function initProductsPage() {
  const grid = document.getElementById('productGrid');
  if (!grid) return;
  const els = {
    q: document.getElementById('searchInput'),
    cat: document.getElementById('catSelect'),
    sort: document.getElementById('sortSelect'),
    chips: document.getElementById('catChips'),
    count: document.getElementById('resultCount'),
    clear: document.getElementById('clearFilters'),
  };
  const state = { q: '', cat: 'all', sort: 'featured' };

  els.cat.innerHTML = '<option value="all">All sports</option>' + CATEGORIES.map((c) => `<option value="${c.key}">${esc(c.short)}</option>`).join('');
  els.chips.innerHTML = [{ key: 'all', short: 'All' }, ...CATEGORIES].map((c) => `<button class="chip" data-cat="${c.key}">${esc(c.short)}</button>`).join('');

  const params = new URLSearchParams(location.search);
  if (params.get('cat') && (params.get('cat') === 'all' || getCategory(params.get('cat')))) state.cat = params.get('cat');
  if (params.get('q')) state.q = params.get('q');
  if (params.get('sort')) state.sort = params.get('sort');

  const sorters = {
    featured: (a, b) => (b.featured - a.featured) || (b.popularity - a.popularity),
    newest: (a, b) => b.added - a.added,
    popular: (a, b) => b.popularity - a.popularity,
  };

  function apply() {
    const q = state.q.trim().toLowerCase();
    const list = PRODUCTS.filter((p) => {
      if (state.cat !== 'all' && p.category !== state.cat) return false;
      if (q && !(`${p.name} ${catShort(p.category)}`.toLowerCase().includes(q))) return false;
      return true;
    }).sort(sorters[state.sort] || sorters.featured);

    renderGrid(grid, list, `<div class="empty-state no-results"><i class="fa-solid fa-magnifying-glass"></i><h3>No products match your search</h3><p>Try a different word, or clear the filters to see everything.</p><button class="btn btn-dark" id="emptyClear">Clear filters</button></div>`);
    els.count.textContent = `${list.length} item${list.length === 1 ? '' : 's'}`;
    els.chips.querySelectorAll('.chip').forEach((c) => c.classList.toggle('active', c.dataset.cat === state.cat));
    els.cat.value = state.cat; els.sort.value = state.sort; els.q.value = state.q;
    const dirty = state.q || state.cat !== 'all' || state.sort !== 'featured';
    els.clear.hidden = !dirty;
    try {
      const u = new URLSearchParams();
      if (state.cat !== 'all') u.set('cat', state.cat);
      if (state.q) u.set('q', state.q);
      history.replaceState(null, '', location.pathname + (u.toString() ? '?' + u : ''));
    } catch (err) { /* file:// may block this - safe to ignore */ }
  }

  let t;
  els.q.addEventListener('input', () => { clearTimeout(t); t = setTimeout(() => { state.q = els.q.value; apply(); }, 150); });
  els.cat.addEventListener('change', () => { state.cat = els.cat.value; apply(); });
  els.sort.addEventListener('change', () => { state.sort = els.sort.value; apply(); });
  els.chips.addEventListener('click', (e) => { const c = e.target.closest('.chip'); if (c) { state.cat = c.dataset.cat; apply(); } });
  const reset = () => { Object.assign(state, { q: '', cat: 'all', sort: 'featured' }); apply(); };
  els.clear.addEventListener('click', reset);
  grid.addEventListener('click', (e) => { if (e.target.closest('#emptyClear')) reset(); });
  apply();
}

document.addEventListener('DOMContentLoaded', () => { initHome(); initCategoriesPage(); initProductsPage(); });


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
    "key": "cricket",
    "name": "Cricket Accessories",
    "short": "Cricket",
    "icon": "fa-baseball-bat-ball",
    "blurb": "Bats, balls, pads and everything for the crease.",
    "image": "images/categories/cricket.svg"
  },
  {
    "key": "football",
    "name": "Football Accessories",
    "short": "Football",
    "icon": "fa-futbol",
    "blurb": "Match balls, boots and protection for the pitch.",
    "image": "images/categories/football.svg"
  },
  {
    "key": "volleyball",
    "name": "Volleyball Accessories",
    "short": "Volleyball",
    "icon": "fa-volleyball",
    "blurb": "Balls, nets and pads for indoor and beach courts.",
    "image": "images/categories/volleyball.svg"
  },
  {
    "key": "badminton",
    "name": "Badminton Accessories",
    "short": "Badminton",
    "icon": "fa-table-tennis-paddle-ball",
    "blurb": "Rackets, shuttles and covers for fast rallies.",
    "image": "images/categories/badminton.svg"
  },
  {
    "key": "basketball",
    "name": "Basketball Accessories",
    "short": "Basketball",
    "icon": "fa-basketball",
    "blurb": "Balls, nets and court shoes for the hoops.",
    "image": "images/categories/basketball.svg"
  },
  {
    "key": "tennis",
    "name": "Tennis Accessories",
    "short": "Tennis",
    "icon": "fa-baseball",
    "blurb": "Rackets built for control and power.",
    "image": "images/categories/tennis.svg"
  },
  {
    "key": "fitness",
    "name": "Fitness & Gym",
    "short": "Fitness & Gym",
    "icon": "fa-dumbbell",
    "blurb": "Ropes, gloves and gear for training days.",
    "image": "images/categories/fitness.svg"
  },
  {
    "key": "accessories",
    "name": "Sports Accessories",
    "short": "Accessories",
    "icon": "fa-box-open",
    "blurb": "Bottles, bags and the small things you always need.",
    "image": "images/categories/accessories.svg"
  },
  {
    "key": "sports-wear",
    "name": "Sports Wear",
    "short": "Sports Wear",
    "icon": "fa-shirt",
    "blurb": "Comfortable training clothes and sportswear for every day.",
    "image": "images/categories/sports-wear.svg"
  }
];

const PRODUCTS = [
  {
    "id": "cricket-bat",
    "name": "Kashmir Willow Cricket Bat - Pro Grade",
    "category": "cricket",
    "image": "images/products/cricket/cricket-bat.svg",
    "description": "Full-size Kashmir willow bat with a thick edge profile and a punchy sweet spot. Pre-knocked and ready for the nets.",
    "popularity": 96,
    "isNew": false,
    "featured": true,
    "added": 1
  },
  {
    "id": "cricket-ball",
    "name": "Leather Cricket Ball - Match Grade (Red)",
    "category": "cricket",
    "image": "images/products/cricket/cricket-ball.svg",
    "description": "Four-piece hand-stitched leather ball with a proud seam that holds shape through long spells.",
    "popularity": 88,
    "isNew": false,
    "featured": false,
    "added": 2
  },
  {
    "id": "batting-gloves",
    "name": "Pro Batting Gloves",
    "category": "cricket",
    "image": "images/products/cricket/batting-gloves.svg",
    "description": "Segmented finger protection with a cushioned palm and a breathable back hand for long innings.",
    "popularity": 74,
    "isNew": true,
    "featured": false,
    "added": 3
  },
  {
    "id": "cricket-pads",
    "name": "Cricket Batting Pads - Lightweight",
    "category": "cricket",
    "image": "images/products/cricket/cricket-pads.svg",
    "description": "High-density foam pads wrapped in durable fabric. Light enough to run in, solid enough to take a yorker.",
    "popularity": 71,
    "isNew": false,
    "featured": false,
    "added": 4
  },
  {
    "id": "cricket-stumps",
    "name": "Wooden Cricket Stumps Set with Bails",
    "category": "cricket",
    "image": "images/products/cricket/cricket-stumps.svg",
    "description": "Set of three seasoned wooden stumps with two bails. Standard size for turf and matting wickets.",
    "popularity": 60,
    "isNew": false,
    "featured": false,
    "added": 5
  },
  {
    "id": "cricket-kit-bag",
    "name": "Cricket Kit Bag - Pro Duffle",
    "category": "cricket",
    "image": "images/products/cricket/cricket-kit-bag.svg",
    "description": "Roomy duffle that swallows a bat, pads, helmet and shoes, with a separate shoe pocket and wide zip opening.",
    "popularity": 68,
    "isNew": false,
    "featured": false,
    "added": 6
  },
  {
    "id": "football",
    "name": "Match Football - Size 5",
    "category": "football",
    "image": "images/products/football/football.svg",
    "description": "Machine-stitched match ball with a butyl bladder that holds air. Consistent bounce on grass and turf.",
    "popularity": 98,
    "isNew": false,
    "featured": true,
    "added": 7
  },
  {
    "id": "football-shoes",
    "name": "Football Boots - Speed Studs",
    "category": "football",
    "image": "images/products/football/football-shoes.svg",
    "description": "Lightweight boots with a moulded stud plate for quick turns and a snug, locked-in heel.",
    "popularity": 84,
    "isNew": true,
    "featured": true,
    "added": 8
  },
  {
    "id": "shin-guards",
    "name": "Shin Guards - Pro Shield",
    "category": "football",
    "image": "images/products/football/shin-guards.svg",
    "description": "Hard-shell guards with an EVA liner and two elastic straps. Slim enough to wear under socks all match.",
    "popularity": 65,
    "isNew": false,
    "featured": false,
    "added": 9
  },
  {
    "id": "goalkeeper-gloves",
    "name": "Goalkeeper Gloves - Grip Max",
    "category": "football",
    "image": "images/products/football/goalkeeper-gloves.svg",
    "description": "Latex palm for a confident catch in wet or dry conditions, with finger-spine support for hard shots.",
    "popularity": 62,
    "isNew": true,
    "featured": false,
    "added": 10
  },
  {
    "id": "volleyball",
    "name": "Volleyball - Soft Touch",
    "category": "volleyball",
    "image": "images/products/volleyball/volleyball.svg",
    "description": "Soft-touch composite cover for clean passing and a true flight on serves. Suits indoor and beach play.",
    "popularity": 80,
    "isNew": false,
    "featured": true,
    "added": 11
  },
  {
    "id": "volleyball-net",
    "name": "Volleyball Net - Match Set",
    "category": "volleyball",
    "image": "images/products/volleyball/volleyball-net.svg",
    "description": "Regulation-size net with tensioning cord, top tape and side bands, ready to hang between standard posts.",
    "popularity": 55,
    "isNew": false,
    "featured": false,
    "added": 12
  },
  {
    "id": "volleyball-knee-pads",
    "name": "Volleyball Knee Pads",
    "category": "volleyball",
    "image": "images/products/volleyball/volleyball-knee-pads.svg",
    "description": "Low-profile foam knee pads that stay put through dives and digs without restricting movement.",
    "popularity": 58,
    "isNew": true,
    "featured": false,
    "added": 13
  },
  {
    "id": "badminton-racket",
    "name": "Badminton Racket - Carbon Pro",
    "category": "badminton",
    "image": "images/products/badminton/badminton-racket.svg",
    "description": "Carbon-fibre shaft with an isometric head for a larger sweet spot. Balanced for fast net play and powerful smashes.",
    "popularity": 90,
    "isNew": false,
    "featured": true,
    "added": 14
  },
  {
    "id": "shuttlecocks",
    "name": "Feather Shuttlecocks - Tube of 12",
    "category": "badminton",
    "image": "images/products/badminton/shuttlecocks.svg",
    "description": "Goose-feather shuttles with a cork base. Stable flight and durable enough for long club sessions.",
    "popularity": 86,
    "isNew": false,
    "featured": false,
    "added": 15
  },
  {
    "id": "racket-cover",
    "name": "Badminton Racket Cover",
    "category": "badminton",
    "image": "images/products/badminton/racket-cover.svg",
    "description": "Padded full-length zip cover that keeps strings and frame safe in your bag.",
    "popularity": 50,
    "isNew": false,
    "featured": false,
    "added": 16
  },
  {
    "id": "basketball",
    "name": "Basketball - Indoor/Outdoor Size 7",
    "category": "basketball",
    "image": "images/products/basketball/basketball.svg",
    "description": "Deep-channel rubber ball with excellent grip on concrete and hardwood. Holds its bounce game after game.",
    "popularity": 92,
    "isNew": false,
    "featured": true,
    "added": 17
  },
  {
    "id": "basketball-net",
    "name": "Basketball Hoop Net - Heavy Duty",
    "category": "basketball",
    "image": "images/products/basketball/basketball-net.svg",
    "description": "Braided nylon net with 12 loops that handles weather and hard use on the court.",
    "popularity": 52,
    "isNew": false,
    "featured": false,
    "added": 18
  },
  {
    "id": "court-shoes",
    "name": "Court Sports Shoes",
    "category": "basketball",
    "image": "images/products/basketball/court-shoes.svg",
    "description": "High-top court shoes with ankle support, a cushioned midsole and a grippy rubber outsole.",
    "popularity": 78,
    "isNew": true,
    "featured": true,
    "added": 19
  },
  {
    "id": "tennis-racket",
    "name": "Tennis Racket - Tour Series",
    "category": "tennis",
    "image": "images/products/tennis/tennis-racket.svg",
    "description": "Graphite frame with a balanced head-light feel. Plenty of control for baseline rallies and a sharp serve.",
    "popularity": 70,
    "isNew": false,
    "featured": true,
    "added": 20
  },
  {
    "id": "skipping-rope",
    "name": "Speed Skipping Rope",
    "category": "fitness",
    "image": "images/products/fitness/skipping-rope.svg",
    "description": "Adjustable speed rope with ball-bearing handles for smooth rotation. Great for warm-ups and conditioning.",
    "popularity": 72,
    "isNew": true,
    "featured": false,
    "added": 21
  },
  {
    "id": "gym-gloves",
    "name": "Gym Gloves - Grip Pro",
    "category": "fitness",
    "image": "images/products/fitness/gym-gloves.svg",
    "description": "Padded palm gloves with a wrist strap, so heavy sets feel steadier and calluses stay away.",
    "popularity": 66,
    "isNew": false,
    "featured": false,
    "added": 22
  },
  {
    "id": "water-bottle",
    "name": "Sports Water Bottle - 1L",
    "category": "accessories",
    "image": "images/products/accessories/water-bottle.svg",
    "description": "BPA-free 1 litre bottle with a leak-proof flip cap and a wide mouth for ice.",
    "popularity": 82,
    "isNew": false,
    "featured": false,
    "added": 23
  },
  {
    "id": "sports-duffle-bag",
    "name": "Sports Duffle Bag",
    "category": "accessories",
    "image": "images/products/accessories/sports-duffle-bag.svg",
    "description": "Everyday gym and training duffle with a wet-clothes pocket and a padded carry strap.",
    "popularity": 64,
    "isNew": true,
    "featured": false,
    "added": 24
  },
  {
    "id": "sports-t-shirt",
    "name": "Performance Sports T-Shirt",
    "category": "sports-wear",
    "image": "images/products/sports-wear/sports-t-shirt.svg",
    "description": "A versatile short-sleeve training top for workouts, practice and everyday active wear.",
    "popularity": 78,
    "isNew": true,
    "featured": true,
    "added": 25
  },
  {
    "id": "sports-shorts",
    "name": "Training Sports Shorts",
    "category": "sports-wear",
    "image": "images/products/sports-wear/sports-shorts.svg",
    "description": "Easy-moving training shorts for warm-ups, gym sessions and outdoor practice.",
    "popularity": 73,
    "isNew": true,
    "featured": false,
    "added": 26
  },
  {
    "id": "sports-jersey",
    "name": "Sports Team Jersey",
    "category": "sports-wear",
    "image": "images/products/sports-wear/sports-jersey.svg",
    "description": "A classic short-sleeve jersey style for team training and match days.",
    "popularity": 68,
    "isNew": true,
    "featured": false,
    "added": 27
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
      { key: 'cricket', label: 'Cricket', test: (p) => p.category === 'cricket' },
      { key: 'football', label: 'Football', test: (p) => p.category === 'football' },
      { key: 'volleyball', label: 'Volleyball', test: (p) => p.category === 'volleyball' },
      { key: 'badminton', label: 'Badminton', test: (p) => p.category === 'badminton' },
      { key: 'basketball', label: 'Basketball', test: (p) => p.category === 'basketball' },
      { key: 'other', label: 'Other Sports', test: (p) => ['tennis', 'fitness', 'accessories', 'sports-wear'].includes(p.category) },
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


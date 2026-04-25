// ============ DATA ============
const BATCHES = [
  { year: 1967, gem: "Diamond",     anniversary: "sixty years",  glow: "rgba(255,255,255,0.6)",  color: "#EAF6FF" },
  { year: 1972, gem: "Alexandrite", anniversary: "fifty-five",   glow: "rgba(120,180,140,0.5)",  color: "#7FB39A" },
  {
    year: 1977, gem: "Gold", anniversary: "fifty years",
    glow: "rgba(212,160,23,0.7)", color: "#D4A017",
    hero: "assets/batches/1977-gold.png",
    bg: "assets/batches/1977/photo-4-facade.jpg",
    gallery: [
      { src: "assets/batches/1977/photo-2-banner.jpg",      caption: "Reunion · Batch 1977" },
      { src: "assets/batches/1977/photo-3-greenshirts.jpg", caption: "M.A.R. 77" },
      { src: "assets/batches/1977/photo-5-christmas.jpg",   caption: "Christmas Gathering" },
      { src: "assets/batches/1977/photo-1-table.jpg",       caption: "Together Again" },
    ],
  },
  { year: 1982, gem: "Sapphire",    anniversary: "forty-five",   glow: "rgba(60,100,200,0.6)",   color: "#3B5FBF" },
  { year: 1987, gem: "Ruby",        anniversary: "forty years",  glow: "rgba(200,40,60,0.7)",    color: "#C8203B" },
  { year: 1992, gem: "Jade",        anniversary: "thirty-five",  glow: "rgba(74,107,58,0.6)",    color: "#5A8A4B" },
  { year: 1997, gem: "Pearl",       anniversary: "thirty years", glow: "rgba(245,237,216,0.7)",  color: "#F5EDD8" },
  { year: 2002, gem: "Silver",      anniversary: "twenty-five",  glow: "rgba(220,220,230,0.6)",  color: "#D8DCE2" },
  { year: 2007, gem: "Emerald",     anniversary: "twenty years", glow: "rgba(40,140,90,0.7)",    color: "#2E9D6B" },
  { year: 2012, gem: "Crystal",     anniversary: "fifteen years",glow: "rgba(180,220,240,0.6)",  color: "#B8DCEC" },
];

// ============ COUNTDOWN ============
const target = new Date("2027-01-31T09:00:00+08:00").getTime();

function pad(n, len = 2) { return String(n).padStart(len, "0"); }

function tick() {
  const now = Date.now();
  const diff = Math.max(0, target - now);
  const d = Math.floor(diff / 86400000);
  const h = Math.floor((diff % 86400000) / 3600000);
  const m = Math.floor((diff % 3600000) / 60000);
  const s = Math.floor((diff % 60000) / 1000);
  const els = document.querySelectorAll("[data-unit]");
  els.forEach(el => {
    const u = el.dataset.unit;
    const v = u === "d" ? pad(d, 3) : u === "h" ? pad(h) : u === "m" ? pad(m) : pad(s);
    if (el.textContent !== v) el.textContent = v;
  });
}
tick();
setInterval(tick, 1000);

// ============ GEM SVGS ============
// Each returns inline SVG markup tinted with the batch's color.
const gemSVG = {
  Diamond: (c) => `
    <svg viewBox="0 0 200 220" xmlns="http://www.w3.org/2000/svg">
      <defs>
        <linearGradient id="dg" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stop-color="#ffffff" stop-opacity="0.95"/>
          <stop offset="50%" stop-color="${c}" stop-opacity="0.9"/>
          <stop offset="100%" stop-color="#a8c8e0" stop-opacity="0.8"/>
        </linearGradient>
      </defs>
      <g stroke="rgba(255,255,255,0.4)" stroke-width="0.5">
        <polygon points="40,70 100,30 160,70 100,200" fill="url(#dg)"/>
        <polygon points="40,70 70,70 100,30" fill="rgba(255,255,255,0.5)"/>
        <polygon points="100,30 130,70 160,70" fill="rgba(255,255,255,0.25)"/>
        <polygon points="40,70 70,70 100,200" fill="rgba(255,255,255,0.15)"/>
        <polygon points="70,70 100,30 130,70" fill="rgba(255,255,255,0.6)"/>
        <polygon points="70,70 130,70 100,200" fill="rgba(180,210,235,0.5)"/>
        <polygon points="130,70 160,70 100,200" fill="rgba(255,255,255,0.3)"/>
      </g>
    </svg>`,

  Alexandrite: (c) => `
    <svg viewBox="0 0 200 220" xmlns="http://www.w3.org/2000/svg">
      <defs>
        <linearGradient id="ag" x1="0" y1="0" x2="1" y2="1">
          <stop offset="0%" stop-color="#9fd9b8" stop-opacity="0.95"/>
          <stop offset="50%" stop-color="${c}" stop-opacity="0.9"/>
          <stop offset="100%" stop-color="#a16a8a" stop-opacity="0.85"/>
        </linearGradient>
      </defs>
      <g stroke="rgba(255,255,255,0.3)" stroke-width="0.5">
        <ellipse cx="100" cy="110" rx="55" ry="80" fill="url(#ag)"/>
        <ellipse cx="100" cy="110" rx="40" ry="60" fill="none" stroke="rgba(255,255,255,0.4)"/>
        <ellipse cx="100" cy="110" rx="25" ry="40" fill="none" stroke="rgba(255,255,255,0.3)"/>
        <line x1="100" y1="30" x2="100" y2="190" stroke="rgba(255,255,255,0.25)"/>
        <line x1="45" y1="110" x2="155" y2="110" stroke="rgba(255,255,255,0.25)"/>
        <ellipse cx="90" cy="80" rx="12" ry="20" fill="rgba(255,255,255,0.4)"/>
      </g>
    </svg>`,

  Gold: (c) => `
    <svg viewBox="0 0 200 220" xmlns="http://www.w3.org/2000/svg">
      <defs>
        <linearGradient id="gg" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stop-color="#fff2c0"/>
          <stop offset="40%" stop-color="${c}"/>
          <stop offset="100%" stop-color="#7d5e0c"/>
        </linearGradient>
      </defs>
      <g>
        <rect x="40" y="80" width="120" height="60" rx="4" fill="url(#gg)" transform="skewX(-8)"/>
        <rect x="40" y="80" width="120" height="10" rx="4" fill="rgba(255,255,255,0.4)" transform="skewX(-8)"/>
        <rect x="40" y="130" width="120" height="10" fill="rgba(0,0,0,0.2)" transform="skewX(-8)"/>
        <text x="100" y="118" text-anchor="middle" font-family="Cormorant Garamond, serif" font-size="14" fill="rgba(60,40,5,0.7)" font-style="italic" transform="skewX(-8) translate(8,0)">MARHS</text>
      </g>
    </svg>`,

  Sapphire: (c) => `
    <svg viewBox="0 0 200 220" xmlns="http://www.w3.org/2000/svg">
      <defs>
        <linearGradient id="sg" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stop-color="#7fa3e8"/>
          <stop offset="50%" stop-color="${c}"/>
          <stop offset="100%" stop-color="#1a2f6e"/>
        </linearGradient>
      </defs>
      <g stroke="rgba(255,255,255,0.3)" stroke-width="0.5">
        <polygon points="50,60 150,60 170,90 100,200 30,90" fill="url(#sg)"/>
        <polygon points="50,60 100,90 150,60" fill="rgba(255,255,255,0.25)"/>
        <polygon points="50,60 30,90 100,90" fill="rgba(255,255,255,0.15)"/>
        <polygon points="150,60 170,90 100,90" fill="rgba(255,255,255,0.1)"/>
        <polygon points="100,90 30,90 100,200" fill="rgba(255,255,255,0.08)"/>
        <polygon points="100,90 170,90 100,200" fill="rgba(0,0,0,0.15)"/>
      </g>
    </svg>`,

  Ruby: (c) => `
    <svg viewBox="0 0 200 220" xmlns="http://www.w3.org/2000/svg">
      <defs>
        <radialGradient id="rg" cx="0.4" cy="0.3" r="0.7">
          <stop offset="0%" stop-color="#ff8090"/>
          <stop offset="60%" stop-color="${c}"/>
          <stop offset="100%" stop-color="#5a0f1c"/>
        </radialGradient>
      </defs>
      <g stroke="rgba(255,255,255,0.25)" stroke-width="0.5">
        <polygon points="100,30 165,80 165,140 100,200 35,140 35,80" fill="url(#rg)"/>
        <polygon points="100,30 100,90 165,80" fill="rgba(255,255,255,0.25)"/>
        <polygon points="100,30 35,80 100,90" fill="rgba(255,255,255,0.18)"/>
        <polygon points="35,80 35,140 100,90" fill="rgba(255,255,255,0.08)"/>
        <polygon points="165,80 165,140 100,90" fill="rgba(0,0,0,0.15)"/>
        <polygon points="35,140 100,200 100,90" fill="rgba(0,0,0,0.05)"/>
        <polygon points="165,140 100,200 100,90" fill="rgba(0,0,0,0.25)"/>
      </g>
    </svg>`,

  Jade: (c) => `
    <svg viewBox="0 0 200 220" xmlns="http://www.w3.org/2000/svg">
      <defs>
        <radialGradient id="jg" cx="0.4" cy="0.3" r="0.8">
          <stop offset="0%" stop-color="#a8d490"/>
          <stop offset="60%" stop-color="${c}"/>
          <stop offset="100%" stop-color="#234020"/>
        </radialGradient>
      </defs>
      <circle cx="100" cy="110" r="80" fill="url(#jg)" stroke="rgba(255,255,255,0.2)"/>
      <circle cx="100" cy="110" r="40" fill="none" stroke="rgba(0,0,0,0.25)"/>
      <ellipse cx="80" cy="80" rx="22" ry="14" fill="rgba(255,255,255,0.35)" transform="rotate(-25 80 80)"/>
      <ellipse cx="120" cy="140" rx="14" ry="8" fill="rgba(255,255,255,0.18)" transform="rotate(-25 120 140)"/>
    </svg>`,

  Pearl: (c) => `
    <svg viewBox="0 0 200 220" xmlns="http://www.w3.org/2000/svg">
      <defs>
        <radialGradient id="pg" cx="0.35" cy="0.3" r="0.8">
          <stop offset="0%" stop-color="#ffffff"/>
          <stop offset="40%" stop-color="${c}"/>
          <stop offset="100%" stop-color="#a89c7e"/>
        </radialGradient>
      </defs>
      <circle cx="100" cy="110" r="80" fill="url(#pg)"/>
      <ellipse cx="78" cy="78" rx="20" ry="14" fill="rgba(255,255,255,0.7)" transform="rotate(-30 78 78)"/>
      <ellipse cx="125" cy="135" rx="10" ry="6" fill="rgba(255,255,255,0.25)"/>
    </svg>`,

  Silver: (c) => `
    <svg viewBox="0 0 200 220" xmlns="http://www.w3.org/2000/svg">
      <defs>
        <linearGradient id="slg" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stop-color="#ffffff"/>
          <stop offset="50%" stop-color="${c}"/>
          <stop offset="100%" stop-color="#6e7480"/>
        </linearGradient>
      </defs>
      <g stroke="rgba(255,255,255,0.3)" stroke-width="0.5">
        <rect x="45" y="80" width="110" height="60" rx="3" fill="url(#slg)" transform="skewX(-6)"/>
        <rect x="45" y="80" width="110" height="8" fill="rgba(255,255,255,0.5)" transform="skewX(-6)"/>
        <rect x="45" y="132" width="110" height="8" fill="rgba(0,0,0,0.2)" transform="skewX(-6)"/>
      </g>
    </svg>`,

  Emerald: (c) => `
    <svg viewBox="0 0 200 220" xmlns="http://www.w3.org/2000/svg">
      <defs>
        <linearGradient id="eg" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stop-color="#7adfa6"/>
          <stop offset="50%" stop-color="${c}"/>
          <stop offset="100%" stop-color="#0e3a22"/>
        </linearGradient>
      </defs>
      <g stroke="rgba(255,255,255,0.3)" stroke-width="0.6">
        <polygon points="55,60 145,60 165,90 165,150 145,180 55,180 35,150 35,90" fill="url(#eg)"/>
        <polygon points="55,60 75,90 145,60 125,90" fill="rgba(255,255,255,0.2)"/>
        <polygon points="55,60 35,90 75,90" fill="rgba(255,255,255,0.12)"/>
        <polygon points="145,60 165,90 125,90" fill="rgba(0,0,0,0.1)"/>
        <rect x="75" y="90" width="50" height="60" fill="rgba(255,255,255,0.05)"/>
        <polygon points="55,180 35,150 75,150" fill="rgba(255,255,255,0.08)"/>
        <polygon points="145,180 165,150 125,150" fill="rgba(0,0,0,0.15)"/>
        <polygon points="75,90 75,150 35,90 35,150" fill="rgba(0,0,0,0.08)"/>
        <polygon points="125,90 125,150 165,90 165,150" fill="rgba(0,0,0,0.18)"/>
      </g>
    </svg>`,

  Crystal: (c) => `
    <svg viewBox="0 0 200 220" xmlns="http://www.w3.org/2000/svg">
      <defs>
        <linearGradient id="cg" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stop-color="#ffffff" stop-opacity="0.95"/>
          <stop offset="100%" stop-color="${c}" stop-opacity="0.7"/>
        </linearGradient>
      </defs>
      <g stroke="rgba(255,255,255,0.5)" stroke-width="0.6">
        <polygon points="100,20 130,80 130,180 100,200 70,180 70,80" fill="url(#cg)"/>
        <polygon points="100,20 100,200 130,180 130,80" fill="rgba(0,0,0,0.12)"/>
        <polygon points="100,20 70,80 100,200" fill="rgba(255,255,255,0.18)"/>
        <polygon points="80,40 95,90 95,170" fill="none" stroke="rgba(255,255,255,0.4)"/>
        <polygon points="115,55 120,90 105,170" fill="none" stroke="rgba(255,255,255,0.25)"/>
      </g>
    </svg>`,
};

// ============ RENDER BATCHES ============
const wrap = document.getElementById("batches");

BATCHES.forEach((b, i) => {
  const section = document.createElement("section");
  const polished = !!b.hero;
  section.className = "batch" + (polished ? " polished" : "");
  section.style.setProperty("--glow", b.glow);
  section.dataset.idx = i;

  const gemMarkup = polished
    ? `<img class="batch-photo" src="${b.hero}" alt="${b.gem}" />`
    : gemSVG[b.gem](b.color);

  const bgMarkup = b.bg
    ? `<div class="batch-bg" style="background-image:url('${b.bg}')"></div>`
    : "";

  section.innerHTML = `
    <div class="batch-sticky">
      ${bgMarkup}
      <div class="batch-num">No. ${pad(i + 1)} of ${pad(BATCHES.length)}</div>
      <div class="batch-gem">${gemMarkup}</div>
      <div class="batch-info">
        <div class="batch-year">${b.year}</div>
        <div class="batch-divider"></div>
        <div class="batch-gem-name">${b.gem}</div>
        <div class="batch-anniversary">${b.anniversary}</div>
      </div>
    </div>
  `;
  wrap.appendChild(section);

  if (b.gallery && b.gallery.length) {
    const gallery = document.createElement("section");
    gallery.className = "batch-gallery";
    const tilts = [-3.5, 2.2, -2, 3];
    gallery.innerHTML = `
      <div class="bg-eyebrow">${b.year} · ${b.gem}</div>
      <h3 class="bg-title"><em>Memories</em> from the batch</h3>
      <div class="bg-grid">
        ${b.gallery.map((p, idx) => `
          <figure class="polaroid" style="--rot: ${tilts[idx % tilts.length]}deg">
            <img src="${p.src}" alt="${p.caption || ''}" loading="lazy" />
            <figcaption>${p.caption || ''}</figcaption>
          </figure>
        `).join("")}
      </div>
    `;
    wrap.appendChild(gallery);
  }
});

// ============ YEAR STRIP (all alumni 1967–2012) ============
const strip = document.getElementById("yearStrip");
const celebrantYears = new Set(BATCHES.map(b => b.year));

for (let y = 1967; y <= 2012; y++) {
  const span = document.createElement("span");
  span.className = "year-tag" + (celebrantYears.has(y) ? " celebrant" : "");
  span.textContent = y;
  span.style.animationDelay = `${(y - 1967) * 0.025}s`;
  strip.appendChild(span);
}

// ============ SCROLL OBSERVER ============
const observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add("in-view");
    } else {
      entry.target.classList.remove("in-view");
    }
  });
}, { threshold: 0.35 });

document.querySelectorAll(".batch, .bridge, .finale, .alumni-all, .batch-gallery").forEach(el => observer.observe(el));

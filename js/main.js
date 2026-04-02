/**
 * main.js
 * フィルター・ルーティング・詳細ページ描画ロジック
 */

/* ============================================================
   TOP PAGE — index.html
   ============================================================ */

/* ============================================================
   CARD ANIMATION HELPER
   ============================================================ */

function observeCards(container) {
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('card-visible');
        observer.unobserve(entry.target);
      }
    });
  }, { threshold: 0.08 });

  Array.from(container.querySelectorAll('.work-card')).forEach((card, i) => {
    card.style.setProperty('--card-delay', `${i * 0.2}s`);
    observer.observe(card);
  });
}

function initHeroInteraction() {
  const fv = document.querySelector('.top-first-view');
  if (!fv) return;

  const layers = Array.from(fv.querySelectorAll('.parallax-layer'));

  let targetX = 0, targetY = 0;
  let currentX = 0, currentY = 0;
  let rawMouseX = 0, rawMouseY = 0;
  const STRENGTH = 35;

  fv.addEventListener('mousemove', (e) => {
    const r = fv.getBoundingClientRect();
    rawMouseX = e.clientX - r.left;
    rawMouseY = e.clientY - r.top;
    targetX = (rawMouseX / r.width  - 0.5) * 2;
    targetY = (rawMouseY / r.height - 0.5) * 2;
  });

  fv.addEventListener('mouseleave', () => {
    targetX = 0;
    targetY = 0;
  });

  function lerp(a, b, t) { return a + (b - a) * t; }

  (function animate() {
    requestAnimationFrame(animate);
    currentX = lerp(currentX, targetX, 0.07);
    currentY = lerp(currentY, targetY, 0.07);
    const dx = currentX * STRENGTH;
    const dy = currentY * STRENGTH;
    layers.forEach(layer => {
      const depth = parseFloat(layer.dataset.depth) || 0;
      layer.style.transform = `translate(${dx * depth}px, ${dy * depth}px)`;
    });
  })();
}

function initHeroTrail() {
  const fv = document.querySelector('.top-first-view');
  const canvas = document.getElementById('heroTrail');
  if (!fv || !canvas) return;

  const ctx = canvas.getContext('2d');
  const MAX_AGE = 700; // ms trail persists

  function resize() {
    canvas.width  = fv.offsetWidth;
    canvas.height = fv.offsetHeight;
  }
  resize();
  window.addEventListener('resize', resize);

  const points = []; // { x, y, time }

  fv.addEventListener('mousemove', (e) => {
    const r = fv.getBoundingClientRect();
    points.push({ x: e.clientX - r.left, y: e.clientY - r.top, time: Date.now() });
  });

  fv.addEventListener('mouseleave', () => {
    points.length = 0;
  });

  (function draw() {
    requestAnimationFrame(draw);
    ctx.clearRect(0, 0, canvas.width, canvas.height);

    const now = Date.now();
    // Purge expired points
    while (points.length && now - points[0].time > MAX_AGE) points.shift();
    if (points.length < 2) return;

    // Draw each segment with opacity based on age
    for (let i = 1; i < points.length; i++) {
      const p0 = points[i - 1];
      const p1 = points[i];
      const alpha = Math.max(0, 1 - (now - p1.time) / MAX_AGE);
      ctx.beginPath();
      ctx.moveTo(p0.x, p0.y);
      ctx.lineTo(p1.x, p1.y);
      ctx.strokeStyle = `rgba(255,255,255,${alpha * 0.8})`;
      ctx.lineWidth = 2.5;
      ctx.lineCap = 'round';
      ctx.lineJoin = 'round';
      ctx.stroke();
    }
  })();
}

function initTop() {
  // Render top 6 works into #topWorksGrid
  const grid = document.getElementById("topWorksGrid");
  if (grid) {
    WORKS.slice(0, 6).forEach(work => {
      const card = createCard(work);
      grid.appendChild(card);
    });
    observeCards(grid);
    initCardsParallax(grid);
  }

  // Header: transparent over video → solid dark as video scrolls out
  const header = document.getElementById("siteHeader");
  const firstView = document.querySelector(".top-first-view");
  if (header && firstView) {
    const onScroll = () => {
      const fvHeight = firstView.offsetHeight;
      const progress = Math.min(1, window.scrollY / fvHeight);
      header.style.background = `rgba(10, 10, 10, ${progress})`;
      header.style.borderBottomColor = `rgba(255, 255, 255, ${progress * 0.1})`;
    };
    window.addEventListener("scroll", onScroll, { passive: true });
    onScroll();
  }

  initHeroInteraction();
  initHeroTrail();
  initAboutAnim();
}

function initAboutAnim() {
  const section = document.querySelector('.about-section');
  if (!section) return;

  const targets = [
    section.querySelector('.about-heading'),
    section.querySelector('.about-name'),
    section.querySelector('.about-tagline'),
    ...Array.from(section.querySelectorAll('.about-body > p:not(.about-heading):not(.about-tagline)')),
    section.querySelector('.skills-grid'),
  ].filter(Boolean);

  const observer = new IntersectionObserver((entries) => {
    if (entries[0].isIntersecting) {
      targets.forEach((el, i) => {
        el.style.setProperty('--about-delay', `${i * 0.1}s`);
        el.classList.add('about-text-anim');
      });
      observer.disconnect();
    }
  }, { threshold: 0.1 });

  observer.observe(section);
}

/* ============================================================
   CARDS PROXIMITY PARALLAX (shared: TOP + GALLERY)
   ============================================================ */

function initCardsParallax(grid) {
  let mouseX = window.innerWidth / 2;
  let mouseY = window.innerHeight / 2;
  let curX = mouseX, curY = mouseY;
  const MAX_MOVE = 14;
  const MAX_DIST = 560;

  document.addEventListener('mousemove', e => { mouseX = e.clientX; mouseY = e.clientY; });
  document.addEventListener('mouseleave', () => { mouseX = window.innerWidth / 2; mouseY = window.innerHeight / 2; });

  (function tick() {
    requestAnimationFrame(tick);
    curX += (mouseX - curX) * 0.08;
    curY += (mouseY - curY) * 0.08;

    const nx = (curX / window.innerWidth  - 0.5) * 2;
    const ny = (curY / window.innerHeight - 0.5) * 2;

    grid.querySelectorAll('.work-card:not(.hidden)').forEach(card => {
      const r    = card.getBoundingClientRect();
      const dist = Math.hypot(curX - (r.left + r.width / 2), curY - (r.top + r.height / 2));
      const prox = Math.max(0, 1 - dist / MAX_DIST);
      card.style.translate = `${nx * MAX_MOVE * prox}px ${ny * MAX_MOVE * prox}px`;
    });
  })();
}

/* ============================================================
   GALLERY PAGE — works.html
   ============================================================ */

function initGallery() {
  const grid = document.getElementById("worksGrid");
  if (!grid) return;

  WORKS.forEach(work => {
    const card = createCard(work);
    grid.appendChild(card);
  });

  initCardsParallax(grid);

  function applyStagger() {
    const visible = Array.from(grid.querySelectorAll(".work-card:not(.hidden)"));
    visible.forEach((card, i) => {
      const col = i % 3;
      card.style.marginTop = col === 0 ? '0px' : col === 1 ? '10px' : '20px';
      card.style.setProperty('--card-delay', `${i * 0.2}s`);
      card.classList.remove('card-visible');
      void card.offsetWidth; // reflow to restart transition
      card.classList.add('card-visible');
    });
  }

  applyStagger();

  const filterBtns = document.querySelectorAll(".filter-btn");
  filterBtns.forEach(btn => {
    btn.addEventListener("click", () => {
      const category = btn.dataset.category;

      filterBtns.forEach(b => b.classList.remove("active"));
      btn.classList.add("active");

      const cards = grid.querySelectorAll(".work-card");
      cards.forEach(card => {
        if (category === "all" || card.dataset.category === category) {
          card.classList.remove("hidden");
        } else {
          card.classList.add("hidden");
        }
      });

      applyStagger();
    });
  });
}

function createCard(work) {
  const card = document.createElement("article");
  card.className = "work-card card-anim";
  card.dataset.category = work.category;

  const accent = work.colors?.['--color-accent'];
  if (accent) {
    card.style.setProperty('--card-accent', accent);
    card.style.setProperty('--card-shadow', accent + '33');
  }

  const thumbHtml = work.thumbnail
    ? `<img src="${work.thumbnail}" alt="${work.title}" loading="lazy">`
    : `<span class="work-card__thumb-label">[ Image Placeholder ]</span>`;

  card.innerHTML = `
    <div class="work-card__thumb">${thumbHtml}</div>
    <div class="work-card__body">
      <span class="work-card__category">${work.categoryLabel}</span>
      <h2 class="work-card__title"><span class="work-card__number">${work.number}.</span> ${work.title}</h2>
      ${work.tagline ? `<p class="work-card__tagline">${work.tagline}</p>` : ''}
      <p class="work-card__tools">${work.tools.join(" / ")}</p>
    </div>
  `;

  card.addEventListener("click", () => {
    window.location.href = `work.html?id=${work.id}`;
  });

  return card;
}

/* ============================================================
   DETAIL PAGE — work.html
   ============================================================ */

function applyWorkColors(work) {
  if (!work.colors) return;
  const root = document.documentElement;
  Object.entries(work.colors).forEach(([k, v]) => root.style.setProperty(k, v));
}

function initDetail() {
  const params = new URLSearchParams(window.location.search);
  const id = params.get("id");

  if (!id) { window.location.href = "works.html"; return; }

  const work = getWorkById(id);
  if (!work) { window.location.href = "works.html"; return; }

  applyWorkColors(work);
  initDetailTrail();
  renderDetail(work);
  initDetailVideo(work);
  renderGallery(work);
  renderProcess(work);
  renderPagination(id);
  startDetailTaglineLoop();
  document.title = `${work.title} — SHIMAWAKIHIKARU`;
}

function renderDetail(work) {
  // Category badge
  setTextContent("detailCategory", work.categoryLabel);
  setTextContent("detailCategoryMeta", work.categoryLabel);

  // Number + Title
  setTextContent("detailNumber", work.number);
  setTextContent("detailTitle", work.title);

  // Tagline（作品名下の強調一文）
  const taglineEl = document.getElementById("detailTagline");
  if (taglineEl) {
    if (work.tagline) {
      taglineEl.innerHTML = `<span class="tagline-text">${work.tagline}</span>`;
      taglineEl.classList.remove("tagline-animated");
      void taglineEl.offsetWidth; // reflow to restart animation
      taglineEl.classList.add("tagline-animated");
    } else {
      taglineEl.style.display = "none";
    }
  }

  // Meta
  setTextContent("detailYear", work.year || "—");
  setTextContent("detailDuration", work.duration || "—");
  setTextContent("detailType", work.type || "—");

  // Hero image — thumbnail を使用
  const heroEl = document.getElementById("detailHero");
  if (heroEl && work.thumbnail) {
    heroEl.innerHTML = `<img src="${work.thumbnail}" alt="${work.title}">`;
  }

  // Tools
  const toolsEl = document.getElementById("detailTools");
  if (toolsEl) {
    toolsEl.innerHTML = work.tools.length
      ? work.tools.map(t => `<span class="tool-tag">${t}</span>`).join("")
      : "<span style='color:var(--color-text-muted);font-size:13px;'>—</span>";
  }

  // Description
  const descEl = document.getElementById("detailDescription");
  if (descEl) {
    descEl.innerHTML = work.description.map(p => `<p>${p}</p>`).join("");
  }
}

/* 作品に関する画像（少し大きめに表示） */
function renderGallery(work) {
  const sectionEl = document.getElementById("detailGallerySection");
  const gridEl = document.getElementById("detailGallery");
  if (!gridEl) return;

  if (!work.images || work.images.length === 0) {
    if (sectionEl) sectionEl.style.display = "none";
    return;
  }

  if (work.galleryLayout) gridEl.dataset.layout = work.galleryLayout;
  else delete gridEl.dataset.layout;

  gridEl.innerHTML = work.images
    .map((src, i) => `
      <div class="gallery-item--large">
        <img src="${src}" alt="${work.title} — ${i + 1}" loading="lazy">
      </div>
    `)
    .join("");
}

/* 制作概要 — テキスト上・画像下レイアウト */
function renderProcess(work) {
  const el = document.getElementById("detailProcess");
  if (!el) return;

  if (!work.process || work.process.length === 0) {
    el.style.display = "none";
    return;
  }

  el.innerHTML = `
    <div class="container">
      <h2 class="detail-process-title">制作概要</h2>
      ${work.process.map((section) => {
        const hasImages = section.images && section.images.length > 0;

        const imagesHtml = hasImages
          ? `<div class="process-block__img-wrap">
               <div class="process-block__img-inner">
                 <div class="process-block__img-grid${section.images.length === 1 ? " process-block__img-grid--single" : ""}${section.naturalHeight ? " process-block__img-grid--natural" : ""}${section.columns === 2 ? " process-block__img-grid--cols2" : ""}">
                   ${section.images.map(src => `
                     <div class="process-img-item">
                       <img src="${src}" alt="${section.heading}" loading="lazy">
                     </div>
                   `).join("")}
                 </div>
               </div>
             </div>`
          : "";

        return `
          <div class="process-block">
            <div class="process-block__text">
              <h3 class="process-block__heading">${section.heading}</h3>
              <p class="process-block__body">${section.body}</p>
            </div>
            ${imagesHtml}
          </div>
        `;
      }).join("")}
    </div>
  `;

}

function initDetailVideo(work) {
  if (!work.videoId) return;
  const section = document.getElementById('detailVideoSection');
  if (!section) return;
  section.style.display = '';

  let stopTimer = null;

  // onYouTubeIframeAPIReady may already have fired; handle both cases
  function createPlayer() {
    const player = new YT.Player('detailVideoPlayer', {
      videoId: work.videoId,
      playerVars: { rel: 0, modestbranding: 1, controls: 1 },
      events: {
        onReady: function(e) {
          const endTime  = 260; // 4分20秒
          const minStart = 12;
          const maxStart = 260;
          const startAt  = minStart + Math.random() * (maxStart - minStart);
          e.target.seekTo(Math.floor(startAt), true);
          player._endTime = endTime;
        },
        onStateChange: function(e) {
          clearTimeout(stopTimer);
          if (e.data === YT.PlayerState.PLAYING) {
            const remaining = (player._endTime || 0) - e.target.getCurrentTime();
            if (remaining > 0) {
              stopTimer = setTimeout(() => e.target.pauseVideo(), remaining * 1000);
            }
          }
        }
      }
    });
  }

  if (window.YT && window.YT.Player) {
    createPlayer();
  } else {
    const prev = window.onYouTubeIframeAPIReady;
    window.onYouTubeIframeAPIReady = function() {
      if (prev) prev();
      createPlayer();
    };
  }
}

function startDetailTaglineLoop() {
  const el = document.getElementById('detailTagline');
  if (!el) return;

  // 初回アニメーション完了後（0.2s delay + 1.1s duration + buffer）から10秒ごとに再生
  setTimeout(() => {
    setInterval(() => {
      el.classList.remove('tagline-animated');
      void el.offsetWidth;
      el.classList.add('tagline-animated');
    }, 7000);
  }, 1500);
}

function initDetailTrail() {
  const canvas = document.getElementById('detailTrail');
  if (!canvas) return;

  const ctx = canvas.getContext('2d');
  const MAX_AGE = 700;

  // --color-accent-2 is set on :root by applyWorkColors() before this runs
  const accentColor = getComputedStyle(document.documentElement)
    .getPropertyValue('--color-accent-2').trim() || '#ffffff';

  function resize() {
    canvas.width  = window.innerWidth;
    canvas.height = window.innerHeight;
  }
  resize();
  window.addEventListener('resize', resize);

  const points = [];

  document.addEventListener('mousemove', (e) => {
    points.push({ x: e.clientX, y: e.clientY, time: Date.now() });
  });

  document.addEventListener('mouseleave', () => {
    points.length = 0;
  });

  (function draw() {
    requestAnimationFrame(draw);
    ctx.clearRect(0, 0, canvas.width, canvas.height);

    const now = Date.now();
    while (points.length && now - points[0].time > MAX_AGE) points.shift();
    if (points.length < 2) return;

    ctx.strokeStyle = accentColor;
    ctx.lineWidth   = 2.5;
    ctx.lineCap     = 'round';
    ctx.lineJoin    = 'round';

    for (let i = 1; i < points.length; i++) {
      const p0    = points[i - 1];
      const p1    = points[i];
      const alpha = Math.max(0, 1 - (now - p1.time) / MAX_AGE);
      ctx.globalAlpha = alpha;
      ctx.beginPath();
      ctx.moveTo(p0.x, p0.y);
      ctx.lineTo(p1.x, p1.y);
      ctx.stroke();
    }
    ctx.globalAlpha = 1;
  })();
}

function renderPagination(currentId) {
  const { prev, next } = getAdjacentWorks(currentId);

  const prevEl = document.getElementById("prevWork");
  const nextEl = document.getElementById("nextWork");

  if (prevEl) {
    const pa = prev?.colors?.['--color-accent'] || '';
    prevEl.innerHTML = prev
      ? `<a href="work.html?id=${prev.id}">
           <span class="pagination-direction">← Prev</span>
           <span class="pagination-title"><span class="pagination-number" style="color:${pa}">${prev.number}.</span> ${prev.title}</span>
           ${prev.thumbnail ? `<img class="pagination-thumb" src="${prev.thumbnail}" alt="${prev.title}" style="box-shadow:0 0 0 0.5px ${pa}">` : ""}
         </a>`
      : "";
  }

  if (nextEl) {
    const na = next?.colors?.['--color-accent'] || '';
    nextEl.innerHTML = next
      ? `<a href="work.html?id=${next.id}">
           <span class="pagination-direction">Next →</span>
           <span class="pagination-title"><span class="pagination-number" style="color:${na}">${next.number}.</span> ${next.title}</span>
           ${next.thumbnail ? `<img class="pagination-thumb" src="${next.thumbnail}" alt="${next.title}" style="box-shadow:0 0 0 0.5px ${na}">` : ""}
         </a>`
      : "";
  }
}

/* ============================================================
   UTILITIES
   ============================================================ */

function setTextContent(id, text) {
  const el = document.getElementById(id);
  if (el) el.textContent = text;
}

/* ============================================================
   INIT
   ============================================================ */

function observePhoto() {
  const img = document.querySelector(".about-photo__img");
  if (!img) return;
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add("photo-visible");
        observer.unobserve(entry.target);
      }
    });
  }, { threshold: 0.2 });
  observer.observe(img);
}

document.addEventListener("DOMContentLoaded", () => {
  const page = document.body.dataset.page;
  if (page === "top")     initTop();
  if (page === "gallery") initGallery();
  if (page === "detail")  initDetail();
  if (page === "top" || page === "about") observePhoto();
});

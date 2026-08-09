/* ==========================================================================
   PUBLIC NEWS PORTAL APP LOGIC (ONLINE PATRIKA)
   ========================================================================== */

// --- State Management ---
let currentLang = localStorage.getItem('patrika_lang') || 'np';
let currentTheme = localStorage.getItem('patrika_theme') || 'dark';
let currentCategory = 'all';
let articlesData = [];

// --- Bikram Sambat Date Converter / Formatter ---
function getBikramSambatDate() {
  const adDate = new Date();
  const daysNp = ["आइतबार", "सोमबार", "मङ्गलबार", "बुधबार", "बिहीबार", "शुक्रबार", "शनिबार"];
  const daysEn = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
  const monthsNp = ["बैशाख", "जेठ", "असार", "श्रावण", "भदौ", "असोज", "कार्तिक", "मंसिर", "पुष", "माघ", "फागुन", "चैत"];
  
  // Approximate BS conversion for demonstration (Offset +56 years, +8 months approx)
  const dayNameNp = daysNp[adDate.getDay()];
  const dayNameEn = daysEn[adDate.getDay()];
  
  const bsYearNp = "२०८३";
  const bsMonthNp = monthsNp[3]; // श्रावण
  const bsDayNp = "२४";

  const adFormattedEn = adDate.toLocaleDateString('en-US', { month: 'long', day: 'numeric', year: 'numeric' });

  return {
    np: `वि.सं. ${bsYearNp} ${bsMonthNp} ${bsDayNp}, ${dayNameNp}`,
    en: `${adFormattedEn}, ${dayNameEn}`
  };
}

// --- Initialize App Data ---
function initApp() {
  // Load stored articles or initial seeds
  const stored = localStorage.getItem('patrika_articles');
  if (stored) {
    try {
      articlesData = JSON.parse(stored);
    } catch(e) {
      articlesData = INITIAL_ARTICLES;
    }
  } else {
    articlesData = INITIAL_ARTICLES;
    localStorage.setItem('patrika_articles', JSON.stringify(articlesData));
  }

  // Set Theme
  document.documentElement.setAttribute('data-theme', currentTheme);
  updateThemeIcon();

  // Set Language
  switchLanguage(currentLang, false);

  // Setup Event Listeners
  setupEventListeners();

  // Render Date
  updateDateDisplay();
}

// --- Date Display ---
function updateDateDisplay() {
  const dateEl = document.getElementById('liveDateDisplay');
  if (dateEl) {
    const dates = getBikramSambatDate();
    dateEl.innerHTML = `<i class="far fa-calendar-alt"></i> <span>${dates[currentLang]}</span>`;
  }
}

// --- Switch Language ---
function switchLanguage(lang, renderAll = true) {
  currentLang = lang;
  localStorage.setItem('patrika_lang', lang);
  document.body.setAttribute('lang', lang);

  // Update Language Buttons Active State
  document.querySelectorAll('.lang-btn').forEach(btn => {
    btn.classList.toggle('active', btn.dataset.lang === lang);
  });

  // Update Dynamic Text Content using data-i18n attributes
  document.querySelectorAll('[data-i18n]').forEach(el => {
    const key = el.getAttribute('data-i18n');
    const translation = getNestedTranslation(TRANSLATIONS[lang], key);
    if (translation) {
      if (el.tagName === 'INPUT' && el.getAttribute('placeholder')) {
        el.placeholder = translation;
      } else {
        el.textContent = translation;
      }
    }
  });

  updateDateDisplay();

  if (renderAll) {
    renderNewsPortal();
  }
}

// Helper to get nested translation strings like "categories.politics"
function getNestedTranslation(obj, path) {
  return path.split('.').reduce((prev, curr) => (prev && prev[curr] !== undefined) ? prev[curr] : null, obj);
}

// --- Render News Portal Content ---
function renderNewsPortal() {
  renderBreakingTicker();
  renderHeroSection();
  renderSideTrending();
  renderMainNewsGrid();
}

// 1. Breaking News Ticker
function renderBreakingTicker() {
  const container = document.getElementById('breakingTickerContent');
  if (!container) return;

  const breakingArticles = articlesData.filter(a => a.isBreaking);
  if (breakingArticles.length === 0) {
    container.innerHTML = `<div class="ticker-item">${currentLang === 'np' ? 'कुनै ताजा अपडेट छैन' : 'No breaking news updates at this moment.'}</div>`;
    return;
  }

  let html = '';
  breakingArticles.forEach(art => {
    html += `
      <div class="ticker-item" onclick="openArticleModal('${art.id}')">
        <span>${art.title[currentLang] || art.title.np}</span>
        <i class="fas fa-circle ticker-separator"></i>
      </div>
    `;
  });
  container.innerHTML = html;
}

// 2. Hero Lead Story
function renderHeroSection() {
  const heroCard = document.getElementById('heroLeadStory');
  if (!heroCard) return;

  const featured = articlesData.find(a => a.isFeatured) || articlesData[0];
  if (!featured) return;

  const categoryName = TRANSLATIONS[currentLang].categories[featured.category] || featured.category;

  heroCard.onclick = () => openArticleModal(featured.id);
  heroCard.innerHTML = `
    <img src="${featured.image}" alt="Hero News" class="story-img-overlay" />
    <div class="story-gradient"></div>
    <div class="story-content">
      <span class="category-tag">${categoryName}</span>
      <h2 class="story-title">${featured.title[currentLang] || featured.title.np}</h2>
      <p class="story-excerpt">${featured.excerpt[currentLang] || featured.excerpt.np}</p>
      <div class="story-meta">
        <div class="story-meta-item"><i class="far fa-user"></i> ${featured.author}</div>
        <div class="story-meta-item"><i class="far fa-clock"></i> ${currentLang === 'np' ? featured.dateBs : featured.dateAd}</div>
        <div class="story-meta-item"><i class="far fa-eye"></i> ${featured.views} ${TRANSLATIONS[currentLang].views}</div>
      </div>
    </div>
  `;
}

// 3. Side Trending Stories
function renderSideTrending() {
  const container = document.getElementById('sideTrendingList');
  if (!container) return;

  const trending = articlesData.slice(1, 5);
  let html = '';

  trending.forEach(art => {
    html += `
      <div class="side-story-card" onclick="openArticleModal('${art.id}')">
        <img src="${art.image}" alt="Story" class="side-story-img" />
        <div class="side-story-info">
          <h4 class="side-story-title">${art.title[currentLang] || art.title.np}</h4>
          <div class="side-story-meta">
            <span><i class="far fa-clock"></i> ${currentLang === 'np' ? art.dateBs : art.dateAd}</span>
            <span><i class="far fa-eye"></i> ${art.views}</span>
          </div>
        </div>
      </div>
    `;
  });

  container.innerHTML = html;
}

// 4. Main News Grid with Category Filter & Search
function renderMainNewsGrid() {
  const grid = document.getElementById('mainNewsGrid');
  if (!grid) return;

  const searchQuery = (document.getElementById('searchInput')?.value || '').toLowerCase().trim();

  let filtered = articlesData;

  // Filter by Category
  if (currentCategory !== 'all') {
    filtered = filtered.filter(a => a.category === currentCategory);
  }

  // Filter by Search
  if (searchQuery) {
    filtered = filtered.filter(a => {
      const title = (a.title[currentLang] || a.title.np).toLowerCase();
      const excerpt = (a.excerpt[currentLang] || a.excerpt.np).toLowerCase();
      return title.includes(searchQuery) || excerpt.includes(searchQuery);
    });
  }

  if (filtered.length === 0) {
    grid.innerHTML = `<div style="grid-column: 1/-1; text-align: center; padding: 40px; color: var(--text-muted);">
      <i class="fas fa-newspaper fa-3x" style="margin-bottom: 12px;"></i>
      <p>${currentLang === 'np' ? 'कुनै समाचार भेटिएन।' : 'No news articles found.'}</p>
    </div>`;
    return;
  }

  let html = '';
  filtered.forEach(art => {
    const catLabel = TRANSLATIONS[currentLang].categories[art.category] || art.category;
    html += `
      <article class="news-card" onclick="openArticleModal('${art.id}')">
        <div class="news-card-img-wrap">
          <img src="${art.image}" alt="News" class="news-card-img" />
          <span class="news-card-badge">${catLabel}</span>
        </div>
        <div class="news-card-body">
          <h3 class="news-card-title">${art.title[currentLang] || art.title.np}</h3>
          <p class="news-card-excerpt">${art.excerpt[currentLang] || art.excerpt.np}</p>
          <div class="news-card-footer">
            <span><i class="far fa-user"></i> ${art.author.split('/')[0]}</span>
            <span><i class="far fa-clock"></i> ${currentLang === 'np' ? art.dateBs : art.dateAd}</span>
          </div>
        </div>
      </article>
    `;
  });

  grid.innerHTML = html;
}

// --- Open Full Article Reader Modal ---
function openArticleModal(articleId) {
  const art = articlesData.find(a => a.id === articleId);
  if (!art) return;

  // Increment views
  art.views = (art.views || 0) + 1;
  localStorage.setItem('patrika_articles', JSON.stringify(articlesData));

  const modal = document.getElementById('articleModal');
  const modalContent = document.getElementById('modalArticleBody');
  if (!modal || !modalContent) return;

  const catLabel = TRANSLATIONS[currentLang].categories[art.category] || art.category;

  modalContent.innerHTML = `
    <span class="article-modal-cat">${catLabel}</span>
    <h1 class="article-modal-title">${art.title[currentLang] || art.title.np}</h1>
    <div class="article-modal-meta">
      <div><i class="far fa-user"></i> <strong>${art.author}</strong></div>
      <div><i class="far fa-calendar-alt"></i> ${currentLang === 'np' ? art.dateBs : art.dateAd}</div>
      <div><i class="far fa-eye"></i> ${art.views} ${TRANSLATIONS[currentLang].views}</div>
    </div>
    <img src="${art.image}" alt="Article Image" class="article-modal-img" />
    <div class="article-modal-content">
      ${(art.content[currentLang] || art.content.np).replace(/\n/g, '<br/><br/>')}
    </div>
  `;

  modal.classList.add('active');
}

function closeArticleModal() {
  const modal = document.getElementById('articleModal');
  if (modal) modal.classList.remove('active');
}

// --- Theme Switcher ---
function toggleTheme() {
  currentTheme = currentTheme === 'dark' ? 'light' : 'dark';
  document.documentElement.setAttribute('data-theme', currentTheme);
  localStorage.setItem('patrika_theme', currentTheme);
  updateThemeIcon();
}

function updateThemeIcon() {
  const btn = document.getElementById('themeToggleBtn');
  if (btn) {
    btn.innerHTML = currentTheme === 'dark' ? '<i class="fas fa-sun"></i>' : '<i class="fas fa-moon"></i>';
  }
}

// --- Setup Event Listeners ---
function setupEventListeners() {
  // Mobile Nav Toggle
  const mobileToggleBtn = document.getElementById('mobileNavToggleBtn');
  const navLinks = document.querySelector('.nav-links');
  if (mobileToggleBtn && navLinks) {
    mobileToggleBtn.addEventListener('click', () => {
      navLinks.classList.toggle('active');
      const icon = mobileToggleBtn.querySelector('i');
      if (icon) {
        icon.className = navLinks.classList.contains('active') ? 'fas fa-times' : 'fas fa-bars';
      }
    });
  }

  // Category Nav Clicks
  document.querySelectorAll('.nav-link-item').forEach(item => {
    item.addEventListener('click', (e) => {
      e.preventDefault();
      document.querySelectorAll('.nav-link-item').forEach(i => i.classList.remove('active'));
      item.classList.add('active');
      currentCategory = item.dataset.cat || 'all';
      
      // Auto close mobile menu on category click
      if (navLinks && navLinks.classList.contains('active')) {
        navLinks.classList.remove('active');
        const icon = mobileToggleBtn?.querySelector('i');
        if (icon) icon.className = 'fas fa-bars';
      }

      renderMainNewsGrid();
    });
  });

  // Search Input
  const searchInput = document.getElementById('searchInput');
  if (searchInput) {
    searchInput.addEventListener('input', () => {
      renderMainNewsGrid();
    });
  }

  // Modal Overlay Close on background click
  const modal = document.getElementById('articleModal');
  if (modal) {
    modal.addEventListener('click', (e) => {
      if (e.target === modal) closeArticleModal();
    });
  }
}

// Initialize on DOM ready
document.addEventListener('DOMContentLoaded', () => {
  initApp();
  renderNewsPortal();
});

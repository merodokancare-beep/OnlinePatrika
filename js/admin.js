/* ==========================================================================
   ADMIN DASHBOARD APP LOGIC ( समाचार प्रशासन ड्यासबोर्ड )
   ========================================================================== */

let adminLang = localStorage.getItem('patrika_lang') || 'np';
let adminTheme = localStorage.getItem('patrika_theme') || 'dark';
let articles = [];

function initAdmin() {
  // Load data
  const stored = localStorage.getItem('patrika_articles');
  if (stored) {
    try {
      articles = JSON.parse(stored);
    } catch(e) {
      articles = INITIAL_ARTICLES;
    }
  } else {
    articles = INITIAL_ARTICLES;
  }

  // Set Theme & Language
  document.documentElement.setAttribute('data-theme', adminTheme);
  switchAdminLang(adminLang);

  // Render Stats & Table
  renderAdminStats();
  renderArticlesTable();

  // Setup Form Submission
  setupAdminForm();
}

function switchAdminLang(lang) {
  adminLang = lang;
  localStorage.setItem('patrika_lang', lang);
  document.body.setAttribute('lang', lang);

  // Update active toggle buttons
  document.querySelectorAll('.lang-btn').forEach(btn => {
    btn.classList.toggle('active', btn.dataset.lang === lang);
  });

  // Update data-i18n strings
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

  renderArticlesTable();
}

function getNestedTranslation(obj, path) {
  return path.split('.').reduce((prev, curr) => (prev && prev[curr] !== undefined) ? prev[curr] : null, obj);
}

// --- Render Admin Dashboard Stats ---
function renderAdminStats() {
  const totalEl = document.getElementById('statTotalArticles');
  const viewsEl = document.getElementById('statTotalViews');
  const breakingEl = document.getElementById('statBreakingCount');

  if (totalEl) totalEl.textContent = articles.length;
  
  if (viewsEl) {
    const totalViews = articles.reduce((sum, a) => sum + (a.views || 0), 0);
    viewsEl.textContent = totalViews.toLocaleString();
  }

  if (breakingEl) {
    const breakingCount = articles.filter(a => a.isBreaking).length;
    breakingEl.textContent = breakingCount;
  }
}

// --- Render Articles Table ---
function renderArticlesTable() {
  const tbody = document.getElementById('adminArticlesTableBody');
  if (!tbody) return;

  if (articles.length === 0) {
    tbody.innerHTML = `<tr><td colspan="7" style="text-align:center; padding: 20px; color: var(--text-muted);">कुनै समाचार भेटिएन।</td></tr>`;
    return;
  }

  let html = '';
  articles.forEach((art, index) => {
    const title = art.title[adminLang] || art.title.np;
    const catName = TRANSLATIONS[adminLang].categories[art.category] || art.category;

    html += `
      <tr>
        <td><strong>#${index + 1}</strong></td>
        <td><img src="${art.image}" alt="Img" class="table-img" /></td>
        <td>
          <div style="font-weight:700; max-width: 320px; overflow: hidden; text-overflow: ellipsis; white-space: nowrap;">
            ${title}
          </div>
          <small style="color: var(--text-muted);">${art.author}</small>
        </td>
        <td><span class="badge-status badge-published">${catName}</span></td>
        <td>
          ${art.isBreaking ? '<span class="badge-status badge-breaking-item">ताजा खबर (Breaking)</span>' : '<span style="color:var(--text-muted);">सामान्य</span>'}
        </td>
        <td><i class="far fa-eye"></i> ${art.views || 0}</td>
        <td>
          <div style="display: flex; gap: 6px;">
            <button class="btn-action-icon" title="Toggle Breaking" onclick="toggleBreakingArticle('${art.id}')">
              <i class="fas fa-bolt" style="color: ${art.isBreaking ? 'var(--primary-red)' : 'var(--text-muted)'}"></i>
            </button>
            <button class="btn-action-icon" title="Delete" onclick="deleteArticle('${art.id}')">
              <i class="fas fa-trash-alt" style="color: #EF233C;"></i>
            </button>
          </div>
        </td>
      </tr>
    `;
  });

  tbody.innerHTML = html;
}

// --- Form Handling ---
function setupAdminForm() {
  const form = document.getElementById('newsUploadForm');
  const fileInput = document.getElementById('localImgFile');

  // Handle local image file preview generator
  if (fileInput) {
    fileInput.addEventListener('change', (e) => {
      const file = e.target.files[0];
      if (file) {
        const reader = new FileReader();
        reader.onload = function(evt) {
          document.getElementById('featureImgUrl').value = evt.target.result;
          showToast(adminLang === 'np' ? 'फोटो अपलोड गरियो!' : 'Image loaded successfully!');
        };
        reader.readAsDataURL(file);
      }
    });
  }

  if (form) {
    form.addEventListener('submit', (e) => {
      e.preventDefault();

      const titleNp = document.getElementById('titleNp').value.trim();
      const titleEn = document.getElementById('titleEn').value.trim() || titleNp;
      const excerptNp = document.getElementById('excerptNp').value.trim();
      const excerptEn = document.getElementById('excerptEn').value.trim() || excerptNp;
      const contentNp = document.getElementById('contentNp').value.trim();
      const contentEn = document.getElementById('contentEn').value.trim() || contentNp;
      const category = document.getElementById('newsCategory').value;
      let featureImg = document.getElementById('featureImgUrl').value.trim();
      const isBreaking = document.getElementById('isBreakingCheck').checked;
      const isFeatured = document.getElementById('isFeaturedCheck').checked;
      const author = document.getElementById('authorName').value.trim() || "अनलाइन पत्रिका / Online Patrika";

      if (!titleNp || !contentNp) {
        showToast(adminLang === 'np' ? 'कृपया नेपाली शीर्षक र विवरण भर्नुहोस्' : 'Please fill Nepali title and content fields', 'error');
        return;
      }

      if (!featureImg) {
        featureImg = "https://images.unsplash.com/photo-1504711434969-e33886168f5c?q=80&w=800&auto=format&fit=crop";
      }

      const adDate = new Date();
      const adFormattedEn = adDate.toLocaleDateString('en-US', { month: 'long', day: 'numeric', year: 'numeric' });

      // Create New Article Object
      const newArticle = {
        id: "art-" + Date.now(),
        category: category,
        isBreaking: isBreaking,
        isFeatured: isFeatured,
        views: 0,
        author: author,
        dateBs: "२०८३ श्रावण २४, शनिबार",
        dateAd: adFormattedEn,
        image: featureImg,
        title: { np: titleNp, en: titleEn },
        excerpt: { np: excerptNp, en: excerptEn },
        content: { np: contentNp, en: contentEn }
      };

      // If set as featured, remove featured from others
      if (isFeatured) {
        articles.forEach(a => a.isFeatured = false);
      }

      // Unshift to top of list
      articles.unshift(newArticle);

      // Save to localStorage
      localStorage.setItem('patrika_articles', JSON.stringify(articles));

      // Reset form
      form.reset();

      // Refresh UI
      renderAdminStats();
      renderArticlesTable();

      showToast(adminLang === 'np' ? 'नयाँ समाचार सफलतापुर्वक प्रकाशित गरियो!' : 'Article published successfully!');
    });
  }
}

// --- Toggle Breaking News ---
function toggleBreakingArticle(id) {
  const art = articles.find(a => a.id === id);
  if (art) {
    art.isBreaking = !art.isBreaking;
    localStorage.setItem('patrika_articles', JSON.stringify(articles));
    renderAdminStats();
    renderArticlesTable();
    showToast(adminLang === 'np' ? 'ताजा खबर स्थिति परिमार्जन गरियो' : 'Breaking news status updated');
  }
}

// --- Delete Article ---
function deleteArticle(id) {
  const confirmMsg = TRANSLATIONS[adminLang].admin.deleteConfirm;
  if (confirm(confirmMsg)) {
    articles = articles.filter(a => a.id !== id);
    localStorage.setItem('patrika_articles', JSON.stringify(articles));
    renderAdminStats();
    renderArticlesTable();
    showToast(adminLang === 'np' ? 'समाचार हटाइयो' : 'Article deleted');
  }
}

// --- Preset Image Selector Helper ---
function selectPresetImage(url) {
  document.getElementById('featureImgUrl').value = url;
  showToast(adminLang === 'np' ? 'फोटो चयन गरियो' : 'Preset image selected');
}

// --- Toast System ---
function showToast(message, type = 'success') {
  let container = document.getElementById('toastContainer');
  if (!container) {
    container = document.createElement('div');
    container.id = 'toastContainer';
    container.className = 'toast-container';
    document.body.appendChild(container);
  }

  const toast = document.createElement('div');
  toast.className = 'toast';
  toast.innerHTML = `<i class="fas ${type === 'success' ? 'fa-check-circle' : 'fa-exclamation-circle'}" style="color: ${type === 'success' ? '#10B981' : '#EF233C'}; font-size: 1.2rem;"></i> <span>${message}</span>`;

  container.appendChild(toast);

  setTimeout(() => {
    toast.remove();
  }, 3500);
}

// Initialize on DOM ready
document.addEventListener('DOMContentLoaded', () => {
  initAdmin();
});

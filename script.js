// ===== Translations =====
const translations = {
  ar: {
    name: 'ياسر الحربي',
    bio: 'مبرمج ومهتم بالتقنية',
    twitter_title: 'تويتر / إكس',
    support_title: 'دعم مادي',
    footer: '© 2026 YASSER ALHARBI',
    langLabel: 'EN',
  },
  en: {
    name: 'YASSER ALHARBI',
    bio: 'Developer & Tech Enthusiast',
    twitter_title: 'Twitter / X',
    support_title: 'Support Me',
    footer: '© 2026 YASSER ALHARBI',
    langLabel: 'ع',
  },
};

// ===== State =====
let currentLang = 'ar';

// ===== DOM =====
const html = document.documentElement;
const langToggle = document.getElementById('langToggle');
const langLabel = document.getElementById('langLabel');

// ===== Functions =====
function applyLanguage(lang) {
  currentLang = lang;
  const t = translations[lang];

  // Set direction and lang attribute
  html.setAttribute('lang', lang);
  html.setAttribute('dir', lang === 'ar' ? 'rtl' : 'ltr');

  // Update toggle button position
  if (lang === 'ar') {
    langToggle.style.right = '20px';
    langToggle.style.left = 'auto';
  } else {
    langToggle.style.left = '20px';
    langToggle.style.right = 'auto';
  }

  // Update all translatable elements
  document.querySelectorAll('[data-i18n]').forEach((el) => {
    const key = el.getAttribute('data-i18n');
    if (t[key]) {
      el.textContent = t[key];
    }
  });

  // Update toggle label
  langLabel.textContent = t.langLabel;

  // Save preference
  localStorage.setItem('preferred-lang', lang);
}

function toggleLanguage() {
  applyLanguage(currentLang === 'ar' ? 'en' : 'ar');
}

function detectLanguage() {
  // Check saved preference first
  const saved = localStorage.getItem('preferred-lang');
  if (saved && translations[saved]) {
    return saved;
  }

  // Auto-detect from browser
  const browserLang = navigator.language || navigator.userLanguage || '';
  return browserLang.startsWith('ar') ? 'ar' : 'en';
}

// ===== Init =====
langToggle.addEventListener('click', toggleLanguage);
applyLanguage(detectLanguage());

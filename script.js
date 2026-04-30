// ===== Translations =====
const translations = {
  ar: {
    name: 'ياسر الحربي',
    twitter_title: 'تويتر / إكس',
    telegram_title: 'تيليجرام',
    github_title: 'قيت هوب',
    support_title: 'دعم مادي',
    footer: '© 2026 YASSER ALHARBI',
    langLabel: 'EN',
    tutorials_title: 'شروحات',
    real_debrid_tutorial: 'شرح Real-Debrid و Stremio',
    aiostreams_tutorial: 'شرح إضافة AIOStreams',
    subtitles_tutorial: 'حل مشاكل الترجمة',
    posters_tutorial: 'تعريب البوسترات',
    youtube_tutorial: 'إضافة اليوتيوب',
    comet_tutorial: 'شرح إضافة Comet',
    lg_tv_tutorial: 'شرح شاشات LG',
    works_title: 'أعمالي',
    letterstremio_title: 'LetterStremio',
    letterstremio_desc: 'إضافة تتيح لك إضافة زر "مشاهدة على Stremio" في موقع Letterboxd.',
    letternuvio_title: 'LetterNuvio',
    letternuvio_desc: 'مزامنة مكتبة Letterboxd مع تطبيق Nuvio.',
    privacy_title: 'سياسة الخصوصية',
    privacy_desc: 'اقرأ التزامنا بحماية بياناتك وخصوصيتك.',
  },
  en: {
    name: 'YASSER ALHARBI',
    twitter_title: 'Twitter / X',
    telegram_title: 'Telegram',
    github_title: 'GitHub',
    support_title: 'Support Me',
    footer: '© 2026 YASSER ALHARBI',
    langLabel: 'ع',
    tutorials_title: 'Tutorials',
    real_debrid_tutorial: 'Real-Debrid & Stremio Guide',
    aiostreams_tutorial: 'AIOStreams Addon Guide',
    subtitles_tutorial: 'Subtitles & Sync Guide',
    posters_tutorial: 'Arabic Posters Guide',
    youtube_tutorial: 'YouTube Addon Guide',
    comet_tutorial: 'Comet Addon Guide',
    lg_tv_tutorial: 'LG TV Stremio Setup',
    works_title: 'My Projects',
    letterstremio_title: 'LetterStremio',
    letterstremio_desc: 'Adds a "Watch on Stremio" button to Letterboxd pages.',
    letternuvio_title: 'LetterNuvio',
    letternuvio_desc: 'Sync your Letterboxd library with Nuvio app.',
    privacy_title: 'Privacy Policy',
    privacy_desc: 'Read our commitment to your data security and privacy.',
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

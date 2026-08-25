/**
 * KISANSAMRIDHI LLP - LANGUAGE SWITCHER (HINDI / ENGLISH)
 */

let currentLang = 'en';

function setLanguage(lang) {
  currentLang = lang;
  localStorage.setItem('kisansamridhi_lang', lang);

  const btnEn = document.getElementById('btn-lang-en');
  const btnHi = document.getElementById('btn-lang-hi');

  if (btnEn) btnEn.classList.toggle('active', lang === 'en');
  if (btnHi) btnHi.classList.toggle('active', lang === 'hi');

  // Update all DOM elements with data-en & data-hi attributes
  document.querySelectorAll('[data-en]').forEach((el) => {
    const text = el.getAttribute(`data-${lang}`);
    if (text) {
      el.innerHTML = text;
    }
  });

  // Re-calculate dosage text if calculator exists
  if (typeof runAgriCalculator === 'function') {
    runAgriCalculator();
  }
}

// Load user saved language on initialization
document.addEventListener('DOMContentLoaded', () => {
  const savedLang = localStorage.getItem('kisansamridhi_lang') || 'en';
  setLanguage(savedLang);
});

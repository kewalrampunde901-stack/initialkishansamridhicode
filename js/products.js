/**
 * KISANSAMRIDHI LLP - PRODUCT CATALOG & INQUIRY HANDLER
 */

function filterProducts(category, clickedElement) {
  // Update Tab Styling
  document.querySelectorAll('.cat-tab').forEach((tab) => {
    tab.classList.remove('active');
  });

  if (clickedElement) {
    clickedElement.classList.add('active');
  }

  // Filter Product Cards
  const cards = document.querySelectorAll('.product-card');
  cards.forEach((card) => {
    const cardCategory = card.getAttribute('data-category');
    if (category === 'all' || cardCategory === category) {
      card.style.display = 'flex';
      card.classList.add('reveal');
      setTimeout(() => card.classList.add('active'), 50);
    } else {
      card.style.display = 'none';
      card.classList.remove('active');
    }
  });
}

function handleContactSubmit(e) {
  e.preventDefault();

  const name = document.getElementById('custName')?.value.trim() || '';
  const phone = document.getElementById('custPhone')?.value.trim() || '';
  const type = document.getElementById('custType')?.value || 'General Inquiry';
  const city = document.getElementById('custCity')?.value.trim() || 'N/A';
  const msg = document.getElementById('custMsg')?.value.trim() || 'N/A';

  const text = `*New Website Inquiry - KisanSamridhi LLP*%0A%0A` +
    `*Customer Name:* ${encodeURIComponent(name)}%0A` +
    `*Phone Number:* ${encodeURIComponent(phone)}%0A` +
    `*Requirement:* ${encodeURIComponent(type)}%0A` +
    `*Village / District:* ${encodeURIComponent(city)}%0A` +
    `*Details:* ${encodeURIComponent(msg)}%0A%0A` +
    `_Sent via kisansamridhi.in_`;

  const waUrl = `https://wa.me/919407137359?text=${text}`;
  window.open(waUrl, '_blank');
}

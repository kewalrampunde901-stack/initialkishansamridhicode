/**
 * KISANSAMRIDHI LLP - AGRI SEED & FERTILIZER CALCULATOR
 */

const cropStandards = {
  soybean: {
    nameEn: 'Soybean (सोयाबीन)',
    nameHi: 'सोयाबीन (Soybean)',
    seedPerAcre: 30,
    dapPerAcre: 50,
    ureaPerAcre: 25,
    potashPerAcre: 20
  },
  wheat: {
    nameEn: 'Wheat (गेहूं)',
    nameHi: 'गेहूं (Wheat)',
    seedPerAcre: 40,
    dapPerAcre: 55,
    ureaPerAcre: 60,
    potashPerAcre: 25
  },
  paddy: {
    nameEn: 'Paddy / Rice (धान)',
    nameHi: 'धान (Paddy)',
    seedPerAcre: 15,
    dapPerAcre: 50,
    ureaPerAcre: 55,
    potashPerAcre: 30
  },
  maize: {
    nameEn: 'Maize / Corn (मक्का)',
    nameHi: 'मक्का (Corn)',
    seedPerAcre: 8,
    dapPerAcre: 60,
    ureaPerAcre: 65,
    potashPerAcre: 30
  },
  gram: {
    nameEn: 'Gram / Chana (चना)',
    nameHi: 'चना (Gram)',
    seedPerAcre: 30,
    dapPerAcre: 45,
    ureaPerAcre: 15,
    potashPerAcre: 20
  },
  cotton: {
    nameEn: 'Cotton (कपास)',
    nameHi: 'कपास (Cotton)',
    seedPerAcre: 2,
    dapPerAcre: 50,
    ureaPerAcre: 50,
    potashPerAcre: 35
  }
};

function runAgriCalculator() {
  const cropSelect = document.getElementById('calcCrop');
  const areaInput = document.getElementById('calcArea');

  if (!cropSelect || !areaInput) return;

  const cropKey = cropSelect.value;
  const area = Math.max(0.5, parseFloat(areaInput.value) || 1);
  const crop = cropStandards[cropKey] || cropStandards.soybean;

  const totalSeed = Math.round(crop.seedPerAcre * area);
  const totalDap = Math.round(crop.dapPerAcre * area);
  const totalUrea = Math.round(crop.ureaPerAcre * area);
  const totalPotash = Math.round(crop.potashPerAcre * area);

  const activeLang = typeof currentLang !== 'undefined' ? currentLang : 'en';
  const cropDisplayName = activeLang === 'hi' ? crop.nameHi : crop.nameEn;

  const displayEl = document.getElementById('displayCropName');
  if (displayEl) {
    displayEl.textContent = `${cropDisplayName} (${area} Acre)`;
  }

  const seedEl = document.getElementById('resSeed');
  const dapEl = document.getElementById('resDAP');
  const ureaEl = document.getElementById('resUrea');
  const potashEl = document.getElementById('resPotash');

  if (seedEl) seedEl.textContent = `${totalSeed} kg`;
  if (dapEl) dapEl.textContent = `${totalDap} kg`;
  if (ureaEl) ureaEl.textContent = `${totalUrea} kg`;
  if (potashEl) potashEl.textContent = `${totalPotash} kg`;

  // Update Dynamic WhatsApp Link with prefilled requirement
  const waBtn = document.getElementById('calcWhatsappLink');
  if (waBtn) {
    const waMsg = encodeURIComponent(
      `Namaste KisanSamridhi,\nI used the Agri Dosage Calculator on your website for *${cropDisplayName}* (*${area} Acres*).\n\nEstimated Requirement:\n- Seed: ${totalSeed} kg\n- DAP: ${totalDap} kg\n- Urea: ${totalUrea} kg\n- Potash: ${totalPotash} kg\n\nPlease provide current rates and delivery confirmation.`
    );
    waBtn.href = `https://wa.me/919407137359?text=${waMsg}`;
  }
}

document.addEventListener('DOMContentLoaded', () => {
  runAgriCalculator();
});

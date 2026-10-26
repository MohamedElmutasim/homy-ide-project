// iPhone 18 Pro Interactive Experience
document.addEventListener('DOMContentLoaded', () => {
  // 1. Clock Display Sync
  const clockElement = document.getElementById('clock-display');
  function updateTime() {
    if (!clockElement) return;
    const now = new Date();
    const hours = String(now.getHours()).padStart(2, '0');
    const minutes = String(now.getMinutes()).padStart(2, '0');
    clockElement.textContent = `${hours}:${minutes}`;
  }
  updateTime();
  setInterval(updateTime, 1000);

  // State Management
  let selectedColor = 'natural';
  let selectedColorName = 'Natural Titanium';
  let selectedStorage = '256GB';
  let selectedPrice = '$1,099.00';

  // 2. Finish Selection
  const colorDots = document.querySelectorAll('.color-dot');
  const finishNameEl = document.getElementById('selected-finish-name');
  const deviceBodyEl = document.getElementById('device-body');

  colorDots.forEach((dot) => {
    dot.addEventListener('click', () => {
      colorDots.forEach((d) => d.classList.remove('active'));
      dot.classList.add('active');

      selectedColor = dot.getAttribute('data-color') || 'natural';
      selectedColorName = dot.getAttribute('data-name') || 'Natural Titanium';

      if (finishNameEl) {
        finishNameEl.textContent = selectedColorName;
      }

      if (deviceBodyEl) {
        deviceBodyEl.className = `device-body color-${selectedColor}`;
      }

      updateSummary();
    });
  });

  // 3. Storage Selection
  const storageCards = document.querySelectorAll('.storage-card');

  storageCards.forEach((card) => {
    card.addEventListener('click', () => {
      storageCards.forEach((c) => c.classList.remove('active'));
      card.classList.add('active');

      selectedStorage = card.getAttribute('data-storage') || '256GB';
      const rawPrice = card.getAttribute('data-price') || '$1,099';
      selectedPrice = `${rawPrice}.00`;

      updateSummary();
    });
  });

  // 4. Update Summary Card
  const summaryDeviceEl = document.getElementById('summary-device');
  const summaryPriceEl = document.getElementById('summary-price');

  function updateSummary() {
    if (summaryDeviceEl) {
      summaryDeviceEl.textContent = `iPhone 18 Pro ${selectedStorage} - ${selectedColorName}`;
    }
    if (summaryPriceEl) {
      summaryPriceEl.textContent = selectedPrice;
    }
  }

  // 5. Preorder Button Feedback
  const preorderBtn = document.getElementById('preorder-btn');
  if (preorderBtn) {
    preorderBtn.addEventListener('click', () => {
      const originalText = preorderBtn.textContent;
      preorderBtn.textContent = 'Configuration Saved';
      preorderBtn.style.opacity = '0.8';
      setTimeout(() => {
        preorderBtn.textContent = originalText;
        preorderBtn.style.opacity = '1';
      }, 1800);
    });
  }

  // 6. Scroll Reveal Animation via IntersectionObserver
  const revealElements = document.querySelectorAll('.reveal');
  if ('IntersectionObserver' in window) {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('visible');
            observer.unobserve(entry.target);
          }
        });
      },
      {
        threshold: 0.15,
      }
    );

    revealElements.forEach((el) => observer.observe(el));
  } else {
    revealElements.forEach((el) => el.classList.add('visible'));
  }
});
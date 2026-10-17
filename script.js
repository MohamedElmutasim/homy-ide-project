// Interactive logic for HomyIDE Static App
document.addEventListener('DOMContentLoaded', () => {
  let count = 0;
  const counterEl = document.getElementById('counter-value');
  const actionBtn = document.getElementById('action-btn');

  if (actionBtn && counterEl) {
    actionBtn.addEventListener('click', () => {
      count++;
      counterEl.textContent = count;
      counterEl.style.transform = 'scale(1.2)';
      setTimeout(() => {
        counterEl.style.transform = 'scale(1)';
      }, 150);
    });
  }

  console.log('HomyIDE Static Web App running perfectly!');
});
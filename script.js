const loreGrid = document.querySelector('[data-lore-grid]');

function setCardState(card, reveal, buttons, isOpen) {
  card.classList.toggle('is-open', isOpen);
  reveal.hidden = !isOpen;

  buttons.forEach((button) => {
    button.setAttribute('aria-expanded', String(isOpen));
    if (button.classList.contains('text-button')) {
      button.textContent = isOpen ? 'Close lore' : 'Read lore';
    }
  });
}

if (loreGrid) {
  loreGrid.addEventListener('click', (event) => {
    const trigger = event.target.closest('button[aria-controls]');

    if (!trigger || !loreGrid.contains(trigger)) {
      return;
    }

    const revealId = trigger.getAttribute('aria-controls');
    const reveal = document.getElementById(revealId);
    const card = trigger.closest('.lore-card');

    if (!reveal || !card) {
      return;
    }

    const relatedButtons = card.querySelectorAll(`button[aria-controls="${revealId}"]`);
    const isOpen = reveal.hidden;

    setCardState(card, reveal, relatedButtons, isOpen);
  });
}

document.addEventListener('DOMContentLoaded', function() {
  const searchInput = document.getElementById('tool-search');
  searchInput.addEventListener('input', function() {
    const query = this.value.toLowerCase();
    document.querySelectorAll('#tool-categories section').forEach(section => {
      let match = false;
      section.querySelectorAll('.tool-card-title').forEach(card => {
        const cardText = card.textContent.toLowerCase();
        const cardParent = card.closest('.col-12, .col-sm-6, .col-md-4, .col-lg-3');
        if (cardText.includes(query)) {
          cardParent.style.display = '';
          match = true;
        } else {
          cardParent.style.display = 'none';
        }
      });
      section.style.display = match ? '' : 'none';
    });
  });
}); 
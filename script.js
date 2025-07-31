// في ملف js/script.js
document.querySelectorAll('.character-card').forEach(card => {
    card.addEventListener('click', function() {
        this.classList.toggle('expanded');
    });
});
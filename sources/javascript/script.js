// Navegação dos cards
document.addEventListener('DOMContentLoaded', () => {
	const pageCards = document.querySelectorAll('.card[data-page]');
	pageCards.forEach(card => {
		const target = card.dataset.page;

		card.addEventListener('click', () => {
			if (target) window.location.href = target;
		});

		card.addEventListener('keydown', (e) => {
			if (e.key === 'Enter' || e.key === ' ') {
				e.preventDefault();
				if (target) window.location.href = target;
			}
		});
	});
});


// -----------------------
//        MODAL
// -----------------------

const modal = document.getElementById("modal");
const openBtn = document.getElementById("BotaoLigar");
const closeBtn = document.getElementById("closeBtn");

// Abrir modal
openBtn.addEventListener("click", () => {
    modal.classList.add("show");
});

// Fechar modal pelo X
closeBtn.addEventListener("click", () => {
    modal.classList.remove("show");
});

// Fechar clicando fora
modal.addEventListener("click", (e) => {
    if (e.target === modal) modal.classList.remove("show");
});

// Fechar com ESC
window.addEventListener("keydown", (e) => {
    if (e.key === "Escape") modal.classList.remove("show");
});

// =======================
// Navegação dos Cards
// =======================
document.addEventListener("DOMContentLoaded", () => {
    const pageCards = document.querySelectorAll(".card[data-page]");

    pageCards.forEach(card => {
        const target = card.dataset.page;
        if (!target) return;

        const goToPage = () => window.location.href = target;

        card.addEventListener("click", goToPage);

        card.addEventListener("keydown", (e) => {
            if (e.key === "Enter" || e.key === " ") {
                e.preventDefault();
                goToPage();
            }
        });
    });
});


// =======================
// Modal
// =======================

const modal = document.getElementById("modal");
const openBtn = document.getElementById("BotaoLigar");
const closeBtn = document.getElementById("closeBtn");

// Proteção caso algum elemento não exista
if (modal && openBtn && closeBtn) {

    // Abrir modal
    openBtn.addEventListener("click", () => {
        modal.classList.add("show");
    });

    // Fechar modal pelo X
    closeBtn.addEventListener("click", () => {
        modal.classList.remove("show");
    });

    // Fechar clicando fora do conteúdo
    modal.addEventListener("click", (e) => {
        if (e.target === modal) modal.classList.remove("show");
    });

    // Fechar com ESC
    window.addEventListener("keydown", (e) => {
        if (e.key === "Escape") modal.classList.remove("show");
    });

} else {
    console.warn("⚠️ Elementos do modal não encontrados no DOM.");
}

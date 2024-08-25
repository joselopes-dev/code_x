// Seleção dos elementos do carrossel
const carousel = document.querySelector('.carousel');
const cards = document.querySelectorAll('.card');
const prevBtn = document.querySelector('.prev-btn');
const nextBtn = document.querySelector('.next-btn');

// Configurações iniciais
let currentIndex = 0;
const cardWidth = cards[0].offsetWidth + 20; // Inclui a margem para calcular a largura total do card

// Função para atualizar a posição do carrossel
function updateCarousel() {
    carousel.style.transform = `translateX(-${currentIndex * cardWidth}px)`;
}

// Botão de próximo
nextBtn.addEventListener('click', () => {
    if (currentIndex < cards.length - 4) { // Limite para não exceder os cards visíveis
        currentIndex++;
        updateCarousel();
    }
});

// Botão de anterior
prevBtn.addEventListener('click', () => {
    if (currentIndex > 0) {
        currentIndex--;
        updateCarousel();
    }
});

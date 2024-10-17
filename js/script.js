document.addEventListener('DOMContentLoaded', function() {
    const hamburger = document.getElementById('hamburger');
    const navLinks = document.getElementById('nav-links');

    hamburger.addEventListener('click', () => {
        navLinks.classList.toggle('active');
    });

    const gliderElement = document.querySelector('.glider');
    const glider = new Glider(gliderElement, {
        slidesToShow: 1,
        slidesToScroll: 1,
        dots: '.dots',
        arrows: {
            prev: '.glider-prev',
            next: '.glider-next'
        },
        responsive: [
            {
                breakpoint: 768,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 1
                }
            },
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 1
                }
            }
        ]
    });

    // Função para mover o carrossel automaticamente
    function autoplay() {
        let autoplayInterval = setInterval(() => {
            if (gliderElement.scrollLeft + gliderElement.clientWidth >= gliderElement.scrollWidth) {
                glider.scrollItem(0); // Volta ao primeiro slide
            } else {
                glider.scrollItem(glider.page + 1); // Avança para o próximo slide
            }
        }, 3000); // Tempo em milissegundos (3000ms = 3s)

        // Pausar autoplay ao interagir com o carrossel
        gliderElement.addEventListener('mouseover', () => clearInterval(autoplayInterval));
        gliderElement.addEventListener('mouseout', () => autoplayInterval = setInterval(() => {
            if (gliderElement.scrollLeft + gliderElement.clientWidth >= gliderElement.scrollWidth) {
                glider.scrollItem(0);
            } else {
                glider.scrollItem(glider.page + 1);
            }
        }, 3000));
    }

    autoplay();
});
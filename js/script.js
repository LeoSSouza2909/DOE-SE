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

function toggleAnswer(index) {
    const answers = document.querySelectorAll('.answer-one, .answer-two');
    
    answers.forEach((answer, i) => {
        if (i === index) {
            answer.style.display = answer.style.display === 'block' ? 'none' : 'block';
        } else {
            answer.style.display = 'none';
        }
    });
}

document.addEventListener('DOMContentLoaded', function() {
    const btnLogin = document.getElementById('btn-login');
    const registerLink = document.getElementById('register-link');
    const registerPFButton = document.getElementById('register-pf');
    const registerPJButton = document.getElementById('register-pj');
    const backToChoicePF = document.getElementById('back-to-choice-pf');
    const backToChoicePJ = document.getElementById('back-to-choice-pj');
    const loginSubmit = document.getElementById('login-submit');
    const profileMenu = document.getElementById('profile-menu');
    const profileDropdown = document.getElementById('profile-dropdown');
    const accountLink = document.getElementById('account-link');
    const logoutLink = document.getElementById('logout-link');
    const accountModal = document.getElementById('account-modal');
    const modals = document.querySelectorAll('.pagecpf');
    const closeModalButtons = document.querySelectorAll('.close-modal');

    // Fictitious authentication details
    const validEmail = "user@exemplo.com";
    const validPassword = "admin123";

    function showModal(modalId) {
        document.getElementById(modalId).style.display = 'flex';
    }

    function hideModals() {
        modals.forEach(modal => modal.style.display = 'none');
    }

    btnLogin.addEventListener('click', () => {
        showModal('login-modal');
    });

    loginSubmit.addEventListener('click', () => {
        const email = document.getElementById('login-email').value;
        const password = document.getElementById('login-password').value;
        
        if (email === validEmail && password === validPassword) {
            alert('Login bem-sucedido!');
            hideModals();
            profileMenu.classList.remove('hidden');
            btnLogin.classList.add('hidden');
        } else {
            alert('Email ou senha incorretos.');
        }
    });

    profileMenu.addEventListener('click', () => {
        profileDropdown.classList.toggle('hidden');
    });

    accountLink.addEventListener('click', () => {
        hideModals();
        showModal('account-modal');
        document.getElementById('account-details').innerText = "Detalhes da conta fictícia.";
    });

    logoutLink.addEventListener('click', () => {
        profileMenu.classList.add('hidden');
        btnLogin.classList.remove('hidden');
        hideModals();
    });

    registerLink.addEventListener('click', (event) => {
        event.preventDefault();
        hideModals();
        showModal('register-choice-modal');
    });

    registerPFButton.addEventListener('click', () => {
        hideModals();
        showModal('register-pf-modal');
    });

    registerPJButton.addEventListener('click', () => {
        hideModals();
        showModal('register-pj-modal');
    });

    backToChoicePF.addEventListener('click', () => {
        hideModals();
        showModal('register-choice-modal');
    });

    backToChoicePJ.addEventListener('click', () => {
        hideModals();
        showModal('register-choice-modal');
    });

    closeModalButtons.forEach(button => {
        button.addEventListener('click', hideModals);
    });

    window.addEventListener('click', (event) => {
        if (event.target.classList.contains('pagecpf')) {
            hideModals();
        }
    });
});


const hamburger = document.querySelector('.hamburger-icon');
const menu = document.querySelector('.menu-wrapper');

hamburger.addEventListener('click', () => {
    menu.classList.toggle('active');
});

// click outside to close
document.addEventListener('click', (e) => {

    // if click is inside hamburger OR menu -> ignore
    if (hamburger.contains(e.target) || menu.contains(e.target)) return;

    // else remove
    menu.classList.remove('active');
});

const swiper = new Swiper(".designed-slider", {
    loop: true,
    spaceBetween: 20,
    slidesPerView: 4,
    navigation: {
    nextEl: ".custom-button-next",
    prevEl: ".custom-button-prev",
    },
    breakpoints: {
    320: { slidesPerView: 2, spaceBetween: 10 },
    576: { slidesPerView: 2 },
    768: { slidesPerView: 3 },
    1024: { slidesPerView: 4 }
    }
});
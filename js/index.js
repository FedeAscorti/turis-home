// Language toggle script
// Language toggle script
document.getElementById('language-switch').addEventListener('click', function() {
    const currentLanguage = this.innerText;
    this.innerText = currentLanguage === 'ES' ? 'EN' : 'ES';
    this.classList.add('scale-animation');
    setTimeout(() => {
        this.classList.remove('scale-animation');
    }, 300);
});
// Swiper para Top Destinos
const topDestinationsSwiper = new Swiper('.myTopDestinationsSwiper', {
    loop: true,
    slidesPerView: 'auto',
    spaceBetween: 30,
    centeredSlides: true,
    autoplay: {
        delay: 2500,
        disableOnInteraction: false,
    },
    breakpoints: {
        320: { slidesPerView: 1 },
        768: { slidesPerView: 2 },
        1024: { slidesPerView: 3 },
    },
    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
    },
});

const swiper = new Swiper('.mySwiper', {
    slidesPerView: 3,
    spaceBetween: 30,
    loop: true,
    autoplay: {
        delay: 3000,
        disableOnInteraction: false,
    },
    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
    },
    breakpoints: {
        320: { slidesPerView: 1, spaceBetween: 10 },
        768: { slidesPerView: 2, spaceBetween: 20 },
        1024: { slidesPerView: 3, spaceBetween: 30 },
    },
});
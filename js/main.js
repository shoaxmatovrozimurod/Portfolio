document.addEventListener('DOMContentLoaded', () => {
    const burgerBtn = document.getElementById('burgerBtn');
    const headerNav = document.getElementById('headerNav');
    const navLinks = document.querySelectorAll('.header-link');

    // Burger bosilganda menyuni ochish va yopish
    burgerBtn.addEventListener('click', () => {
        burgerBtn.classList.toggle('active');
        headerNav.classList.toggle('active');
    });

    // Menyu havolalaridan biri bosilganda menyuni avtomatik yopish
    navLinks.forEach(link => {
        link.addEventListener('click', () => {
            burgerBtn.classList.remove('active');
            headerNav.classList.remove('active');
        });
    });
});
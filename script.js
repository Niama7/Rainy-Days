const menuToggle = document.querySelector('.menu-toggle');
const menu = document.querySelector('.menu');

menuToggle.addEventListener('click', () => {
    menu.classList.toggle('show'); // Toggle menu visibility
    menuToggle.classList.toggle('open'); // Toggle the "open" class to switch icon
});

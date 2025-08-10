document.addEventListener('DOMContentLoaded', () => {
    const menuToggle = document.querySelector('.menu-toggle');
    const navLinks = document.querySelector('.nav-links');
    const navItems = navLinks.querySelector('a');

    menuToggle.addEventListener('click', () => {
        navLinks.classList.toggle('show');

        // Change symbol 
        if (navLinks.classList.contains('show')) {
            menuToggle.innerHTML = '&times';
            menuToggle.style.fontSize = '3rem';
        } else {
            menuToggle.innerHTML = '&#9776';
        }
    });

    navItems.forEach(link => {
        link.addEventListener('click', () => {
            navLinks.classList.remove('show');
            menuToggle.innerHTML = '&#9776';
        });

    });

    document.querySelector('.contact-form').addEventListener('submit', function (e) {
        e.preventDefault();
        alert("Thanks for contacting us! We'll reply soon.");
        this.reset();
    });
});

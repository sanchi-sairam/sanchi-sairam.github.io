function toggleMenu() {
    const navLinks = document.querySelector('.nav-links');
    navLinks.classList.toggle('nav-open');
}

document.addEventListener('DOMContentLoaded', () => {
    const form = document.querySelector('.contact-form');
    form.addEventListener('submit', function(e) {
        e.preventDefault();
        alert("Thank you for reaching out! You'll get a reply soon.");
        form.reset();
    });
});

// For Responsive Navigation
window.addEventListener('resize', () => {
    const width = window.innerWidth;
    const navLinks = document.querySelector('.nav-links');
    if (width > 700) navLinks.classList.remove('nav-open');
});

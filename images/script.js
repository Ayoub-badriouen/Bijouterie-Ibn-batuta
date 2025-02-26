
// Toggle Sidebar for Mobile
function toggleSidebar() {
    const sidebar = document.getElementById("sidebar");
    const overlay = document.getElementById("overlay");
    sidebar.classList.toggle("open");
    overlay.classList.toggle("visible");
}

function closeSidebar() {
    document.getElementById("sidebar").classList.remove("open");
    document.getElementById("overlay").classList.remove("visible");
}

// Slideshow functionality
let slideIndex = 0;

function showSlides() {
    const slides = document.querySelectorAll('.slide');
    const dots = document.querySelectorAll('.dot');

    slides.forEach((slide, index) => {
        slide.style.display = index === slideIndex ? 'block' : 'none';
    })

    dots.forEach((dot, index) => {
        dot.classList.toggle('active', index === slideIndex);
    });

    slideIndex = (slideIndex + 1) % slides.length;
    setTimeout(showSlides, 3000); // Change slide every 3 seconds
}

document.addEventListener('DOMContentLoaded', showSlides);


    function toggleDropdown(menuId) {
        const menu = document.getElementById(menuId);
        menu.style.display = menu.style.display === 'block' ? 'none' : 'block';
    }

    // Close dropdown when clicking outside
    document.addEventListener('click', function(event) {
        const productsDropdown = document.getElementById('dropdown-menu');
        const contactDropdown = document.getElementById('contact-dropdown-menu');

        if (!event.target.closest('.nav-right')) {
            productsDropdown.style.display = 'none';
            contactDropdown.style.display = 'none';
        }
    });
let currentSlide = 0;
const slides = document.querySelectorAll('.slide');
const dots = document.querySelectorAll('.dot');

function showSlide(index) {
    const slideshow = document.querySelector('.slideshow');
    currentSlide = (index + slides.length) % slides.length;
    slideshow.style.transform = `translateX(-${currentSlide * 100}%)`;
    dots.forEach((dot, idx) => {
        dot.classList.toggle('active', idx === currentSlide);
    });
}

document.querySelector('.prev').addEventListener('click', () => showSlide(currentSlide - 1));
document.querySelector('.next').addEventListener('click', () => showSlide(currentSlide + 1));
dots.forEach((dot, idx) => dot.addEventListener('click', () => showSlide(idx)));

// Initialize
showSlide(currentSlide);

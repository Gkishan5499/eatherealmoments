/* components.js */

document.addEventListener("DOMContentLoaded", function() {
    loadHeader();
    loadFooter();
    initScrollEffect();
});

function loadHeader() {
    const headerHTML = `
        <nav>
            <div class="logo">ETHEREAL MOMENTS</div>
            <div class="menu-icon" onclick="toggleMenu()">☰</div>
            <ul class="nav-links" id="nav-list">
                <li><a href="index.html">Home</a></li>
                <li><a href="about.html">About</a></li>
                <li><a href="gallery.html">Gallery</a></li>
                <li><a href="booking.html">Booking</a></li>
                <li><a href="contact.html">Contact</a></li>
            </ul>
        </nav>
    `;

    // Inject header
    const headerElement = document.getElementById('common-header');
    if(headerElement) {
        headerElement.innerHTML = headerHTML;
        setActiveLink();
    }
}

function loadFooter() {
    const footerHTML = `
        <footer>
            <p>&copy;2025 Ethereal Moments Photography & Designed and Developed by <a href="#" onClick="window.open('http://www.gautamstack.com', '_blank')">GautamStack Digital Agecny </a>.</p>
        </footer>
    `;

    // Inject footer
    const footerElement = document.getElementById('common-footer');
    if(footerElement) {
        footerElement.innerHTML = footerHTML;
    }
}

function setActiveLink() {
    // Get current filename (e.g., 'about.html')
    let currentPage = window.location.pathname.split("/").pop();
    
    // If empty (root folder), assume index.html
    if (currentPage === "") currentPage = "index.html";

    const links = document.querySelectorAll('#nav-list a');

    links.forEach(link => {
        if (link.getAttribute('href') === currentPage) {
            link.classList.add('active');
        }
    });
}

function toggleMenu() {
    const nav = document.querySelector('.nav-links');
    nav.classList.toggle('active');
}

function initScrollEffect() {
    const navbar = document.querySelector('nav');
    if (navbar) {
        window.addEventListener('scroll', function() {
            if (window.scrollY > 50) {
                navbar.classList.add('scrolled');
            } else {
                navbar.classList.remove('scrolled');
            }
        });
    }
}
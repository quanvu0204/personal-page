document.addEventListener('DOMContentLoaded', () => {
    // Smooth scrolling for navigation links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault(); // Prevent default anchor click behavior

            const targetId = this.getAttribute('href');
            const targetElement = document.querySelector(targetId);

            if (targetElement) {
                // Scroll to the target element smoothly
                window.scrollTo({
                    top: targetElement.offsetTop - document.querySelector('header').offsetHeight, // Adjust for fixed header height
                    behavior: 'smooth'
                });
            }
        });
    });

    // Add more JavaScript functionality here as needed

    // Example: Simple console log when the page is fully loaded
    console.log('Portfolio page loaded!');

    // Example: You could add logic here for:
    // - Form submission (requires backend)
    // - Animations on scroll (e.g., using Intersection Observer API)
    // - Modals or lightboxes for projects
    // - Dynamic content loading
});

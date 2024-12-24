// Sticky Navbar with hover effect
document.addEventListener("DOMContentLoaded", function() {
    const links = document.querySelectorAll('.nav-link');
    links.forEach(link => {
        if (link.href === window.location.href) {
            link.classList.add('active');
        }
    });

    // Toggle dropdown visibility for login/signup
    const userButton = document.querySelector('.user-button');
    const dropdown = document.querySelector('.dropdown');

    userButton.addEventListener('mouseover', function() {
        dropdown.style.display = 'block';
    });

    userButton.addEventListener('mouseout', function() {
        dropdown.style.display = 'none';
    });
});



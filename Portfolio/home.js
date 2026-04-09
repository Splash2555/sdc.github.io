        // Hamburger Menu Toggle
        const hamburger = document.getElementById('hamburger');
        const mobileMenu = document.getElementById('mobileMenu');

        hamburger.addEventListener('click', () => {
            mobileMenu.classList.toggle('active');
            
            // Change icon between bars and X
            if (mobileMenu.classList.contains('active')) {
                hamburger.innerHTML = '<i class="fa-solid fa-xmark"></i>';
            } else {
                hamburger.innerHTML = '<i class="fa-solid fa-bars"></i>';
            }
        });

        // Close mobile menu when clicking a link
        const mobileLinks = mobileMenu.querySelectorAll('a');
        mobileLinks.forEach(link => {
            link.addEventListener('click', () => {
                mobileMenu.classList.remove('active');
                hamburger.innerHTML = '<i class="fa-solid fa-bars"></i>';
            });
        });

        // Optional: Close menu when clicking outside (on the overlay area)
        mobileMenu.addEventListener('click', (e) => {
            if (e.target === mobileMenu) {
                mobileMenu.classList.remove('active');
                hamburger.innerHTML = '<i class="fa-solid fa-bars"></i>';
            }
        });
    
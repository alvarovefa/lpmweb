// Gallery Filtering Logic
const filterButtons = document.querySelectorAll('.filter-btn');
const galleryItems = document.querySelectorAll('.gallery-item');

filterButtons.forEach(button => {
    button.addEventListener('click', () => {
        // Remove active class from all buttons
        filterButtons.forEach(btn => btn.classList.remove('filter-active'));
        // Add active class to clicked button
        button.classList.add('filter-active');

        const filterValue = button.getAttribute('data-filter');

        galleryItems.forEach(item => {
            const itemCategory = item.getAttribute('data-category');
            
            // Show item if it matches the filter or if filter is "todas"
            if (filterValue === 'todas' || filterValue === itemCategory) {
                item.classList.remove('hidden');
                // Add a tiny timeout to allow display:block to apply before animating opacity
                setTimeout(() => {
                    item.classList.remove('opacity-0', 'scale-95');
                    item.classList.add('opacity-100', 'scale-100');
                }, 10);
            } else {
                item.classList.remove('opacity-100', 'scale-100');
                item.classList.add('opacity-0', 'scale-95');
                
                // Wait for transition to finish before hiding the element completely
                setTimeout(() => {
                    // Only hide if the element is still supposed to be hidden 
                    // (prevents bugs if user clicks quickly)
                    if (item.classList.contains('opacity-0')) {
                        item.classList.add('hidden');
                    }
                }, 300); // 300ms matches the CSS transition duration
            }
        });
    });
});

// Mobile Menu Toggle
const menuToggle = document.getElementById('menu-toggle');
const navLinks = document.getElementById('nav-links');

if (menuToggle && navLinks) {
    menuToggle.addEventListener('click', () => {
        navLinks.classList.toggle('hidden');
        navLinks.classList.toggle('flex');
    });
}

document.addEventListener('DOMContentLoaded', function() {
    const menuToggle = document.querySelector('.menu-toggle');
    const menuItems = document.querySelector('.menu-items');

    menuToggle.addEventListener('change', function() {
        if (this.checked) {
            menuItems.classList.add('show-menu');
        } else {
            menuItems.classList.remove('show-menu');
        }
    });
});

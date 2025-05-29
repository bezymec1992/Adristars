document.addEventListener('DOMContentLoaded', function () {
  const burgerMenu = document.querySelector('.burger-menu');
  const nav = document.querySelector('.header__nav');
  const bodyOverlay = document.querySelector('.body-overlay');
  const body = document.body;
  const navLinks = document.querySelectorAll('.header__nav-link');

  // Function to close menu
  const closeMenu = () => {
    burgerMenu.classList.remove('active');
    nav.classList.remove('active');
    bodyOverlay.classList.remove('active');
    body.classList.remove('menu-open');
  };

  // Burger menu functionality
  if (burgerMenu) {
    burgerMenu.addEventListener('click', function () {
      this.classList.toggle('active');
      nav.classList.toggle('active');
      bodyOverlay.classList.toggle('active');
      body.classList.toggle('menu-open');
    });
  }

  // Close menu when clicking overlay
  if (bodyOverlay) {
    bodyOverlay.addEventListener('click', closeMenu);
  }

  // Close menu when clicking on navigation links
  navLinks.forEach(link => {
    link.addEventListener('click', closeMenu);
  });

  // Close menu when pressing Escape key
  document.addEventListener('keydown', function (event) {
    if (event.key === 'Escape') {
      closeMenu();
    }
  });
});

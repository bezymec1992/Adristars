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

  // show more /show less
  document.querySelectorAll('.show').forEach(section => {
    const btn = section.querySelector('.services__btn');
    const wrapper = section.querySelector('.card__box');

    btn.addEventListener('click', () => {
      wrapper.classList.toggle('expanded');
      btn.textContent = wrapper.classList.contains('expanded') ? 'Show Less' : 'Show More';
    });
  });

  // Flip card / toggle card
  const cards = document.querySelectorAll('.card');

  cards.forEach(card => {
    card.addEventListener('click', () => {
      const isMobile = window.innerWidth <= 768;
      const activeClass = isMobile ? 'accordion-open' : 'is-flipped';
      const isActive = card.classList.contains(activeClass);

      // Снимаем активность со всех карточек
      cards.forEach(c => c.classList.remove('accordion-open', 'is-flipped'));

      // Если текущая была неактивна — активируем её
      if (!isActive) {
        card.classList.add(activeClass);
      }
    });
  });

  // Up arrow-btn
  const upArrow = document.querySelector('.services__up-arrow');

  window.addEventListener('scroll', () => {
    if (window.scrollY > 300) {
      upArrow.classList.add('visible');
    } else {
      upArrow.classList.remove('visible');
    }
  });

  //form
  const form = document.getElementById('contact-form');

  form.addEventListener('submit', function (e) {
    e.preventDefault();
    document.getElementById('contact-section').classList.add('form-done');
  });

  // Form contact placeholder change
  document.querySelectorAll('.contact__input').forEach(input => {
    const originalPlaceholder = input.placeholder;

    input.addEventListener('focus', () => {
      input.placeholder = 'Typing...';
    });

    input.addEventListener('blur', () => {
      input.placeholder = originalPlaceholder;
    });
  });

  //cookies close
  const cookiesBtn = document.querySelector('.hero__cookies-btn');
  const cookiesSection = document.querySelector('.hero__cookies');

  cookiesBtn.addEventListener('click', () => {
    cookiesSection.style.display = 'none';
  });

  //cookies-custom modal
  const cookiesCustomBtn = document.querySelector('.hero__cookies-custom');
  const cookiesCustomClose = document.querySelector('.custom__cookies-cross');
  const cookiesCustomModal = document.querySelector('.custom__cookies-modal');

  if (cookiesCustomBtn && cookiesCustomClose && cookiesCustomModal) {
    cookiesCustomBtn.addEventListener('click', () => {
      cookiesCustomModal.classList.add('custom__cookies-open');
    });
    cookiesCustomClose.addEventListener('click', () => {
      cookiesCustomModal.classList.remove('custom__cookies-open');
    });
  }
});

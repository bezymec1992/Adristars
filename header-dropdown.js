const dropdowns = {
  services: document.getElementById('mega-dropdown-services'),
  industries: document.getElementById('mega-dropdown-industries'),
  portfolio: document.getElementById('mega-dropdown-portfolio'),
};

const menuItems = {
  services: document.querySelector('.header__nav-service'),
  industries: document.querySelector('.header__nav-item:nth-child(2)'),
  portfolio: document.querySelector('.header__nav-item:nth-child(3)'),
};

function showDropdown(type) {
  hideAllDropdowns();
  dropdowns[type].classList.add('active');
}

function hideDropdown(type) {
  dropdowns[type].classList.remove('active');
}

function hideAllDropdowns() {
  Object.values(dropdowns).forEach(drop => drop.classList.remove('active'));
}

Object.entries(menuItems).forEach(([type, item]) => {
  const dropdown = dropdowns[type];

  item.addEventListener('mouseenter', () => {
    showDropdown(type);
  });

  item.addEventListener('mouseleave', () => {
    setTimeout(() => {
      if (!dropdown.matches(':hover') && !item.matches(':hover')) {
        hideDropdown(type);
      }
    }, 100);
  });

  dropdown.addEventListener('mouseleave', () => {
    setTimeout(() => {
      if (!item.matches(':hover')) {
        hideDropdown(type);
      }
    }, 100);
  });

  dropdown.addEventListener('mouseenter', () => {
    showDropdown(type);
  });
});

const menuNav = document.querySelector('[data-menu-nav]');
const header = document.querySelector('[data-header]');
const body = document.querySelector('body');
const breakpointMedia = window.matchMedia('(min-width: 768px)');

const openMenu = () => {
  menuNav.classList.add('is-active');
  header.classList.add('is-open');
  body.classList.add('scroll-lock');
};

const closeMenu = () => {
  menuNav.classList.remove('is-active');
  header.classList.remove('is-open');
  body.classList.remove('scroll-lock');
};

const breakpointChecker = () => {
  if (breakpointMedia.matches) {
    if (menuNav.classList.contains('is-active')) {
      closeMenu();
    }
  }
  breakpointMedia.addListener(breakpointChecker);
};

const initHeaderMenu = () => {
  const menuToggle = document.querySelector('[data-menu-toggle]');

  if (menuToggle) {
    menuToggle.addEventListener('click', (evt) => {
      evt.preventDefault();

      if (menuNav.classList.contains('is-active')) {
        closeMenu();
      } else {
        openMenu();
      }
    });
    breakpointChecker();
  }
};

export {initHeaderMenu};

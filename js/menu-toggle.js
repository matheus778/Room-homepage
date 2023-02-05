let btnHamburger = document.querySelector('.menu__btn_hamburger');
let btnClose = document.querySelector('.menu__btn__close');
let menuMobileShow = document.querySelector(".header__menu__show");

function toggleMenu(event) {
  event.preventDefault();
  menuMobileShow.classList.toggle('is_show');
}

btnHamburger.addEventListener('click', toggleMenu);
btnClose.addEventListener('click', toggleMenu);
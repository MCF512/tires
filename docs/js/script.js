"use strict"

const headerBtn = document.querySelector('.header__menu');
const headerDrop = document.querySelector('.header__drop');

headerBtn.addEventListener('click', () => {
  headerDrop.classList.toggle('header__drop--active');
  headerBtn.classList.toggle('header__menu--active')
});
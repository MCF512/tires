"use strict"

const headerBtn = document.querySelector('.header__menu');
const headerDrop = document.querySelector('.header__drop');

headerBtn.addEventListener('click', () => {
  headerDrop.classList.toggle('header__drop--active');
  headerBtn.classList.toggle('header__menu--active')
});

let cart = {};
const addBtn = document.querySelectorAll('.card__add');
const card = document.querySelectorAll('.card');

for (let i = 0; i < card.length; i++) {
  card[i].addEventListener('click', (e) => {
    if (e.target && e.target.className == "card__add") {
      console.log(i)
    }
  });
}


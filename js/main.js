
let menu = document.querySelector('.header__menu');
let navbar = document.querySelector('.header__nav');
let navList = document.querySelector('.nav-list')


menu.addEventListener("click", function () {
  navbar.classList.toggle('nav-show');
  navList.classList.toggle('nav-list__show')
})


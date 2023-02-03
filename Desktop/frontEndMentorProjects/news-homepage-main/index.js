const navbar = document.querySelector('nav');
const menuOpen = document.getElementById('menu-button');
const menuClose = document.getElementById('menu-close');

menuOpen.addEventListener('click', () =>{
  navbar.classList.add('open');});

  menuClose.addEventListener('click', () =>{
    navbar.classList.remove('open');});
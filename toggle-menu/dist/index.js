const $header = document.querySelector('header');

const $hamburguer = document.getElementById('toggle');

const $logo = document.querySelector('.logo img');

const $navbar = document.querySelector('nav');

$hamburguer.addEventListener('mouseenter', () => {
  $header.classList.add('hover');
  $logo.classList.add('hover');
})

$hamburguer.addEventListener('mouseleave', () => {
  $header.classList.remove('hover');
  $logo.classList.remove('hover');
})

$hamburguer.addEventListener('click', () => {
  $hamburguer.classList.toggle('open');
  $logo.classList.toggle('open');
  $header.classList.toggle('open');
  $navbar.classList.toggle('open');
  document.body.classList.toggle('open');
})
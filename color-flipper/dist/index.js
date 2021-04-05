import {colorCollection} from './colors.js';

const colors = Object.keys(colorCollection);

const $flipColorButton = document.querySelector('#color-flip-btn');
const $colorCode = document.querySelector('#color-code');

const getHash = function() {
  let hash = window.location.hash;
  hash = hash.toLowerCase().split('/')[1];
  if (hash === '' || hash === undefined) {
    hash = 'name';
  }
  return hash;
}

// Get a HTML color name
const getColorName = function() {
  const colorIndex = parseInt(Math.random() * 148 + 1);
  return colors[colorIndex];
}

// Get a RGB color
const getColorRGB = function() {
  const r = parseInt(Math.random() * 255 + 1);
  const g = parseInt(Math.random() * 255 + 1);
  const b = parseInt(Math.random() * 255 + 1);
  return `rgb(${r}, ${g}, ${b})`;
}

// Get a hex color code
const getColorHex = function() {
  const hexColor = Math.floor(Math.random()*16777215).toString(16);
  return `#${hexColor}`
}

const setView = function() {
  const hash = getHash();
  const $views = document.querySelectorAll('.view');
 
  $views.forEach(view => {
    if (view.classList.contains('highlight')) {
      view.classList.remove('highlight');
    } else if(view.id === hash) {
      view.classList.add('highlight');
    } 
  });
}

// Liste
$flipColorButton.addEventListener('click', () => {
  const hash = getHash();
  let color = '';

  if (hash === 'name') {
    color = getColorName();
  } else if (hash === 'rgb') {
    color = getColorRGB();
  } else {
    color = getColorHex();
  }

  document.body.style.backgroundColor = color;
  $colorCode.textContent = color;
});

window.onload = () => setView();
window.onhashchange = () => setView();
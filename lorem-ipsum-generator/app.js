import { LoremIpsum } from "lorem-ipsum";

const lorem = new LoremIpsum({
  sentencesPerParagraph: {
    max: 8  ,
    min: 4
  },
  wordsPerSentence: {
    max: 16,
    min: 4
  }
});

// Obtendo o elemento <input type="text" id="para-num" placeholder="0">
const $paragraphNumber = document.getElementById('para-num');

// Obtendo o elemento <button id="generate-btn">
const $btnGenerate = document.getElementById('generate-btn');

// Obtendo o elemento <div class="ipsum-area">
const $ipsumArea = document.querySelector('.ipsum-area');

// Obtendo o elemento <button id="copy-btn">
const $btnCopy = document.getElementById('copy-btn');

// Associando o eventListener 'click' ao elemento <button id="generate-btn">
$btnGenerate.addEventListener('click', (e) => {
  e.preventDefault();
  $ipsumArea.innerHTML = '';
  const num = Number($paragraphNumber.value);
  if (num <= 10) {
    for (let i = 0; i < num; i++) {
      const p = document.createElement('p');
      p.textContent = lorem.generateParagraphs(1);
      $ipsumArea.appendChild(p);
      setTimeout(() => {
        p.classList.add('show');
      }, 200);
    }
  } else {
    alert('The max number of paragraphs is 10.');
  }
});

// Associando o eventListener 'click' ao elemento <button id="copy-btn">
$btnCopy.addEventListener('click', (e) => {
  e.preventDefault();
  setTimeout(() => {
    e.target.textContent = 'copy'
  }, 3000)
  e.target.textContent = 'copied!'
  // Criando um elemento <textarea>
  const textarea = document.createElement('textarea');
  // Atribuindo o texto dos elemento <div class="ipsum-area">
  textarea.value = $ipsumArea.textContent;
  // Anexando ao <body> o elemento <textarea>
  document.body.appendChild(textarea);
  // Selecionando o texto do elemento <textarea>
  textarea.select();
  // Copiando a seleção para o clipboard
  document.execCommand('copy');
  // Removendo o elemento <textarea> do <body>
  textarea.remove();
});


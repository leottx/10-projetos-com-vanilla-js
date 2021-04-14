// Obtendo todos os sliders
const $inputSliders = document.querySelectorAll('.slider');

// Obtendo o elemento <input type="range" id="in-tl">
const $inputTopLeft = document.getElementById('in-tl');

// Obtendo o elemento <span id="out-tl">0</span>
const $outputTopLeft = document.getElementById('out-tl');

// Obtendo o elemento <span id="out-tl">0</span>
const $outputTopRight = document.getElementById('out-tr');

// Obtendo o elemento <span id="out-tl">0</span>
const $outputBottomRight = document.getElementById('out-br');

// Obtendo o elemento <span id="out-tl">0</span>
const $outputBottomLeft = document.getElementById('out-bl');

// Obtendo o elemento <div class="box"></div>
const $box = document.querySelector('.box');

// Obtendo o elemento <button>
const $copyBtn = document.getElementById('copy-btn');

// Associando o evento input aos sliders
$inputSliders.forEach(slider => {
  // Configurando o valor inicial dos sliders para 0
  slider.value = 0;
  slider.addEventListener('input', e => {
    // Cada condicional checa qual o slider da interação, pega o valor do mesmo e atribui ao respectivo elemento <span> e a respectiva propriedade border-radius do elemento <div class="box">
    if (e.target.id == 'in-tl') {
      $outputTopLeft.textContent = `${e.target.value}%`;
      $box.style.borderTopLeftRadius = `${e.target.value}%`;
    } else if (e.target.id == 'in-tr') {
      $outputTopRight.textContent = `${e.target.value}%`;
      $box.style.borderTopRightRadius = `${e.target.value}%`;
    } else if (e.target.id == 'in-br') {
      $outputBottomRight.textContent = `${e.target.value}%`;
      $box.style.borderBottomRightRadius = `${e.target.value}%`;
    } else if (e.target.id == 'in-bl') {
      $outputBottomLeft.textContent = `${e.target.value}%`;
      $box.style.borderBottomLeftRadius = `${e.target.value}%`;
    }
  });
});


// Associando o evento 'click' ao botão
$copyBtn.addEventListener('click', () => {
  $copyBtn.textContent = `copied!`;
  // Obtendo o elemento <p id="radios">
  const $radios = document.getElementById('radios');
  // Criando um elemento <textarea>
  const textArea = document.createElement('textarea');
  // Atribuindo ao elemento <textarea> o texto contido no elemento <p id="radios">
  textArea.value = $radios.innerText;
  // Anexando o elemento <textarea> ao <body>
  document.body.appendChild(textArea);
  // Selecionardo o texto contindo no elemento <textarea>
  textArea.select();
  // Copiando o texto da seleção para o clipboard
  document.execCommand("Copy");
  // Removendo o elemento <textarea> do <body>
  textArea.remove();
});
// Obtém o elemento <button id="decrease">
const $decreaseBtn = document.getElementById('decrease');

// Obtém o elemento <button id="reset">
const $resetBtn = document.getElementById('reset');

// Obtém o elemento <button id="increase">
const $increaseBtn = document.getElementById('increase');

// Obtém o elemento <span class="count">
const $countElement = document.querySelector('.count');

// Variável contadora global
let count = 0;

// Função para decrementar o contador
$decreaseBtn.addEventListener('click', (e) => {
  // Previne o comportamento padrão do elemento <button> que executa o refresh da página
  e.preventDefault();

  // Decrementa a variável global contadora
  count--;

  changeColor();

  // Atribui o novo valor ao elemento <span>
  $countElement.textContent = String(count);
})


// Função para resetar o contador
$resetBtn.addEventListener('click', (e) => {
  // Previne o comportamento padrão do elemento <button> que executa o refresh da página
  e.preventDefault();

  // Decrementa a variável global contadora
  count = 0;

  changeColor();
  
  // Atribui o novo valor ao elemento <span>
  $countElement.textContent = String(count);
})


// Função para incrementar o contador
$increaseBtn.addEventListener('click', (e) => {
  // Previne o comportamento padrão do elemento <button> que executa o refresh da página
  e.preventDefault();

  count++;

  changeColor();
  
  // Atribui o novo valor ao elemento <span>
  $countElement.textContent = String(count);
})


const changeColor = () => {
  // Se o valor do contador for negativo, altera-se a cor do elemento <span> para vermelho, senão altera-se para verde
  if (count === 0) {
    $countElement.style.color = 'DimGrey';
  } else if (count < 0) {
    $countElement.style.color = 'red';
  } else {
    $countElement.style.color = 'green';
  }
}

window.onload = () => changeColor();
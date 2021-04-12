// Obtendo o elemento <input id="binary-num">
const $binaryNum = document.getElementById('binary-num');

// Obtendo o elemento <button id="convert">
const $convertBtn = document.getElementById('convert-btn');

// Obtendo o elemento <h2 class="decimal-num>"
const $decimalNum = document.querySelector('.decimal-num');

let target = 0;
// Associando o evento de click ao botão
$convertBtn.addEventListener('click', (e) => {
  e.preventDefault();

  const input = $binaryNum.value;
  const number =  Number(input);

  // Caso o valor tenha até 8 caracteres, faça:
  if (input.length <= 8) {
    // Caso o valor seja um número, faça:
    if (!Number.isNaN(number)) {
      // Caso o valor seja binário, faça:
      if (isBinary(input)) {
        // Converta o valor para o tipo número
        $decimalNum.innerText = 0;
        target = binaryToDecimal(number);
        updateCounter();
      } else {
        alert ('Insira um número binário')
      }
    } else {
      alert('Insira um número válido')
    }
  } else {
    alert('Insira um valor com no máximo 8 digitos')
  }
});

// Converte o número binário para decimal
const binaryToDecimal = (binary) => {
  return parseInt(binary, 2);
}

// Verifica se o número é binário ou não
const isBinary = (input) => {
  for (let i = 2; i <= 9; i++) {
    if (input.includes(`${i}`)) {
      return false;
    }
  }
  return true
}


// Anima a contagem dos números até o valor convertido
const updateCounter = () => {
  const c = +$decimalNum.innerText;

  if (c < target) {
    $decimalNum.innerText = c + 1; // 0 + 1 => 1
    setTimeout(updateCounter, 20); // Recursão
  } else {
    $decimalNum.innerText = `${target}`;
  }
}
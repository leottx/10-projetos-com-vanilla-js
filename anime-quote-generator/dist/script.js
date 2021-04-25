window.onload = () => {
  // Obtendo o elemento <select name="options" id="anime-opts">
  const $select = document.getElementById('anime-opts');
  // Obtendo o elemento <input type="text" id="search">
  const $search = document.getElementById('search');
  // Obtendo todos os elementos <input type="radio">
  const $radios = document.querySelectorAll('.opt');
  //Obtendo todos o elemento <button data-renderMode="random">
  const $button = document.querySelector('button');
  // Obtendo o elemento <h2 id="anime-title">
  const $animeTitle = document.getElementById('anime-title');
  // Obtendo o elemento <p id="anime-quote">
  const $animeQuote = document.getElementById('anime-quote');
  // Obtendo o elemento <h2 id="anime-char">
  const $animeChar = document.getElementById('anime-char');
  // Obtendo o elemento <figure id="loading">
  const $figure = document.getElementById('loading');

  // Solicitando ao servidor os nomes dos animes para construir as opções do elemento <select name="options" id="anime-opts">
  fetch('https://animechan.vercel.app/api/available/anime')
  .then(response => response.json())
  .then(data => buildOpts($select, data));

  // Associando o evento 'click' a cada elemento <input type="radio">
  $radios.forEach(radio => {
    radio.addEventListener('click', (e) => {
      if (e.target.id === 'random') {
        $select.classList.remove('show');
        $search.classList.remove('show');
      } else if(e.target.id === 'title') {
          $select.classList.add('show')
          $search.classList.remove('show');
        } else if(e.target.id === 'char') {
            $select.classList.remove('show')
            $search.classList.add('show');
          } 
    });
  });

  // Associando o evento de 'click' ao elemento <button>
  $button.addEventListener('click', e => {
    e.preventDefault();
    // Configurando o modeo de renderização
    setRenderMode($button, $radios);
    // Exibindo o loading
    handleLoading( [$animeTitle, $animeQuote, $animeChar], $figure);

    let url = '';
    if(e.target.dataset.renderMode === 'random') {
      url = `https://animechan.vercel.app/api/random`;
    } else if (e.target.dataset.renderMode === 'title') {
        url = `https://animechan.vercel.app/api/quotes/anime?title=${$select.options[$select.selectedIndex].value}`;
      } else if (e.target.dataset.renderMode === 'char') {
        const input = $search.value;
        url = `https://animechan.vercel.app/api/quotes/character?name=${input}`
      }
    url = encodeURI(url);

    // Efetuando a requisição do recurso
    fetch(url)
    .then(response => {
      if (response.ok) {
        return response.json();
      } else {
        alert('Error: Something went wrong with your request :(')
      }
    })
    .then(quotes => {
      // Removendo o loading
      handleLoading([$animeTitle, $animeQuote, $animeChar], $figure);
      if (Array.isArray(quotes)) {
        const randomIndex = Math.floor(Math.random() * quotes.length);
        // console.log(quotes[randomIndex])
        renderQuote(quotes[randomIndex], $animeTitle, $animeQuote, $animeChar);
      } else {
        renderQuote(quotes, $animeTitle, $animeQuote, $animeChar);
      }
    });
  });
}

// Função para criar as opções do elemento <select name="options" id="anime-opts">
const buildOpts = (select, animes) => {
  // Para cada elemento do array animes é criada um elemento <option> e anexado ao elemento <select>
  animes.forEach(anime => {
    const $option = document.createElement('option');
    $option.textContent = anime;
    select.appendChild($option);
  })
}

// Função para renderir a resposta da requisição
const renderQuote = (quote, titleElement, quoteElement, charElement) => {
  titleElement.textContent = quote.anime;
  quoteElement.textContent = quote.quote;
  charElement.textContent = quote.character;
}

// Função para definir o mode de renderização
const setRenderMode = (btn, radios) => {
  radios.forEach(radio => {
    if (radio.id === 'random' && radio.checked) {
      btn.dataset.renderMode = 'random';
    } else if(radio.id === 'title' && radio.checked) {
        btn.dataset.renderMode = 'title';
      } else if(radio.id === 'char' && radio.checked) {
          btn.dataset.renderMode = 'char';
        } 
  });
}

// Função para exibir ou remover o loading
const handleLoading = (arrElem, loading) => {
  arrElem.forEach(elem => {
    if (elem.classList.contains('hide')) {
      elem.classList.remove('hide');
    } else {
      elem.classList.add('hide');
    }
  });
  if (loading.classList.contains('show')) {
    loading.classList.remove('show');
  } else {
    setTimeout(() => loading.classList.add('show'), 200);
  }
}
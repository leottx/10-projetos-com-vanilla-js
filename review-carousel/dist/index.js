const reviews = [
  {
    id: 1,
    name: "susan smith",
    job: "web developer",
    img:
      "./dist/images/susan-smith-grey-scale.jpg",
    text:
      "I'm baby meggings twee health goth +1. Bicycle rights tumeric chartreuse before they sold out chambray pop-up. Shaman humblebrag pickled coloring book salvia hoodie, cold-pressed four dollar toast everyday carry",
  },
  {
    id: 2,
    name: "anna johnson",
    job: "web designer",
    img:
      "./dist/images/anna-johnson-grey-scale.jpg",
    text:
      "Helvetica artisan kinfolk thundercats lumbersexual blue bottle. Disrupt glossier gastropub deep v vice franzen hell of brooklyn twee enamel pin fashion axe.photo booth jean shorts artisan narwhal.",
  },
  {
    id: 3,
    name: "peter jones",
    job: "intern",
    img:
      "./dist/images/peter-jones-grey-scale.jpg",
    text:
      "Sriracha literally flexitarian irony, vape marfa unicorn. Glossier tattooed 8-bit, fixie waistcoat offal activated charcoal slow-carb marfa hell of pabst raclette post-ironic jianbing swag lorem ipsum. ",
  },
  {
    id: 4,
    name: "bill anderson",
    job: "the boss",
    img:
      "./dist/images/bill-anderson-grey-scale.jpg",
    text:
      "Edison bulb put a bird on it humblebrag, marfa pok pok heirloom fashion axe cray stumptown venmo actually seitan. VHS farm-to-table schlitz, edison bulb pop-up 3 wolf moon tote bag street art shabby chic. ",
  },
];

// Selecionando os elementos
const $figure = document.getElementById('person-img');
const $author = document.getElementById('author');
const $job = document.getElementById('job');
const $info = document.getElementById('info');

// Buttons
const $previewBtn = document.getElementById('prev-btn');
const $forwardBtn = document.getElementById('forward-btn');
const $randomBtn = document.getElementById('random-btn');


// Set starting item
let currentItem = 0;

// Load initial item. Esse evento é disparado assim que o HTML é completamente carregado pelo navegador.
window.addEventListener('DOMContentLoaded', () => {
  showPerson(currentItem);
});

// Show person based on item
const showPerson = (person) => {
  let item = reviews[person];
  $figure.style.backgroundImage = `linear-gradient(rgba(57, 1, 248, .5), rgba(57, 1, 248, .5)), url(${item.img})`;
  console.log(item);
  $info.textContent = item.text;
  $author.textContent = item.name;
  $job.textContent = item.job;
}

// Show next person
$forwardBtn.addEventListener('click', () => {
  currentItem++;
  if(currentItem > reviews.length - 1) {
    currentItem = 0;
  }
  showPerson(currentItem);
});

// Show prev person
$previewBtn.addEventListener('click', () => {
  currentItem--;
  if(currentItem < 0) {
    currentItem = reviews.length - 1;
  }
  showPerson(currentItem);
});

$randomBtn.addEventListener('click', () => {
  currentItem = Math.floor(Math.random() * reviews.length);
  console.log(currentItem)
  showPerson(currentItem);
})
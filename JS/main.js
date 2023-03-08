/*----- constants -----*/

const myCards = [
  {id: 1, value: 'card1'},
  {id: 1, value: 'card1'},
  {id: 2, value: 'card2'},
  {id: 2, value: 'card2'},
]

/*----- app's state (variables) -----*/ 
let matches = 0;
let flipped = [];
let card
/*----- cached elements  -----*/
const memoryCards = document.querySelectorAll('.cards')

/*----- event listeners -----*/
memoryCards.forEach(card => {
  card.addEventListener('click', clickedCards)
});

/*----- functions -----*/

function clickedCards(evt) {
    const memCard = evt.target;
    // memCard.classList.add('flipped');
    flipped.push(memCard)
    matchCards();
    console.log('iclicked you')
}

function matchCards() {
// i need two cards
   if(flipped.length === 2) {
    if(flipped[0].classList[1] === flipped[1].classList[1]){
console.log('matched')
    } else (flipped[0].classList[2] != flipped[0].classList[1])
    console.log('unmatched')

}}
// function clickedCards(evt) {
//   const memCard = evt.target;

//   if (flipped.includes(memCard)) {
//     return;
//   }
 
//   flipped.push(memCard);
//   memCard.classList.add('flipped');

//   if (flipped.length === 2) {
//     checkForMatch();
//   }
// }

// function checkForMatch() {
//   const firstCard = flipped[0];
//   const secondCard = flipped[1];

//   if (firstCard.dataset.id === secondCard.dataset.id) {
//     firstCard.classList.add('matched');
//     secondCard.classList.add('matched');
//     matches++;

//     if (matches === myCards.length / 2) {
//       // All cards have been matched
//       console.log('You win!');
//    } else {
//      setTimeout(() => {
//         firstCard.classList.remove('flipped');
//      secondCard.classList.remove('flipped');
//     }, 1000);
//    }

//      flipped = []; 
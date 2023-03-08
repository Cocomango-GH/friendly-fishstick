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
let winner = null;
let score = 0;
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
    if(flipped.length === 2) {
      if(flipped[0].classList[1] === flipped[1].classList[1]) {
        matches++;
        score += 10;//increase score with everymatch
        console.log('score')
        flipped = [];
      }else {
        console.log('unmatched')
        flipped[0].classList.remove('flipped');
        flipped[1].classList.remove('flipped');
        score -= 2;
        flipped = [];
      }
    }
    if(matches === myCards.length / 2) {
        winner = 'player';
     console.log('you won');
     console.log('your score is:' + score);

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
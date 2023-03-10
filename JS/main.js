/*----- constants -----*/

const myCards = [
  {id: 1, value: 'card1'},
  {id: 2, value: 'card1'},
  {id: 3, value: 'card2'},
  {id: 4, value: 'card2'},
  {id: 5, value: 'card3'},
  {id: 6, value: 'card3'},
  {id: 7, value: 'card4'},
  {id: 8, value: 'card4'},
  {id: 9, value: 'card5'},
  {id: 10, value: 'card5'},
  {id: 11, value: 'card6'},
  {id: 12, value: 'card6'},

]


let matches = 0;
let flipped = [];
let winner = null;
let score = 0;
let numGuesses = 0;

const memoryCards = document.querySelectorAll('.cards')


memoryCards.forEach(card => {
  card.addEventListener('click', clickedCards)
});


init();

function init() {
    score = 0;
    flipped = [];
    winner =  null;
    matches = 0;
    render();
  }
 
function render() {
    document.querySelector('#score').innerHTML = `Score ${score}`;
    document.querySelector('#matches').innerHTML = `Matches ${matches}`;
    document.querySelector('#winner').innerHTML = `Winner: ${winner || '_'}`;
}


function clickedCards(evt) {
    const memCard = evt.target;
    memCard.classList.add('flipped');
    flipped.push(memCard)
    matchCards();
    console.log('iclicked you')
    render();
}

function matchCards() {
    if(flipped.length === 2) {
      if(flipped[0].classList[1] === flipped[1].classList[1]) {
        matches++;
        score += 10;
        flipped = [];
      }else {
        flipped[0].classList.remove('flipped');
        flipped[1].classList.remove('flipped');
        score -= 2;
        flipped = [];
        numGuesses++;
        if(numGuesses === 3) {
            winner = 'gameover'
        }
      }
    }
    if(matches === myCards.length / 2) {
        winner = 'player';
    }
}


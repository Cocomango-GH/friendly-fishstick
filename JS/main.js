console.log('im working')
/*----- constants -----*/
//const audio = new Audio();//
//memorycards//
const memoryCards = document.querySelectorAll('.cards')
//give cards a value//
const myCards = [
    {id: 1, value: 'card1'},
    {id: 2, value: 'card2'},
    {id: 3, value: 'card3'},
    {id: 4, value: 'card4'},
]



/*----- app's state (variables) -----*/ 
let flipped = [];
let scores = 0;// 10 pts for every match//
let matches = 0;// // if player gets three wrong guesses games over//
let winner = false;// matches all cards win the game//



/*----- event listeners -----*/
// A event listener that listen for clicks for the start button and cards//
memoryCards.forEach(card => {
 card.addEventListener('click', clickedCards)
});

/*----- functions -----*/
//cards now have eventlistener when clicked//
function clickedCards(evt) {
    const memCard = evt.target;
// cards flipped //
  if(flipped.includes(memCard)) {
    return;
  }
// add card to the array //
flipped.push(memCard);
// add card flip over//
memCard.classList.add('flipped');
//check if cards flip//
if (flipped.length === 2) {
    checkForMatch();
 }
}
function checkForMatch() {
    const firstCard = flipped[0];
    const secondCard = flipped[1];

if(firstCard.dataset.id === secondCard.dataset.id) {
    firstCard.classList.add('matched');
    secondCard.classList.add('matched');
    scores += 10;
    matches++;
    if(matches === myCards.length / 2) {
        winner = true;
    }else{
        setTimeout(() => {
            firstCard.classList.remove('flipped');
            secondCard.classList.remove('flipped');
        } , 1000);
    }
    flipped =[];
}
}
// check if card has been flipped 

/// cards need to have afcuntion for matching cards when clicked//


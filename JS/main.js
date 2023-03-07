console.log('im working')
/*----- constants -----*/
//const audio = new Audio();//
//memorycards//
const memoryCards = document.querySelectorAll('.cards')
console.log(memoryCards)


/*----- app's state (variables) -----*/ 

let card = document.querySelectorAll('.cards')
let scores;// 10 pts for every match//
let matches;// if player gets three wrong guesses games over//
let winner;// matches all cards win the game//

/*----- cached element references -----*/
const  playScoreEl = 
const  memMatch
const  

/*----- event listeners -----*/
// A event listener that listen for clicks for the start button and cards//
memoryCards.forEach(card => {
 card.addEventListener('click', clickedCards)
})
console.log('i been clicked')
/*----- functions -----*/
//cards now have eventlistener when clicked//
function clickedCards(evt) {
    const memCard = evt.target
    console.log('i been clicked yaaay')
}


/// cards need to have afcuntion for matching cards when clicked//


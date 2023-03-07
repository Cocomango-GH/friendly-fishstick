console.log('im working')
/*----- constants -----*/
//const audio = new Audio();//
//memorycards//
const memoryCards = document.querySelectorAll('.cards')
console.log(memoryCards)
/*----- app's state (variables) -----*/ 

let card = document.querySelectorAll('.cards')



/*----- cached element references -----*/


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
    console.log('.cards')
}
/// cards need to have afcuntion for matching cards when clicked//


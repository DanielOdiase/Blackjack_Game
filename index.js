
let cards = []
let sum = 0
let hasBlackJack = false
let isAlive = false
let message = ""
let messageEl=document.getElementById("message-el")
let sumEl= document.getElementById("sum-el")
let cardEl=document.getElementById("card-el")

let player ={
    name:"Osamagbe",
    chips :300
}
let chipEl = document.getElementById ("chips-el")
chipEl.textContent=player.name + ": $" + player.chips
// 1. Store the message-el paragraph in a variable called messageEl

function getRandomCard(){
    let randomCard= Math.floor(Math.random()*13)+1
    return randomCard
}
function startGame(){
    isAlive=true
    let firstCard = getRandomCard()
    let secondCard = getRandomCard()
    cards =[firstCard,secondCard]
    sum =firstCard + secondCard
    renderGame()
}
function renderGame() {
    cardEl.textContent="Cards:"

for (let i=0; i< cards.length; i++){
    cardEl.textContent+=cards[i] + " "
}
    if (sum <= 20) {
        message = "Do you want to draw a new card?"
    } else if (sum === 21) {
        message = "Wohoo! You've got Blackjack!"
        hasBlackJack = true
    } else {
        message = "You're out of the game!"
        isAlive = false
    }

    
    messageEl.textContent = message
    sumEl.textContent = "Sum:" + sum
}
function newCard(){
    if(isAlive===true && hasBlackJack=== false){
        message ="draw a new card from deck"
let card = getRandomCard()
sum+=card
cards.push(card)
renderGame()

messageEl.textContent = message
    }
}

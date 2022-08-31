 //1. create two variables, firstCard and secondCard.
 // Set their values to a random number between 2-11

 // 2. Create a variable, sum, and set it to the sum of the two cards.
 let cards = [] // array - ordered list of item

 let sum = 0
 let hasBlackJack = false
 let isAlive = false
 let message = ""
 let messageEl = document.getElementById("message-el")
//  let sumEl = document.getElementById("sum-el")
 let sumEl = document.querySelector(".sum-el")
 let cardEl = document.getElementById("cards-el")
 console.log(cards)

 function getRandomCard() {
   let randomNumber = Math.floor(Math.random() * 13) + 1

   if (randomNumber > 10) {
      return 10
   } else if (randomNumber === 1) {
      return 11
   } else {
      return randomNumber
   }
   
 }

 function startGame() {
   isAlive = true
   let firstCard = getRandomCard()
   let secondCard = getRandomCard()
   cards = [firstCard, secondCard]
   sum = firstCard + secondCard
   renderGame()
 }
 
 function renderGame() { 

   let result = sum 
   sumEl.textContent = "Sum: " + result
   cardEl.textContent = "Cards: " 
   for (let i = 0; i < cards.length; i++) {
      cardEl.textContent += cards[i] + " "
   }

   if (sum <= 20) {
      message ="Do you want to draw a new card?"
   } else if (sum === 21) {
      message = "Wohoo! You've got Blackjack!"
      hasBlackJack = true
   } else {
      message = "You're out of the game!"
      isAlive = false
   }
   messageEl.textContent = message
 }

 function newCard() {

   let card = getRandomCard()
   sum += card
   cards.push(card)
   console.log(cards)
   renderGame()
 }
 // CASH OUT
 console.log(hasBlackJack)
 console.log(isAlive)

 // Check if a person can enter a club or not
 let age = 25

 if (age <= 20  ) {
    console.log("You cannot enter the club!")
 } else {
    console.log("Welcome!")
 }

 // Check if the person is eligible for a birthday card from the king! (100)

 let age1 = 100

 if (age1 < 100) {
    console.log("Not eligible")
 } else if (age1 === 100) {
    console.log("Here is your birthday card from the king!")
 } else {
    console.log("Not eligible, you have already gotten one")
 }
 //1. create two variables, firstCard and secondCard.
 // Set their values to a random number between 2-11

 // 2. Create a variable, sum, and set it to the sum of the two cards.

 let firstCard = 12
 let secondCard = 9

 let sum = firstCard + secondCard
 let hasBlackJack = false
 let isAlive = true
 let message = ""
 let messageEl = document.getElementById("message-el")
 let sumEl = document.getElementById("sum-el")

 function startGame() {

   if (sum <= 20) {
      message ="Do you want to draw a new card?"
   } else if (sum === 21) {
      message = "Wohoo! You've got Blackjack!"
      hasBlackJack = true
   } else {
      message = "You're out of the game!"
      isAlive = false
   }
   let result = sum
   messageEl.textContent = message
   sumEl.textContent = "Sum:" + result
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
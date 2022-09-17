// SETTING THE STAGE
const player = "Per"
const opponent = "Nick"
const game = "AmazingFighter"
let points = 0
let hasWon = false

points += 100
hasWon = true

if(hasWon) {
    console.log(`${player} got ${points} points and won the ${game} game!`)
} else {
    console.log(`The winner is ${opponent}! ${player} lost the game`)
}


let myCourses = ["Learn CSS Animations", "UI Design Fundamentals", "Intro to clean code"]
function getCourses(arr) {

    for (let i = 0; i < arr.length; i++) {
        console.log(arr[i])
    }
}
getCourses(myCourses)

//Save to local storage
localStorage.setItem("Stringify", "String values")
localStorage.clear()
console.log(localStorage.getItem("Stringify"))
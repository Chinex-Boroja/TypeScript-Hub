let player1Time = 102
let player2Time = 107

function getFastestRaceTime() {
    if (player1Time < player2Time) {
        return player1Time
    } else if (player2Time < player1Time) {
        return player2Time
    } else {
        return player2Time
    }
}

let fastestRace = getFastestRaceTime()
console.log(fastestRace)

let time1 = 30
let time2 = 50
let time3 = 70
let total = time1 + time2 + time3

function totalRaceTime() {
    return total
}

let totalTime = totalRaceTime()
console.log(totalTime)

//Generating a random number (Randomness)
let randomNumber = Math.random()

console.log(randomNumber)

//What does Math.random() do?
//it generates a random number between 0 and 1(not inclusive of 1)

let flooredNumber = Math.floor(3.9865)
console.log(flooredNumber)

//Create a function, rollDice(), that returns a random number between 1 and 6
function rollDice() {
    return Math.floor(Math.random() * 6) + 1
}

console.log(rollDice())
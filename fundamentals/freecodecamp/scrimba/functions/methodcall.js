let lap1 = 34
let lap2 = 33
let lap3 = 36

function countdown() {

    console.log(5)
    console.log(4)
    console.log(3)
    console.log(2)
    console.log(1)
}

function displayNumber() {
    console.log(42)
}

function logSum() {
    let totalTime = lap1 + lap2 + lap3
    console.log(totalTime)
}

let lapsCompleted = 0

function countLapCompleted() {
    lapsCompleted = lapsCompleted + 1
}
countLapCompleted()
countLapCompleted()
countLapCompleted() 

console.log(lapsCompleted)

// Calling a method
countdown()

displayNumber()

logSum()


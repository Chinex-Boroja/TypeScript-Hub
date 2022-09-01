let fruit = ["Apple", "Oranges", "Apple", "Apple", "Oranges"]
let appleShelf = document.getElementById("apple-shelf")
let orangeShelf = document.getElementById("orange-shelf")

// Create a function that puts the apples onto the appleShelf
// and the oranges onto the orangeShelf. Use a for loop
// a conditional statement and the textContent property

function putToShelf() {
    for (let i = 0; i < fruit.length; i++) {
        if (fruit[i] === "Oranges") {
            orangeShelf.textContent += "Oranges" + " "
        }
        else if (fruit[i] === "Apple") {
            appleShelf.textContent += "Apple" + " "
        }
    }
}

putToShelf()
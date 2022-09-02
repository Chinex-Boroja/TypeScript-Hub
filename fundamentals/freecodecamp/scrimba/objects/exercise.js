//Create a person that contains three keys: name, age, and country

//Create a function, logData(), that uses the person object to create a 
// string in the following format:
// "Per is 35 years old and lives in Norway"

// Call the logData() function

let person = {
    name: "Chinedu Ihedioha",
    age: 18,
    country: "Nigeria"
}

function logData() {
    let display = person.name + " is " + person.age + " years old and lives in " + person.country
    console.log(display)
}

logData()

let age = 15

if (age < 6) {
    console.log("free")
} else if (age < 18) {
    console.log("child discount")
} else if (age < 27) {
    console.log("student discount")
} else if (age < 67) {
    console.log("full price")
} else {
    console.log("senior citizen discount")
}

let largeCountries = ["China", "India", "USA", "Indonesia", "Pakistan"]
console.log("The largest countries in the world")
for (let i = 0; i < largeCountries.length; i++) {

    console.log("- " + largeCountries[i])
}

let dayOfMonth = 31
let weekday = "Friday"

// If it is Friday the 13th, log out this spooky face:

if (dayOfMonth === 13 && weekday === "Friday") {
    console.log("Spooky face")
}

let hands = ["rock", "paper", "scissors"]

function generateRandomItem() {
   let randomElement = Math.floor(Math.random() * hands.length)
   return hands[randomElement]
}

console.log(generateRandomItem)


// if possible, use const, if not, use let
// which variables below should be changed from let to const?
// The customer wants to order some stuff. Here are the details

const basePrice = 520
const discount = 120
let shippingCost = 12
let shippingTime = "5-12 days"

shippingCost = 15
shippingTime = "7-14 days"

const fullPrice = basePrice - discount + shippingCost
console.log("Total cost: " + fullPrice + ". It will arrive in " + shippingTime)

// Template strings
const recipient = "James"
const sender = "Chinex"

const email = `Hey ${recipient}! How is it going? Cheers ${sender}`
console.log(email)
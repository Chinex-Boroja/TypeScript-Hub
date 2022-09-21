// Returning objects
const person = (firstName, lastName) => ({
    first: firstName,
    last: lastName
});

console.log(person("Brad", "Janson"));

// Destructing objects
const sandwich = {
    bread: "dutch crunch",
    meat: "tuna",
    cheese: "swiss",
    toppings: ["lettuce", "tomato", "mustard"]
};

let {bread, meat} = sandwich;

bread = "garlic";
meat = "turkey";

console.log(bread, meat) // garlic, turkey

console.log(sandwich.bread, sandwich.meat) // dutch crunch tuna

// Destructuring incoming function arguments.
const lordify = regularPerson => {
    console.log(`${regularPerson.firstName} of Canterbury`)
};

const regularPerson = {
    firstName: "Bill",
    lastName: "Wilson"
};
lordify(regularPerson); //Bill of Canterbury

//Destructuring needed values
const valuesNeeded = ({ firstName }) => {
    console.log(`${firstName} of Canterbury`)
}

const ordinaryPerson = {
    firstName: "Bill",
    lastName: "Wilson"
};

valuesNeeded(ordinaryPerson)

// Reflect a Data change

const regularPerson1 = {
    firstName: "Bill",
    lastName: "Wilson",
    spouse: {
        firstName: "Phil",
        lastName: "Wilson"
    }
}

//Lordify the spouse's first name
const lordify1 =({spouse: { firstName }}) => {
    console.log(`${firstName} of Canterbury`)
}

lordify1(regularPerson1); //Phil of Canterbury
// Using the colon and nested curly braces, we can destructure the firstname from the
//spouse object.

// Destructuring Arrays
const [firstAnimal] = ["Horse", "Mouse", "Car"];
console.log(firstAnimal); //Horse

const [, , thirdAnimal] = ["Horse", "Mouse", "Car"];
console.log(thirdAnimal); //Cat

// Objet Literal Enhancement
const name1 = "Tallac";
const elevation = 9738;

const funHike = { name1, elevation}
console.log(funHike); // {name: "Tallac", elevation: 9738}

// function restructuring
const name2 = "Tallac";
const elevation1 = 9738;
const print = function() {
    console.log(`Mt. ${this.name2} is ${this.elevation1} feet tall`)
};


const funHike1 = { name2, elevation1, print}
console.log(funHike); // {name: "Tallac", elevation: 9738}

// The spread Operator
const peaks = ["Tallac", "Ralston", "Rose"];
const canyons = ["Ward", "Blackwood"];
const tahoe = [...peaks, ...canyons];

console.log(tahoe.join(", ")); //Tallac, Ralston, Rose, Ward, Blackwood


cosnt[last] = [...peaks].reverse();

console.log(last); //Rose
console.log(peaks.join(", ")) // Rose, Ralston, Tallac

// Getting remaining items using spread operator
const clubs = ["Liverpool", "Chelsea", "Fulham"];
const [last] = [...clubs].reverse();

console.log(last); //Fulham
console.log(clubs.join(", ")); // Liverpool, Chelsea, Fulham


//Getting the remaining items of the array
const lakes = ["Donner", "Marlette", "Fallen Leaf", "Cascade"];
const [first, ...others] = lakes;

console.log(others.join(", ")) // Marlette, Fallen Leaf, Cascade


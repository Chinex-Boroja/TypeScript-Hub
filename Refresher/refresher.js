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

const {bread, meat} = sandwich;
console.log(bread, meat)
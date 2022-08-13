// Declare a variable called person with a specific object type annotation
let person2: {
    name: string;
    location: string;
    isProgrammer: boolean;
};

// Assign person to an object with all the necessary properties and value types
person2 = {
    name: 'Danny',
    location: 'UK',
    isProgrammer: true,
};

interface Person {
    name: string;
    location: string;
    isProgrammer: boolean;
}

let person3: Person = {
    name: 'Chinex',
    location: 'NG',
    isProgrammer: true,
};

let person4: Person = {
    name: 'Israel',
    location: 'NG',
    isProgrammer: false
}

// Function properties with function signatures
// using old-school common JavaScript functions (sayHi), or ES6
// arrow functions (sayBye)

interface Speech {
    sayHi(name: string): string;
    sayBye: (name: string) => string;
}

let sayStuff: Speech = {
    sayHi: function (name: string) {
        return `Hi ${name}`;
    },

    sayBye: (name: string) => `Bye ${name}`,
  
};

console.log(sayStuff.sayHi('Chinedu'));
console.log(sayStuff.sayBye('Chinedu'));



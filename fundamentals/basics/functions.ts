// Define a function called circle that takes a diamater variable of type number

function circle(diam: number) {
    return 'The circumference is ' + Math.PI * diam;
}

console.log(circle(10));

// The same function, but with an ES6 arrow function:
const circle1: Function = (diam: number): string => {
    return 'The circumference is ' + Math.PI * diam;
};

console.log(circle(10));

const add = (a: number, b: number, c?: number | string) => {
    console.log(c);

    return a + b;
};

console.log(add(5, 4, 'I could pass a number, string, or nothing here'));

const logMessage = (msg: string): void => {
    console.log('This is the message: ' + msg);
};

logMessage('TypeScript is superb');

// Function Signature

let sayHello: (name: string) =>

// Define the function, satisfying its signature
sayHello = (name) => {
    console.log('Hello ' + name)
};

sayHello('Danny');
let ids: number[] = [1, 2, 3, 4, 5]; // can only contain numbers
let names: string[] = ['Danny', 'Anna', 'Bazza']; // can only contain strings
let options: boolean[] = [true, false, false]; // can only contain true or false

// can only contain objects
let books: object[] = [
    {name: 'Fooled by randomness', author: 'Nassim Taleb'},
    {name: 'Sapiens', author: 'Yuval Noah Harari'}
]

let arr1: any[] = ['hello', 1, true]; // any basically reverts TypeScript back into JavaScript

ids.push(6);
ids.push(7);

let person: (string | number | boolean)[] = ['Danny', 1, true];
person[0] = 100;

// Tuples
let person1: [string, number, boolean] = ['Danny', 1, true];

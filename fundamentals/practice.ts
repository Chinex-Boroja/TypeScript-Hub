let foo = "hello";
let sport = 'football';

let id = 5;

let personName = 'Danny';
personName.toLowerCase();
console.log(personName); // Danny - the string method didn't mutate the string

let arr = [1, 3, 5, 7];
arr.pop();
console.log(arr);
personName = 'Anna'; // Assignment gives the primtive a new (not a mutated) value 

let unit: number; // Declare variable without assigning a value
unit = 5;

// Union Type
let age: string | number;
age = 26;
age = '26';

// Reference Types
let firstname = new String("Danny");
console.log(firstname); // String {'Danny'}

//Primitive and reference Types

let x = 2;
let y = 1;

x = y;
y = 100;
console.log(x); // 1 (even though y changed to 100, x is still 1)

// Reference types
let point1 = {x: 1, y: 1};
let point2 = point1;

point1.y = 100;
console.log(point2.y); // 100(point1 and point2 refer to the same memory address where the point object is stored)


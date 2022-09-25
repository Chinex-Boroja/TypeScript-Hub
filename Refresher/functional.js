const log = message => {
    console.log(message)
}

log("In JavaScript, functions are variables")

const obj = {
    message: "They can be added to objects like variables",
    log(message) {
        console.log(message)
    }
}

obj.log(obj.message)

//Adding functions to an array
const messages = [
    "They can be inserted into arrays",
    message => console.log(message),
    "like variables",
    message => console.log(message)
]

messages[1](messages[0]);
messages[3](messages[2]);

//pure function
const frederick = {
    name: "Frederick Douglass",
    canRead: false,
    canWrite: false
};

const selfEducate = person => {
    person.canRead = true;
    person.canWrite = true;
    return person;
};

console.log(selfEducate(frederick));
console.log(frederick);

// Data Transformations
const schools = ["Yorktown", "Washington & Liberty", "Wakefield"];
console.log(schools.join(", "));

const wSchools = schools.filter(school => school[0] === "W");
console.log(wSchools);
// ["Washington & Liberty", "Wakefield"]

const cutSchool = (cut, list) => list.filter(school => school !== cut);
console.log(cutSchool("Washington & Liberty", schools).join(", "))

console.log(schools.join("\n"));

// Array.map()
const highSchools = schools.map(school => `${school} High School`);
console.log(highSchools.join("\n"));

//Returning Objects

const unis = schools.map(school => ({ name: school }));
console.log(unis)
//An array containing objects was produced from an array that contains strings.

// [
// { name: "Yorktown" },
// { name: "Washington & Liberty" },
// { name: "Wakefield" }
// ]

//Changing an object in pure functions
let universities = [
    { name: "Fedepe" },
    { name: "OAU" },
    { name: "OUI" },
    { name: "UNILAG" }
];

let updatedSchools = editName("Fedepe", "FUTO", universities);
console.log(updatedSchools[0])
console.log(universities[0])

const editName = (oldName, name, arr) => arr.map(item => {
    if (item.name === oldName) {
        return {
            ...item, name
        };
    } else {
        return item
    }
});

//using shorthand
const editName1 = (oldName, name, arr) =>
    arr.map(item => (item.name === oldName ? { ...item, name } : item));

//Transform school objects

const schools1 = {
    Yorktown: 10,
    "Washington $ Liberty": 2,
    Wakefield: 5
};

const schoolArray = Object.keys(schools1).map(key => ({
    name: key,
    wins: schools1[key]
}));
console.log(schoolArray)

//Reduce function in arrays
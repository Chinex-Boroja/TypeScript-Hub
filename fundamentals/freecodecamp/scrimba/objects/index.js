//Objects - store data in-depth - composite / complex data type
//key-value pairs

let course = {
    title: "Learn HTML for free",
    lessons: 16,
    creator: "Ihedioha Chinedu Innocent",
    length: 45,
    level: 1,
    isFree: true,
    tags: ["html", "css"]

}

//Using bracket notation
console.log(course["tags"])
//Using the dot notation
console.log(course.title)
//using the bracket notation
console.log(course["creator"])

let castle = {
    title: "Live like a king in my castle",
    price: 190,
    isSuperHost: true,
    images: ["img/castle.png", "img/castle2.png"]
}

console.log(castle.price)
console.log(castle.isSuperHost)
const welcomeEl = document.getElementById("welcome-el")

function greetUser(greeting, name) {
    welcomeEl.textContent = `${greeting}, ${name}!`
}
greetUser("Welcome back", "Chinedu Ihedioha")

function add(num1, num2) {
    const sum = num1 + num2
    return sum
}

console.log(add(3, 4))
console.log(add(9, 102))

function getFirst(arr) {
    return arr[0]
}

console.log(getFirst([9, 0, 7, 99]))

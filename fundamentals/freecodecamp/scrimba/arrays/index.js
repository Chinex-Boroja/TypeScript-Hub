//Array -ordered list of items - composite / complex data type
let featuredPosts = [
    "Check out my Netflix clone", 
    "Here's the code for my project", 
    "I've just relaunched my portfolio"
]

let portfolioPage = [
    "Android Developer Intern @PMCRG",
    "Android Engineer @Zuri",
    "Compueter Engineering, OAU "
]
console.log(portfolioPage.length)

let biodata = ["Chinedu Ihedioha", 24, true]

//Adding items to an Array
let cards = [4, 6, 7]
cards.push(6)
console.log(cards)

// Push the newMessage to the messages array, and then log out the array
let messages = [
    "Hey, how's it going",
    "I'm great, thank you! How about you?",
    "All good. Been workinfg on my portfolio lately"
]

let newMessage = "Same here!"
messages.push(newMessage)
console.log(messages)

messages.splice(messages.length - 1, 1)
messages.reverse().shift()
messages.push(0)
messages.pop()

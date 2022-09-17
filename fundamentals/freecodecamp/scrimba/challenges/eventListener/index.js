let data = [
    {
        player: "Jane",
        score: 52
    },
    {
        player: "Mark",
        score: 41
    }
]

const buttonEl = document.getElementById("btn-log")

buttonEl.addEventListener("click", function(){
    console.log(data[0].score)
})

//generate sentence
const sentence = "largeCountries"
const countries = ["China", "India", "USA"]

function generateSentence(desc, arr) {
    const lastIndex = arr.length - 1
    const result = `The ${arr.length} ${desc} are `
    for(let i = 0; i < arr.length; i++) {
        if(i === lastIndex) {
            result += arr[i]
        } else {
            basePrice += arr[i] + ","
        }
    }
    return result
}

console.log(generateSentence(sentence, countries))
 let myLeads = []
 const inputEl = document.getElementById("input-el") 
 const inputBtn = document.getElementById("input-btn")
 const ulEl = document.getElementById("ul-el")

// localStorage.setItem("myLeads", "www.google.com")
// let name = localStorage.getItem("myLeads")
// console.log(name)
// localStorage.clear()
// Turn the myLeads string into an array
// myLeads = JSON.parse(myLeads)
// Push a new value to the array
// myLeads.push("www.leads2.com")
// Turn the array into a string again
// myLeads = JSON.stringify(myLeads)
// console.log(typeof myLeads)

const leadsFromLocalStorage = JSON.parse( localStorage.getItem("myLeads") )

//Check if leadsFromLocalStorage is truthy
// If so, set myLeads to its value and call renderLeads()

if (leadsFromLocalStorage) {
    myLeads = leadsFromLocalStorage
    renderLeads()
} 
 inputBtn.addEventListener("click", function(){ 
    myLeads.push(inputEl.value)
    localStorage.setItem("myLeads", JSON.stringify(myLeads))
    renderLeads()
    inputEl.value = ""
    // document.getElementById("input-el").value = ""
    console.log(localStorage.getItem("myLeads"))

 })

 function renderLeads() {
    let listItems = ""
    for (let i = 0; i < myLeads.length; i++) {
       // Add the item to the listitems variable instead of the ulEl.innerHTML
       // listItems +=  "<li><a href='" + myLeads[i] + "'  target='_blank' rel='noopener noreferrer'>" + myLeads[i] + "</a></li>" 
       // Using template strings/literals
       listItems += `
            <li>
                <a target='_blank' rel='noopener noreferrer' href='${myLeads[i]}'> 
                    ${myLeads[i]}
                </a>
            </li>
        `
    }
    // 3. Render the listItems inside the the unordered list using ulEl.innerHTML
    ulEl.innerHTML = listItems
 }
 


   // create element
    // set text content
    // append to ul

    // const li = document.createElement("li")
    // li.textContent = myLeads[i]
    // ulEl.append(li)
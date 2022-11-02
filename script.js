let saveElement = document.getElementById("save-element")
let countElement = document.getElementById("count-element")
let count = 0


function increment() {
	count = count + 1
	countElement.innerText = count
}

function save() {
  let countString = count + " - "
  console.log(count)
  saveElement.textContent += countString
  count = 0
  countElement.textContent = 0
}


// Create and then fetch the save-element paragraph and store it in a variable called saveElement.

// Create a variable that contains both the count and the dash separator. For example: "12 - "

// Render the variable in the saveElement using innerText.
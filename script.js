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
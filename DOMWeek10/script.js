// Using HTML, Bootstrap, and JavaScript create a single page website that contains the following:
// A Bootstrap styled table representing your choice of data.
// A Bootstrap styled form that allows a user to add a new row to the table when clicking on submit.

const formButton = document.getElementById('submitForm')

let number = 0

formButton.addEventListener('click', (event) => {
event.preventDefault()

let name = document.getElementById('name').value
let business = document.getElementById('business').value
let contact = document.getElementById('contact').value

let newTableRow = document.createElement('tr')

let indexNode = document.createElement('td')
    indexNode.innerHTML = number
    newTableRow.append(indexNode)

let nameNode = document.createElement('td')
    nameNode.innerHTML = name
    newTableRow.append(nameNode)

let businessNode = document.createElement('td')
    businessNode.innerHTML = business
    newTableRow.append(businessNode)

let contactNode = document.createElement('td')
    contactNode.innerHTML = contact
    newTableRow.append(contactNode)

document.getElementById('tBody').appendChild(newTableRow)

document.getElementById('name').value = ''
document.getElementById('business').value = ''
document.getElementById('contact').value = ''

number++
})
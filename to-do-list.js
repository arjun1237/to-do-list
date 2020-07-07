

addEvents = () => {
    let addList = document.getElementById('add-list')
    addList.addEventListener('click', addListItem)
}

window.addEventListener('load', addEvents)

addListItem = () => {
    let itemInput = document.getElementById('add-item-input')
    let div = document.createElement('div')
    let label = document.createElement('label')
    let checkbox = document.createElement('input')
    let editButton = document.createElement('button')
    let deleteButton = document.createElement('button')

    checkbox.setAttribute('type', 'checkbox')
    label.textContent = itemInput.value
    editButton.textContent = 'edit'
    editButton.addEventListener('click', editItem)
    deleteButton.textContent = 'X'
    deleteButton.addEventListener('click', removeItem)
    checkbox.addEventListener('change', addtoCompleted)
    div.append(checkbox, label, editButton, deleteButton)
    addItemToList(div)
}

addBackToToDo = () => {
    let val = event.target.nextElementSibling.textContent
    event.target.parentElement.remove()
    let div = document.createElement('div')
    let label = document.createElement('label')
    let checkbox = document.createElement('input')
    let editButton = document.createElement('button')
    let deleteButton = document.createElement('button')

    checkbox.setAttribute('type', 'checkbox')
    label.textContent = val
    editButton.textContent = 'edit'
    editButton.addEventListener('click', editItem)
    deleteButton.textContent = 'X'
    deleteButton.addEventListener('click', removeItem)
    checkbox.addEventListener('change', addtoCompleted)
    div.append(checkbox, label, editButton, deleteButton)
    addItemToList(div)
}

addtoCompleted = () => {
    let value = event.target.nextElementSibling.textContent
    event.target.parentElement.remove()

    let div = document.createElement('div')
    let label = document.createElement('label')
    let checkbox = document.createElement('input')
    let editButton = document.createElement('button')
    let deleteButton = document.createElement('button')

    checkbox.setAttribute('type', 'checkbox')
    label.textContent = value
    editButton.textContent = 'edit'
    editButton.addEventListener('click', editItem)
    deleteButton.textContent = 'X'
    deleteButton.addEventListener('click', removeItem)
    checkbox.addEventListener('change', addBackToToDo)
    div.append(checkbox, label, editButton, deleteButton)
    addItemToCompletedList(div)
}

addItemToCompletedList = (obj) => {
    let itemAddedObj = document.getElementById('item-completed')
    itemAddedObj.append(obj)
}

addItemToList = (obj) => {
    let itemAddedObj = document.getElementById('item-added')
    itemAddedObj.append(obj)
}

removeItem = () => {
    event.target.parentElement.remove()
}

editItem = () => {
    let target = event.target
    let label = target.previousElementSibling
    let input = document.createElement('input')
    input.type = 'text'
    input.value = label.textContent
    label.remove()
    target.textContent = 'Update'
    target.removeEventListener('click', editItem)
    target.addEventListener('click', updateItem)
    target.parentElement.insertBefore(input, target)
}

updateItem = () => {
    let target = event.target
    let input = target.previousElementSibling
    let label = document.createElement('label')
    label.textContent = input.value
    input.remove()
    target.textContent = 'Edit'
    target.removeEventListener('click', updateItem)
    target.addEventListener('click', editItem)
    target.parentElement.insertBefore(label, target)
}
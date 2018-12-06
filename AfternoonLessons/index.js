'use strict';

function captureText() {
const item = $('.js-shopping-list-entry').text()

}

function addCapturedTextToList() {
    const addButton = $form.find("button")
    const newItem = $(<li>
    <span class="shopping-item">${item}</span>
    <div class="shopping-item-controls">
      <button class="shopping-item-toggle">
        <span class="button-label">check</span>
      </button>
      <button class="shopping-item-delete">
        <span class="button-label">delete</span>
      </button>
    </div>
  </li>)
    addButton.click(function(event) {
        event.preventDefault()
        $('.shopping-list').append(newItem)
    })
}
captureText()
// function main () {
//     //enter items they need by typing and hitting "Return" or clicking "Add Item"
    
//     //Check and uncheck items on the list with "Check" button
    
//     //permanently remove itmes from list
// }

// $(main)
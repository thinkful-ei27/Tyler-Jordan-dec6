'use strict';

const myItem = function captureText() {
  $('#js-shopping-list-form').submit(function(event){
    event.preventDefault();
    let newItem = $('.js-shopping-list-entry').val();
    $('.js-shopping-list-entry').val('');
    return newItem;
  });
}
// take our text, append it into the list, with all the properties that
// the other items have
// wrap newItem in the html that gives the other items their apearance
function htmlWrapper(){
  $( ".shopping-list" ).append(`<li>
        <span class="shopping-item">${myItem}</span>
        <div class="shopping-item-controls">
          <button class="shopping-item-toggle">
            <span class="button-label">check</span>
          </button>
          <button class="shopping-item-delete">
            <span class="button-label">delete</span>
          </button>
        </div>
      </li>`);



}


// captureText()
// function main () {
//     //enter items they need by typing and hitting "Return" or clicking "Add Item"
    
//     //Check and uncheck items on the list with "Check" button
    
//     //permanently remove itmes from list
// }

$(htmlWrapper);

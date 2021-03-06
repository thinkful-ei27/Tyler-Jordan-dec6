'use strict';


// take our text, append it into the list, with all the properties that
// the other items have
// wrap newItem in the html that gives the other items their apearance
function htmlWrapper(){
  $('#js-shopping-list-form').submit(function(event){
    event.preventDefault();
    let newItem = $('.js-shopping-list-entry').val();
    $('.js-shopping-list-entry').val('');
    $( '.shopping-list' ).append(`<li>
        <span class="shopping-item">${newItem}</span>
        <div class="shopping-item-controls">
          <button class="shopping-item-toggle">
            <span class="button-label">check</span>
          </button>
          <button class="shopping-item-delete">
            <span class="button-label">delete</span>
          </button>
        </div>
      </li>`);

      
  });
}

function checkAndUncheck() {
  //when check button is submitted change class to change text to strikethrough
  $('.shopping-list').on('click', '.shopping-item-toggle', function(event) {
    $(this).closest('li').find('.shopping-item').toggleClass('shopping-item__checked');
    console.log("toggle clicked");
  });
}

function deleteItem() {
    $('.shopping-list').on('click', '.shopping-item-delete', function(event) {
        $(this).closest('li').remove()
})};


function main () {
//     //enter items they need by typing and hitting "Return" or clicking "Add Item"
  htmlWrapper();
  //     //Check and uncheck items on the list with "Check" button
  checkAndUncheck();
//     //permanently remove itmes from list
  deleteItem()
}

$(main);
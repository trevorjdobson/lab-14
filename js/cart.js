/* global Cart */
'use strict';

// Create an event listener so that when the delete link is clicked, the removeItemFromCart method is invoked.
var table = document.getElementById('cart');
table.addEventListener('click', removeItemFromCart);
var cart;

function loadCart() {
  var cartItems = JSON.parse(localStorage.getItem('cart')) || [];
  cart = new Cart(cartItems);
}

// Make magic happen --- re-pull the Cart, clear out the screen and re-draw it
function renderCart() {
  loadCart();
  // clearCart();
  // showCart();
}

// TODO: Remove all of the rows (tr) in the cart table (tbody)
function clearCart() {}

// DONE: Fill in the <tr>'s under the <tbody> for each item in the cart
function showCart() {

  // DONE: Find the table body
  var tBody = document.getElementsByTagName('tbody');
  // DONE: Iterate over the items in the cart
  for(var i = 0; i < Cart.items.length; i++){
    // DONE: Create a TR
    var trEl = document.createElement('tr');
    // TODONE?: Create a TD for the delete link, quantity,  and the item
    var tDEl = document.createElement('td');
    tDEl.textContent = 'delete';
    trEl.appendChild(tDEl);
    tDEl.addEventListener('click', removeItemFromCart);

    tDEl.textContent = Cart.items[i].name;
    trEl.appendChild(tDEl);

    tDEl.textContent = Cart.items[i].quantity;
    trEl.appendChild(tDEl);

    // DONE: Add the TR to the TBODY and each of the TD's to the TR
    tBody.appendChild(trEl);
  }
}

function removeItemFromCart(event) {

  // TODO: When a delete link is clicked, use cart.removeItem to remove the correct item
  console.log('delete?')
  // TODO: Save the cart back to local storage
  // TODO: Re-draw the cart table

}

// This will initialize the page and draw the cart on screen
renderCart();

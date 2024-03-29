/* global Cart */
'use strict';

// Create an event listener so that when the delete link is clicked, the removeItemFromCart method is invoked.
var table = document.getElementById('cart');
table.addEventListener('click', removeItemFromCart);
var cart;

function loadCart() {
  var cartItems = JSON.parse(localStorage.getItem('cart')) || [];
  console.log('cartItems',cartItems);
  cart = new Cart(cartItems);
  
}

// Make magic happen --- re-pull the Cart, clear out the screen and re-draw it
function renderCart() {
  loadCart();
  clearCart();
  showCart();
}

// DONE: Remove all of the rows (tr) in the cart table (tbody)
function clearCart() {
  var tbody = document.getElementsByTagName('tbody')[0];
  while (tbody.firstChild ){
    tbody.removeChild(tbody.firstChild);
  }
}

// DONE: Fill in the <tr>'s under the <tbody> for each item in the cart
function showCart() {
  console.log('show cart');
  // DONE: Find the table body
  var tBody = document.getElementsByTagName('tbody')[0];
  console.log(tBody);
  // DONE: Iterate over the items in the cart
  console.log('in loop', cart.items);
  for(var i = 0; i < cart.items.length; i++){
    
    // DONE: Create a TR
    var trEl = document.createElement('tr');
    // TODONE?: Create a TD for the delete link, quantity,  and the item
    var tDEldelete = document.createElement('td');
    var tDElproduct = document.createElement('td');
    var tDElquantity = document.createElement('td');
    tDEldelete.setAttribute('id', i);
    tDEldelete.textContent = 'delete';
    trEl.appendChild(tDEldelete);

    tDElproduct.textContent = cart.items[i].product;
    trEl.appendChild(tDElproduct);

    tDElquantity.textContent = cart.items[i].quantity;
    trEl.appendChild(tDElquantity);

    // DONE: Add the TR to the TBODY and each of the TD's to the TR
    tBody.appendChild(trEl);
  }
}

function removeItemFromCart(event) {

  // DONE: When a delete link is clicked, use cart.removeItem to remove the correct item
  console.log('delete?', event.target.id);
  var id = event.target.id;
  cart.removeItem(id);
  // DONE: Save the cart back to local storage
  localStorage.setItem('cart', JSON.stringify(cart));
  console.log(cart);
  // DONE: Re-draw the cart table
  // renderCart();
  clearCart();
  showCart();
}

// This will initialize the page and draw the cart on screen
renderCart();

// Renders the page with the new loaded information
$(document).ready(function() {
  if (sessionStorage.getItem("cart") == null) {
    sessionStorage.setItem("cart", JSON.stringify({}));
  }
  var cart = JSON.parse(sessionStorage.getItem("cart"));
  var keys = Object.keys(cart);
  var totalSum = 0;
  var finalPrice = 0;
  // loops through the items and sets variables for the item name, price, image, and quantities
  for (var i = 0; i < keys.length; i++) {
    var quanityItem = parseInt(cart[keys[i]].qty);
    var name = keys[i];
    var image = cart[keys[i]].img;
    var price = cart[keys[i]].price;
    totalSum += quanityItem;
    finalPrice += quanityItem * price;
    // Calls the drawitem function which will render the items in the cart
    drawItem(quanityItem, name, price, image);
  }
  // if no item...
  if (keys.length == 0) {
    document.getElementById("cart_empty").innerHTML = "Cart is empty";
    document.getElementById("badge").innerHTML = 0;
  }
  // draws the number of items in the cart for the badge for the nav bar
  else {
    document.getElementById("badge").innerHTML = totalSum;
  }

  document.getElementById("totalPrice").innerHTML = "Total: $" + finalPrice;
});

function drawItem(qty, name, price, image) {
  var cart = document.getElementById("cart");
  // var listItem = document.createElement("li");

  //Build Picture TD
  var pic = document.createElement("img");
  pic.src = image;
  pic.width = 200;
  pic.height = 200;

  //Build Row
  var tr = document.createElement("tr");

  //Add remove button
  var rmTD = document.createElement("th");
  var button = document.createElement("button");
  button.setAttribute("onclick", "removeItem('" + name + "')");
  button.innerHTML = "X";
  rmTD.appendChild(button);
  //Add Pic
  var picTD = document.createElement("th");
  picTD.appendChild(pic);

  //Add Name
  var nameTD = document.createElement("th");
  nameTD.innerHTML = name;

  //Add Qty
  var qtyTD = document.createElement("th");
  qtyTD.innerHTML = qty;

  //Add Price
  var priceTD = document.createElement("th");
  priceTD.innerHTML = price;

  //Add Row
  tr.appendChild(rmTD);
  tr.appendChild(picTD);
  tr.appendChild(nameTD);
  tr.appendChild(qtyTD);
  tr.appendChild(priceTD);
  cart.appendChild(tr);
}

// Function to clear the entire cart of all the items
function clearAll() {
  sessionStorage.clear();
  cart = {};
  location.reload();
}

// Function to remove the items
function removeItem(name) {
  var cart = JSON.parse(sessionStorage.getItem("cart"));
  delete cart[name];
  sessionStorage.setItem("cart", JSON.stringify(cart));
  location.reload();
}

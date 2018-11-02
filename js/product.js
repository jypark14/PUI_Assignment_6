// Calls the add to cart function with parameters item, price and image
function addToCart(item, imageSource, price) {
  var val = parseInt(document.getElementById("item_qty").value);
  var cart = JSON.parse(sessionStorage.getItem("cart"));
  if (cart == null) cart = {};
  if (cart.hasOwnProperty(item)) {
    cart[item].qty = val + cart[item].qty;
    // Alert message when user adds an item
    alert(
      "Added " +
        val +
        " more of " +
        item +
        " to cart!, total: " +
        cart[item].qty
    );
      var sze = document.getElementById("sizeOption");
      var clr = document.getElementById("colorOption");
      var sizeOption = sze.options[sze.selectedIndex].text;
      var colorOption = clr.options[clr.selectedIndex].text;
      console.log(sze);
      var infobox = document.getElementById('cart_info');
      infobox.innerHTML = ("Added " + cart[item].qty + " of " + sizeOption + " " + colorOption + " " + item + " to cart!");
     
    // stores the item
    sessionStorage.setItem("cart", JSON.stringify(cart));
    return;
  }
  cart[item] = {};
  cart[item].qty = parseInt(document.getElementById("item_qty").value);
  cart[item].img = imageSource;
  cart[item].price = price;
  sessionStorage.setItem("cart", JSON.stringify(cart));
  //   Alert message to let the user know the item added
  var sze = document.getElementById("sizeOption");
  var clr = document.getElementById("colorOption");
  var sizeOption = sze.options[sze.selectedIndex].text;
  var colorOption = clr.options[clr.selectedIndex].text;
  console.log(sze);
  var infobox = document.getElementById('cart_info');
  infobox.innerHTML = ("Added " + cart[item].qty + " of " + sizeOption + " " + colorOption + " " + item + " to cart!");
  alert("Added " + cart[item].qty + " of " + sizeOption + " " + colorOption + " " + item + " to cart!");
}

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
  }
  // if no item... (the badge will be 0)
  if (keys.length == 0) {
    try {
      document.getElementById("cart_empty").innerHTML = "Cart is empty";
    } catch (e) {}
    document.getElementById("badge").innerHTML = 0;
  }
  // draws the number of items in the cart for the badge for the nav bar
  else {
    document.getElementById("badge").innerHTML = totalSum;
  }
});

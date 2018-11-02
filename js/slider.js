// JS file for the slider in the javascript page for related items

// sets index for the image  and calls showimage function
var slideIndex = 1;
showImage(slideIndex);

// counts the index for the slider
function indexCounter(index) {
  showImage((slideIndex += index));
}

function showImage(val) {
  var i;
  var x = document.getElementsByClassName("mySlides");
  // allows the user to go through the images in the slider
  if (val > x.length) {
    slideIndex = 1;
  }
  if (val < 1) {
    slideIndex = x.length;
  }
  // loops through the images in the slider
  for (i = 0; i < x.length; i++) {
    x[i].style.display = "none";
  }
  x[slideIndex - 1].style.display = "block";
}

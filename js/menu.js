function toggleMenu(el) {
    el.classList.toggle("change");
    $('#nav_wrapper').slideToggle(600);
}
$(document).ready(function() {


//section to handle slider
var slideIndex = 0;
showSlides();

function showSlides() {
  var i;
  var slides = document.getElementsByClassName("slider_segment");
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none"; 
  }
  slideIndex++;
  if (slideIndex > slides.length) {slideIndex = 1} 
  slides[slideIndex-1].style.display = "block"; 
  setTimeout(showSlides, 8000); // duration for changing image
}
//----------------------- //
});
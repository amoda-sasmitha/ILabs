var slideIndex = 1;
showSlides(slideIndex);

function currentSlide(n) {
  showSlides(slideIndex = n);
}

var prev01 = document.getElementById("prev01");
var prev02 = document.getElementById("prev02");
var prev03 = document.getElementById("prev03");

 document.getElementById("dot01").addEventListener("mouseenter", () => {
    prev01.classList.remove("d-none");
    console.log('dd1')
});
document.getElementById("dot01").addEventListener("mouseleave", () => {
    prev01.classList.add("d-none");
    console.log('dd2')
});
document.getElementById("dot02").addEventListener("mouseenter", () => {
    prev02.classList.remove("d-none");
    console.log('dd3')
});
document.getElementById("dot02").addEventListener("mouseleave", () => {
    prev02.classList.add("d-none");
    console.log('dd4')
});
document.getElementById("dot03").addEventListener("mouseenter", () => {
    prev03.classList.remove("d-none");
    console.log('dd5')
});
document.getElementById("dot03").addEventListener("mouseleave", () => {
    prev03.classList.add("d-none");
    console.log('dd6')
});

function showSlides(n) {
  var i;
  var slides = document.getElementsByClassName("mySlides");
  var dots = document.getElementsByClassName("dot");
  if (n > slides.length) {slideIndex = 1}
  if (n < 1) {slideIndex = slides.length}
  for (i = 0; i < slides.length; i++) {
      slides[i].style.display = "none";
  }
  for (i = 0; i < dots.length; i++) {
      dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[slideIndex-1].style.display = "block";
  dots[slideIndex-1].className += " active";
}

function menutoggle(element){
    var menu = document.getElementById("labs-menu");
   
    if( menu.classList.contains('menu-none') ) {
        menu.classList.remove("menu-none");
    }else{
        menu.classList.add("menu-none");
    }
}

function closemainmenu(e){
    console.log('ca');
    var menu = document.getElementById("labs-menu");
    menu.classList.add("menu-none");
}
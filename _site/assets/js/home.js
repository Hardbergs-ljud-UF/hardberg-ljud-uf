var slideIndex = 1;
showSlides(slideIndex);

function plusSlides(n) {
  showSlides(slideIndex += n);
}

function currentSlide(n) {
  showSlides(slideIndex = n);
}

function showSlides(n) {
  var i;
  var slides = document.getElementsByClassName("slides");
  var title = document.getElementsByClassName("title");
  var activeTitles = document.getElementsByClassName("title-active");

  if (n > slides.length) {slideIndex = 1}
  if (n < 1) {slideIndex = slides.length}

  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  for (i = 0; i < activeTitles.length; i++) {
      activeTitles[i].className = activeTitles[i].className.replace("-active", "");
  }
  slides[slideIndex-1].style.display = "grid";
  title[slideIndex-1].className += "-active";
}


//touch funktion för slideshowen, tagen från https://stackoverflow.com/questions/45648886/swipe-left-right-for-a-webpage
//och modifierad för att endast tillåta en "swipe" när man trycker i slideshowen
var slideshow = document.getElementById("lm1-slideshow-container");
var start = null;
slideshow.addEventListener("touchstart", function(event) {
  var touchedElement = event.target;

  if(touchedElement.className || !touchedElement.classname) { //jag vet att det är fult, men det funkar och jag vet inget bättre sätt
    if (event.touches.length === 1) { //kolla ifall ett finger trycker
      start = event.touches.item(0).clientX;
    } else {
      start = null; //mer än ett finger, stoppa swipen
    }
  }

});

slideshow.addEventListener("touchend", function(event) {
  var offset = 100; //ställ in hur lång en swipe måste vara
  if (start) {
    var end = event.changedTouches.item(0).clientX;
    if (end > start + offset) {
      plusSlides(-1);
    }
    if (end < start - offset) {
      plusSlides(1);
    }
  }
});
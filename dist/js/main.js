"use strict";

console.log("Hello Chello! slideshow.");

var slideshow = function slideshow() {
  console.log('starting slideshow');
  var currentSlide = -1; //use ALL to grab all elements with that class name

  var $slides = document.querySelectorAll('.slide');

  var newSlide = function newSlide() {
    //add the next slide
    currentSlide++;
    console.log('showing image: ', currentSlide); //if slide reaches the end of its length

    if (currentSlide >= $slides.length) {
      //start the slide at the first img
      currentSlide = 0;
    } //if $slide is currently showing


    if ($slides === currentSlide) {
      //add the showing class, which has display block
      $slides[currentSlide].className.add("showing");
    } else {
      //if it is not showing
      //remove the showing class, slides set to display hidden 
      $slides.className.remove("showing");
    }
  }; //call the function (load picture)


  newSlide(); //every 3 seconcs, call it again (change picture)

  setInterval(newSlide, 3000);
};

slideshow(); // (function() {
// 	let currentSlide = -1;
// 	let $slides = document.querySelectorAll('.slideshow .slide')
// 	let changeSlide = function() {
// 		currentSlide++
// 		if (currentSlide >= $slides.length) {
// 			currentSlide = 0
// 		}
// 		$slides.forEach(function($slide) {
// 			$slide.style.display = 'none'
// 		})
// 		$slides[currentSlide].style.display = 'block'
// 	}
// 	changeSlide()
// 	setInterval(changeSlide, 3000)
// })();
//# sourceMappingURL=main.js.map

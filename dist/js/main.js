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
    }

    $slides.forEach(function ($slide) {
      // //if $slide is currently showing
      // if($slides === currentSlide){
      //     //add the showing class, which has display block
      //     $slides[currentSlide].className += "showing";
      //     console.log("class added");
      // } else {
      //     $slides.className -= "showing";
      // }
      //turn off display on all slides
      $slide.style.display = 'none'; //and if current slide is true, turn display on

      if ($slides[currentSlide]) {
        $slides[currentSlide].style.display = 'block';
      }
    });
  }; //call the function (load picture)


  newSlide(); //every 3 seconcs, call it again (change picture)

  setInterval(newSlide, 3000);
}; //CALL SLIDESHOW: Turn on/off
// slideshow();


var backChange = function () {
  var currentSet = -1;
  var $sets = ["url(/dist/img/tacoSet2.png)", "url(/dist/img/dogSet2.png)", "url(/dist/img/beachSet2.png)", "url(/dist/img/spaceSet2.png)", "url(/dist/img/sketchSet2.png)", "url(/dist/img/foodSet2.png)"];
  var $setsContainer = document.getElementById('#Cs-body'); // let changeSets = function() {
  // 	currentSet++
  // 	if (currentSet >= $sets.length) {
  // 		currentSet = 0
  // 	}
  // 	$sets.forEach(function($set) {
  // 		$set.style.backgroundImage = 'none'
  // 	})
  // 	$sets[currentSet].style.backgroundImage = 'block'
  // }
  // changeSets()
  // setInterval(changeSets, 3000)
}();
//# sourceMappingURL=main.js.map

"use strict";

console.log("Hello Chello! slideshow.");

var slideshow = function slideshow() {
  console.log('starting slideshow');
  var currentSlide = -1; //use ALL to grab all elements with that class name

  var $slides = document.querySelectorAll('.slide');

  var nextSlide = function nextSlide() {
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


  nextSlide(); //every 3 seconcs, call it again (change picture)

  setInterval(nextSlide, 3000);
}; //CALL SLIDESHOW: Turn on/off


slideshow();

var changeDoodles = function changeDoodles() {
  var $doodlesContainer = document.querySelector('#csBody');
  console.log('changing doodles');
  var currentDoodle = -1; //create an array of all doodles

  var $doodles = ["url(/dist/img/tacoSet2.png)", "url(/dist/img/dogSet2.png)", "url(/dist/img/beachSet2.png)", "url(/dist/img/spaceSet2.png)", "url(/dist/img/doodleSet2.png)", "url(/dist/img/foodSet2.png)"];

  var newDoodle = function newDoodle() {
    //add the next doodle
    currentDoodle++;
    console.log('showing doodle: ', currentDoodle); //if doodle reaches the end of its length

    if (currentDoodle >= $doodles.length) {
      //start the doodles at the first img
      currentDoodle = 0;
    } //if background image does not match current backround


    if ($doodles[currentDoodle] !== $doodlesContainer.style.backgroundImage) {
      // then manke backgrounds the same
      $doodlesContainer.style.backgroundImage = $doodles[currentDoodle];
    }
  }; //call the function (load picture)


  newDoodle(); //every 3 seconcs, call it again (change picture)

  setInterval(newDoodle, 3000);
}; //CALL DOODELS: Turn on/off
// changeDoodles();
// let $setsContainer = document.querySelector('#csBody');
// let backChange = (function() {
// 	let currentSet = -1;
//     let $sets = [
//         "url(/dist/img/tacoSet2.png)",
//         "url(/dist/img/dogSet2.png)",
//         "url(/dist/img/beachSet2.png)",
//         "url(/dist/img/spaceSet2.png)",
//         "url(/dist/img/sketchSet2.png)",
//         "url(/dist/img/foodSet2.png)",
//     ];
//     //every 3 seconds, pick an index number
//     // translate index into string
//     // if string does not match current backround
//     //make string new background
//     //else if strings match, do nothing (code will run again)
//     let swap = function(){
//         for (let s=0; s < $sets.length; s++){ // d =0, so long as it is below 4, print and increase d by one.
//             console.log("s: " + s)
//         }
//     }
// 	// let changeSets = function() {
// 	// 	currentSet++
// 	// 	if (currentSet >= $sets.length) {
// 	// 		currentSet = 0
// 	// 	}
// 	// 	$sets.forEach(function($set) {
// 	// 		$set.style.backgroundImage = 'none'
// 	// 	})
// 	// 	$setsContainer.style.backgroundImage = $sets[currentSet];
// 	// }
// 	// changeSets()
// 	setInterval(swap, 3000);
// })();
//# sourceMappingURL=main.js.map

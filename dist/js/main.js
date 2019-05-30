"use strict";

console.log("Hello Chello! slideshow.");

var slideshow = function slideshow() {
  console.log('starting slideshow');
  var currentSlide = -1; //use ALL to grab all elements with that class name

  var $slides = document.querySelectorAll('.slide');

  var nextSlide = function nextSlide() {
    // save the number of what used to be currentSlide as oldSlide
    var oldSlide = currentSlide; // and then change currentSlide to the next number

    currentSlide++; //if slide reaches the end of its length

    if (currentSlide >= $slides.length) {
      //start the slide at the first img
      currentSlide = 0;
    }

    console.log('showing image: ', currentSlide);
    var tl = new TimelineMax();

    if (oldSlide >= 0) {
      // $slides[oldSlide].style.display = 'none';
      // go into the .slide with index of oldSlide,
      // and find it's img.picture child element
      var oldSlideImage = $slides[oldSlide].querySelector('.picture'); // exit animation - fade out, and move right by 100 px

      tl.to(oldSlideImage, 0.3, {
        opacity: 0,
        x: -100
      });

      if (oldSlide === 0) {
        // here are the exit animations specifically for when slide 0 is leaving
        var stamp = $slides[oldSlide].querySelector('.stamp');
        tl.to(stamp, 0.5, {
          opacity: 0,
          x: 0
        }, "-=0.25");
      } else if (oldSlide === 1) {
        // here are the exit animations specifically for when slide 1 is leaving
        var _stamp = $slides[oldSlide].querySelector('.stamp');

        tl.to(_stamp, 0.5, {
          opacity: 0,
          scale: 0
        }, "-=0.25");
      } else if (oldSlide === 2) {
        // here are the exit animations specifically for when slide 2 is leaving
        var _stamp2 = $slides[oldSlide].querySelector('.stamp');

        var _$foods = document.querySelectorAll('.food-stampy');

        var _tl_foodFight = new TimelineMax();

        _tl_foodFight.staggerTo(_$foods, .8, {
          scale: 0.5,
          x: -100,
          y: 50,
          opacity: 0,
          ease: Elastic.easeOut
        }).fromTo(_stamp2, 1, {
          opacity: 0,
          y: 0,
          x: 0,
          rotation: 0,
          scale: 1
        }, {
          opacity: 1,
          y: -115,
          x: -190,
          rotation: 30,
          scale: 0
        });
      } else if (oldSlide === 3) {// here are the exit animations specifically for when slide 3 is leaving
      }
    } // $slides[currentSlide].style.display = 'block';


    var currentSlideImage = $slides[currentSlide].querySelector('.picture'); // enter animation - fade in, and move up to 0 px (default position)

    tl.to(currentSlideImage, 0.5, {
      opacity: 1,
      x: 100
    });

    if (currentSlide === 0) {
      // here are the enter animations specifically for when slide 0 is entering
      var _stamp3 = $slides[currentSlide].querySelector('.stamp');

      var $rocket = document.querySelector('.rocket-stampy');
      var $astro = document.querySelector('.astro1-stampy');
      var tl_rocketFly = new TimelineMax();
      tl_rocketFly.fromTo(_stamp3, 1, {
        opacity: 0,
        y: 115,
        x: -190,
        rotation: 50,
        scale: 0
      }, {
        opacity: 1,
        y: 0,
        x: 0,
        rotation: 0,
        scale: 1
      }).fromTo($astro, 1, {
        opacity: 0,
        y: -70,
        rotation: 0
      }, {
        opacity: 1,
        y: 130,
        rotation: -5,
        scale: .8
      }).fromTo($astro, 2, {
        rotation: -5
      }, {
        y: -15,
        rotation: 5,
        yoyo: true
      }, "float").fromTo($rocket, 2.5, {
        opacity: 0,
        y: -115,
        x: 125,
        rotation: 0
      }, {
        opacity: 1,
        y: 450,
        x: -290,
        rotation: -50
      }, "float+=.01");
    } else if (currentSlide === 1) {
      // here are the enter animations specifically for when slide 2 is entering
      var _stamp4 = $slides[currentSlide].querySelector('.stamp');

      var _$foods2 = document.querySelectorAll('.food-stampy');

      var _tl_foodFight2 = new TimelineLite();

      _tl_foodFight2.fromTo(_stamp4, 1, {
        opacity: 0,
        y: -115,
        x: 190,
        rotation: -50,
        scale: 0
      }, {
        opacity: 1,
        y: 0,
        x: 0,
        rotation: 0,
        scale: 1
      }, "float").staggerFrom(_$foods2, .1, {
        scale: 0.5,
        x: -100,
        y: 50,
        opacity: 0,
        ease: Elastic.easeOut
      }, 0.2);
    } else if (currentSlide === 2) {
      var _stamp5 = $slides[currentSlide].querySelector('.stamp');

      tl.to(_stamp5, 0.5, {
        opacity: 1,
        x: 8
      });
    } else if (currentSlide === 3) {// here are the enter animations specifically for when slide 3 is entering
    }
  }; //call the function (load picture)


  nextSlide(); //every 3 seconcs, call it again (change picture)

  setInterval(nextSlide, 3000);
}; // CALL SLIDESHOW: Turn on/off


slideshow(); //doodles is bod background

var changeDoodles = function changeDoodles() {
  var $doodlesContainer = document.querySelector('#csBody');
  console.log('changing doodles');
  var currentDoodle = -1; //create an array of all doodles

  var $doodles = ["url(/dist/img/thinkStamp.png)", "url(/dist/img/spaceStamp2.png)", "url(/dist/img/foodStamp1.png)", "url(/dist/img/spaceSet2.png)", "url(/dist/img/codeStamp.png)", "url(/dist/img/foodSet2.png)"];

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


var $foods = document.querySelectorAll('.food-stampy');
var tl_foodFight = new TimelineLite();
var tl = new TimelineLite();
tl_foodFight.fromTo($stamp, 1, {
  opacity: 0,
  y: -115,
  x: 190,
  rotation: -50,
  scale: 0
}, {
  opacity: 1,
  y: 0,
  x: 0,
  rotation: 0,
  scale: 1
}, "float");
tl.staggerFrom($foods, .1, {
  scale: 0.5,
  x: -100,
  y: 50,
  opacity: 0,
  ease: Elastic.easeOut
}, 0.2); // let $setsContainer = document.querySelector('#csBody');
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
// 	let changeSets = function() {
// 		currentSet++
// 		if (currentSet >= $sets.length) {
// 			currentSet = 0
// 		}
// 		$sets.forEach(function($set) {
// 			$set.style.backgroundImage = 'none'
// 		})
// 		$setsContainer.style.backgroundImage = $sets[currentSet];
// 	}
// 	changeSets()
// 	setInterval(swap, 3000);
// })();
//# sourceMappingURL=main.js.map

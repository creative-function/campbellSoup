console.log(`Hello Chello! slideshow.`);


let slideshow = function(){


    console.log('starting slideshow')
    let currentSlide = -1;

    //use ALL to grab all elements with that class name
    let $slides = document.querySelectorAll('.slide');

    let nextSlide = function(){
        

        // save the number of what used to be currentSlide as oldSlide
        let oldSlide = currentSlide 

        // and then change currentSlide to the next number
        currentSlide ++
        
        //if slide reaches the end of its length
        if (currentSlide >= $slides.length){
            //start the slide at the first img
            currentSlide = 0
        }
        console.log('showing image: ', currentSlide);


        let tl = new TimelineMax()

      

        if (oldSlide >= 0) {
            // $slides[oldSlide].style.display = 'none';
            // go into the .slide with index of oldSlide,
            // and find it's img.picture child element
            let oldSlideImage = $slides[oldSlide].querySelector('.picture')
            // exit animation - fade out, and move right by 100 px
            tl.to(oldSlideImage, 0.3, {opacity: 0, x: -100})

            if (oldSlide === 0 ) {
                // here are the exit animations specifically for when slide 0 is leaving
                let stamp = $slides[currentSlide].querySelector('.stamp')
                let $rocket = document.querySelector('.rocket-stampy');
                let $astro = document.querySelector('.astro1-stampy');
                let tl_rocketFly = new TimelineMax();
                
                tl_rocketFly
                    .fromTo(stamp, 1, {opacity:1, y:0, x:0, rotation:0, scale:1},{opacity:0,y:115, x:-190, rotation:50, scale:0},"rocket-exit")
                    .fromTo($astro, 1,  {opacity:1, y:0, x:0, rotation:0, scale:1},{opacity:0,y:115, x:-190, rotation:50, scale:0},"rocket-exit")
                    .fromTo($rocket, 1, {opacity:1, y:0, x:0, rotation:0, scale:1},{opacity:0,y:115, x:-190, rotation:50, scale:0},"rocket-exit")
                   

            } else if (oldSlide === 1 ) {
                // here are the exit animations specifically for when slide 1 is leaving

                let stamp = $slides[oldSlide].querySelector('.stamp')
                let $foods = document.querySelectorAll('.food-stampy');
                let tl_foodFight = new TimelineMax();

                tl_foodFight
                .fromTo(stamp, 1, {opacity:1, y:0, x:0, rotation:0, scale:1},{opacity:0,y:115, x:-190, rotation:50, scale:0},"food-exit")
                .fromTo($foods, 1, {opacity:1, y:0, x:0, rotation:0, scale:1},{opacity:0,y:115, x:-190, rotation:50, scale:0},"food-exit")


            } else if (oldSlide === 2 ) {

                let stamp = $slides[currentSlide].querySelector('.stamp');
                let $thinks = document.querySelectorAll('.think-stampy');
                let tl_thinker = new TimelineMax();

                tl_thinker
                  .fromTo(stamp, 1, {opacity:1, y:0, x:0, rotation:0, scale:1},{opacity:0,y:115, x:-190, rotation:50, scale:0},"think-exit")
                  .staggerTo($thinks, 1, {opacity:1, y:0, x:0, rotation:0, scale:1},{opacity:0,y:115, x:-190, rotation:50, scale:0},.2,"think-exit")

    
  
            } else if (oldSlide === 3 ) {
                // here are the exit animations specifically for when slide 3 is leaving
                let stamp = $slides[currentSlide].querySelector('.stamp');  

                let $borks = $slides[currentSlide].querySelectorAll('.dog-barky');
                let $doggiesRT = document.querySelectorAll('.dog-stampy');
                let $doggiesLFT = document.querySelectorAll('.dog-stampy-lft');
                let tl_doggos = new TimelineMax();

                tl_doggos
                    .fromTo(stamp, 1, {opacity:1, y:0, x:0, rotation:0, scale:1},{opacity:0,y:115, x:-190, rotation:50, scale:0},"dog-exit")
                    .fromTo($doggiesRT, 1, {opacity:1, y:0, x:0, rotation:0, scale:1},{opacity:0,y:115, x:-190, rotation:50, scale:0},"dog-exit")
                    .fromTo($doggiesLFT, 1, {opacity:1, y:0, x:0, rotation:0, scale:1},{opacity:0,y:115, x:-190, rotation:50, scale:0},"dog-exit")
                    .staggerTo($borks, 1, {opacity:1, y:0, x:0, rotation:0, scale:1}, {opacity:0,y:115, x:-190, rotation:50, scale:0},.2,"dog-exit")

            }

        }

        // $slides[currentSlide].style.display = 'block';
        let currentSlideImage = $slides[currentSlide].querySelector('.picture')
        // enter animation - fade in, and move up to 0 px (default position)
        tl.to(currentSlideImage, 0.5, {opacity: 1,  x:100})

        if (currentSlide === 0 ) {
            // here are the enter animations specifically for when slide 0 is entering
            let stamp = $slides[currentSlide].querySelector('.stamp')
            let $rocket = document.querySelector('.rocket-stampy');
            let $astro = document.querySelector('.astro1-stampy');
            let tl_rocketFly = new TimelineMax();
            
            tl_rocketFly
                .fromTo(stamp, 1, {opacity:0,y:115, x:-190, rotation:50, scale:0},{opacity:1, y:0, x:0, rotation:0, scale:1})
                .fromTo($astro, 1, {opacity:0, y:-70, rotation:0}, {opacity:1, y:130,rotation:-5, scale:.8})
                .fromTo($astro, 2, {rotation:-5},{ y:-15,rotation:5, yoyo:true}, "float")
                .fromTo($rocket, 2.5, {opacity:0,y:-115, x:125, rotation:0},{opacity:1, y:450, x:-290, rotation:-50}, "float+=.01")
                

        } else if (currentSlide === 1 ) {
                // here are the enter animations specifically for when slide 2 is entering
                let stamp = $slides[currentSlide].querySelector('.stamp');  
                let $foods = document.querySelectorAll('.food-stampy');
                let tl_foodFight = new TimelineMax();
                
                tl_foodFight
                    .fromTo(stamp, 1, {opacity:0, y:-115, x:-190, rotation:30, scale:0},{opacity:1,y:0, x:0, rotation:0, scale:1},"foody")
                    .staggerFrom($foods, .8, {scale:0.5, x:-100, y:50, opacity:1, ease:Elastic.easeOut},.2,"foody+=.05")
                
        

            } else if (currentSlide === 2 ){
                let stamp = $slides[currentSlide].querySelector('.stamp');
                let $thinks = document.querySelectorAll('.think-stampy');
                let tl_thinker = new TimelineMax();


                tl_thinker
                    .fromTo(stamp, 1, {opacity:0, y:-115, rotation:-130, scale:0},{opacity:1,y:0, x:0, rotation:0, scale:1},"think")
                    .staggerFrom($thinks, .8, {scale:0.5, x:-100, y:50, opacity:0, ease:Elastic.easeOut},.2,"think")

            } else if (currentSlide === 3 ) {
            // here are the enter animations specifically for when slide 3 is entering
                let stamp = $slides[currentSlide].querySelector('.stamp');  

                let $borks = document.querySelectorAll('.dog-barky');
                let $doggiesRT = document.querySelectorAll('.dog-stampy');
                let $doggiesLFT = document.querySelectorAll('.dog-stampy-lft');
                let tl_doggos = new TimelineMax();

                tl_doggos
                    .fromTo(stamp, 1, {opacity:0, y:-115, x:-190, rotation:30, scale:0},{opacity:1,y:0, x:0, rotation:0, scale:1})
                    .staggerFrom($doggiesRT, 1, {x:-100, opacity:0},.2,"dogs")
                    .staggerFrom($doggiesLFT, 1, {x:100, opacity:0},.2,"dogs")
                    .staggerFrom($borks,.8,{scale:0, ease:Elastic.easeOut},.1,"dogs" )

            }
    }
    //call the function (load picture)
    nextSlide()

    //every 3 seconcs, call it again (change picture)
    setInterval(nextSlide, 3000)
};

// CALL SLIDESHOW: Turn on/off
slideshow();


//doodles is bod background
let changeDoodles = function(){

    let $doodlesContainer = document.querySelector('#csBody');

    console.log('changing doodles')
    let currentDoodle=-1;

    //create an array of all doodles
    let $doodles = [
        "url(/dist/img/thinkStamp.png)",
        "url(/dist/img/spaceStamp2.png)",
        "url(/dist/img/foodStamp1.png)",
        "url(/dist/img/spaceSet2.png)",
        "url(/dist/img/codeStamp.png)",
        "url(/dist/img/foodSet2.png)",
    ];

    let newDoodle = function(){
        

        //add the next doodle
        currentDoodle ++
        console.log('showing doodle: ', currentDoodle);
    
        //if doodle reaches the end of its length
        if(currentDoodle >= $doodles.length){
            //start the doodles at the first img
            currentDoodle = 0
        }

            //if background image does not match current backround

            if($doodles[currentDoodle] !== $doodlesContainer.style.backgroundImage){

                // then manke backgrounds the same
                $doodlesContainer.style.backgroundImage = $doodles[currentDoodle];
             }
        
    }
    //call the function (load picture)
    newDoodle()

    //every 3 seconcs, call it again (change picture)
    setInterval(newDoodle, 3000)
};


//CALL DOODELS: Turn on/off
// changeDoodles();












// let $doggiesRT = document.querySelectorAll('.dog-stampy');
// let $doggiesLFT = document.querySelectorAll('.dog-stampy-lft');
// let $borks = document.querySelectorAll('.dog-barky');
// let tl_doggos = new TimelineMax();

// // on screen
// tl_doggos
//     .staggerFrom($doggiesRT, 1, {x:-100, opacity:0},.2,"dogs")
//     .staggerFrom($doggiesLFT, 1, {x:100, opacity:0},.2,"dogs")
//     .staggerFrom($borks,.8,{scale:0, ease:Elastic.easeOut},.1 )

// // //OFF SCREEN


// tl_doggos
//     .staggerTo($borks,.8,{scale:0, ease:Elastic.easeOut},.1,"dogs" )
//     .staggerTo($doggiesRT, 1, {x:500, opacity:0},.2,"dogs")
//     .staggerTo($doggiesLFT, 1, {x:-500, opacity:0},.2,"dogs")








            







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
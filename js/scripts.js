$(document).ready(function() {
 
 var time = 5; // time in seconds
 var idname = '#owl-demo0';
 var $progressBar,
    $bar, 
    $elem, 
    isPause, 
    tick,
    percentTime;
$('#owl-carousel1').owlCarousel({
    loop:true,
    margin:5,
    nav:true,
    dots:false,
    autoplay:1000,
    navContainer: '#customNav1',
    responsive:{
        0:{
            items:1
        },
        600:{
            items:2
        },
        1000:{
            items:4
        }
    }
});
$('#owl-carousel2').owlCarousel({
    loop:true,
    margin:5,
    nav:true,
    dots:false,
    autoplay:1000,
    navContainer: '#customNav2',
    responsive:{
        0:{
            items:1
        },
        600:{
            items:2
        },
        1000:{
            items:4
        }
    }
});
$('#owl-carousel3').owlCarousel({
    loop:true,
    margin:5,
    nav:true,
    dots:false,
    autoplay:1000,
    navContainer: '#customNav3',
    responsive:{
        0:{
            items:1
        },
        600:{
            items:2
        },
        1000:{
            items:4
        }
    }
});
// Init the carousel
$(idname).owlCarousel({
    loop: true,
    margin: 10,
    nav: false,
    dots:false,
    items: 1,
    onInitialized: progressBar,
    onTranslated: moved,
    animateOut: 'fadeOut',
    onDrag: pauseOnDragging
});

// Init progressBar where elem is $("#owl-demo")
function progressBar(){    
    // build progress bar elements
    buildProgressBar();
    
    // start counting
    start();
}

// create div#progressBar and div#bar then prepend to $("#owl-demo")
function buildProgressBar(){
    $progressBar = $("<div>",{
        id:"progressBar"
    });
    
    $bar = $("<div>",{
        id:"bar"
    });
    
    $progressBar.append($bar).prependTo($(idname));
}

function start() {
    // reset timer
    percentTime = 0;
    isPause = false;
    
    // run interval every 0.01 second
    tick = setInterval(interval, 10);
};

function interval() {
    if(isPause === false){
        percentTime += 1 / time;
        
        $bar.css({
            width: percentTime+"%"
        });
        
        // if percentTime is equal or greater than 100
        if(percentTime >= 100){
            // slide to next item 
            $(idname).trigger("next.owl.carousel");
            percentTime = 0; // give the carousel at least the animation time ;)
        }
    }
}

// pause while dragging 
function pauseOnDragging(){
    isPause = true;
}

// moved callback
function moved(){
    // clear interval
    clearTimeout(tick);
    
    // start again
    start();
}
});
// $("#nav").localScroll();

$(window).scroll(function(){
                 
    var scrollY = $(this).scrollTop();
    
    console.log(scrollY);
});

var navHeight = 70;

function navTo(element) {
    
    clearInterval(this);
    
    console.log(element);
    
    $('html, body').animate({
        scrollTop: $(element.getAttribute("href")).offset().top - navHeight
    }, 750);
}
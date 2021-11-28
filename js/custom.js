$(document).ready(function(){
    // banner slider
    $('.banner-slider').slick({
        arrows: false,
        dots: true,
    });

    // venobox
        $('.venobox').venobox(); 

    // testimonial-slider
    $('.testimonial-slider').slick({
        arrows:false,
        slidesToShow:'2',
        dots:true,
        autoplay:true,
    });

    // counter up
    $('.counter').counterUp({
        delay: 10,
        time: 1000
    });

});
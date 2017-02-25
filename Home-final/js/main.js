
$(document).ready(function (){

    $('.bxslider').bxSlider(

        {controls: false}
    );

    $('#menu-tabs li').click(function(){
        var abc = this.className.slice(0,2);
        $('div.t1').hide();
        $('div.t2').hide();
        $('div.t3').hide();
        $('div.' + abc).fadeIn(500);
        $('#menu-tabs li').removeClass('active');
        $(this).addClass('active');
        return false;
    });
    $('li.t1').click();
    $('.bxslider').bxSlider({
        minSlides: 2,
        maxSlides: 2,
        slideWidth: 360,
        slideMargin: 10
    });
    $('.bxslider2').bxSlider();

    

});
$(document).ready(function(){
    $('#hamburger').click(function(){
        $(this).toggleClass('open');
        $('.nav').toggleClass('active');
        return false;
    });
});


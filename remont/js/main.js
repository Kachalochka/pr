
$(document).ready(function(){
    $('#hamburger').click(function(){
        $(this).toggleClass('open');
        $('.nav').toggleClass('active');
        return false;
    });
});




    $(document).ready(function() {
        $(".fancybox").fancybox();
    });




jQuery('#fader img:gt(0)').hide();

setInterval(function(){
    jQuery('#fader :first-child')
        /*.fadeTo(500, 0)*/
        .next('img')
        .fadeTo(500, 1)
        .end()
        .appendTo('#fader');
}, 4000);



$(document).ready(function () {
    $('#menu').click(function () {
        $(this).toggleClass('fa-times');
        $('header').toggleClass('toggle');
    });

    $(window).on('scroll load', function () {
        $('#menu').removeClass('fa-times');
        $('header').removeClass('toggle');
    });
});



let typed = new Typed('.auto-input',{
    strings:['Coder','Backend Developer'],
    typeSpeed:100,
    backSpeed:100,
 backDelay:2000,
    loop:true,

});
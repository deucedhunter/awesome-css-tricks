$(document).ready(function(){
    $("#burger-container").on('click', function(){
        $(this).toggleClass("open");

        if ($('#nav-menu').hasClass('hide')) {
            $('#nav-menu').removeClass("hide");
        } else {
            $('#nav-menu').addClass("hide");
        }

    })
})
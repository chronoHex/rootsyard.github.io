$(document).ready(function(){
    $('.scButton').hide();

    $(window).scroll(function(){
        if($(this).scrollDown < 50){
            $(".scButton").hide()
        } else {
            $(".scButton").fadeIn()
        }
    })
})
    
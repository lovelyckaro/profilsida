$(document).ready(function(){
    var height = (parseInt($("#bannerImg").css("height")) - 60) + "px";
    $("#bannerTitle").css({"height": height,"line-height": height})
});

$("#mig").click(function() {
    $('html, body').animate({
        scrollTop: $("#elementtoScrollToID").offset().top
    }, 2000);
});


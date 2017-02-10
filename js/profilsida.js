$(document).ready(function(){
    //align banner title to middle of the banner image
    var height = $("#bannerImg").outerHeight(false) / 2 - ($("#bannerTitle").outerHeight(false) / 2);
    $("#bannerTitle").css("top", height);
    
    //fade in elements when you scroll to them
    $(window).scroll(function(){
        $(".fadein").each(function(){
            var elementBot = $(this).offset().top + $(this).outerHeight(true); //Get the element's bottom y coordinate
            var windowBot = $(window).scrollTop() + $(window).height(); //get the window's bottom y coordinate
            if(elementBot > windowBot){
                $(this).animate({"opacity": "1"}, 700);
            }
        });
    });
});



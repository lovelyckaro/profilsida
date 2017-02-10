$(document).ready(function(){
    //align banner title to middle of the banner image
    var height = $("#bannerImg").outerHeight(false) / 2 - ($("#bannerTitle").outerHeight(false) / 2) + "px";
    //$("#bannerTitle").css("top", height);
    $("#bannerTitle").animate({top: height, opacity: "1"}, 500)
    
    //fade in elements when you scroll to them
    $(window).scroll(function(){
        $(".fadein").each(function(){
            var elementTop = $(this).offset().top; //Get the element's top most y coordinate
            var elementBot = elementTop + $(this).outerHeight(true); //Get the element's bottom most y coordinate
            var windowBot = $(window).scrollTop() + $(window).height(); //get the window's bottom most y coordinate
            if(elementBot < windowBot){
                $(this).animate({"opacity": "1"}, 700);
            }
        });
    });
});



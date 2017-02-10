$(document).ready(function(){
    //align banner title to middle of the banner image
    var height = $("#bannerImg").outerHeight(false) / 2 - ($("#bannerTitle").outerHeight(false) / 2) + "px";
    $("#bannerTitle").animate({top: height, opacity: "1"}, 500);
    $("#mainContainer").animate({top: "-100px", opacity: "1"}, 800);
    
    //fade in elements when you scroll to them
    $(window).scroll(function(){
        $(".fadein").each(function(){
            var elementBot = $(this).offset().top + $(this).outerHeight(true); //Get the element's bottom most y coordinate
            var windowBot = $(window).scrollTop() + $(window).height(); //get the window's bottom most y coordinate
            if(elementBot < windowBot){
                $(this).animate({opacity: "1", top: "0"}, 700);
            }
        });
    });
    //smooth scrolling when pressing the links
    $('a[href*="#"]:not([href="#"])').click(function() {
    if (location.pathname.replace(/^\//,'') == this.pathname.replace(/^\//,'') && location.hostname == this.hostname) {
      var target = $(this.hash);
      target = target.length ? target : $('[name=' + this.hash.slice(1) +']');
      if (target.length) {
        $('html, body').animate({
          scrollTop: (target.offset().top - 60)
        }, 500);
        return false;
      }
    }
  });
});



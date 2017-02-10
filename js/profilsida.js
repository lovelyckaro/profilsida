$(document).ready(function(){
    var height = $("#bannerImg").outerHeight(false) / 2 - ($("#bannerTitle").outerHeight(false) / 2);
    $("#bannerTitle").css("top", height);
});



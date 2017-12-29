var bglist = ["images/newyork.jpg", "images/stockholm.jpg", "images/varberg.jpg", "images/goldengate.jpeg", "images/bannerimg.jpeg"];

$(document).ready(function(){
  //  alert("Denna sidan är ett skolprojekt, far & flyg är inget riktigt företag");
    $("#showSearchbar").click(function(){
       $("#searchText").show('slow'); 
    });
    $("#slideMenu").click(function(){
       $("#menu").slideToggle("slow"); 
    });
});


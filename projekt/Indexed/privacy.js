req = new XMLHttpRequest();
req.open("GET", "http://www.skolweb.varberg.se/psa276/projekt/Indexed/text.txt", false);
req.send(null);
text = req.responseText;
var arr = text.split("\n");
delete text;
delete req;

var currentPage = 0;
var len = arr.length;

function prev(){
    if(currentPage == 0){
        alert("Du är redan på första sidan!")
    }else{
        currentPage--;
        $("#frame").attr("src",arr[currentPage]);
        $("#inp").val(currentPage);
        $("#l").attr("href",arr[currentPage]);
    }
}

function next(){
    if(currentPage == len){
        alert("Du är på sista sidan!")
    }else{
        currentPage++;
        $("#frame").attr("src",arr[currentPage]);
        $("#inp").val(currentPage);
        $("#l").attr("href",arr[currentPage]);
    }
}

function goto(){
    $("#f").submit(function(event) {
        currentPage = $("#inp").val();
        $("#frame").attr("src",arr[currentPage])
        $("#l").attr("href",arr[currentPage]);
        event.preventDefault();
    });

}
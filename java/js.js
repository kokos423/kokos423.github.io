//funkcije
var linkovi = ["Home", "Menu", "Contact", "Author"];
var meni;

function napravimeni(){
    meni = "<ul class='d-flex px-4'>";
    for(var i=0; i<linkovi.length; i++){
        meni += '<li class="mx-4"><a href="#">' + linkovi[i] + '</a></li>';
    }
    meni += "</ul>";
}
napravimeni();

document.getElementById("meni").innerHTML = meni;

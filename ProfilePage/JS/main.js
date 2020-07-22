var about = document.getElementById("about");
var conn  = document.getElementById("connect");
var tabs  = document.getElementsByClassName("nav-button");

function removeActive(){
    var navButtons = document.getElementsByClassName("nav-button");
    var sections   = document.getElementsByClassName("section");

    for(elem of sections){
        elem.classList.add("hide");
    }

    for(elem of navButtons){
        elem.classList.remove("active-tab");
    }
}

for(elem of tabs){
    elem.onclick = function(){
        removeActive();
        this.classList.add("active-tab");
        var id = this.getAttribute('t-id');
        document.getElementById(id).classList.remove("hide");
    }
}
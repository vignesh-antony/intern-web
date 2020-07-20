var elem = document.getElementById("profile");
var side = document.getElementById("side");
var sbar = document.getElementById("side-bar");
var clos = document.getElementById("close");

function closeSidebar(){
    side.classList.remove("active");
    sbar.classList.remove("active");
}

elem.onclick = function(){
    side.classList.add("active");
    sbar.classList.add("active");
}
clos.onclick = function(){
    closeSidebar();
}
side.onclick = function(){
    if(event.target != sbar){
        closeSidebar();
    }
}
sbar.addEventListener("click",function(ev){
    ev.stopPropagation();
});
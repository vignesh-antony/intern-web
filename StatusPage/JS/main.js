var container = document.getElementsByClassName("status-img-container");
var cur_stat = 0;

var showLine = function(step,type){
    var status = document.getElementsByClassName("status");
    var line = status[cur_stat].children[0].children;

    if(type === 1){
        line[step-1].classList.remove("active-line");
        line[step-1].classList.add("active-line-finished");
        line[step].classList.add("active-line");
    }
    else{
        line[step+1].classList.remove("active-line");
        line[step].classList.remove("active-line-finished");
        line[step].classList.add("active-line");
    }
}

var restart = function(type){
    var status = document.getElementsByClassName("status");
    var child  = status[cur_stat].children[2].children;

    for(var i = 0; i < child.length; i++){
        child[i].classList.remove("active");
    }

    child[0].classList.add("active");

    var lines = status[cur_stat].children[0].children;

    for(var i = 0; i < lines.length; i++){
        lines[i].classList.remove("active-line");
        lines[i].classList.remove("active-line-finished");
    }

    lines[0].classList.add("active-line");
    
    if(type === -1){
        status[cur_stat + 1].children[0].children[0].classList.remove("active-line");
    }
}

var loadStatus = function(step){
    var status = document.getElementsByClassName("status");
    if(step === -1){
        if(cur_stat !== 0){
            cur_stat += step;
            status[cur_stat].style.marginLeft = "0%";
            
            restart(step);
        }
    }
    else{
        if((cur_stat + 1) !== status.length){
            status[cur_stat].style.marginLeft = "-100%";
            cur_stat += step;
            
            restart(step);
        }
    } 
}

var showImage = function(obj,step){
    var child = obj.children;
    
    for(var i = 0; i < child.length; i++){
        if(child[i].classList.contains("active")){
            if(step === 1 && (i+1) === child.length){
                // Move to next status
                loadStatus(1);
            }
            else if(step === -1 && i === 0){
                // Move to previous status
                loadStatus(-1);
            }
            else{
                child[i].classList.remove("active");
                child[i+step].classList.add("active");

                if(step === 1) showLine(i+step,1);
                else showLine(i+step,0);

                break;
            }
        }
    }
}

var stat  = document.getElementsByClassName("status");
var timer;
var counter = function(){
    var object = stat[cur_stat].children[2];
    
    showImage(object,1);
}

for (elem of container){
    elem.addEventListener("touchstart",function(event){
        var x = event.touches[0].clientX;
        var width = window.innerWidth;

        if(x >= (width/2)) showImage(this,1);
        else showImage(this,-1);

        clearInterval(timer);
        timer = setInterval(counter,5000);
    });
}

timer = setInterval(counter,5000);
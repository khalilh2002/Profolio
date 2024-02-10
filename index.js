/*--------------top button -----------------------------------*/ 
/*-------------------------navbar------------------------*/

let topbutton = document.getElementById("top-button");

topbutton.onclick=function () {
    document.documentElement.scrollTop=0;
}

let navbar = document.getElementById("header");

let prevPosition = window.scrollY;
window.onscroll = function () {
    let currentPosition= window.scrollY;

    if (currentPosition < prevPosition) {
        navbar.style.top = "0";
    }else if (currentPosition > prevPosition){
        navbar.style.top = "-100px";
    }
    prevPosition=currentPosition;
    
    
    /*-------------- top button------------*/
    if (document.documentElement.scrollTop < 7) {
        topbutton.style.display="none";
    }else{
        topbutton.style.display="block";    
    }
}


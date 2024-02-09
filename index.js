
let topbutton = document.getElementById("top-button");

topbutton.onclick=function () {
    document.documentElement.scrollTop=0;
}

window.onscroll = function () {
    if (document.documentElement.scrollTop < 7) {
        topbutton.style.display="none"
    }else{
        topbutton.style.display="block"        
    }
}  

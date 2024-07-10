// ==============================All Selector=========================//
var body= document.querySelector('body');
var headerNav = document.querySelector('#nav');
var uparrow = document.querySelector('#uparrow');
var offsetTop = headerNav.offsetTop;

// ==============================Body Loading JS=========================//
window.onload = function(){
   
 }

// ==============================Sticky Header JS=========================//

window.onscroll = function(){ headerScroll()

}
function headerScroll(){
    if(window.pageYOffset > offsetTop){
        headerNav.classList.add ("sticky")
        uparrow.style.display="block";

    }
    else{
        headerNav.classList.remove("sticky")
        uparrow.style.display="none";
    }
}

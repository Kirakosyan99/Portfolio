var bars = document.querySelector('.bars');
var openMenu = document.querySelector('.openMenu');
var menu = document.querySelector('.menu');
var closeMenu = document.querySelector('.closeMenu');

openMenu.onclick=function(){
   menu.style.width='400px'
}
closeMenu.onclick=function(){
    menu.style.width='0px';
}
 


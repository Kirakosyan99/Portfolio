var menuBtn = document.getElementById("menuBtn");
var sideNav = document.getElementById("sideNav");
var menu = document.getElementById("menu");

menuBtn.onclick = function(){
	if(sideNav.style.right == "-250px"){
		sideNav.style.right = "0";
		sideNav.style.border = "1px solid #FF2108";
		sideNav.style.transition = "1.5s";
		menu.src = "https://icon-library.com/images/close-button-icon/close-button-icon-1.jpg"

	}else{
		sideNav.style.transition = "2s";
		sideNav.style.right = "-250px";
		sideNav.style.border = "1px solid #F6BFFF";
		menu.src = "https://cdn.icon-icons.com/icons2/916/PNG/512/Menu_icon_icon-icons.com_71858.png"
	}
}

var scroll = new SmoothScroll('a[href*="#"]', {
	speed: 1000,
	speedAsDuration: true
});
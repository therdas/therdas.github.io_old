var lastScrollTop = 0;
var menu = false;

window.addEventListener("scroll", function(){  
   var navBar = document.getElementById("top-bar");
   var st = window.pageYOffset || document.documentElement.scrollTop;

   if((st>200)&&(!menu)) {
   		navBar.classList.add("top-bar-shadow");
   } else {
   		navBar.classList.remove("top-bar-shadow");
   }

   if ((st > lastScrollTop)&&(st > 60+20)){
       navBar.style.top = "-100%";
       if(menu) showMenu();
   } else {
   	  navBar.style.top = "0";
   }
   lastScrollTop = st;
}, false);

function showMenu () {
	if(menu) {
		document.getElementById('mobile-menu').classList.add('hidden-menu');
		document.getElementById('shade').classList.add('hidden-shade');
		if((!document.getElementById('top-bar').classList.contains('top-bar-shadow'))&&((window.pageYOffset || document.documentElement.scrollTop)>200)) 
			setTimeout(function(){ 
				document.getElementById('top-bar').classList.add('top-bar-shadow');
			},80);
		menu = false;
	} else {
		document.getElementById('mobile-menu').classList.remove('hidden-menu');
		document.getElementById('shade').classList.remove('hidden-shade');
		if(document.getElementById('top-bar').classList.contains('top-bar-shadow'))
			setTimeout(function(){
				document.getElementById('top-bar').classList.remove('top-bar-shadow');
			}, 130);
		menu = true;
	}
}
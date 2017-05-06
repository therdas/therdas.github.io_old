function fadedShow(item, n, baseTime) {
	setTimeout(function () {item.classList.toggle("fade");}, baseTime+80*n);
}

function showMobNavDraw() {
	var drawer = document.getElementById("mobile-nav-drawer");
	var shade = document.getElementById("nav-shade");
	var menu = document.getElementById("mobile-menu");
	var items = document.getElementsByClassName("mobile-header-item")
	if(!drawer.classList.contains("hide")) {
		drawer.classList.toggle("hide");
		shade.classList.toggle("hide");
		setTimeout(function(){menu.classList.toggle("remove-shadow-border");}, 300);
		setTimeout(function(){
			drawer.classList.toggle("remove-styling");
			for (var i = 0; i < items.length; i++) {
				fadedShow(items[i], i, 0);
			}
		},570);
	} else {
		drawer.classList.toggle("hide");
		shade.classList.toggle("hide")
		for (var i = 0; i < items.length; i++) {
			fadedShow(items[i], i, 100);
		}
		drawer.classList.toggle("remove-styling");
	    menu.classList.toggle("remove-shadow-border");
	}
}

window.onscroll = function() {
    var nav = document.getElementById('mobile-menu');
    if ( window.pageYOffset > 150 ) {
        nav.classList.remove('scroll-shadow-hide');
    } else {
        nav.classList.add('scroll-shadow-hide');
    }
}
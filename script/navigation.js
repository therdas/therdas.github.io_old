function fadedShow(item, n, baseTime) {
	setTimeout(function () {item.classList.toggle("fade");}, baseTime+80*n);
}

function showMobNavDraw() {
	var drawer = document.getElementById("mobNavDraw");
	var shade = document.getElementById("navShade");
	var menu = document.getElementById("mobMenu");
	var items = document.getElementsByClassName("mobileHeaderItem")
	if(!drawer.classList.contains("hide")) {
		drawer.classList.toggle("hide");
		shade.classList.toggle("hide")
		setTimeout(function(){
			drawer.classList.toggle("removeStyling");
			menu.classList.toggle("removeShadowBorder");
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
		drawer.classList.toggle("removeStyling");
	    menu.classList.toggle("removeShadowBorder");
	}
}

function show() {
	var descrip = this.childNodes[1];
	var details = descrip.childNodes[1];
	var button = descrip.childNodes[2];
	details.classList.toggle("hide");
	button.classList.toggle("hide");
}
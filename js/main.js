import '../sass/index.sass';

let displayFunctions = {};
let displayConstants = {
    typewriteDelay: 50,
    typewriteString: "hi there!\ni'm a programmer, student and experimenter.\ni like to build experiences.\nwhy don't you have a look?\n"
}

displayFunctions.typewrite = (index = 0) => {
    if(index === displayConstants.typewriteString.length) 
        return;
    
    let elem = document.querySelector('span.intro');
    let letter = displayConstants.typewriteString[index];
    if(letter === '\n')
        letter = '<br/>';
    
    elem.innerHTML = elem.innerHTML + letter;
    setTimeout(() => { displayFunctions.typewrite(index + 1) }, displayConstants.typewriteDelay);
}

window.onload = e => {
    displayFunctions.typewrite();
}
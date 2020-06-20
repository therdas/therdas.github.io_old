import '../sass/index.sass';

let displayFunctions = {};
let displayConstants = {
    typewriteDelay: 50,
    typewriteString: "hi there!\r\ni'm a programmer, student and experimenter.\r\ni like to build experiences.\r\nwhy don't you have a look?\r\n"
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
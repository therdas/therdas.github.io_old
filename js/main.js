import '../sass/index.sass';
import throttle from "lodash/throttle"

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
    setTimeout(() => displayFunctions.typewrite(), 1000);
}

window.addEventListener("scroll", throttle(e => {
    if(window.innerWidth >= 750)
        return;
    
    //credit here:
    //https://gomakethings.com/how-to-test-if-an-element-is-in-the-viewport-with-vanilla-javascript/
    var isInViewport = function (el) {
        var top = el.offsetTop;
        var height = el.offsetHeight;

        while(el.offsetParent) {
            el = el.offsetParent;
            top += el.offsetTop;
        }


        return top >= (window.pageYOffset - window.innerHeight/1.2);
    };

    var elements = document.querySelectorAll("article.project");
    for(var el = 0; el < elements.length; ++el) {
        elements[el].querySelector('img').classList.remove('focus');
    }
    for(var el = 0; el < elements.length; ++el) {
        console.log("isVisible? ", el, isInViewport(elements[el]))
        if(isInViewport(elements[el])){
            elements[el].querySelector('img').classList.add('focus');
            break;
        }
    }
    
}, 200));
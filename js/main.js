import '../sass/index.sass';
import throttle from "lodash/throttle"

var isInViewport /*With Offset*/ = function (el, offset) {
    var top = el.offsetTop;
    var height = el.offsetHeight;

    return ((top + offset) < window.pageYOffset) && ((top + height) > window.pageYOffset) ;
};

let displayFunctions = {};
let displayConstants = {
    typewriteDelay: 50,
    typewriteString: "hi there!\ni'm a programmer, student and experimenter.\ni like to build experiences.\nwhy don't you have a look?\n",
    skillShowDelay: 70,
    skills: document.querySelectorAll('.skill'),
    skillsShown: false
}

displayFunctions.hexToRgb = (hex) => {
    return [parseInt(hex.slice(1,3),16),parseInt(hex.slice(3,5),16),parseInt(hex.slice(5,7),16)];
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

displayFunctions.showSkills = (index = 0) => {
    if(displayConstants.skillsShown)
        return;
    if(index === displayConstants.skills.length){
        displayConstants.skillsShown = true;
        return;
    }

    let width = displayConstants.skills[index].dataset.percentage;
    displayConstants.skills[index].querySelector('.bar').style.width = width + '%';
    console.log(width);
    setTimeout(() => displayFunctions.showSkills(index + 1), displayConstants.skillShowDelay);
}

displayFunctions.setSkillColors = () => {
    for(let i = 0; i < displayConstants.skills.length; ++i){
        displayConstants.skills[i].querySelector('.bar').style.backgroundColor = displayConstants.skills[i].dataset.color;
        let color = displayFunctions.hexToRgb(displayConstants.skills[i].dataset.color);
        displayConstants.skills[i].style.backgroundColor = "rgba(" + color[0] + "," + color[1] + "," + color[2] + ", 0.5)";
    }
}

window.onload = e => {
    setTimeout(() => displayFunctions.typewrite(), 1000);
    displayFunctions.setSkillColors();
}

window.addEventListener("scroll", throttle(e => {  
    if (isInViewport(document.querySelector('.skill'), -window.innerHeight) === true) 
        displayFunctions.showSkills();

    if(window.innerWidth >= 750)
        return;
    
    //credit here:
    //https://gomakethings.com/how-to-test-if-an-element-is-in-the-viewport-with-vanilla-javascript/
    var elements = document.querySelectorAll("article.project");
    for(var el = 0; el < elements.length; ++el) {
        elements[el].querySelector('img.shadow').classList.remove('shown');
    }
    for(var el = 0; el < elements.length; ++el) {
        if(isInViewport(elements[el], -500)){
            elements[el].querySelector('img.shadow').classList.add('shown');
            if(el > 0)
                elements[el - 1].querySelector('img.shadow').classList.remove('shown');
        }
    }
    
}, 50));
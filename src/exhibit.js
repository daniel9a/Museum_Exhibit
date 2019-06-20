// https://stackoverflow.com/questions/34855221/javascript-multiple-media-queries-possible

if (matchMedia) {
    var mqls = [ // array of media queries
        window.matchMedia("(min-width: 480px) and (max-width: 768px)"),
        window.matchMedia("(max-width: 480px)"),
    ]

    for (i = 0; i < mqls.length; i++) { // loop though media queries
        mqls[i].addListener(chengeID); // listen for queries
        chengeID(mqls[i]); // call handler func at runtime
    }
}

// media query change
function chengeID(mql) {

    if (mqls[0].matches) {
        document.getElementsByTagName("FOOTER")[0].removeAttribute("id");
    }
    else if (mqls[1].matches) {
        document.getElementsByTagName("FOOTER")[0].setAttribute("id", "spanHiddenContent2");
    }
    else {
        document.getElementsByTagName("FOOTER")[0].setAttribute("id", "spanHiddenContent2");
    }

}
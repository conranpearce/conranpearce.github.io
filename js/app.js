window.onload = function() {
    
}

var nav = document.getElementById('header-bar');

window.onscroll = function () { 
    if (document.scrollingElement.scrollTop >= document.scrollingElement.clientHeight) {
        this.nav.classList.remove("header-nobg");
    } else {
        this.nav.classList.add("header-nobg");
    }    
};
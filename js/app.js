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

// JQUERY

var figure = $(".video");
var vid = $("video");

[].forEach.call(figure, function (item) {
        item.addEventListener('mouseover', hoverVideo, false);
        item.addEventListener('mouseout', hideVideo, false);
});

function hoverVideo(e) {  
        $(this).find('.thevideo')[0].play();
}

function hideVideo(e) {
        $(this).find('.thevideo')[0].pause(); 
}
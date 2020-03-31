window.onload = function() {
    
}

var nav = document.getElementById('header-bar');

window.onscroll = function () { 

    if (document.scrollingElement.scrollTop >= document.scrollingElement.clientHeight) {
        var width = (window.innerWidth > 0) ? window.innerWidth : screen.width;
        if (width <= 576) {
            this.nav.style.display = 'none';
        }  else {
            this.nav.classList.remove("header-nobg");
        }

    } else {
        if (width <= 576) {
            this.nav.style.display = 'inline';
        } else {
            this.nav.style.display = 'inline';
            this.nav.classList.add("header-nobg");
        }
    }    
};

var figure = $(".video-file");

[].forEach.call(figure, function (item) {
    item.addEventListener('mouseover', hoverVideo, false);
    item.addEventListener('mouseout', hideVideo, false);
});

function hoverVideo(e) {  
    if (e.target.parentNode.id == 'game-parent') {
        $('.video-file')[0].play();
    } else if (e.target.parentNode.id == 'karate-parent') {
        $('.video-file')[1].play();
    }
}

function hideVideo(e) {
    if (e.target.parentNode.id == 'game-parent') {
        $('.video-file')[0].pause();
    } else if (e.target.parentNode.id == 'karate-parent') {
        $('.video-file')[1].pause();
    }
}
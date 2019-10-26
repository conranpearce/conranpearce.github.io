

// Make image not dragable
// Animate.css on image
// Instagram feed
// Video
// Homepage - load image then scroll down to short about and links
// Sort image by percentage
// Link to linkedin and github - new tabs created
// - Linked in and github become coloured when hovered
// Tools used - greyscaled and go on colour when highlighted
// Tools created a new tab to the website
// Image slideshow of fighting images - karate and muay thai
// Home button same price
// Resize first photo


// function start() {

//     var element = document.getElementById("portrait");

//     element.classList.add('animated', 'bounceInUp');
// }


window.onload = function() {
    var element = document.getElementById("portrait");
    element.classList.add('animated', 'fadeIn');

    // this.setTimeout(function() {
    //     window.scrollTo(0,document.body.scrollHeight);

    // },3000);
}

window.onbeforeunload = function () {
    window.scrollTo(0, 0);
}
// const element =  document.querySelector('.my-element')
// element.classList.add('animated', 'bounceOutLeft')
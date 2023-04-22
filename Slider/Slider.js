

let myImage = document.getElementById("slideshow");
let images = ["img/1.jpg", "img/2.jpg", "img/3.jpg"];
let i = 0;


function slideshow() {
    myImage.setAttribute('src', images[i]);
    
    if(i == images.length - 1) {
        i = 0;
    }else {
        i++;
    }

    setTimeout(function() {
        slideshow();
    }, 2000)

}
slideshow();
// Insert your code here.
var slideindex = 0;

showslide();

function showslide() {
    var i;
    var slides = document.getElementsByClassName("c")

    for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }
    slideindex++;
    if (slideindex > slides.length) {
        slideindex = 1;
    }
    slides[slideindex - 1].style.display = "flex";
    setTimeout(showslide, 2500);
}

function toggledropdown() {
    document.getElementById('menu-bar').classList.toggle("change");
    document.getElementById('navbar-center').classList.toggle("dropup");
    document.getElementById('navbar-center').classList.toggle("dropdown");
}

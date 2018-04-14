var animated = document.querySelectorAll(".sidebar");
var sidebarButton = document.querySelector(".expand-button");

var hasScrolled = false;
var prevScrollPos = window.pageYOffset;
var minScroll = 5;

sidebarButton.addEventListener("click", function() {
    for(var i = 0; i < animated.length; i++) {
        animated[i].classList.toggle("sidebar-open");
    }
});

window.onscroll = function() {
    hasScrolled = true;
};

setInterval(function() {
    if (hasScrolled) {
        hideNavbar();
        hasScrolled = false;
    }
}, 250);

function hideNavbar() {
    var newScrollPos = window.pageYOffset;

    if(Math.abs(prevScrollPos-newScrollPos) <= minScroll || newScrollPos < document.querySelector("section").offsetTop) {
        if(newScrollPos < document.querySelector("section").offsetTop) {
            document.querySelector("nav").classList.remove("navbar-up");
        }
        return;
    }

    if(newScrollPos > prevScrollPos) {
        document.querySelector("nav").classList.add("navbar-up");
    } else {
        document.querySelector("nav").classList.remove("navbar-up");
    }
    prevScrollPos = newScrollPos;
};
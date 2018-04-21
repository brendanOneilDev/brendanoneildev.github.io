var animated = document.querySelectorAll(".sidebar");
var sidebarButton = document.querySelector(".expand-button");
var anchor = document.querySelectorAll("nav a");
var contentDim = document.querySelector(".sidebar-dim");

var hasScrolled = false;
var prevScrollPos = window.pageYOffset;
var minScroll = 15;

sidebarButton.addEventListener("click", function() {
    hideSidebar();
});

contentDim.addEventListener("click", function() {
    hideSidebar();
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

    if(Math.abs(prevScrollPos-newScrollPos) <= minScroll || newScrollPos < document.querySelector("header").offsetHeight) {
        if(newScrollPos < document.querySelector("header").offsetHeight) {
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

function hideSidebar() {
    for(var i = 0; i < animated.length; i++) {
        animated[i].classList.toggle("sidebar--open");
    }
    contentDim.classList.toggle("sidebar-dim--active");
}

document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        e.preventDefault();

        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });

        hideSidebar();

        setTimeout(function() {
            document.querySelector("nav").classList.add("navbar-up");
        }, 1000);
    });
});
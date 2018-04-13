var animated = document.querySelectorAll(".sidebar");
var sidebarButton = document.querySelector(".expand-button");

sidebarButton.addEventListener("click", function(){
    for (var i = 0; i < animated.length; i++) {
        animated[i].classList.toggle("sidebar-open");
    }
});
let abc = document.getElementsByClassName('menu_container'); 

document.addEventListener("DOMContentLoaded", function(){
    var navToggle = document.getElementById("bgtoggle");
    var navMenu = document.getElementById("menu_container");
    navToggle.addEventListener("click", function(e){
      // navMenu.classList.toggle("open");
      navMenu.style.opacity="1";
    });
  });
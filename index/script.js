const menu = document.getElementById("menu");
const navLinks = document.getElementById("navLinks");
const icon = menu.querySelector("i");

menu.onclick = function(){

    navLinks.classList.toggle("active");

    if(navLinks.classList.contains("active")){

        icon.classList.remove("fa-bars");
        icon.classList.add("fa-xmark");

    }else{

        icon.classList.remove("fa-xmark");
        icon.classList.add("fa-bars");

    }

}
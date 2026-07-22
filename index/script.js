const menu = document.getElementById("menu");
const navLinks = document.getElementById("navLinks");
const icon = menu.querySelector("i");
const moon = document.querySelector(".moon");
const sun = document.querySelector(".sun");
const lightdarkbtn = document.getElementById("lightdarkbtn");
const body = document.body;

menu.onclick = function () {

    navLinks.classList.toggle("active");

    if(navLinks.classList.contains("active")){
        icon.classList.replace("fa-bars","fa-xmark");
    }else{
        icon.classList.replace("fa-xmark","fa-bars");
    }

}
const themeIcon = lightdarkbtn.querySelector("i");

lightdarkbtn.addEventListener("click", () => {
    body.classList.toggle("dark-mode");

    if (body.classList.contains("dark-mode")) {
        themeIcon.classList.replace("fa-moon", "fa-sun");
    } else {
        themeIcon.classList.replace("fa-sun", "fa-moon");
    }
});
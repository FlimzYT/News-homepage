const navbarLinks = document.getElementsByClassName("menu")[0];
const button = document.getElementsByClassName('menuButton')[0];
function toggle(){

    navbarLinks.classList.toggle('active');
    button.classList.toggle('active')
}
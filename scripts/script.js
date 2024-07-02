function openNav(){
    document.getElementById("side-nav").style.right = "0";
    document.getElementById("nav-button").setAttribute("onclick", "closeNav()");
}

function closeNav(){
    document.getElementById("side-nav").style.right = "-100vw";
    document.getElementById("nav-button").setAttribute("onclick", "openNav()");
}
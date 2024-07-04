function openNav(){
    document.getElementById("side-nav").style.right = "0";
    document.getElementById("nav-button").setAttribute("onclick", "closeNav()");

    document.getElementById("nav-button").innerHTML = '<svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M18 6L6 18" stroke="#72727E" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/><path d="M6 6L18 18" stroke="#72727E" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/></svg>';
}

function closeNav(){
    document.getElementById("side-nav").style.right = "-100vw";
    document.getElementById("nav-button").setAttribute("onclick", "openNav()");

    document.getElementById("nav-button").innerHTML = '<svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M3 12H21" stroke="#72727E" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/><path d="M3 6H21" stroke="#72727E" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/><path d="M3 18H21" stroke="#72727E" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/></svg>';
}

function openForm(){
    document.getElementById("partners-form").style.right = "0";
    document.getElementById("bg_black-transparent").style.zIndex = "2";
    document.getElementById("bg_black-transparent").style.backgroundColor = "rgba(0, 0, 0, 0.4)";
}

function closeForm(){
    document.getElementById("partners-form").style.right = "-480px";
    document.getElementById("bg_black-transparent").style.backgroundColor = "rgba(0, 0, 0, 0)";
    setTimeout(hideBlackTransparentBg, 400);
}

function hideBlackTransparentBg(){
    document.getElementById("bg_black-transparent").style.zIndex = "-1";
}

let reviewIndex = 1;

document.addEventListener("DOMContentLoaded", function() {
    showReview(reviewIndex);
});

function nextReview(){
    showReview(reviewIndex += 1)
}

function prevReview(){
    showReview(reviewIndex -= 1)
}

function showReview(n){
    let i;
    let reviews = document.getElementsByClassName("reviews__item");

    if (n > reviews.length) {reviewIndex = 1}
    if (n < 1) {reviewIndex = reviews.length}
    for (i = 0; i < reviews.length; i++) {
        reviews[i].style.display = "none";
    }
    reviews[reviewIndex-1].style.display = "block";
}


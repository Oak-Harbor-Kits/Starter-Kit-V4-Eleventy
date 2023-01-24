//
//    Toggle Mobile Navigation
//
const navbarMenu = document.querySelector("#navigation #navbar-menu");
const hamburgerMenu = document.querySelector("#navigation .hamburger-menu");

hamburgerMenu.addEventListener('click', function() {
    const isNavOpen = navbarMenu.classList.contains("open");
    if (!isNavOpen) {
        hamburgerMenu.setAttribute("aria-expanded", true);
        hamburgerMenu.classList.add("clicked");
        navbarMenu.classList.add("open");
    } else {
        hamburgerMenu.setAttribute("aria-expanded", false);
        hamburgerMenu.classList.remove("clicked");
        navbarMenu.classList.remove("open");
    }
});

// .open:before selection to close the menu when open and not the ul section
document.getElementsByTagName('nav')[0].addEventListener('click', backgroundClose);
    function backgroundClose(event) {
        console.log(event);
        if (event.target.id !== 'navbar-menu'){
            return
        }
        const isNavOpen = navbarMenu.classList.contains("open");
        if (!isNavOpen) {
            hamburgerMenu.setAttribute("aria-expanded", true);
            hamburgerMenu.classList.add("clicked");
            navbarMenu.classList.add("open");
        } else {
            hamburgerMenu.setAttribute("aria-expanded", false);
            hamburgerMenu.classList.remove("clicked");
            navbarMenu.classList.remove("open");
        }
    }
    // Get the button
    let mybutton = document.getElementById("toTopBtn");
    // When the user scrolls down 20px from the top of the document, show the button
    window.onscroll = function() {scrollFunction()};
    function scrollFunction() {
        if (document.body.scrollTop > 100 || document.documentElement.scrollTop > 100) {
        mybutton.style.display = "block";
        } else {
        mybutton.style.display = "none";
        }
    }
    // When the user clicks on the button, scroll to the top of the document
    function topFunction() {
    window.scrollTo({top: 0, behavior: 'smooth'});
    }
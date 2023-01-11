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
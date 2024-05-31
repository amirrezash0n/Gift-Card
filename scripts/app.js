let $ = document

const menuItem = $.querySelectorAll('.menu-item')
// const menuDiscountItem = $.querySelectorAll('.menu-discount-item')
const navCloseBtn = $.querySelector('.nav-close-btn')
const menuMobile = $.querySelector('.menu-mobile')
const navOpenBtn = $.querySelector('.hamburger-bar')
const overlay = $.querySelector('.overlay')
const btnBasketMobile = $.querySelector('#btn-basket-mobile')
const btnBasketDesktop = $.querySelector('#btn-basket-desktop')
const basketMobile = $.querySelector('.basket-mobile')
const basketDesktop = $.querySelector('.basket-desktop')
const mobileCloseBtn = $.querySelector('.mobile-close-btn')
const desktopCloseBtn = $.querySelector('.desktop-close-btn')

for (var i = 0; i < menuItem.length; i++) {
    menuItem[i].addEventListener("click", function(e) {
        e.preventDefault()
        var current = $.getElementsByClassName("menu-item--active");
        current[0].className = current[0].className.replace(" menu-item--active", "");
        this.className += " menu-item--active";
    });
}

// for (var i = 0; i < menuDiscountItem.length; i++) {
//     menuDiscountItem[i].addEventListener("click", function(e) {
//         e.preventDefault()
//         var current = $.getElementsByClassName(" menu-discount-item--active");
//         current[0].className = current[0].className.replace(" menu-discount-item--active", "");
//         this.className += " menu-discount-item--active";
//     });
// }

navOpenBtn.addEventListener('click' , function () {
    menuMobile.classList.remove("-right-64")
    menuMobile.classList.add("right-0")
    overlay.classList.add("overlay--visible")
})



btnBasketMobile.addEventListener('click' , function () {
    basketMobile.classList.remove("-right-[350px]")
    basketMobile.classList.add("right-0")
    overlay.classList.add("overlay--visible")
})

mobileCloseBtn.addEventListener('click' , function () {
    basketMobile.classList.remove("right-0")
    basketMobile.classList.add("-right-[350px]")
    overlay.classList.remove("overlay--visible")
})

btnBasketDesktop.addEventListener('click' , function () {
    basketDesktop.classList.remove("-left-[380px]")
    basketDesktop.classList.add("left-0")
    overlay.classList.add("overlay--visible")
})

desktopCloseBtn.addEventListener('click' , function() {
    basketDesktop.classList.remove("left-0")
    basketDesktop.classList.add("-left-[380px]")
    overlay.classList.remove("overlay--visible")
})



navCloseBtn.addEventListener('click' , function () {
    menuMobile.classList.remove("right-0")
    menuMobile.classList.add("-right-64")
    overlay.classList.remove("overlay--visible")
    
})

overlay.addEventListener('click' , function () {
    menuMobile.classList.remove("right-0")
    menuMobile.classList.add("-right-64")
    basketMobile.classList.remove("right-0")
    basketMobile.classList.add("-right-[350px]")
    basketDesktop.classList.remove("left-0")
    basketDesktop.classList.add("-left-[380px]")
    overlay.classList.remove("overlay--visible")
})
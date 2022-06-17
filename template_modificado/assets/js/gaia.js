//gaia_min.js Minificado com ajuda do site "toptal"
let scroll, burger_menu,
    fixedTop = 0,
    navbar_initialized = 0,
    window_height = window.innerHeight,
    window_width = window.innerWidth,
    content_opacity = 0,
    content_transition = 0,
    no_touch_screen = 0,
    scroll_distance = 500,
    displayDropdown = 0;

const gaia = {

    initRightMenu: function () {
        if (!navbar_initialized) {
            let e = document.querySelector(".navbar-toggle");
            e.addEventListener("click", function () {
                if (e.classList.contains("toggled")) {
                    document.querySelector("html").classList.remove("nav-open")
                    if (document.querySelector("#bodyClick")) {
                        document.querySelector("#bodyClick").remove()
                    }
                    e.classList.remove("toggled")

                } else {
                    e.classList.add("toggled")
                    const t = document.createElement("div");
                    t.setAttribute("id", "bodyClick")
                    document.body.appendChild(t)
                    t.addEventListener("click", function () {
                        document.querySelector("html").classList.remove("nav-open")
                        document.querySelector("#bodyClick").remove()
                        setTimeout(function () {
                            e.classList.remove("toggled")
                        }, 50)
                    }), document.querySelector("html").classList.add("nav-open")
                }
            })
        }
    },
    checkScrollForTransparentNavbar: debounce(function () {
        if (window.pageYOffset > scroll_distance) {
            $navbar.classList.remove("navbar-transparent")
        } else {
            $navbar.classList.add("navbar-transparent")
        }
    }, 17),
    
    checkScrollForParallax: debounce(function () {
        [...document.querySelectorAll('[class*="parallax"]')].forEach(function (e) {
            if (isElementInViewport(e)) {
                let t = e.offsetTop,
                    n = window.pageYOffset,
                    o = e.children[0];
                oVal = (n - t) / 3, o.style.transform = "translate3d(0px, " + oVal + "px, 0px)"
            }
        })
    }, 6),

    checkScrollForContentTransitions: debounce(function () {
        [...document.querySelectorAll('[class*="content-with-opacity"]')].forEach(function (e) {
            if (isElementInViewport(e)) {
                let t = window.pageYOffset;
                if (opacityVal = 1 - t / 230, opacityVal < 0) return void(opacityVal = 0);
                e.style.opacity = opacityVal
            }
        })
    }, 6)
};

function debounce(func, t) {    // função debouncing inspirada do site https://flaviocopes.com/canvas/
    let timer;
    return () => {
        if (timer) { clearTimeout(timer) }
        timer = window.setTimeout(func, t)
    };
};

function isElementInViewport(e) {
    let t = ((navigator.userAgent.toLowerCase().indexOf('webkit') != -1) ? 'body' : 'html'),
        n = document.querySelector(t).offsetTop,
        o = n + window.innerHeight,
        r = Math.round(e.offsetTop),
        i = r + e.getBoundingClientRect().height;
    return r < o && i > n
}

burger_menu = document.querySelector(".navbar").classList.contains("navbar-burger") ? 1 : 0

gaia.checkScrollForTransparentNavbar()

gaia.initRightMenu()


if (document.querySelectorAll(".content-with-opacity").length != 0) {
    content_opacity = 1
}

let $navbar = document.querySelector(".navbar[color-on-scroll]")
scroll_distance = $navbar.getAttribute("color-on-scroll") || 500

window.onresize = function () {
    if (window.innerWidth < 992) {

    } else if (window.innerWidth > 992 && !burger_menu) {
        navbar_initialized = 0
    }
}

window.onscroll = function () {
        gaia.checkScrollForTransparentNavbar()
        if (window_width > 992) {
            gaia.checkScrollForParallax();
        }

        if (content_opacity == 1) {
            gaia.checkScrollForContentTransitions();
        }
},

document.querySelector(".copyright").innerHTML = `© ${(new Date).getFullYear()} Creative Tim, made with love`

document.querySelector(".dropdown-toggle").addEventListener("click", function (e) {
    if (window.innerWidth < 768) {

        if (displayDropdown) {

            document.querySelector(".dropdown-custom-767").style.display = "none"
            displayDropdown = 0
        } else {
            document.querySelector(".dropdown-custom-767").style.display = ""
            displayDropdown = 1

        }

    } else {
        if (displayDropdown) {
            document.querySelector("#shape").style.display = "none"
            displayDropdown = 0
        } else {
            displayDropdown = 1
            document.querySelector("#shape").style.display = ""
        }
    }
    e.preventDefault()
});
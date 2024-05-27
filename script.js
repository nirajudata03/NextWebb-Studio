function NavigationBarAnimation() {

    var openMenu = document.querySelector(".nav-open")
    var openList = document.querySelector(".nav-list")
    var navBar = document.querySelector(".nav-elem")
    var closeMenu = document.querySelector(".nav-close")
    var nav = document.querySelector("nav")


    gsap.from(nav,{
        y:-100,
        stagger:0.1,
        duration:0.5
    })

    openMenu.addEventListener("click", function () {
        console.log("Open")

        var tl = gsap.timeline()

        tl.to(openList, {
            opacity: 1,
            display: "block",
        })

        tl.to(openMenu, {
            display: "none",
            opacity: 0,
            duration: 0.1
        })

        tl.to(closeMenu, {
            display: "block",
            opacity: 1,
            duration: 0.1
        })


        var cnt = gsap.timeline()

        cnt.from(".nav-ul li", {
            opacity: 0,
            delay: 0.3,
            stagger: 0.1,
            x: -40
        })
        cnt.from(".nav-social a", {
            opacity: 0,
            y: -50
        })

    })

    closeMenu.addEventListener("click", function () {
        console.log("Close")

        var close = gsap.timeline()

        close.to(openList, {
            opacity: 0,
            display: "none",
        })

        close.to(closeMenu, {
            display: "none",
            opacity: 0,
            duration: 0.1
        })

        close.to(openMenu, {
            display: "block",
            opacity: 1,
            duration: 0.1
        })
    })


}
NavigationBarAnimation()



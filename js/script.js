// Testimonials Carousel
const swiper = new Swiper('.swiper-container', {
    slidesPerView: 1,
    pagination: {
        el: '.swiper-pagination'
    },
    keyboard: true,
});


window.addEventListener('scroll', onScroll)

onScroll()
function onScroll() {
    showNavOnScroll()
    showBackToTopButtonOnScroll()

    activateMenuAtCurrentSection(home)
    activateMenuAtCurrentSection(services)
    activateMenuAtCurrentSection(testimonials)
    activateMenuAtCurrentSection(about)
    activateMenuAtCurrentSection(contact)

}

function activateMenuAtCurrentSection(section) {

    const targetLine = scrollY + innerHeight / 2

    // Collect the data
    // Check if the section has passed the target line
    const sectionTop = section.offsetTop
    const sectionHeight = section.offsetHeight
    const sectionTopReachOrPassedTargetLine = targetLine >= sectionTop

    // Check if base is below target line
    const sectionEndsAt = sectionTop + sectionHeight
    const sectionEndPassedTargetLine = sectionEndsAt <= targetLine

    // Section limits
    const sectionBoundaries = sectionTopReachOrPassedTargetLine && !sectionEndPassedTargetLine
    
    const sectionId = section.getAttribute('id')
    const menuElement = document.querySelector(`.menu a[href*=${sectionId}]`)


    menuElement.classList.remove('active')
    if(sectionBoundaries) {
        menuElement.classList.add('active')
    }
}


function showNavOnScroll() {
    let navigation = document.querySelector("nav")

    if (scrollY > 0) {
        navigation.classList.add("scroll")
    } else {
        navigation.classList.remove("scroll")
    }
}

function showBackToTopButtonOnScroll() {
    if (scrollY > 400) {
        backToTopButton.classList.add("show")
    } else {
        backToTopButton.classList.remove("show")
    }
}

function openMenu() {
    document.body.classList.add("expanded-menu")
}

function closeMenu() {
    document.body.classList.remove("expanded-menu")
}


ScrollReveal({
    origin: 'top',
    distance: '30px',
    duration: 700,
}).reveal(`
    #home, 
    #home img, 
    #home .statistics, 
    #services,
    #services header,
    #services .card,
    #testimonials,
    #testimonials header,
    #testimonials .content,
    #about,
    #about header,
    #about .content,
    #about .col-b,
    #contact,
    #contact header,
    #contact .content,
    #contact .col-b,
    footer .col-a,
    footer .col-b`
);

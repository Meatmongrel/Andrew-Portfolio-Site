const navItem = document.querySelectorAll('.nav-item')

const section = {
    "about": document.querySelector('#about'),
    "projects": document.querySelector('#projects'),
    "contact": document.querySelector('#contact')
}

window.addEventListener("scroll", event => {
    console.log(window.scrollY)
})

navItem.forEach(tab => {
    tab.addEventListener('click', event => {
        const sectName = event.target.textContent.toLowerCase()
        section[sectName].scrollIntoView({behavior: "smooth"})
        console.log(window.scrollY)
    })
})
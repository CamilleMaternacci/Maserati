// Navigation

const nav = document.querySelector('.navbar-collapse')

document.addEventListener('click', () => {
    if(nav.classList.contains('show')) {
        nav.classList.remove('show')
    }
})

// Cookies alert

const cookiesBox = document.querySelector('.cookies-area')
const cookiesBtn = document.querySelector('.cookies-btn')

const showCookies = () => {
    const cookiesEaten = localStorage.getItem('cookies')
    if(cookiesEaten) {
        cookiesBox.classList.add('hide')
    }
}

const handleCookiesBox = () => {
    localStorage.setItem('cookies', 'true')
    cookiesBox.classList.add('hide')
}

cookiesBtn.addEventListener('click', handleCookiesBox)
showCookies()

// Function Current Data

const CurrentData = document.querySelector('.current-data')
const date = new Date()
let year = date.getFullYear()

CurrentData.textContent = year

const header = document.querySelector('header')
const home_nav = document.querySelector('body nav ul li:nth-child(1)')
const about_nav = document.querySelector('body nav ul li:nth-child(2)')
const contact_nav = document.querySelector('body nav ul li:nth-child(3)')

home_nav.addEventListener('click', () =>{
    alert('Home had been clicked')
}, false)

about_nav.addEventListener('click', () =>{
    alert('About had been clicked')
}, false)

contact_nav.addEventListener('click', () =>{
    alert('Contact had been clicked')
}, false)
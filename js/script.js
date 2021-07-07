// Change Language

const langOne = document.querySelector('.langButtonOne')
const langTwo = document.querySelector('.langButtonTwo')
langOne.addEventListener('click' , e => {
    e.preventDefault()
    langOne.classList.add('activeLang')
    langTwo.classList.remove('activeLanguage')
})

langTwo.addEventListener('click' , e => {
    e.preventDefault()
    langTwo.classList.add('activeLanguage')
    langOne.classList.remove('activeLang')
})
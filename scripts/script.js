const mediaQuery = window.matchMedia('(min-width: 992px)')
const $body = document.querySelector('body')
const $header = document.querySelector('.header')
const $nav = document.querySelector('.nav')
const $burger = document.querySelector('.header__burger')


if (mediaQuery.matches) {  
  $burger.classList.remove('active')
  $nav.classList.remove('open')
  $body.classList.remove('opened-menu')
}

function openMenu() {
  $burger.classList.toggle('active') 
  $nav.classList.toggle('open')
  $body.classList.toggle('opened-menu')
}

function handleTabletChange(e) {  
  if (e.matches) {    
    $burger.classList.remove('active') 
    $nav.classList.remove('open');
    $body.classList.remove('opened-menu')
  }
}

function scrollFunction() {  
  if (document.documentElement.scrollTop > 40) {
    $header.classList.add('scrolled')
  } else {
    $header.classList.remove('scrolled')
  }
}

scrollFunction()

window.addEventListener("scroll", scrollFunction)
$burger.addEventListener('click', openMenu, false)
mediaQuery.addEventListener('change', handleTabletChange, false)

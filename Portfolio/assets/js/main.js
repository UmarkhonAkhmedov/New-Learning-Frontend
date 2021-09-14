// Menu Show Y Hidden
const navMenu = document.getElementById('nav-menu'),
      navToggle = document.getElementById('nav-toggle'),
      navClose = document.getElementById('nav-close');

// Menu Show
// Validate if constant exists
if(navToggle){
  navToggle.addEventListener('click', () => {
    navMenu.classList.add('show-menu');
  })
}

// Menu Hidden
// Validate if constant exists
if(navClose){
  navClose.addEventListener('click', () => {
    navMenu.classList.remove('show-menu');
  })
}

// Remove Menu Mobile
const navLink = document.querySelectorAll('.nav__link');

function linkAction(){
  const navMenu = document.getElementById('nav-menu');
  // When we click on each nav__link, we remove the show-menu class
  navMenu.classList.remove('show-menu');
}
navLink.forEach(n => n.addEventListener('click', linkAction))

// Accordion Skills
const skillsContent = document.getElementsByClassName('skills__content'),
      skillsHeader = document.querySelectorAll('.skills__header');

function toggleSkills(){
  let itemClass = this.parentNode.className
  for(i=0; i < skillsContent.length; i++){
    skillsContent[i].className = 'skills__content skills__close';
  }
  if(itemClass === 'skills__content skills__close'){
    this.parentNode.className = 'skills__content skills__open'
  }
}

skillsHeader.forEach((el) =>{
  el.addEventListener('click', toggleSkills)
})

// Qualification Tab
const tabs = document.querySelectorAll('[data-target]'),
      tabContents = document.querySelectorAll('[data-content]');

tabs.forEach(tab => {
  tab.addEventListener('click', () => {
    const target = document.querySelector(tab.dataset.target)

    tabContents.forEach(tabContent => {
      tabContent.classList.remove('qualification__active')
    })
    target.classList.add('qualification__active')

    tab.forEach(tab => {
      tab.classList.remove('qualification__active')
    })
    tab.classList.add('qualification__active')
  })
})

// Services Modal
const modalViews = document.querySelectorAll('.services__modal'),
      modalBtns = document.querySelectorAll('.services__button'),
      modalCloses = document.querySelectorAll('.services__modal-close');

let modal = function(modalClick){
  modalViews[modalClick].classList.add('active-modal')
}
modalBtns.forEach((modalBtn, i) => {
  modalBtn.addEventListener('click', () =>{
    modal(i)
  })
})

modalCloses.forEach((modalClose) => {
  modalClose.addEventListener('click', () => {
    modalViews.forEach((modalView) =>{
      modalView.classList.remove('active-modal')
    })
  })
})

// Portfolio Swipper
let swiperPortfolio = new Swiper('.portfolio__container', {
  cssMode: true,
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },
  pagination: {
    el: '.swiper-pagination',
    clickable: true,
  },
});

// Testimonial 
let swiperTestimonial = new Swiper('.testimonial__container', {
  loop: true,
  grabCursor: true,
  spaceBetween: 48,
  pagination: {
    el: '.swiper-pagination',
    clickable: true,
    dynamicbullets: true,
  },
  breakpoints: {
    568:{
      slidesPerView: 2,
    }
  }
});

// Change Background header
function scrollHeader(){
  const nav = document.getElementById('header')
  // When the scroll is greater than 200 viewport height, add the scroll-header class
  if(this.scrollY >= 80) nav.classList.add('scroll-header');
  else nav.classList.remove('scroll-header');
}
window.addEventListener('scroll', scrollHeader)

// Show Scroll Top
function scrollUp(){
  const scrollUp = document.getElementById('scroll-up');
  // When the scroll is higher than viewport height, add the show-scroll class
  if(this.scrollY >= 560) scrollUp.classList.add('show-scroll');
  else scrollUp.classList('show-scroll');
}
window.addEventListener('scroll', scrollUp)




// sticky header
window.addEventListener('scroll', () => {
  const header = document.querySelector('.header');
  header.classList.toggle('sticky', window.scrollY >= 60);
});

// transition and animation stopper
let resizeTimer;
window.addEventListener('resize', () => {
  document.body.classList.add('resize-animation-stopper');
  clearTimeout(resizeTimer);
  resizeTimer = setTimeout(() => {
    document.body.classList.remove('resize-animation-stopper');
  })
});

// side navigation menu
const navbarHideBtn = document.querySelector('.navbar-hide-btn');
const navbarShowBtn = document.querySelector('.navbar-show-btn');

navbarShowBtn.addEventListener('click', () => document.querySelector('.header nav').classList.add('show-nav'));
navbarHideBtn.addEventListener('click', () => document.querySelector('.header nav').classList.remove('show-nav'));

// smooth scroll
const links = document.querySelectorAll('.nav-list .nav-item a');
const smoothScroll = (event) => {
  event.preventDefault();
  const href = event.target.getAttribute('href');
  document.querySelector(href).scrollIntoView({
    behavior: "smooth"
  })
}

for(link of links){
  link.addEventListener('click', smoothScroll);
}

// scroll indicator
const scrollProgress = () => {
  const currentState = document.body.scrollTop || document.documentElement.scrollTop;
  const pageHeight = document.documentElement.scrollHeight - document.documentElement.clientHeight;
  const scrollPercentage = (currentState / pageHeight) * 100;
  const progressBar = document.querySelector('.progress');
  progressBar.style.visibility = "visible";
  progressBar.style.width = scrollPercentage + "%";
}

window.onscroll = () => scrollProgress();

// scroll to top
const scrollTopBtn = document.querySelector('.scroll-top-btn');
const rootEl = document.documentElement;

const showScrollTopBtn = () => {
  const scrollTotal = rootEl.scrollHeight - rootEl.clientHeight;
  if(rootEl.scrollTop / scrollTotal > 0.8){
    scrollTopBtn.classList.add('show-btn');
  } else {
    scrollTopBtn.classList.remove('show-btn');
  }
}

const scrollToTop = () => {
  rootEl.scrollTo({
    top: 0,
    behavior: "smooth"
  });
}

document.addEventListener('scroll', showScrollTopBtn);
scrollTopBtn.addEventListener('click', scrollToTop);
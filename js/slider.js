let sliderImage = document.querySelector('.slider__image');
let sliderTitle = document.querySelector('.slider__title');
let sliderText = document.querySelector('.slider__text');

let btnPrev = document.querySelector('.btn__prev');
let btnNext = document.querySelector('.btn__next'); 

let i = 0;
let data = [
  {
    imageMobile: '../images/mobile-image-hero-1.jpg' ,
    imageDesktop: '../images/desktop-image-hero-1.jpg' ,
    title: 'Discover innovative ways to decorate',
    text: ` We provide unmatched quality, comfort, and style for property owners across the country. 
    Our experts combine form and function in bringing your vision to life. Create a room in your 
    own style with our collection and make your property a reflection of you and what you love.`
  },

  {
    imageMobile: '../images/mobile-image-hero-2.jpg' ,
    imageDesktop: '../images/desktop-image-hero-2.jpg' ,
    title: 'We are available all across the globe',
    text: ` With stores all over the world, it's easy for you to find furniture for your home or place of business. 
    Locally, we’re in most major cities throughout the country. Find the branch nearest you using our 
    store locator. Any questions? Don't hesitate to contact us today.`
  },

  {
    imageMobile: '../images/mobile-image-hero-3.jpg' ,
    imageDesktop: '../images/desktop-image-hero-3.jpg' ,
    title: 'Manufactured with the best materials',
    text: ` Our modern furniture store provide a high level of quality. Our company has invested in advanced technology 
    to ensure that every product is made as perfect and as consistent as possible. With three decades of 
    experience in this industry, we understand what customers want for their home and office.`
  },
]

btnPrev.addEventListener('click', (event) => {
  event.preventDefault();

  event.preventDefault();
  if (i <= 0 ) {
    i = 2;  
  }

  else {
    i--;
  }
  let BgImageParse = `background-image: url('${data[i].image}');`;

  sliderImage.setAttribute('style', BgImageParse)
  sliderTitle.textContent = data[i].title;
  sliderText.textContent = data[i].text;
})

btnNext.addEventListener('click', (event) => {
  event.preventDefault();
  if (i === data.length - 1) {
    i = 0;  
  }

  else {
    i++;
  }

  let BgImageParse;

  if (window.screen.width <= 600) {
    BgImageParse = `background-image: url('${data[i].imageMobile}');`;
  }

  else {
    BgImageParse = `background-image: url('${data[i].imageDesktop}');`;
  }

  sliderImage.setAttribute('style', BgImageParse)
  sliderTitle.textContent = data[i].title;
  sliderText.textContent = data[i].text;
})
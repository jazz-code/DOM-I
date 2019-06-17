const siteContent = {
  "nav": {
    "nav-item-1": "Services",
    "nav-item-2": "Product",
    "nav-item-3": "Vision",
    "nav-item-4": "Features",
    "nav-item-5": "About",
    "nav-item-6": "Contact",
    "img-src": "img/logo.png"
  },
  "cta": {
    "h1": "DOM Is Awesome",
    "button": "Get Started",
    "img-src": "img/header-img.png"
  },
  "main-content": {
    "features-h4":"Features",
    "features-content": "Features content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "about-h4":"About",
    "about-content": "About content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "middle-img-src": "img/mid-page-accent.jpg",
    "services-h4":"Services",
    "services-content": "Services content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "product-h4":"Product",
    "product-content": "Product content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "vision-h4":"Vision",
    "vision-content": "Vision content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
  },
  "contact": {
    "contact-h4" : "Contact",
    "address" : "123 Way 456 Street Somewhere, USA",
    "phone" : "1 (888) 888-8888",
    "email" : "sales@greatidea.io",
  },
  "footer": {
    "copyright" : "Copyright Great Idea! 2018"
  },
};
// const navLinks = Array.from(document.querySelectorAll('header nav a'))
// navLinks.forEach((element, index) => {
//   element.className = (`nav-item-${ index + 1}`)
// });

// const navLinks = document.querySelector('nav');
// navLinks[0].setAttribute('src', siteContent['nav']['nav-item-1']);


//--------------NAV
const navLinks = document.querySelectorAll('nav a');
navLinks[0].textContent = siteContent['nav']['nav-item-1'];
navLinks[1].textContent = siteContent['nav']['nav-item-2'];
navLinks[2].textContent = siteContent['nav']['nav-item-3'];
navLinks[3].textContent = siteContent['nav']['nav-item-4'];
navLinks[4].textContent = siteContent['nav']['nav-item-5'];
navLinks[5].textContent = siteContent['nav']['nav-item-6'];
//color
navLinks.forEach(element => { element.style.color = 'green'});
//append
const navEl = document.querySelector('nav')
const newChild = document.createElement('nav-item-7');
newChild.textContent = "Append Child!"
navEl.appendChild(newChild)
//prepend
const newChild2 = document.createElement('nav-item-8');
newChild2.textContent = "Prepend Child!"
navEl.prepend(newChild2)
//logo
let logo = document.getElementById("logo-img");
logo.setAttribute('src', siteContent["nav"]["img-src"])

//------------cta
const ctaText = document.querySelector('.cta-text h1')
ctaText.textContent = siteContent['cta']['h1'];
//img
const ctaImg = document.querySelector("#cta-img");
ctaImg.setAttribute('src', siteContent['cta']['img-src'])
//----------Main Content
//H4
const featuresH4 = document.querySelectorAll('.main-content h4');
featuresH4[0].textContent = siteContent['main-content']['features-h4'];
featuresH4[1].textContent = siteContent['main-content']['about-h4'];
featuresH4[2].textContent = siteContent['main-content']['services-h4'];
featuresH4[3].textContent = siteContent['main-content']['product-h4'];
featuresH4[4].textContent = siteContent['main-content']['vision-h4'];
//P
const featuresContent = document.querySelectorAll('.main-content p');
featuresContent[0].textContent = siteContent['main-content']['features-content']
featuresContent[1].textContent = siteContent['main-content']['about-content']
featuresContent[2].textContent = siteContent['main-content']['services-content']
featuresContent[3].textContent = siteContent['main-content']['product-content']
featuresContent[4].textContent = siteContent['main-content']['vision-content']
//mid IMG
let middleImg = document.getElementById("middle-img");
middleImg.setAttribute('src', siteContent['main-content']['middle-img-src'])
//--------CONTACT
const contactH4 = document.querySelector('.contact h4');
contactH4.textContent = siteContent['contact']['contact-h4']
//P
const contactContent = document.querySelectorAll('.contact p')
contactContent[0].textContent = siteContent['contact']['address'];
contactContent[1].textContent = siteContent['contact']['phone'];
contactContent[2].textContent = siteContent['contact']['email'];
//-------FOOTER
const footerContent = document.querySelector('footer');
footerContent.textContent = siteContent['footer']['copyright']
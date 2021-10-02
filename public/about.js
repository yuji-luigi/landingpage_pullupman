const navbarTab = document.getElementsByClassName('navbar-tab')[0]
const navbarLinks = document.getElementsByClassName('navbar-links')[0]

const scrollElements = document.querySelectorAll(".scroll-container");



navbarTab.addEventListener('click', () => {
  toggleNavTab()
})

const toggleNavTab = () => {
  openMenu()
  closeMenu()
}

const openMenu = () => {
  navbarLinks.classList.toggle('active')
  navbarLinks.classList.remove('roll-in')
  navbarLinks.classList.remove('display-none')
}

const closeMenu = () => {
  if(!navbarLinks.classList.contains('active')){
    navbarLinks.classList.add('roll-in')
       return setTimeout(() => {
        navbarLinks.classList.add('display-none')
      },500 )
  }
}


// scroll slides


const elementOutofView = (el) => {
  const elementTop = el.getBoundingClientRect().top;
  
  return (
    elementTop > (window.innerHeight || document.documentElement.clientHeight)
    );
  };
  
  
  
  
  window.addEventListener("scroll", () => { 
    handleScrollAnimation();
  });
  
  const handleScrollAnimation = () => {
    scrollElements.forEach((el) => {
      if (elementInView(el, 1.25)) {
        displayScrollElement(el);
      } else if (elementOutofView(el)) {
        hideScrollElement(el)
      }
    })
  }
  
  const elementInView = (el, dividend = 1) => {
    const elementTop = el.getBoundingClientRect().top;
    
    return (
      elementTop <=
      (window.innerHeight || document.documentElement.clientHeight) / dividend
      );
    };
    
const displayScrollElement = (element) => {  
  const children = element.children
  const jsScrolls = Array.prototype.slice.call(children)
  console.log(`element: ${element}, children:${children}, jsscroll: ${jsScrolls}`)
  
  let interval = 500
  jsScrolls.forEach(function(el, index) {
    setTimeout(function () {
      console.log(el)
      el.classList.add('scrolled')    
    }, index * interval)
})
};


const hideScrollElement = (element) => {
  element.classList.remove("scrolled");
};
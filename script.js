let menu = document.querySelector("#menu-icon");
let navlist = document.querySelector(".navlist");

menu.onclick = () => {
  menu.classList.toggle("bx-x");
  navlist.classList.toggle("open");
};
window.onscroll = () => {
    menu.classList.remove('bx-x');
    navlist.classList.remove('open');
};



const subscribeForm = document.querySelector('.newsletter-content form');
const subscribeButton = subscribeForm.querySelector('input:last-child');

subscribeForm.addEventListener('submit', (e) => {
  e.preventDefault(); // Prevent actual form submission
  const emailInput = subscribeForm.querySelector('input[type="email"]');
  
  if (emailInput.value.trim() === "") {
    alert("Please enter a valid email address.");
  } else {
    alert(`Thank you for subscribing! A confirmation has been sent to ${emailInput.value}.`);
    emailInput.value = ""; // Clear the input field after submission
  }
});



const anchorLinks = document.querySelectorAll('a[href^="#"]');

anchorLinks.forEach(link => {
  link.addEventListener('click', (e) => {
    e.preventDefault();
    const targetId = link.getAttribute('href').substring(1);
    const targetElement = document.getElementById(targetId);
    
    if (targetElement) {
      targetElement.scrollIntoView({
        behavior: 'smooth',
        block: 'start'
      });
    }
  });
});



const animateElements = document.querySelectorAll('.animate-on-scroll');

const animateOnScroll = () => {
  animateElements.forEach(element => {
    const rect = element.getBoundingClientRect();
    if (rect.top <= window.innerHeight && rect.bottom >= 0) {
      element.classList.add('in-view');
    }
  });
};

window.addEventListener('scroll', animateOnScroll);

// Run the animation initially in case some elements are already in view.
animateOnScroll();


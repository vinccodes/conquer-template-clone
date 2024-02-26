console.log('hello world')

// select all the anchor links containing 
const navLinks = querySelectorAll('a[href^="#"]')

// for every nav link
navLinks.forEach(link =>{
    link.addEventListener("click", function(event){
        event.preventDefault();
        document.querySelector(this.getAttribute("href")).scrollIntoView({
            behavior: "smooth"
        });
    });
});
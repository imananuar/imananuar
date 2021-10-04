
// Change the navbar background color when move to the next section
const nav = document.querySelector("nav");
const sectionOne = document.querySelector("header");

const sectionOneOptions = {
  rootMargin: "-200px 0px 0px 0px"
};

const sectionOneObserver = new IntersectionObserver(function(
  entries,
  sectionOneObserver
) {
  entries.forEach(entry => {
    if(!entry.isIntersecting) {
      nav.classList.add("nav-scrolled");
    } else {
      nav.classList.remove("nav-scrolled");
    }
  })

}, sectionOneOptions);

sectionOneObserver.observe(sectionOne);

//Delay the link clicked
function delay (URL) {
    setTimeout( function() { window.location = URL }, 500 );
}

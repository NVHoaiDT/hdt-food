const header = document.querySelector(".header");
const mobileNavBtn = document.querySelector(".mobile-nav");
const navbarLink = document.querySelectorAll(".navbar__link");

navbarLink.forEach(link => {
    link.addEventListener("click", function() {
        header.classList.toggle("open-nav");    
    })
});
mobileNavBtn.addEventListener("click", function() {
    header.classList.toggle("open-nav");
})


const sectionHero = document.querySelector(".hero");

const obs = new IntersectionObserver(
    function(entries) {
        const ent = entries[0];
        if (ent.isIntersecting === false) {
            header.classList.add("sticky");
            sectionHero.style.marginTop = "80px"
          } else {
            header.classList.remove("sticky");
            sectionHero.style.marginTop = "0"
        }
    },  
    { 
        root: null,
        threshold: 0,
        rootMargin: "-80px",
    })
obs.observe(sectionHero);
const navToggle = document.querySelector(".mobile-menu-toggle");
const mobileNav = document.querySelector(".navigation");
const overlay = document.querySelector(".backdrop");
const navClose = document.querySelector(".mobile-menu-close");

navToggle.addEventListener("click", () => {

    const visibility = mobileNav.getAttribute("data-visible");

    if(visibility === "false"){
        overlay.setAttribute("data-visible", true);
        mobileNav.setAttribute("data-visible", true);
    }
    else{
        overlay.setAttribute("data-visible", false);
        mobileNav.setAttribute("data-visible", false);
    }
});

navClose.addEventListener("click", () => {
    const visibility = mobileNav.getAttribute("data-visible");

    if(visibility === "true"){
        overlay.setAttribute("data-visible", false);
        mobileNav.setAttribute("data-visible", false);
    }
    else{
        overlay.setAttribute("data-visible", true);
        mobileNav.setAttribute("data-visible", true);
    }
});

const items = document.querySelectorAll('.accordion button');

function toggleAccordion() {
  const itemToggle = this.getAttribute('aria-expanded');

  for (i = 0; i < items.length; i++) {
    items[i].setAttribute('aria-expanded', 'false');
  }

  if (itemToggle == 'false') {
    this.setAttribute('aria-expanded', 'true');
  }
}

items.forEach((item) => item.addEventListener('click', toggleAccordion));

const tabs = document.querySelectorAll(".tabs li");
const tabContent = document.querySelectorAll(".tab-content");

tabs.forEach((tab, index) => {

  tab.addEventListener("click", () =>{

    tabs.forEach(tab => tab.classList.remove("active"))
    tab.classList.add("active");

    tabContent.forEach((c) => c.classList.remove("active"));
    tabContent[index].classList.add("active");
  
  });

});


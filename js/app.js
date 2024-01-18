// header section for scoll down fixed postion
const header = document.querySelector("header");
const navbar = document.querySelector(".nav-bar");
let isHeaderSticky = false;
const quotebtn = document.querySelector(".quote-btn a");
const quotebtnhover = document.querySelector(".quote-btn > a:hover");
const gotohomebttn = document.querySelector('.Gotohome');

window.addEventListener("scroll", () => {
  if (window.scrollY > 2000) {
    gotohomebttn.style.visibility = "visible";
  } else {
    gotohomebttn.style.visibility = "hidden";
  }
});

gotohomebttn.addEventListener("click", () => {
  let techtarget = homepage.offsetTop;
  window.scrollTo({
    top: techtarget,
    behavior: "smooth",
  });
})

window.addEventListener("scroll", () => {
  if (window.scrollY > 0) {
    if (!isHeaderSticky) {
      header.style.position = "fixed";
      header.style.top = "0px"; // Adjust this value to match your header height
      header.style.boxShadow = "0 2px 4px rgba(0, 0, 0, 0.2)";
      navbar.style.padding = "8px 0";
      header.style.backgroundColor = "#fff";
      isHeaderSticky = true;
    }
  } else {
    quotebtn.style.color = "#0092ff"
    quotebtn.style.border = "1px solid #0092ff"
    header.style.position = "absolute";
    header.style.top = "0";
    header.style.boxShadow = "0 0 0 rgba(0, 0, 0, 0.2)";
    navbar.style.padding = "28px 0 8px 0";
    header.style.backgroundColor = "transparent";
    navbar.style.backgroundColor = "transparent";
    isHeaderSticky = false;
  }
});

// Nav Menu Active Color change
document.addEventListener("DOMContentLoaded", function () {
  const links = document.querySelectorAll(".menu-list .active-link");
  const homecolor = document.querySelector(".home-color");

  links.forEach(function (link) {
    link.addEventListener("click", function (event) {
      event.preventDefault();
      // Remove the 'active' class from all links
      links.forEach(function (link) {
        link.classList.remove("active");
        homecolor.style.color = "#1d2c38";
      });
      // Add the 'active' class to the clicked link
      link.classList.add("active");
      // Check if the clicked link is the "Home" link
      if (link.classList.contains("home-color")) {
        // Change the text color of the element with class "home-color"
        const homecolor = document.querySelector(".home-color");
        if (homecolor) {
          homecolor.style.color = "#0092FF"; // Change the color as needed
        }
      }
    });
  });
});

const technologiesBtn = document.getElementById("tech-btn");
const technologiesSideBtn = document.getElementById("tech-sidebar");
const techsection = document.getElementById("tech-sect");

technologiesBtn.addEventListener("click", () => {
  let techtarget = techsection.offsetTop;
  window.scrollTo({
    top: techtarget,
    behavior: "smooth",
  });
});
technologiesSideBtn.addEventListener("click", () => {
  let techtarget = techsection.offsetTop;
  window.scrollTo({
    top: techtarget,
    behavior: "smooth",
  });
});

const homeBtn = document.getElementById("home");
const sideHomeBtn = document.getElementById("home-sidebar");
const homepage = document.getElementById("home-page");

sideHomeBtn.addEventListener("click", () => {
  let homeTarget = homepage.offsetTop;
  window.scrollTo({
    top: homeTarget,
    behavior: "smooth",
  });
});

homeBtn.addEventListener("click", () => {
  let homeTarget = homepage.offsetTop;
  window.scrollTo({
    top: homeTarget,
    behavior: "smooth",
  });
});

const aboutusBtn = document.getElementById("About-us");
const aboutSidebarBtn = document.getElementById("About-us-sidebar");
const aboutSection = document.getElementById("aboutus-sect");

aboutSidebarBtn.addEventListener("click", () => {
  let aboutTarget = aboutSection.offsetTop;
  window.scrollTo({
    top: aboutTarget,
    behavior: "smooth",
  });
});

aboutusBtn.addEventListener("click", () => {
  let aboutTarget = aboutSection.offsetTop;
  window.scrollTo({
    top: aboutTarget,
    behavior: "smooth",
  });
});

document.addEventListener("DOMContentLoaded", function () {
  const openSidebarButton = document.querySelector(".sidemenu-btn");
  const sidebar = document.querySelector(".sidebar");
  const SidebarCloser = document.querySelector(".sidebar-closer");

  sidebar.style.left = "-250px";
  SidebarCloser.style.display = "none";

  openSidebarButton.addEventListener("click", function () {
    if (sidebar.style.left === "-250px") {
      sidebar.style.left = "0";
      SidebarCloser.style.display = "block";
    } else {
      sidebar.style.left = "-250px";
      SidebarCloser.style.display = "none";
    }
  });

  SidebarCloser.addEventListener("click", function () {
    sidebar.style.left = "-250px";
    SidebarCloser.style.display = "none";
  });
});

const getServicesBtn = document.getElementById("service-btn");
const serviesTarget = document.getElementById("services-sect");

// servicesidebarBtn.addEventListener("click", () => {
//   let targetPosition = serviesTarget.offsetTop;
//   window.scrollTo({
//     top: targetPosition,
//     behavior: "smooth",
//   });
// });

getServicesBtn.addEventListener("click", () => {
  let targetPosition = serviesTarget.offsetTop;
  window.scrollTo({
    top: targetPosition,
    behavior: "smooth",
  });
});

const contactBtn = document.getElementById("Contact-us");
const contactSidebarBtn = document.getElementById("contact-sidebar");
const contactSection = document.getElementById("contact-sect");

contactBtn.addEventListener("click", () => {
  let targetPosition = contactSection.offsetTop;
  window.scrollTo({
    top: targetPosition,
    behavior: "smooth",
  });
});

// contactSidebarBtn.addEventListener("click", () => {
//   let targetPosition = contactSection.offsetTop;
//   window.scrollTo({
//     top: targetPosition,
//     behavior: "smooth",
//   });
// });

// Mouse over service card for animation

const card = document.querySelectorAll(".cards");

card.addEventListener("mouseover", () => {
  card.style.backgroundColor = "#0092ff";
});
card.addEventListener("mouseout", () => {
  card.style.backgroundColor = "#f3f4f5";
});

$(document).ready(function () {
  $(".owl-carousel").owlCarousel();
});

const careerBtn = document.getElementById("Careers-link");

careerBtn.addEventListener("click", () => {
  window.location.href = "../pages/careers.html";
});

const homeLogo = document.getElementById("logo-image");

homeLogo.addEventListener("click", () => {
  window.location.href = "../index.html"
});



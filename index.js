 // navMenu
 const hamBurger = document.querySelector(".ham-burger");
 const navCross = document.querySelector(".nav-menu-cross");
 const navMenu = document.querySelector(".nav-menu");

 navOpen = false;
 hamBurger.addEventListener("click", () => {
     if (!navOpen) {
         navMenu.style.opacity = "1";
         navMenu.style.pointerEvents = "auto";
         navOpen = true;
     }
 });
 navCross.addEventListener("click", () => {
     if (navOpen === true) {
         navMenu.style.opacity = "0";
         navMenu.style.pointerEvents = "none";
         navOpen = false;
     }
 });

 //card 
 const collegeCard = document.querySelector(".college-card");
 const collegeHeading = document.querySelector(".college-heading");
 const collegePara = document.querySelector(".college-para")
 collegeCard.addEventListener("mouseover", () => {
     collegeHeading.style.opacity = "0";
     collegePara.style.opacity = "0"
 });
 collegeCard.addEventListener("mouseout", () => {
     collegeHeading.style.opacity = "1";
     collegePara.style.opacity = "1";
 });

 const schoolCard = document.querySelector(".school-card");
 const schoolHeading = document.querySelector(".school-heading");
 const schoolPara = document.querySelector(".school-para")
 schoolCard.addEventListener("mouseover", () => {
     schoolHeading.style.opacity = "0";
     schoolPara.style.opacity = "0"
 });
 schoolCard.addEventListener("mouseout", () => {
     schoolHeading.style.opacity = "1";
     schoolPara.style.opacity = "1";
 });

 //nav
 const header = document.querySelector("header")
 window.addEventListener("scroll", () => {
     let headerCurrent = window.pageYOffset;
     if (headerCurrent <= 0) {
         header.style.background = "transparent";
         header.style.boxShadow = "none"
     }
     if (headerCurrent > 0) {
         header.style.background = "#0081D1";
         header.style.boxShadow = "0 2px 10px 0px rgba(0, 0, 0, .5)"
     }
 });
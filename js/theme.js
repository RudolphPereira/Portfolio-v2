const sunIcon = document.querySelector(".port__nav-item-container");
const moonIcon = document.querySelector(".port__nav-item-container-two");
const themeToggle = document.querySelector(".port__nav-list-two");
const navList = document.querySelector(".port__nav-list");
const navListTwo = document.querySelector(".port__nav-list-two");
const pageBody = document.getElementsByTagName("body")[0];
const pagePTags = document.querySelectorAll("p");

themeToggle.addEventListener("click", togglePageTheme);

function togglePageTheme() {
  moonIcon.classList.toggle("active");
  sunIcon.classList.toggle("active");
  if (moonIcon.classList.contains("active")) {
    pageBody.style.backgroundColor = "#fff";
    pageBody.style.color = "#505050";
    pagePTags.forEach((e) => {
      e.style.color = "#6f6f6f";
    });
    navList.style.border = "3px solid #fff";
    navListTwo.style.border = "3px solid #fff";
    sunIcon.classList.remove("active");
  } else if (sunIcon.classList.contains("active")) {
    pageBody.style.backgroundColor = "#252526";
    pageBody.style.color = "#fff";
    pagePTags.forEach((e) => {
      e.style.color = "#e5e5e5";
    });
    navList.style.border = "3px solid #e5e5e5";
    navListTwo.style.border = "3px solid #e5e5e5";
    moonIcon.classList.remove("active");
  }
}

///////////////////////////////////////////////////////
//////////Make MObile navigation work

const btnNavEL = document.querySelector(".btn-mobile-nav");
const headerEL = document.querySelector(".header");
const openbtn = document.querySelector(".open");
const closebtn = document.querySelector(".close");

btnNavEL.addEventListener("click", function () {
  headerEL.classList.toggle("nav-open");
  openbtn.classList.toggle("active");
  closebtn.classList.toggle("active");
});

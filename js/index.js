// Your code goes here

const body = document.querySelector("body");
//sections
//header
const mainNav = document.querySelector("header");
//banerimg
const bannerImg = document.querySelector(".intro img");
//content section
const contentSectionImg = document.querySelectorAll(".content-section img");
//bottom columns
const contentPick = document.querySelector(".content-pick");
const funInSun = contentPick.querySelector(".destination:nth-of-type(1)");
const mountainExcursion = contentPick.querySelector(
  ".destination:nth-of-type(2)"
);
const islandGetaway = contentPick.querySelector(".destination:nth-of-type(3)");

// buttons
const buttons = document.querySelectorAll(".btn");

//---------------------------------------------------------

//img
bannerImg.addEventListener("mouseover", function (event) {
  event.target.style.border = "2px solid red";
});
bannerImg.addEventListener("mouseleave", function (event) {
  event.target.style.border = "";
});

//idk what im doing
body.addEventListener("keydown", function (event) {
  event.target.style.backgroundColor = "pink";
  body.addEventListener("keyup", function (event) {
    event.target.style.backgroundColor = "";
    event.stopPropagation("document");
  });
});

//uhhhhh
console.log(buttons);
buttons.forEach((button) =>
  button.addEventListener("dblclick", function (event) {
    event.target.textContent = "OUCH! Be gentle plz...";
    setTimeout(function () {
      event.target.textContent = "Sign Me Up!";
    }, 700);
  })
);

//uhhhh2
document.addEventListener("wheel", function (event) {
  alert("HEY WHOA SLOW DOWN THERE BUD! Use arrow keys to scroll");
});

//Prevent default of a tags in Nav
const aTags = document.querySelectorAll(".nav-link");
aTags.forEach((element) =>
  element.addEventListener("click", function (event) {
    event.preventDefault();
  })
);

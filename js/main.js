const buttonMedia = document.querySelector(".btn-media"), // select button media navbar
  // select ul navbar
  ulNavBar = document.querySelector(".parent-ul ul"),
  // select ul li all
  ulNavBarLis = document.querySelectorAll(".parent-ul ul li"),
  // select i button navbar
  iButtonMedia = document.querySelector(".btn-media > i");

// ul navbar add classlist open
buttonMedia.onclick = () => {
  "use strict";
  buttonMedia.classList.toggle("radius");
  ulNavBar.classList.toggle("open");
  iButtonMedia.classList.toggle("fa-bars");
};

// forEach on ul li navbar
ulNavBarLis.forEach(li => {
  li.addEventListener("click", e => {
    e.target.parentElement.querySelectorAll(".active").forEach(ee => {
      ee.classList.remove("active");
    });
    e.target.classList.add("active");
  });
});

//
document.querySelectorAll(".header .caption button").forEach(btn => {
  btn.addEventListener("click", e => {
    e.target.classList.toggle("active");
  });
});

// select tabs ul li
const tabsUlLi = document.querySelectorAll(".tabs ul li"),
  // select tabs container div
  tabsContainerDiv = document.querySelectorAll(".tabs .container div");

// onclick
tabsUlLi.forEach(li => {
  li.addEventListener("click", e => {
    e.target.parentElement.querySelectorAll(".active").forEach(ee => {
      ee.classList.remove("active");
    });
    li.classList.add("active");

    // forEach on tabsContainerDiv
    tabsContainerDiv.forEach(div => {
      div.style.display = "none";
      if (e.target.classList.contains(div.dataset.tab)) {
        div.style.display = "block";
      }
    });
  });
});

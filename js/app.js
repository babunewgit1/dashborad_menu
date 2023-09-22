// code for collapsing menu
const tigger = document.getElementById("tigger");
const hit = document.querySelector(".mainSection");
const sbar = document.querySelector(".sbar");

tigger.addEventListener("click", () => {
  tigger.style.display = "none";
  sbar.style.display = "block";
  hit.classList.add("small");
});

sbar.addEventListener("click", () => {
  tigger.style.display = "block";
  sbar.style.display = "none";
  hit.classList.remove("small");
});

// code for responsive menu
const menuTigger = document.getElementById("menuTigger");
const leftpart = document.querySelector(".leftpart");
const body = document.querySelector("body");
const closeIcon = document.getElementById("closeIcon");

menuTigger.addEventListener("click", () => {
  leftpart.classList.add("openmenu");
  body.classList.add("overflow");
});

closeIcon.addEventListener("click", () => {
  leftpart.classList.remove("openmenu");
  body.classList.remove("overflow");
});

// code for table dropdown
const dropdowntable = document.querySelectorAll("#dropdowntable");
const droptable = document.querySelectorAll(".droptable");

dropdowntable.forEach((button) => {
  button.addEventListener("click", () => {
    const target = button.getAttribute("data-target");

    droptable.forEach((div) => {
      const filter = div.getAttribute("data-accept");
      if (target === filter) {
        div.classList.toggle("showtr");
      }
    });
  });
});

// code for making browser full screen
const fullScreenBtn = document.querySelector(".fullscreen button");
fullScreenBtn.addEventListener("click", () => {
  if (document.fullscreenElement) {
    document.exitFullscreen();
  } else {
    document.documentElement.requestFullscreen();
  }
});

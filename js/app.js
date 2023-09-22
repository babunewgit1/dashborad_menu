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

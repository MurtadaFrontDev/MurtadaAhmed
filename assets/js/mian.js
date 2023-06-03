// Make toogle of nav bar

// 1- make var
let barsIcon = document.getElementById("bars");
let slidNavBar = document.getElementById("slid_nav_bar");
let closeSileBar = document.getElementById("close_slide_bar");

barsIcon.addEventListener("click", function () {
  slidNavBar.classList.add("toogle_slide_bar");
});
closeSileBar.addEventListener("click", function () {
  slidNavBar.classList.remove("toogle_slide_bar");
});

// close Multiple Elements
function closeSlideBar() {
  slidNavBar.classList.remove("toogle_slide_bar");
}

// Make Light and Dark mode

let dark = document.getElementById("dark");
let light = document.getElementById("light");

dark.addEventListener("click", () => {
  dark.classList.add("dark_mode_none");
  light.classList.remove("dark_mode_none");
});
light.addEventListener("click", () => {
  dark.classList.remove("dark_mode_none");
  light.classList.add("dark_mode_none");
});

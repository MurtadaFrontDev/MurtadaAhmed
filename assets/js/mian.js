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
let darkTheme;

console.log(window.localStorage);
dark.addEventListener("click", () => {
  darkTheme = true;
  dark.classList.add("dark_mode_none");
  light.classList.remove("dark_mode_none");
  if (darkTheme == true) {
    // My comand here
    document.documentElement.style.setProperty(
      "--main-white",
      "rgb(1, 22, 39)"
    );
    document.documentElement.style.setProperty(
      "--main-black",
      "rgb(237, 242, 244)"
    );
    document.documentElement.style.setProperty(
      "--dark-blue",
      "rgb(237, 242, 244)"
    );
    document.documentElement.style.setProperty(
      "--main-black",
      "rgb(237, 242, 244)"
    );
    document.documentElement.style.setProperty(
      "box-shadow-color",
      "rgba(255, 255, 255, 0.24)"
    );
  }
});
light.addEventListener("click", () => {
  darkTheme = false;
  light.classList.add("dark_mode_none");
  dark.classList.remove("dark_mode_none");
  if (darkTheme == false) {
    // My comand here
    document.documentElement.style.setProperty(
      "--main-white",
      "rgb(237, 242, 244)"
    );
    document.documentElement.style.setProperty(
      "--main-black",
      "rgb(1, 22, 39)"
    );
    document.documentElement.style.setProperty(
      "--light-blue",
      "rgb(69, 123, 157)"
    );
    document.documentElement.style.setProperty(
      "--dark-blue",
      "rgb(29, 53, 87)"
    );
    document.documentElement.style.setProperty(
      "box-shadow-color",
      "rgba(1,22,39,0.2)"
    );
  }
});

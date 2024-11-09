const buttons = document.querySelectorAll("button");
const sliders = document.querySelectorAll(".slider");

function hideSliders() {
  sliders.forEach((item) => item.classList.remove("on"));
}

function removeActiveClass() {
  buttons.forEach((button) => button.classList.remove("active"));
}

buttons.forEach((button) => {
  button.addEventListener("click", () => {
    hideSliders();
    removeActiveClass();
    button.classList.add("active");

    const hero = button.getAttribute("data-hero");
    const targetSlider = document.getElementById(hero);
    targetSlider.classList.add("on");
  });
});

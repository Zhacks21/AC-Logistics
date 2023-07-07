var scroll = document.querySelector("header");

window.onscroll = function () {
  if (window.pageYOffset >= scroll.offsetTop) {
    scroll.classList.add("sticky");
  } else {
    scroll.classList.remove("sticky");
  }
};
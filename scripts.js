function swap() {
  let modal = document.querySelector(".modal");
  modal.classList.toggle("active");
}

function slide() {
  let img = document.querySelector(".right-slide-img");
  let slide_first = document.querySelector(".divOne");
  let slide_second = document.querySelector(".divTwo");
  let body = document.querySelector(".body");
  slide_first.classList.toggle("slide");
  slide_second.classList.toggle("slide");
  body.classList.toggle("swap");

  if (img.src.match("svg/right-arrow-alt.svg")) {
    img.src = "svg/left-arrow-alt.svg";
  } else {
    img.src = "svg/right-arrow-alt.svg";
  }
}

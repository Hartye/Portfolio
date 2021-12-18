function swap() {
  let modal = document.querySelector(".modal");
  modal.classList.toggle("active");
}

function slide() {
  let img = document.querySelector(".right-slide-img");
  let body = document.querySelector(".body");
  let main = document.querySelector(".container");
  body.classList.toggle("swap");
  main.classList.toggle("swap");

  if (img.src.match("svg/right-arrow-alt.svg")) {
    img.src = "svg/left-arrow-alt.svg";
  } else {
    img.src = "svg/right-arrow-alt.svg";
  }
}

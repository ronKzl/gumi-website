const overlay = document.querySelector(".black__overlay");
const audio = document.getElementById("background-music");
const btn = document.getElementById("click");
const img = document.getElementById("click__img");
//Integration hell
document.addEventListener("DOMContentLoaded", function () {
  // Check if the window width is more than 640 pixels
  audio.volume = 0.5;
  if (window.innerWidth >= 640) {
    btn.textContent = "CLICK TO ENTER"; //Start the mobile thingy
  } else {
    overlay.style.pointerEvents = "none";
    setTimeout(() => {
      //roughly timeout to get rid of the box after 3.3 sec since anim is 3.5sec
      overlay.style.display = "none";
    }, 4000);
  }
});

overlay.addEventListener("click", animation);
function animation() {
  btn.style.animation = "fadeOut 1s";
  btn.style.display = "none";
  img.style.animation = "fadeIn 2s";
  img.style.display = "block";
  setTimeout(() => {
    overlay.style.animation = "fadeOut 2s forwards";
    overlay.style.pointerEvents = "none";
    audio.play().catch((error) => {
      console.log("Autoplay was prevented: ", error);
    });
  }, 1000);
}

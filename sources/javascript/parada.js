const frame = document.querySelector(".video-frame");
const body = document.querySelector("main");
const btnon = document.querySelector(".btn-show");
const btnoff = document.querySelector(".btn-hidden");

// Começa escondido
frame.style.display = "none";

function closeVideo() {

  frame.style.display = "none";

}

function openVideo() {

  frame.style.display = "block"; // ou "flex"
}

btnon.addEventListener('click', openVideo);
btnoff.addEventListener('click', closeVideo);

/*function closeModal(id) {
  document.getElementById(id).classList.remove("active");
  document.getElementById("nav").classList.add("active");
}
function openModal(id) {
  document.getElementById(id).classList.add("active");
  document.getElementById("nav").classList.remove("active");
}*/
function Pause(video) {
  video.removeAttribute("loop");
}
function Play(video) {
  if (video.paused) video.setAttribute("loop", "");
  video.play();
}
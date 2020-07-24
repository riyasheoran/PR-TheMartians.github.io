//Modals
let missionModal = document.querySelector(".mission-modal");
let aboutModal = document.querySelector(".about-modal");
let featuresModal = document.querySelector(".features-modal");
let instModal = document.querySelector(".inst-modal");

//Trigger Buttons
let missionBtn = document.querySelector("#mission-btn");
let aboutBtn = document.querySelector("#about-btn");
let featuresBtn = document.querySelector("#features-btn");
let instBtn = document.querySelector("#inst-btn");

//Close button
let close = document.querySelectorAll(".close");

missionBtn.onclick = function () {
  missionModal.style.display = "block";
};
aboutBtn.onclick = function () {
  aboutModal.style.display = "block";
};
featuresBtn.onclick = function () {
  featuresModal.style.display = "block";
};
instBtn.onclick = function () {
  instModal.style.display = "block";
};

close[0].onclick = () => {
  missionModal.style.display = "none";
};
close[1].onclick = function () {
  aboutModal.style.display = "none";
};
close[2].onclick = function () {
  featuresModal.style.display = "none";
};
close[3].onclick = function () {
  instModal.style.display = "none";
};

window.onclick = function (event) {
  if (event.target == missionModal) {
    missionModal.style.display = "none";
  }
  if (event.target == aboutModal) {
    aboutModal.style.display = "none";
  }
  if (event.target == featuresModal) {
    featuresModal.style.display = "none";
  }
  if (event.target == instModal) {
    instModal.style.display = "none";
  }
};

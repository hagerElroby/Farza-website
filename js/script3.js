var imgslist = document.getElementsByClassName("img-item");
var lightboxContainer = document.querySelector(" .lightbox-container");
var lightboxItem = document.querySelector(" .lightbox-item");
var nextButton = document.getElementById("next");
var closeButton = document.getElementById("close");
var prevButton = document.getElementById("prev");
var currentIndex = 0;

for (var i = 0; i < imgslist.length; i++) {
  imgslist[i].addEventListener("click", function (e) {
    var imgSrc = e.target.getAttribute("src");
    lightboxContainer.classList.replace("d-none", "d-flex");
    lightboxItem.style.backgroundImage = `url(${imgSrc})`;
    currentIndex = imgslist.indexOf(e.target);
  });
}

function nextSlide() {
  currentIndex++;
  if (currentIndex == imgslist.length) {
    currentIndex = 0;
  }
  var imgSrc = imgslist[currentIndex].getAttribute("src");
  lightboxItem.style.backgroundImage = `url(${imgSrc})`;
}

function prevSlide() {
  currentIndex--;
  if (currentIndex == -1) {
    currentIndex = imgslist.length - 1;
  }
  var imgSrc = imgslist[currentIndex].getAttribute("src");
  lightboxItem.style.backgroundImage = `url(${imgSrc})`;
}

function closeSlide() {
  lightboxContainer.classList.replace("d-flex", "d-none");
}

nextButton.addEventListener("click", nextSlide);
prevButton.addEventListener("click", prevSlide);
closeButton.addEventListener("click", closeSlide);

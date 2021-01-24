const image = document.getElementById("slide");
const next = document.getElementById("next");
const previous = document.getElementById("previous");
let i = 0;

let images = [
  "https://i.pinimg.com/originals/ca/76/0b/ca760b70976b52578da88e06973af542.jpg",
  "https://images.unsplash.com/photo-1503023345310-bd7c1de61c7d?ixid=MXwxMjA3fDB8MHxzZWFyY2h8MXx8aHVtYW58ZW58MHx8MHw%3D&ixlib=rb-1.2.1&w=1000&q=80",
  "https://images.unsplash.com/photo-1461800919507-79b16743b257?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&auto=format&fit=crop&w=1000&q=80",
];

function nextImage() {
  ++i;
  if (i >= images.length) {
    i = 0;
  }
  image.style.maxWidth = "0";
  window.setTimeout(() => {
    image.src = images[i];
    image.style.maxWidth = "400px";
  }, 500);

  window.clearInterval(interval);
  interval = setInterval(nextImage, 5000);
}

function previousImage() {
  if (i <= 0) {
    i = images.length;
  }
  --i;
  image.style.maxWidth = "0";
  window.setTimeout(() => {
    image.src = images[i];
    image.style.maxWidth = "400px";
  }, 500);

  window.clearInterval(interval);
  interval = setInterval(nextImage, 5000);
}

next.addEventListener("click", nextImage);

previous.addEventListener("click", previousImage);

let interval = setInterval(nextImage, 5000);

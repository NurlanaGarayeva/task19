

let index = 0;
let slides = document.getElementsByClassName("mySlides");

function startSlideshow() {
  fetch("https://fakestoreapi.com/products")
    .then((res) => res.json())
    .then((data) => {
      for (let i = 0; i < slides.length; i++) {
        slides[i].innerHTML = `<img src="${data[i % data.length].image}" alt="Slide" />`;
      }
      showSlides(index);
    })
    .catch((error) => console.error("Error fetching data:", error));
}

startSlideshow();

function showSlides(n) {
  if (slides.length === 0) return; 
  index = (n + slides.length) % slides.length;
  for (let i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  slides[index].style.display = "block";
}

function plusSlides(n) {
  showSlides(index += n);
}

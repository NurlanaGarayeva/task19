// const section = document.getElementById("demo")
// const newElement = document.createElement("div")
// newElement.textContent = "Hello world"
// section.append(newElement)
// section.append(document.body)
// document.body.append(newElement)
// console.log(section);

// ------------------------------------------------------

// const heading = document.getElementById("heading");
// console.log(heading.classList);
// heading.classList.remove("demo")
// heading.addEventListener("click",()=> {
// if (heading.classList.contains("demo")) {
//     heading.classList.remove("demo")
// } else {
//     heading.classList.add("demo")
// }

// heading.classList.toggle("demo")
// })

// ------------------------------------------------------
// const list = document.getElementById("list");

// let todos = [
//   "Play chess",
//   "Learnin JavaScript",
//   "Play pc games",
//   "Learning Chess",
// ];

// todos.map((todo) => {
//   const li = document.createElement("li");
//   list.append(li);
//   list.prepend(li);
//   li.textContent = todo;
// });

// ------------------------------------------------------
// const products = document.getElementsByClassName("products");
const products = document.querySelector(".products");
const search = document.getElementById("search");
const btn = document.getElementById("btn");

let data = [];
const showData = () => {
  products.innerHTML = "";
  data
    .filter((a) => a.title.toLowerCase().startsWith(search.value.toLowerCase()))
    .map((a) => {
      const product = document.createElement("div");
      product.classList.add("product");
      const productImage = document.createElement("div");
      productImage.classList.add("product__image");
      const photo = document.createElement("img");
      photo.src = a.image;
      productImage.append(photo);
      const productDetails = document.createElement("div");
      productDetails.classList.add("product__details");
      const name = document.createElement("h3");
      name.textContent = a.title;
      const price = document.createElement("h2");
      price.textContent = `${a.price}$`;
      productDetails.append(name, price);
      product.append(productImage, productDetails);
      products.append(product);
    });
};

// search.addEventListener("input", () => {
//   showData();
// });
btn.addEventListener("click", () => {
  showData();
});

fetch("https://fakestoreapi.com/products")
  .then((res) => res.json())
  .then((responseData) => {
    data = responseData;
    showData();
  });


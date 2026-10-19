// Part 4: DOM and events. Write your JavaScript here.

            // 4.1 Change the title (2 points) 
let title=document.getElementById("page-title");
let menu=document.getElementById("menu");

title.textContent="Today's menu";

            // 4.1 Change the title (2 points) 
let dishes=[
    { name: "Apple", price: 25 },
    { name: "Orange", price: 60 },
    { name: "Onion", price: 60 }
];

  for (let i = 0; i < dishes[i].length; i++) {
    let article=document.createElement("article");
    article.classList.add("card");
    menu.appendChild(article);
    console.log(`Grilled fish:${18}`);
  }

        // 4.4 Find the 3 mistakes (3 points, 1 per mistake)
// const button = document.querySelector("highlight-btn");
button.addEventListener("click", highlightAll());

function highlightAll() {
  const cards = document.querySelectorAll(".card");
  cards.textContent = "Selected";
}
// button.addEventListener("click", highlightAll()) is a function that's why it's important to write after {}
// const button = document.querySelector("#highlight-btn");
// button.addEventListener("click", ()=> {
//   const cards = document.querySelector(".card");
//   cards.textContent = "Selected";
// })


const input = document.querySelector("#message");
console.log(input.value);

const p = document.querySelector("#char-info");
console.log(p.value);
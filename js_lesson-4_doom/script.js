// document.body.style.backgroundColor = "red";
// const div = document.getElementById("lesson");
// div.style.color = "blue";
// console.log("div", div);

// const tagName = document.getElementsByTagName("div");
// const name = document.getElementsByName("qwer");
// const className = document.getElementsByClassName("lesson3");

// const qsElement = div.querySelector("p");
// const qsAllElements = [...div.querySelectorAll("p")];

// console.log("nAME", name);
// console.log("tagnam", tagName);
// console.log("className", className);

// console.log("qs", qsElement);
// console.log("qsall", qsAllElements);

// const arr = [3, 5, 1];
// const arr2 = [8, 9, 15];
// const merged = [0, ...arr, 2, ...arr];
// console.log(merged);

// const divLesson = document.getElementById("lesson");
// console.log(divLesson.textContent);
// //texContent

// const closestExample = document.querySelector(".closestExample");
// console.log(closestExample.closest(".close"));

// const deletBtn = document.querySelector("#deletBtn");
// deletBtn.addEventListener("click", () => {
//   console.log("click");
// });

// const card = document.querySelector(".card");
// card.addEventListener("click", (event) => {
//   if (event.target.id === "deletBtn") {
//     console.log("click del");
//   }

//   if (event.target.id === "editBtn") {
//     console.log("click edit");
//   }
//   //   console.log("click");
//   //   console.log(event.target); //то на что кликаем
//   //   console.log(event.currentTarget); // то что обрабатываем
// });

// const card = document.querySelector(".card");
// const innerExample = document.querySelector(".innerExample");

// card.addEventListener("click", (event) => {
//   if (event.target.id === "deletBtn") {
//     innerExample.innerHTML += "Delete";
//   }

//   if (event.target.id === "editBtn") {
//     innerExample.innerHTML += "Edit";
//   }
// });

//innerHtml менят внутри на заданное

// const card = document.querySelector(".card");
// const innerExample = document.querySelector(".innerExample");
// const input = document.querySelector("#input");

// card.addEventListener("click", (event) => {
//   if (event.target.id === "deletBtn") {
//     innerExample.innerHTML += "Delete";
//   }

//   if (event.target.id === "editBtn") {
//     innerExample.innerHTML = input.value;
//   }
// });

// let obj = {
//   title: "",
//   description: "",
// };

// const inputOne = document.querySelector("#inputOne");
// const inputTwo = document.querySelector("#inputTwo");
// const btn = document.querySelector("#btn");

// btn.addEventListener("click", (event) => {
//   obj.title = inputOne.value;
//   obj.description = inputTwo.value;
//   inputOne.value = "";
//   inputTwo.value = "";
//   console.log(obj);
// });

const inputOne = document.querySelector("#inputOne");
const inputTwo = document.querySelector("#inputTwo");
const btn = document.querySelector("#btn");
const bigDiv = document.querySelector(".bigDiv");

let arr = [];

// btn.addEventListener("click", (event) => {
//   bigDiv.innerHTML += `<div style="width: 100px; height: 150px; border: 1px solid red;">  <p>title: ${inputOne.value}</p> <p>discription: ${inputTwo.value}</p> <button>edit</button> <button>delit</button>  </div> `;
//   inputOne.value = "";
//   inputTwo.value = "";
// });

btn.addEventListener("click", (event) => {
  arr.push({ title: inputOne.value, description: inputTwo.value });
  bigDiv.innerHTML = "";
  arr.forEach((el, i, array) => {
    bigDiv.innerHTML += `<div class ="smallDiv">  <p>title: ${array[i].title}</p> <p>discription: ${array[i].description}</p> <button>edit</button> <button>delit</button>  </div>`;
  });

  inputOne.value = "";
  inputTwo.value = "";
});

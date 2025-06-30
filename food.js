const inputFood = document.getElementById("input-food");
const inputBtn = document.getElementById("input-btn");
const foodCon = document.getElementById("food-container");
const main = document.getElementById("main");
inputBtn.addEventListener("click", () => {
  const li = document.createElement("li");
  const text = document.createTextNode(inputFood.value);
  li.className = "food-item";
  li.append(text);
  foodCon.append(li);
});
//hoe to creat and add elemant in html
//unction crateVia(mes) {
//  const tem = `<div>
// <srtong>Successful</strong> food is updated!
// </div>`;
// main.innerHTML += tem;
//}
//crateVia("Food is updated!");
console.log(foodCon.innerText);
console.log(foodCon.innerHTML);
console.log(foodCon.textContent);
//create Document fragment
/*const favFood = ["Briyani", "Egg rice", "Mutton sukka"];
const fragment = document.createDocumentFragment();
favFood.forEach((food) => {
  const li = document.createElement("li");
  li.textContent = food;
  li.className = "food-item";
  fragment.append(li);
});
foodCon.prepend(fragment);*/
//
const foodConEl = document.querySelector("#food-container");
const chickenRiceLi = document.getElementById("food-item");
console.log(chickenRiceLi);
const li = document.createElement("li");
li.textContent = "Chicken Rice";
li.className = "food-item";
chickenRiceLi.replaceWith(li);

//foodCon.insertAdjacentText("afterbegin", "<li>Vada</li>");
//foodCon.insertAdjacentHTML("afterend", "<li>Vada</li>");
//foodCon.insertAdjacentHTML("beforebegin", "<li>Vada</li>");
//oodCon.insertAdjacentElement("beforeend", "<li>Vada</li>");

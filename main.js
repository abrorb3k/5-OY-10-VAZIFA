import { getData, createRow, validate } from "./app.js"

const form = document.querySelector("#form")
const name = document.querySelector("#name");
const price = document.querySelector("#price");
const count = document.querySelector("#count");
const btn = document.querySelector("#btn");
const tbody = document.querySelector("#tbody");
const overalPrice = document.querySelector("#overalPrice")
const overalCount = document.querySelector("#overalCount");

btn &&  btn.addEventListener("click",function(event){
  event.preventDefault()
   const isValid = validate()
   if (!isValid) {
    return;
   }

   const product = {
    id: Date.now(),
    name: name.value,
    price: price.value,
    count: count.value
   }

   let products = getData();

   products.push(product)
   localStorage.setItem("products", JSON.stringify(products))
   form.reset()

   let index = tbody.children.length + 1;
   let row = createRow(product, index)
   tbody.innerHTML += row;

   let oldsumP = overalPrice.innerHTML
   let oldsumC = overalCount.innerHTML

   overalCount.innerHTML = oldsumC + (Number(product.count));
   overalPrice.innerHTML = oldsumP + Number(product.price);
window.location.reload();
})

document.addEventListener("DOMContentLoaded", function(){
    let products = getData()
    let sum = 0;
    let counter = 0;
    products.length > 0 &&
      products.forEach((product, index) => {
        let row = createRow(product, index + 1);
        tbody.innerHTML += row;

        sum += +product.price
        counter += +product.count
      });

      overalCount.innerHTML = counter
      overalPrice.innerHTML = sum;

      const deleteBtns = document.querySelectorAll("button.delete")

      deleteBtns.length > 0  && deleteBtns.forEach(deleteBtn =>{
        deleteBtn && deleteBtn.addEventListener("click", function(){
            let confirmDelete = confirm("Rostdan ham o'chirmoqchimisiz")
            let elementId = this.getAttribute("data-id")

            if (confirmDelete && elementId) {

                let products = getData()
                products = products.filter(product =>{
                    return product.id != elementId
                })
                localStorage.setItem("products", JSON.stringify(products))

                this.parentNode.parentNode.remove()
                // window.location.reload()
            }
        })
      })

      const editBtns = document.querySelectorAll("button.edit")
      editBtns.length > 0 && editBtns.forEach(editBtn =>{
        editBtn && editBtn.addEventListener("click", function(){
            let elementId = this.getAttribute("data-id")
            let products = getData()
            let oldvalue = products.find(product =>{
                return product.id = elementId
            })

            let name = prompt("Nomi", oldvalue.name)
            let price = +prompt("Narxi", oldvalue.price)
            let count = +prompt("Soni", oldvalue.count)

            let product = {
                id: elementId,
                name: name,
                price: price,
                count: count
            }

            products = products.map(value =>{
                if (value.id == elementId) {
                    value = product
                }

                return value
            })
            localStorage.setItem("products", JSON.stringify(products))
            window.location.reload()
        })
      })
})






const emoji = document.getElementById("emoji");
const btn11 = document.getElementById("btn11");
emoji.style.fontSize = "50px";

const emojis = ["😂","🧐","😱","😁","😡","😍","❤️","😎","🧐","🤗","😭",];

btn11 &&
  btn11.addEventListener("click", function () {
    const random = emojis[Math.floor(Math.random() * emojis.length)];
    emoji.textContent = random;
  });
//==============================================================================
// 2-masala
const textarea = document.getElementById("textarea");
const textweight = document.getElementById("textweight");
const fontfamily = document.getElementById("fontfamily");
const clearbtn = document.getElementById("clearbtn");

let family = fontfamily.value;
let weight = textweight.value;
textweight &&
  textweight.addEventListener("change", function () {
    let weight = textweight.value;
    textarea.style.fontWeight = weight;
  });
fontfamily &&
  fontfamily.addEventListener("change", function () {
    let family = fontfamily.value;
    textarea.style.fontFamily = family;
  });

clearbtn &&
  clearbtn.addEventListener("click", function () {
    textarea.value = "";
  });


//===========================================================================
// 3-masala
const start = document.getElementById("start");
const progress = document.getElementById("progress");
const tugadi = document.getElementById("tugadi");

let progresbar = 0;

start &&
  start.addEventListener("click", function () {
    start.disabled = true;
    start.style.cursor = "not-allowed";

    const interval = setInterval(function () {
      progresbar += 3;
      progress.style.width = progresbar + "px";

      if (progresbar >= 199) {
        clearInterval(interval);
        tugadi.style.display = "block";
      }
    }, 100);
  });

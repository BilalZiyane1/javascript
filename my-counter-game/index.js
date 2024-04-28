let number=document.getElementById("number")
let btnincrease = document.getElementById("btn-increase")
let btndecrease = document.getElementById("btn-decrease")
let btnreset = document.getElementById("btn-reset")


let x = Number(number.textContent)

btnincrease.addEventListener("click", () =>{
  x++;
  number.textContent = x;
})
btndecrease.addEventListener("click", () =>{
  x--;
  number.textContent = x;
})
btnreset.addEventListener("click", () =>{
  x=0
  number.textContent = x;
})
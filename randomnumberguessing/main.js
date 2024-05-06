const mycheckbox = document.getElementById("checkbox");
const visabtn = document.getElementById("visabtn")
const mastercard = document.getElementById("mastercardbtn")
const paypal = document.getElementById("paypal")
const mysubmit = document.getElementById("mysubmit")
const subresult = document.getElementById("submitresult")
const payresult = document.getElementById("paymentresult")



mysubmit.addEventListener("clcik",()=>{
  if(mycheckbox.checked){
    subresult.innerText ="You re subscribed congratulation!"
  }
  else subresult.innerText ="You ain't subscribed ! "
})


const minnum = 1
const maxnum =100
const answer = Math.trunc(Math.random()*(maxnum-minnum +1) + minnum)

let attempts= 0
let guess
let running = true

while(running){
  guess = window.prompt(`Guess a number between ${minnum} and ${maxnum}`)
  guess = Number(guess)
  if(isNaN(guess)){
    window.alert("Please enter a valid number")
  }
  else if(guess < minnum || guess > maxnum){
    window.alert("Please enter a valid number in the range given")
  }
  else{
    attempts++
    if(guess < answer){
      window.alert("TOO LOW TRY AGAIN!")
    }
    else if(guess>answer){
      window.alert("TOO HIGH TRY AGAIN!")
    }else{
      window.alert(`CORRECT THE ANSWER WAS ${answer} ! and it took you ${attempts} to find it `)
      running = false;
    }
  }
  
}


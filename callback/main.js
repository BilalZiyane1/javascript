function sum(callback,x,y){
  let result = x+y
  callback(result)
}

function displayres(x){
  console.log(`the result of the operation is : ${x}`)
}
sum(displayres,10,20)

let numbers = [1,2,3,4,5,6,7,8,9,10,11];
numbers.forEach(double);


function double(element,index,array){
  array[index]=element*2;
}
function display(element){
  console.log(element)
}
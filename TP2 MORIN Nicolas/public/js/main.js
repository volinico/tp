
// let button = document.querySelector('button');
// button.addEventListener('click', clickLog(button));
let button = document.querySelectorAll('button');
button.forEach(element => element.addEventListener('click', event =>{
  clickLog(element)
} ));

test = JSON.parse(ALLNEWSJSON);
console.log(test);

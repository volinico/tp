iterator();
console.log(document.querySelector('h1'));
console.log(document.querySelectorAll('#titleNews'));
console.log(document.querySelectorAll('.title'));

let button = document.querySelector('#buttonForm');
button.addEventListener('click', newNews);
/*button.onclick = function(){
	console.log('test');
};*/

/*Partie bonus */
logDateTime('Salut');
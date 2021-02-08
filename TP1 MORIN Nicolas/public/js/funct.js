function iterator(){

	for(let i=0;i<5;i++){
		
		if(i===0){
			console.log('%c'+ i +' '+ green, 'color: green');
		}
		/*si i est pair*/
		else if(i%2 ===0){
			console.log('%c'+ i +' '+ red, 'color: red');
		}/*si i est impair*/
		else if(i%2 !==0){
			console.log('%c'+ i +" "+ blue, 'color: blue');
		}
	}
}

function getElement(element){
 	return document.querySelector('element');
 	
}

function newNews(){

	bal = document.createElement('article');
	bal.className='title';
	bal.textContent=document.querySelector('#newsForm').value;
	document.getElementById('titleNews').appendChild(bal);
	

}


/*Partie bonus*/

function logDateTime(message){
	console.log(Date() +' : '+message);
}

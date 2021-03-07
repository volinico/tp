function bindButton(button){
	button.onclick = function(event){
		event.preventDefault();
    	// let title = document.querySelector('input[name="titleToAdd"]');
			let title = $('input[name="titleToAdd"]');

        // let description = document.querySelector('textarea[name="descriptionToAdd"]');
				let description = $('textarea[name="descriptionToAdd"]');

        let article = new Article(0, title.val(), description.val());

		if(article.addArticle()){
			title.attr('text', '');
            description.attr('text', '');
        }

		return false;
	};
}

function clearErrors(){
	// let errors = document.querySelectorAll('.error');
	let errors = $('.error');

    if(errors){
        while(errors.length > 0 && errors[0].parentNode != null){
            errors[0].parentNode.removeChild(errors[0]);
        }
    }
}


function addError(message, parent){
	// let error = document.createElement('p');
	let error = $('<p></p>');
    // error.innerHTML = message;
    // error.style.color = ROUGE;
    // error.classList.add('error');


    error.html = message;
    error.style.color = ROUGE;
    error.classList.add('error');


    parent.prepend(error);
}

function viewdetailClick(){
    // let p = this.parentNode.querySelector('p');
		let p = $(this).parent().children('p').text();

    logMessageWithDate(p);
}

iterate();

let h1 = $('h1');
logMessageWithDate(h1.html());

let titleNews = $('#titleNews');
logMessageWithDate(titleNews.text());

let titles = $('.title');
// titles.forEach(element => logMessageWithDate(element.html()));
titles.each(function(index) {
	logMessageWithDate($(this).text())
});

let button = $('input[name="addNewsBtn"]');
bindButton(button);

let buttons = document.querySelectorAll('article button');
buttons.forEach(function(element){
	element.onclick = viewdetailClick;
});

let articles = JSON.parse(ALLNEWSJSON);
articles.forEach(function(element){
	console.log(element);

	let a = new Article(element.id, element.title, element.description);
	a.addArticle();
});

// var today = new Date();
// var dd = String(today.getDate()).padStart(2, '0');
// var mm = String(today.getMonth() + 1).padStart(2, '0');
// var yyyy = today.getFullYear();
// today = yyyy + '-' + dd + '-' + mm;
//
// var url = 'http://newsapi.org/v2/everything?q=minecraft&from='+ today +'&sortBy=publishedAt&apiKey=9b4e42c6404c48cab0f04cb200654d6c&pageSize=5';
//
// $.ajax({ url: url, method: GET})
// .done(function(data) {})
// .fail(function(data) {});
// );

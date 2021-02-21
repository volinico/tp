
let button = document.querySelectorAll('button');
button.forEach(element => element.addEventListener('click', event =>{
  clickLog(element)
} ));

let articles = JSON.parse(ALLNEWSJSON);
console.log(articles);

articles.forEach(element =>{
  console.log(element.desc);
  element = new Article(element.id, element.title, element.desc);
  element.addArticle();
}
);// on affiche la description de chaque article dans la variable ALLNEWSJSON, on crée un article et on l'ajoute

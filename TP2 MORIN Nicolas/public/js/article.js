class Article {
  id;
  title;
  desc;

  constructor(id, title, desc) {
    this.id=id;
    this.title=title;
    this.desc=desc;

  }

  createArticleHtml(){
      let newArticle = document.createElement('article');
      newArticle.id = this.id;
      let h3 = document.createElement('h3');
      h3.innerHTML = this.title;
      h3.classList.add('title');
      newArticle.append(h3);

      let p = document.createElement('p');
      newArticle.append(p);
      p.innerHTML = this.desc;

      let button = document.createElement('button');
      button.innerHTML= "view details"
      button.addEventListener('click', event =>{
        clickLog(button)
      } );
      newArticle.append(button);

      let news = document.querySelector('#news');// on recupère l'élément parent

      news.append(newArticle);
      return this;
  }

  checkArticleUnicity() {
      let h3s = document.querySelectorAll('.title');

      for (let i = 0; i < h3s.length; i++) {
          if (h3s[i].innerHTML.toLowerCase().trim() === this.title.toLowerCase().trim()) {
              let form = document.querySelector('#addNewsForm');
              addError('Erreur article deja existant', form);

              return false;
          }
      }

      return true;
  }

  addArticle() {
      clearErrors();

      if (!this.checkArticleUnicity()) {
          return false;
      }

      this.createArticleHtml();
      return true;

  }

}

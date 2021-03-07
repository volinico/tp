class Article {
    id;
    title;
    description;

    constructor(id, title, description){
        this.id = id;
        this.title = title;
        this.description = description;
    }

    createArticleHtml() {
        // let newArticle = document.createElement('article');
        // let h3 = document.createElement('h3');
        // let p = document.createElement('p');
        // let button = document.createElement('button');
        // let news = document.querySelector('#news');

        let newArticle =$('<article></article>');
        let h3 = $('<h3></h3>');
        let p = $('<p></p>');
        let button = $('<button></button>');
        let news = $('#news');



        h3.html(this.title);
        p.html(this.description);
        button.html('View detail');
        this.bindButtonViewdetail(button, viewdetailClick);
        h3.attr('class','title');
        newArticle.attr('id', this.id);

        newArticle.append(h3);
        newArticle.append(p);
        newArticle.append(button);
        news.append(newArticle);
    }

    checkArticleUnicity() {
        let h3s = $('.title');

        for (let i = 0; i < h3s.length; i++) {
            if (h3s[i].innerHTML.toLowerCase().trim() === this.title.toLowerCase().trim()) {
                addError('Erreur article deja existant', form);

                return false;
            }
        }

        return true;
    }

    checkValue() {
        if (this.title === '') {
            let form = $('#addNewsForm');
            addError('Title vide', form);
            return false;
        }

        if (this.description === '') {
            let form = $('#addNewsForm');
            addError('Description vide', form);
            return false;
        }

        return true;
    }

    addArticle() {
        clearErrors();

        if (!this.checkValue()) {
            return false;
        }

        if (!this.checkArticleUnicity()) {
            return false;
        }


        this.createArticleHtml();
        return true;
    }

    bindButtonViewdetail(button, callback){
        button.onclick = callback;
    }
}

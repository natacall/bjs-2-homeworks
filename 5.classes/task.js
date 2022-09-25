"use strict"

class PrintEditionItem {
    constructor(name, releaseDate, pagesCount){
      this.name = name;
      this.releaseDate = releaseDate;
      this.pagesCount = pagesCount;
      this.state = 100;
      this.type = null;
 }

    fix(){
        this.state *= 1.5;
    }

    set state(num){
        if (num < 0){
            this._state = 0; 
        } if(num > 100){
            this._state = 100;
        } else{
            this._state = num;
        }
    }
    get state(){
        return this._state
    }
}

class Magazine extends PrintEditionItem {
    constructor(name, releaseDate, pagesCount, type){
        super(name, releaseDate, pagesCount, type)
        this.type = "magazine";
    }
}

class Book extends PrintEditionItem {
    constructor(author, name, releaseDate, pagesCount, type){
        super(name, releaseDate, pagesCount, type)
        this.author = author;
        this.type = "book";
    }
}

class NovelBook extends Book {
    constructor(releaseDate, pagesCount, type, author){
        super(releaseDate, pagesCount, type, author)
        this.type = "novel";
    }
}

class FantasticBook extends Book {
    constructor(releaseDate, pagesCount, type, author){
        super(releaseDate, pagesCount, type, author)
        this.type = "fantastic";
    }
} 

class DetectiveBook extends Book {
    constructor(releaseDate, pagesCount, type, author){
        super(releaseDate, pagesCount, type, author)
        this.type = "detective";
    }
}

class Library {
    constructor(name) {
      this.name = name;
      this.books = [];
    }
    addBook(book) {
      if (book.state > 30) {
        this.books.push(book);
      }
    }
  
    findBookBy(type, value) {
      let findBook = this.books.find(book => book[type] === value);
      if (typeof findBook === 'object') {
        return findBook;
      } else {
        return null;
      }
    }
  
    giveBookByName(bookName) {
      let giveBookName = this.books.find(book => book.name === bookName);
      if (typeof giveBookName === 'object') {
        let index = this.books.indexOf(giveBookName);
        this.books.splice(index, 1);
        return giveBookName;
      } else {
        return null;
      }
    }
  }


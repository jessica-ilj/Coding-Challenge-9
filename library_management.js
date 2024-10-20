//create a book class
class Book {
    constructor(title, author, ISBN) {
      this.title = title;
      this.author = author;
      this.ISBN = ISBN;
      this._isAvailable = true; // Default availability is true
    }
  
    getDetails() {
      return `Title: ${this.title}, Author: ${this.author}, ISBN: ${this.ISBN}`;
    }
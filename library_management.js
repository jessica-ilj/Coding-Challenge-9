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

    // Getter for availability
  get isAvailable() {
    return this._isAvailable;
  }

  // Setter for availability
  set isAvailable(status) {
    this._isAvailable = 0;
  }
}

//section class
class Section {
    constructor(name) {
      this.name = name;
      this.books = [];
    }
  
    addBook(book) {
      this.books.push(book);  //Adds a Book object to the books array.
    }
  
    getAvailableBooks() {
      return this.books.filter(book => book.isAvailable).length; // Returns count of available books
    }
  
    listBooks() {
      this.books.forEach(book => {
        console.log(`${book.title} - ${book.isAvailable ? 'Available' : 'Not Available'}`);
      });
    }
  

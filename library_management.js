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
  

//patron class
class Patron {
    constructor(name) {
      this.name = name;
      this.borrowedBooks = [];
    }
  
    borrowBook(book) {
      if (book.isAvailable) {
        book.isAvailable = false; // Update the book's availability status
        this.borrowedBooks.push(book);
        console.log(`${this.name} borrowed "${book.title}".`);
      } else {
        console.log(`"${book.title}" is not available.`);
      }
    }
  
    returnBook(book) {
      const index = this.borrowedBooks.indexOf(book);
      if (index !== -1) {
        book.isAvailable = true; // Make the book available again
        this.borrowedBooks.splice(index, 1);
        console.log(`${this.name} returned "${book.title}".`);
      } else {
        console.log(`${this.name} does not have "${book.title}".`);
      }
    }
  }

  //Vippatron class (inherits from patron)
class VIPPatron extends Patron {
    constructor(name) {
      super(name);
      this.priority = true; // VIP patrons have priority
    }
  
    // Override borrowBook method
    borrowBook(book) {
      if (book.isAvailable) {
        super.borrowBook(book); // Use the parent class method
      } else {
        console.log(`${this.name} has VIP priority but "${book.title}" is not available.`);
      }
    }
  }
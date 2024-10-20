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
    calculateTotalBooksAvailable() {
        return this.getAvailableBooks(); // Reuse the method to calculate available books
      }
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


  //create and manage sections and patrons
// Create sections
const fiction = new Section("Fiction");
const science = new Section("Science");

// Create books
const book1 = new Book("1984", "George Orwell", "1234567890");
const book2 = new Book("Brave New World", "Aldous Huxley", "0987654321");
const book3 = new Book("The Selfish Gene", "Richard Dawkins", "1122334455");

// Add books to sections
fiction.addBook(book1);
fiction.addBook(book2);
science.addBook(book3);

// Create patrons
const regularPatron = new Patron("John Doe");
const vipPatron = new VIPPatron("Jane Smith");

// Regular patron tries to borrow a book
regularPatron.borrowBook(book1); // John Doe borrows 1984

// VIP patron tries to borrow a book (has priority)
vipPatron.borrowBook(book1); // Jane Smith tries to borrow 1984 but it's not available

// Return the book
regularPatron.returnBook(book1); // John Doe returns 1984

// VIP patron tries to borrow again
vipPatron.borrowBook(book1); // Jane Smith borrows 1984

// List books and their availability
fiction.listBooks();
science.listBooks();

// Calculate total available books in each section
console.log(`Total available books in Fiction: ${fiction.calculateTotalBooksAvailable()}`);
console.log(`Total available books in Science: ${science.calculateTotalBooksAvailable()}`);

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
    this._isAvailable = status;
  }
}


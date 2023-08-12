// -  All of your book objects are going to be stored in a simple array,
//    so add a function to the script (not the constructor) that:
//        - can take user’s input
//        - and store the new book objects into an array.

// "The Hobbit by J.R.R. Tolkien, 295 pages, not read yet"

let myLibrary = [];

function Book(title, author, numOfPages, readStatus) {
    this.title = title
    this.author = author
    this.numOfPages = numOfPages
    this.readStatus = readStatus
    this.info = function() {
      return `${title} by ${author}, ${numOfPages}, ${readStatus}`
    }
}

function addBookToLibrary() {
    bookTitle = prompt("Book Title");
    bookAuthor = prompt("Book Author");
    bookPages = prompt("Number of Book Pages");
    bookReadStatus = prompt("Have you read this book yet? yes/no");

    const book = new Book(bookTitle, bookAuthor, bookPages, bookReadStatus);
    console.log(book);
}
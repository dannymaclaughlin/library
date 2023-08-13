// -  All of your book objects are going to be stored in a simple array,
//    so add a function to the script (not the constructor) that:
//        [x] can take user’s input and
//        [x] store the new book objects into an array.

// book.info should be written out as:
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
    title = prompt("Book Title");
    author = prompt("Book Author");
    numOfPages = prompt("Number of Book Pages");
    readStatus = prompt("Have you read this book yet? yes/no");

    const book = new Book(title, author, numOfPages, readStatus);
    console.log(book);
    myLibrary.push(book);
}

function displayArray() {
    let i = 0;

    while (i < myLibrary.length) {
        console.log(myLibrary[i]);
        i++;
    }
}
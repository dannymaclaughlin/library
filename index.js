// query selectors
const addNewBookButton = document.querySelector('[data-new-book-button]');

// declared empty array
let myLibrary = [];

// built the book constructor
function Book(title, author, numOfPages, readStatus) {
    this.title = title
    this.author = author
    this.numOfPages = numOfPages
    this.readStatus = readStatus
    this.info = function() {
      return `${title} by ${author}, ${numOfPages}, ${readStatus}`
    }
}

// built function that will allow for user input of the book information
// created "book" variable that calls on the Book constructor to turn the user inputted info into a book object
// after the book object is created, it is pushed to the myLibrary array
// finally this function calls on the displayArray() function which will iterate through the myLibrary array and console.log each item(book) in the array
function addBookToLibrary() {
    title = prompt("Book Title");
    author = prompt("Book Author");
    numOfPages = prompt("Number of Book Pages");
    readStatus = prompt("Have you read this book yet? yes/no");

    const book = new Book(title, author, numOfPages, readStatus);
    // console.log(book);
    myLibrary.push(book);
    displayArray();
}

// this function will iterate through the myLibrary array and console.log each array item(book)
function displayArray() {
    let i = 0;

    while (i < myLibrary.length) {
        console.log(myLibrary[i]);
        i++;
    }
}

// added an event listener to the "Add New Book" button that will listen for a click
// once a click on this button is registered, it will run the addBookToLibrary() function
addNewBookButton.addEventListener('click', () => {
    addBookToLibrary();
})

// code ran upon page load
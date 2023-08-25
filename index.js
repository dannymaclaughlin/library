// query selectors
// const addNewBookButton = document.querySelector('[data-new-book-button]');
// const bookPlaceHolder = document.querySelector('[data-book-place-holder]'); 

// build  the book constructor

// Book.prototype.info = function() {
//     return `Title of book: ${this.title}<br>
//     Author: ${this.author}<br>
//     Number of pages: ${this.numOfPages}<br>
//     Have you read this book? ${this.readStatus}`
// };

// built function that will allow for user input of the book information
// created "book" variable that calls on the Book constructor to turn the user inputted info into a book object
// after the book object is created, it is pushed to the myLibrary array
// finally this function calls on the displayArray() function which will iterate through the myLibrary array and console.log each item(book) in the array
// function addBookToLibrary() {
//     title = prompt("Book Title");
//     author = prompt("Book Author");
//     numOfPages = prompt("Number of Book Pages");
//     readStatus = prompt("Have you read this book yet? yes/no");
    
//     const book = new Book(title, author, numOfPages, readStatus);
//     myLibrary.push(book);
    
//     displayArray();
// }

// // this function will iterate through the myLibrary array and console.log each array item(book)
// function displayArray() {
//     bookPlaceHolder.innerHTML = ''
    
//     for (i = 0; i < myLibrary.length; i++) {
//         const bookInfo = myLibrary[i].info();
        
//         // for every book object in the mylibrary array, it will loop and create a new div
//         const bookElement = document.createElement('div');
        
//         // styling for bookElement divs:
//         bookElement.style.padding = '10px';
        
//         // adds a class of 'book-element' to those newly created divs
//         bookElement.classList.add('book-element');
        
//         // changes the innerHTML of those divs to the bookInfo() value
//         bookElement.innerHTML = bookInfo;
        
//         // appends bookElement to bookPlaceHolder
//         bookPlaceHolder.appendChild(bookElement);
//     }
// }

// // added an event listener to the "Add New Book" button that will listen for a click
// // once a click on this button is registered, it will run the addBookToLibrary() function
// addNewBookButton.addEventListener('click', () => {
//     addBookToLibrary();
// })

// code ran upon page load

//////////////////////////////////////////

// query selectors
const addNewBookButton = document.querySelector('[data-new-book-button]');
const bookPlaceHolder = document.querySelector('[data-book-place-holder]');
// get elements
const showFormDialog = document.getElementById('formDialog');
const bookTitleInput = document.getElementById('bookTitleValue');
const bookAuthorInput = document.getElementById('bookAuthorValue');
const numOfPagesInput = document.getElementById('numOfPagesValue');
const readStatusInput = document.getElementById('readStatusValue');

// make an array 
let myLibrary = [];

// create a book object constructor
function Book(title, author, numOfPages, readStatus) {
    this.title = title;
    this.author = author;
    this.numOfPages = numOfPages;
    this.readStatus = readStatus;
};

// book prototype methods and properties
Book.prototype.info = function() {
    return `Title of book: ${this.title}<br>
    Author: ${this.author}<br>
    Number of pages: ${this.numOfPages}<br>
    Have you read this book? ${this.readStatus}`
};

// make a function 
//     take in user input
//     store new book objects in the array

// make a function 
//     loop through the array
//         display each book object on the page

// add a button "new book"
//     bring up a form to allow user to input information for
//         book title
//         book author
//         number of pages
//         read status 
addNewBookButton.addEventListener('click', () => {
    showFormDialog.showModal();
})

showFormDialog.addEventListener('submit', (event) => {
    event.preventDefault();

    title = bookTitleInput.value;
    author = bookAuthorInput.value;
    numOfPages = numOfPagesInput.value;
    readStatus = readStatusInput.value;

    const book = new Book(title, author, numOfPages, readStatus);
    myLibrary.push(book);

    showFormDialog.close();
})

// add a button (to each book's display)
//     remove book from library(array)

// add a button (to each book's display)
//     create a function 
//         on the book prototype instance
//             toggle read status
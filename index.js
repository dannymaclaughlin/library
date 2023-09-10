// make an array
let myLibrary = [];

// create a book object constructor
function Book(title, author, numOfPages, readStatus) {
    this.title = title;
    this.author = author;
    this.numOfPages = numOfPages;
    this.readStatus = readStatus;
};

// make a function 
//     takes the user input and stores new book objects in the array
function addBookToLibrary(title, author, numOfPages, readStatus) {
    const newBook = new Book(title, author, numOfPages, readStatus);
    myLibrary.push(newBook);
}

// make a function 
//     loop through the array
//         display each book object on the page
function displayBook() {
    // grabs the [data-book-placeholder] element from the HTML file and assigns it to...
    // ...the variable "bookPlaceholder".
    let bookPlaceholder = document.querySelector('[data-book-placeholder]');
    bookPlaceholder.innerHTML = '';
    // bookPlaceholder styling
    bookPlaceholder.style.display = "grid";
    bookPlaceholder.style.gridTemplateColumns = "1fr 1fr 1fr 1fr";
    bookPlaceholder.style.height = "fit-content";
    bookPlaceholder.style.border = "3px solid pink";
    
    for (let i = 0; i < myLibrary.length; i++) {
        const book = myLibrary[i];
        const bookElement = document.createElement('div');
        // bookElement styling
        bookElement.style.border = "3px solid black";
        bookElement.style.padding = "5px";
        bookElement.style.width = "fit-content";

        const titleElement = document.createElement('h3');
        titleElement.innerText = `Title: ${book.title}`;
        bookElement.appendChild(titleElement);

        const authorElement = document.createElement('p');
        authorElement.innerText = `Author: ${book.author}`;
        bookElement.appendChild(authorElement);
        
        const pagesElement = document.createElement('p');
        pagesElement.innerText = `pages: ${book["number of pages"]}`;
        bookElement.appendChild(pagesElement);

        const readElement = document.createElement('p');
        readElement.innerText = `read: ${book["read status"]}`;
        bookElement.appendChild(readElement);

        bookPlaceholder.appendChild(bookElement);
    }
}

// add a "new book" button
//     bring up a form to allow user to input information for
//         book title
//         book author
//         number of pages
//         read status
function addNewBook() {
    event.preventDefault();

    let title = document.getElementById('bookTitleValue').value;
    let author = document.getElementById('bookAuthorValue').value;
    let numOfPages = document.getElementById('numOfPagesValue').value;
    let readValue = document.querySelector('input[name="readStatus"]:checked').value;
    addBookToLibrary(title, author, numOfPages, readValue);
    console.log(myLibrary);
}


let newBookButton = document.querySelector('[data-new-book-button]');

newBookButton.addEventListener('click', () => {
    let modal = document.querySelector('[data-modal]');
    modal.showModal();

    let submitForm = document.querySelector('[data-book-form]');
    submitForm.addEventListener('submit', addNewBook);
});

// add a button (to each book's display)
//     remove book from library(array)

// add a button (to each book's display)
//     create a function 
//         on the book prototype instance
//             toggle read status
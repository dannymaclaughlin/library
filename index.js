// make an array
let myLibrary = [
    {
        "title": "potatoes vol. 1",
        "author": "steve",
        "number of pages": 1,
        "read status": "yes",
    },
    {
        "title": "potatoes vol. 2",
        "author": "steve",
        "number of pages": 2,
        "read status": "no",
    },
    {
        "title": "potatoes vol. 2",
        "author": "steve",
        "number of pages": 2,
        "read status": "no",
    },
    {
        "title": "potatoes vol. 2",
        "author": "steve",
        "number of pages": 2,
        "read status": "no",
    },
    {
        "title": "potatoes vol. 2",
        "author": "steve",
        "number of pages": 2,
        "read status": "no",
    },
];

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
    let bookPlaceholder = document.querySelector('[data-book-placeholder]');
    bookPlaceholder.innerHTML = '';
    bookPlaceholder.style.display = "grid";
    bookPlaceholder.style.gridTemplateColumns = "1fr 1fr 1fr 1fr";
    bookPlaceholder.style.height = "fit-content";
    
    for (let i = 0; i < myLibrary.length; i++) {
        const book = myLibrary[i];
        const bookElement = document.createElement('div');
        // border toggle for bookElement
        bookElement.style.border = "1px solid black";
        bookElement.style.padding = "5px";
        bookElement.style.width = "fit-content";

        const titleElement = document.createElement('h3');
        titleElement.innerText = `Title: ${book.title}`;
        bookElement.appendChild(titleElement);

        const authorElement = document.createElement('p');
        authorElement.innerText = `Author: ${book.author}`;
        bookElement.appendChild(authorElement);
        
        const pagesElement = document.createElement('p');
        pagesElement.innerText = `pages: ${book.numOfPages}`;
        bookElement.appendChild(pagesElement);

        const readElement = document.createElement('p');
        readElement.innerText = `read: ${book.readStatus}`;
        bookElement.appendChild(readElement);

        bookPlaceholder.appendChild(bookElement);
    }
}

// add a button "new book"
//     bring up a form to allow user to input information for
//         book title
//         book author
//         number of pages
//         read status 

// add a button (to each book's display)
//     remove book from library(array)

// add a button (to each book's display)
//     create a function 
//         on the book prototype instance
//             toggle read status
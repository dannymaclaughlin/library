// make an array
let myLibrary = [
    {
        "title": "potatoes vol. 1",
        "author": "steve",
        "number of pages": 1,
        "read status": "yes",
    }
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
    for (let i = 0; i < myLibrary.length; i++) {
        console.log(myLibrary[i]);
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
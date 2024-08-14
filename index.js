const LibraryData = (function () {
    // make an array
    let myLibrary = [];

    class Book {
        constructor(title, author, numOfPages, readStatus) {
            this.title = title;
            this.author = author;
            this.numOfPages = numOfPages;
            this.readStatus = readStatus;
        };

        info() {
            return `Title of book: ${title}<br>
                    Author: ${author}<br>
                    Number of pages: ${numOfPages}<br>
                    Have you read this book? ${readStatus}<br>`
        };
    };

    return { myLibrary , Book };
})();

const ManageLibrary = (function () {
    // make a function 
    //     takes the user input and stores new book objects in the array
    function addBookToLibrary(title, author, numOfPages, readStatus) {
        let newBook = new LibraryData.Book(title, author, numOfPages, readStatus);
        LibraryData.myLibrary.push(newBook);
    };

    return { addBookToLibrary }
})();

const DisplayLogic = (function () {
    // make a function 
    //     loop through the array
    //         display each book object on the page
    function displayBook() {
        // grabs the [data-book-placeholder] element from the HTML file and assigns it to...
        // ...the variable "bookPlaceholder".
        let bookPlaceholder = document.querySelector('[data-book-placeholder]');
        bookPlaceholder.innerHTML = '';
        // bookPlaceholder stylxing
        bookPlaceholder.style.display = "grid";
        bookPlaceholder.style.gridTemplateColumns = "1fr 1fr 1fr 1fr";
        bookPlaceholder.style.height = "fit-content";
        bookPlaceholder.style.gap = "5px";
        // bookPlaceholder.style.border = "3px solid pink";
        
        for (let i = 0; i < LibraryData.myLibrary.length; i++) {
            let book = LibraryData.myLibrary[i];
            let bookElement = document.createElement('div');
            
            // bookElement styling
            // bookElement.style.border = "3px solid black";
            bookElement.style.padding = "5px";
            bookElement.style.height = "fit-content";
            bookElement.style.backgroundColor = "white";
            bookElement.style.borderRadius = ".25rem";
            bookElement.style.padding = ".5rem";

            let titleElement = document.createElement('h3');
            titleElement.innerText = `Title: ${book.title}`;
            bookElement.appendChild(titleElement);

            let authorElement = document.createElement('p');
            authorElement.innerText = `Author: ${book.author}`;
            bookElement.appendChild(authorElement);
            
            let pagesElement = document.createElement('p');
            pagesElement.innerText = `pages: ${book["numOfPages"]}`;
            bookElement.appendChild(pagesElement);

            let readElement = document.createElement('p');
            readElement.innerText = `read: ${book["readStatus"]}`;
            bookElement.appendChild(readElement);


            let removeBook = document.createElement('button');
            removeBook.innerText = 'Remove book';
            removeBook.classList.add('removeBook');
            removeBook.addEventListener('click', () => {
                bookElement.parentNode.removeChild(bookElement);
            })
            bookElement.appendChild(removeBook);

            let changeReadStatus = document.createElement('button');
            changeReadStatus.innerText = 'Mark as read';
            changeReadStatus.addEventListener('click', () => {
                if (readElement.innerText.toLowerCase() === "no" || "read: no") {
                    readElement.innerText = "read: yes";
                } else if (readElement.innerText === "read: yes") {
                    readElement.innerText = "read: no";
                }
            });
            bookElement.appendChild(changeReadStatus);
            

            bookPlaceholder.appendChild(bookElement);
        }
    }

    return { displayBook }
})();

const EventListeners = (function () {
    // add a "new book" button
    //     bring up a form to allow user to input information for
    //         book title
    //         book author
    //         number of pages
    //         read status
    function addNewBook(e) {
        e.preventDefault();

        let title = document.getElementById('bookTitleValue').value;
        let author = document.getElementById('bookAuthorValue').value;
        let numOfPages = document.getElementById('numOfPagesValue').value;
        let readValue = document.querySelector('input[name="readStatus"]:checked').value;

        ManageLibrary.addBookToLibrary(title, author, numOfPages, readValue);
        
        console.log(LibraryData.myLibrary);
        document.querySelector('[data-book-form]').reset();
        DisplayLogic.displayBook();
        let modal = document.querySelector('[data-modal]')
        modal.close();
    };

    let newBookButton = document.querySelector('[data-new-book-button]');

    newBookButton.addEventListener('click', () => {
        let modal = document.querySelector('[data-modal]');
        modal.showModal();

        let submitForm = document.querySelector('[data-book-form]');
        submitForm.addEventListener('submit', addNewBook);

    });
})();


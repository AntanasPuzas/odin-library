let myLibrary = {};
const nameInput = document.querySelector("#input-title");
const titleInput = document.querySelector("#input-author");
const pagesInput = document.querySelector("#input-pages");
const readInput = document.querySelector("#input-read");
const submitInput = document.querySelector("#submit");
const bookContainer = document.querySelector(".book-container")
const addBookButton = document.querySelector("#add-book");
const form = document.querySelector(".book-form");

function Book(title, author, pages, read) {
    this.title = title,
        this.author = author,
        this.pages = pages,
        this.read = read
    this.index = "book-" + (Object.keys(myLibrary).length + 1);
}

Book.prototype.info = () => title + " by " + author + ", " + pages + ", " +
    (read ? "have read" : "not read yet");

function addBookToLibrary() {
    let book = new Book(nameInput.value, titleInput.value,
        pagesInput.value, readInput.checked);
    myLibrary[book.index] = book;
    return book;
}

submitInput.addEventListener("click", () => {
    generateBookCard(addBookToLibrary());
    form.classList.remove("form-show");
    form.classList.remove("card");
    addBookButton.style.display = "block";
    console.log(myLibrary);
});

// TEMP
for (let i = 0; i < 3; i++) {
    let book = new Book("title-" + i, "author-" + i,
        Math.floor(Math.random() * (1000 - 100) + 100), true)
    myLibrary[book.index] = book;
}

function displayBooks() {
    Object.keys(myLibrary).forEach(value => {
        generateBookCard(myLibrary[value]);
    })
}

function generateBookCard(book) {
    let bookInfo = {
        "Title: ": book.title,
        "Author: ": book.author,
        "Pages: ": book.pages,
        "Read: ": book.read,
        "index": book.index
    };
    const card = document.createElement("div")
    card.classList.add("card");
    card.id = bookInfo.index;
    for (const key in bookInfo) {
        const row = document.createElement("div");
        row.classList.add("card-row");
        const property = document.createElement("p");
        property.textContent = key;
        const value = document.createElement("p");
        value.textContent = bookInfo[key];
        row.appendChild(property);
        row.appendChild(value);
        card.appendChild(row);
    }
    const removeBook = document.createElement("button");
    removeBook.setAttribute("type", "button");
    removeBook.textContent = "Remove Book";
    removeBook.addEventListener("click", () => { 
        document.querySelector("#" + book.index).remove();
        delete myLibrary[book.index];
    });
    card.appendChild(removeBook);
    addBookButton.before(card);
}

displayBooks();

addBookButton.addEventListener("click", () => {
    form.classList.add("form-show");
    form.classList.add("card");
    addBookButton.style.display = "none";
});
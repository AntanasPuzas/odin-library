let myLibrary = [];
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
}

Book.prototype.info = () => title + " by " + author + ", " + pages + ", " +
    (read ? "have read" : "not read yet");

function addBookToLibrary() {
    let book = new Book(nameInput.value, titleInput.value,
        pagesInput.value, readInput.checked);
    myLibrary.push(book);
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
    myLibrary.push(new Book("title-" + i, "author-" + i,
        Math.floor(Math.random() * (1000 - 100) + 100), true));
}

function displayBooks() {
    myLibrary.forEach(value => {
        generateBookCard(value);
    })
}

function generateBookCard(book) {
    let bookInfo = {
        "Title: ": book.title,
        "Author: ": book.author,
        "Pages: ": book.pages,
        "Read: ": book.read
    };
    const card = document.createElement("div")
    card.classList.add("card");
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
    removeBook.addEventListener("click", () => { }); // Implement this
    card.appendChild(removeBook);
    addBookButton.before(card);
}

displayBooks();

addBookButton.addEventListener("click", () => {
    form.classList.add("form-show");
    form.classList.add("card");
    addBookButton.style.display = "none";
});
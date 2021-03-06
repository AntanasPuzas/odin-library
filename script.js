const nameInput = document.querySelector("#input-title");
const titleInput = document.querySelector("#input-author");
const pagesInput = document.querySelector("#input-pages");
const readInput = document.querySelector("#input-read");
const submitInput = document.querySelector("#submit");
const bookContainer = document.querySelector(".book-container")
const addBookButton = document.querySelector("#add-book");
const form = document.querySelector(".book-form");

let myLibrary = {};

class Book {
    constructor(title, author, pages, read) {
        this.title = title;
        this.author = author;
        this.pages = pages;
        this.read = read;
        this.index = "book-" + (Object.keys(myLibrary).length === 0
            ? 1
            : parseFloat(Object.keys(myLibrary)[Object.keys(myLibrary).length - 1]
                .split("-")[1]) + 1);
    }

    toggleRead = () => this.read = !this.read;
}

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
    };
    const card = document.createElement("div")
    card.classList.add("card");
    card.id = book.index;
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
    const row = document.createElement("div");
    row.classList.add("card-row");
    const property = document.createElement("label");
    property.htmlFor = "read-" + book.index.split("-")[1];
    property.textContent = "Mark as read:";
    const checkBoxContainer = document.createElement("div");
    checkBoxContainer.classList.add("toggle-pill-bw");
    const checkbox = document.createElement("input");
    checkbox.type = "checkbox";
    checkbox.id = "read-" + book.index.split("-")[1];
    checkbox.name = "read";
    if (book.read) {
        checkbox.checked = true;
    }
    checkbox.addEventListener("change", function () { myLibrary[book.index].toggleRead(); });
    const checkboxLabel = document.createElement("label");
    checkboxLabel.htmlFor = "read-" + book.index.split("-")[1];
    checkBoxContainer.appendChild(checkbox);
    checkBoxContainer.appendChild(checkboxLabel);
    row.appendChild(property);
    row.appendChild(checkBoxContainer);
    card.appendChild(row);
    const removeBook = document.createElement("button");
    removeBook.setAttribute("type", "button");
    removeBook.textContent = "Remove Book";
    removeBook.addEventListener("click", () => {
        document.querySelector("#" + book.index).remove();
        delete myLibrary[book.index];
        console.log(myLibrary);
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
let myLibrary = [];
const nameInput = document.querySelector("#input-title");
const titleInput = document.querySelector("#input-author");
const pagesInput = document.querySelector("#input-pages");
const readInput = document.querySelector("#input-read");
const submitInput = document.querySelector("#submit");
const bookContainer = document.querySelector(".book-container")

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
});

// TEMP
for (let i = 0; i < 3; i++) {
    myLibrary.push(new Book("title-" + i, "author-" + i, Math.floor(Math.random() * (1000 - 100) + 100), true));
}

function displayBooks() {
    myLibrary.forEach(value => {
        generateBookCard(value);
    })
}

function generateBookCard(book) {
    const card = document.createElement("div")
    card.classList.add("card");
    const title = document.createElement("p")
    title.textContent = book.title;
    const author = document.createElement("p")
    author.textContent = book.author;
    const pages = document.createElement("p")
    pages.textContent = book.pages;
    const read = document.createElement("p")
    read.textContent = book.read;
    card.appendChild(title);
    card.appendChild(author);
    card.appendChild(pages);
    card.appendChild(read);
    bookContainer.appendChild(card);
}

displayBooks();
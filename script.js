let myLibrary = [];
let nameInput = document.querySelector("#book-title");
let titleInput = document.querySelector("#book-author");
let pagesInput = document.querySelector("#pages");
let readInput = document.querySelector("#read");
let submitInput = document.querySelector("#submit");

function Book(title, author, pages, read) {
    this.title = title,
        this.author = author,
        this.pages = pages,
        this.read = read
}

Book.prototype.info = () => title + " by " + author + ", " + pages + ", " +
(read ? "have read" : "not read yet");

function addBookToLibrary() {
    myLibrary.push(new Book(nameInput.value, titleInput.value,
        pagesInput.value, readInput.checked));
    console.log(myLibrary);
}

submitInput.addEventListener("click", () => {
    addBookToLibrary();
});

// TEMP
for (let i = 0; i < 3; i++) {
    myLibrary.push(new Book("title-" + i, "author-" + i, Math.floor(Math.random() * (1000 - 100) + 100), true));
}
console.log(myLibrary);
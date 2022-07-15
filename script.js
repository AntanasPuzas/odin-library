let myLibrary = [];

function Book(title, author, pages, read) {
    this.title = title,
        this.author = author,
        this.pages = pages,
        this.read = read,

        this.info = () => title + " by " + author + ", " + pages + ", " +
            (read ? "have read" : "not read yet")
}

function addBookToLibrary() {

}

let book = new Book("The Hobbit", "J.R.R Tolkien", 295, true);
console.log(book.info());
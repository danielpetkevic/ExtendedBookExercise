const myLibrary = [];

class Book {
  constructor(title, author, pages, read) {
    this.id = crypto.randomUUID();
    this.title = title;
    this.author = author;
    this.pages = pages;
    this.read = read;
  }
}

function addBookToLibrary(title, author, pages, read) {
  const book = new Book(title, author, pages, read);
  myLibrary.push(book);
}

addBookToLibrary("1984", "George Orwell", 328, true);
addBookToLibrary("The Hobbit", "J.R.R. Tolkien", 310, true);
addBookToLibrary("Dune", "Frank Herbert", 412, false);

function showData(){
    const tbody = document.getElementById("libraryBody");
    tbody.innerHTML = "";
    for(let i = 0; i < myLibrary.length; i++){
        const tr = document.createElement("tr");

        tr.innerHTML = `<td>${myLibrary[i].title}</td>
                        <td>${myLibrary[i].author}</td>
                        <td>${myLibrary[i].pages}</td>
                        <td class="readDiv">${myLibrary[i].read ? "Yes" : "No"}<button class="change" data-row="${i}">Change</button></td>
                        <td>${myLibrary[i].id}</td>
                        <td><i class="fa-solid fa-trash" data-row="${i}"></i></td>`

        tbody.appendChild(tr);
    }
}

showData();

const addBook = document.getElementById("addBook");
const refresh = document.getElementById("refresh");
const bookDialog = document.getElementById("bookDialog");
const title = document.getElementById("title");
const author = document.getElementById("author");
const pages = document.getElementById("pages");
const read = document.getElementById("read");
const confirmBtn = document.getElementById("confirmBtn");

addBook.addEventListener("click", () => {
    bookDialog.showModal();
});
confirmBtn.addEventListener("click", (e) => {
    e.preventDefault();
    addBookToLibrary(title.value, author.value, Number(pages.value), read.checked);
    showData();
    bookDialog.close();
});
const tbody = document.getElementById("libraryBody");

tbody.addEventListener("click", (e) => {
  const btn = e.target.closest(".fa-solid");
if (!btn) return;


  myLibrary.splice(btn.dataset.row, 1);
  showData();
});
tbody.addEventListener("click", (e) => {
    const changeBtn = e.target.closest(".change");
    if (!changeBtn) return;


    myLibrary[changeBtn.dataset.row].read = !myLibrary[changeBtn.dataset.row].read;
    showData();
});



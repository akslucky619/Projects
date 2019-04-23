class Book{
    constructor(title, author){
        this.title = title;
        this.author = author;
    }
}
class UI {
    addBookToList(book){
        const list = document.getElementById("book-list");
        const row = document.createElement("tr");
        row.innerHTML = 

        <td>${book.title}</td>
        <td>${book.author}</td>
    }
}
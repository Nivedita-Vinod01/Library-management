document.addEventListener("DOMContentLoaded", () => {
    const bookForm = document.getElementById("bookForm");
    const booksTableBody = document.getElementById("booksTableBody");

    let books = [];

    bookForm.addEventListener("submit", (e) => {
        e.preventDefault();
        const bookNumber = document.getElementById("bookNumber").value;
        const bookName = document.getElementById("bookName").value;
        const issuerName = document.getElementById("issuerName").value;

        const book = { bookNumber, bookName, issuerName };
        books.push(book);
        displayBooks();
        bookForm.reset();
    });

    function displayBooks() {
        booksTableBody.innerHTML = "";
        books.forEach((book, index) => {
            const row = document.createElement("tr");
            row.innerHTML = `
                <td>${book.bookNumber}</td>
                <td>${book.bookName}</td>
                <td>${book.issuerName}</td>
                <td class="action-buttons">
                    <button class="edit" onclick="editBook(${index})">Edit</button>
                    <button class="delete" onclick="deleteBook(${index})">Delete</button>
                </td>
            `;
            booksTableBody.appendChild(row);
        });
    }

    window.editBook = function(index) {
        const book = books[index];
        document.getElementById("bookNumber").value = book.bookNumber;
        document.getElementById("bookName").value = book.bookName;
        document.getElementById("issuerName").value = book.issuerName;
        books.splice(index, 1);
        displayBooks();
    };

    window.deleteBook = function(index) {
        books.splice(index, 1);
        displayBooks();
    };
});

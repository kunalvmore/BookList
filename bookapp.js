// Book Class: Represent a Book
class Book{
    constructor(title, author, isbn){
        this.title = title;
        this.author = author;
        this.isbn = isbn;
    }
}  

// UI Class: Handle UI Tasks
class UI{
    static displayBooks(){
        const StoreBooks = [
            {
            title: 'Head First Java',
            author: 'Kathy Sierra & Bert Bates',
            isbn: '3454664'
            },
            {
            title: 'The Art of SQL',
            author: 'Stephane Faroult',
            isbn: '45796'

            }
        ];

        const books = StoreBooks;

        books.forEach((book)=> UI.addBookToList(book));
    }
   
    static addBookToList(book){
        const list = document.querySelector('#book-list');

        const row = document.createElement('tr');

        row.innerHTML = `
            <td>${book.title}</td>
            <td>${book.author}</td>
            <td>${book.isbn}</td>
            <td><a href="#" class="btn btn-danger btn-sm delete">X</a></td>
        `;

        list.appendChild(row);
    }

    static deleteBook(el){
        if(el.classList.contains('delete')){
            el.parentElement.parentElement.remove();
        }
    }

    static showAlert(message, className){
        const div = document.createElement('div');
        div.className = `alert alert-${className}`;
        div.appendChild(document.createTextNode(message));
        const container = document.querySelector('.container');
        const form = document.querySelector('#book-form');
        container.insertBefore(div,form);

        // vanish in 3 sec
        setTimeout(() => document.querySelector('.alert').remove(),3000);
    }

    static clearFirlds(){
        document.querySelector('#title').value = '';
        document.querySelector('#author').value = '';
        document.querySelector('#isbn').value = '';
    }
}

// Store Class: Handles Storage

// Event: Display Book
document.addEventListener('DOMContentLoaded', UI.displayBooks);

// Event: Add a Book
document.querySelector('#book-form').addEventListener('submit', (e) => {

    //prevent actual submit
    e.preventDefault();

    //get form values
    const title = document.querySelector('#title').value;
    const author = document.querySelector('#author').value;
    const isbn = document.querySelector('#isbn').value;

    // validation
    if(title === '' || author === '' || isbn === ''){
        UI.showAlert('Please fill in all fields', 'danger');
    }else{

    //instatiate book
    const book = new Book(title, author, isbn);

    //add book to UI
    UI.addBookToList(book);

    // show success message
    UI.showAlert('Book Added', 'success');

    //clear fields
    UI.clearFirlds();
    }

   
});

// Event: Remove a Book
document.querySelector('#book-list').addEventListener('click', (e)=>
{
    UI.deleteBook(e.target);

    // show book remove message
    UI.showAlert('Book Removed', 'success');
})

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
        alert('Please fill in all fields');
    }else{

    //instatiate book
    const book = new Book(title, author, isbn);

    //add book to UI
    UI.addBookToList(book);

    //clear fields
    UI.clearFirlds();
    }

   
});

// Event: Remove a Book
document.querySelector('#book-list').addEventListener('click', (e)=>
{
    UI.deleteBook(e.target);
})

import './styles/app.css';

//import BookService from './services/BookService';
import UI from './UI';

document.addEventListener('DOMContentLoaded', () => {
    const ui = new UI();
    ui.renderBooks();
});

    document.getElementById('book-form')
    .addEventListener('submit', e => {
    const title = document.getElementById('title').value;
    const author = document.getElementById('author').value;
    const isbn = document.getElementById('isbn').value;
    const image = document.getElementById('image').files;

    const formData = new FormData();
    formData.append('image', image[0]);
    formData.append('title', title);
    formData.append('author', author);
    formData.append('isbn', isbn);
    
    const ui = new UI();
    ui.addANewBook(formData);
    ui.renderMessager('New Book Added', 'success', 3000);
    
    /*const bookService = new BookService()
    bookService.postBooks(formData)
        */
    e.preventDefault();
});

document.getElementById('books-cards')
  .addEventListener('click', e => {
        if(e.target.classList.contains('delete')) {
            const ui = new UI();
            ui.deleteBook(e.target.getAttribute('_id'));
            ui.renderMessager('Book Removed', 'danger', 2000);
        }
        e.preventDefault();
  });
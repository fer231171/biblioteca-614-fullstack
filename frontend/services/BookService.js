class BookService{


    constructor() {
        this.URI = '/api/books';
    }

    async getBooks() {
        fetch(this.URI)
        const response = await fetch(this.URI);
        const books = response.json();
        return books;
    }

    async postBooks(book) {
        const res = await fetch(this.URI, {
            method: 'POST',
            body: book
        });
        const data = await res.json();
        console.log(data)

    }

    async deleteBook(bookId) {
        const res = await fetch(`${this.URI}/${bookId}`, {
            headers: {
                'Content-Type': 'application/json'
            },
            method: 'DELETE'
        });
        const data = await res.json();
        console.log(data)
    }
}

export default BookService;
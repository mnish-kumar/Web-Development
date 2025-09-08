class Library{
    constructor(){
        this.books = [];
    }

    addBook(books){
        this.books.push(...books);
    }

    listAllBook(){
        this.books.forEach(function(book, idx){
            console.log(
                `${idx + 1} ) ${book.name} by ${book.author}`
            );
        })
    }
}


class Book{
    constructor(name , isbn, price, author){
        this.name = name;
        this.isbn = isbn;
        this.price = price;
        this.author = author;
        this.isReadStatus = false; // start me to book isReadStatus to false hi rahega
    }

    Info(){
        console.log(
        `${this.isReadStatus ? "✅" : "❌"} ${this.name} is written by ${this.author} and you have ${this.isReadStatus ? "already read this book" : "not read this book"} | Price: ₹${this.price} | ISBN: ${this.isbn}`
        );
    }

    changeReadStatus(){
        this.isReadStatus = !this.isReadStatus;
    }
}

var bhopalLibrary = new Library();

var book1 = new Book("Wealth is Life", "129832193h389", 120, "Harsh Sharma");
var book2 = new Book("Code with Logic", "981239812k238", 250, "Manish Kumar");
var book3 = new Book("The Epic Journey", "2348723lskdj23", 300, "Aarav Mehta");
var book4 = new Book("Future of AI", "skd9823jk23sd89", 180, "Neha Gupta");
var book5 = new Book("Think and Grow Rich", "xk2389sd89sdf", 350, "Ravi Singh");

bhopalLibrary.addBook([book1, book2, book3, book4, book5]);

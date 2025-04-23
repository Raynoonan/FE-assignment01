
class Books {
    constuctor(title) {
        this.title = title
        this.books = []
    }
    describe() {
        return `The title of this book is ${this.title}.`
    }


start() {
    while (true) {

        const selection = prompt(`1) for create title \n, 2) for view books \n, 3) for delete \n, and 4) for exit`)
        if(selection === "1") {
           this.createTitle()
        } else if (selection === "2") {
            this.viewBooks()
        } else if (selection === "3") {
            this.deleteBook()
        } else {
            alert("GoodBye!")
        }
    }
}


createTitle() {
    let title = prompt('Enter new title:')
    this.books.push(new Books(title))
}

viewBooks() {
    let index = prompt('Enter index of the book you want to view:')
    if(index > -1 && index < this.books.length) {
        this.selectedBook = this.books[index]
        let description = 'Book title:' + this.selectedBook.title + '\n'
    }
}

deleteBook() {
    let index = prompt('Enter the index of the title you would like to delete:')
    if(index > -1 && index < this.books.length) {
        this.books.splice(index, 1)
    }

}

}

let books = new Books()
books.start()
let libraryBooks = []

function book(name, year, author, read){
    this.name = name
    this.year = year
    this.author = author
    this.read = read
}

const addBooks = (name, year, author, read)=>{
    libraryBooks.push(new book(name, year, author, read))
}

addBooks('Gloria', '1000', 'Graynor', false)

console.log(libraryBooks)

const showBooks = ()=>{
    libraryBooks.forEach(element => {
        console.log(element)
    });
}

showBooks()
let libraryBooks = []

function book(title, author, read, pages){
    this.title = title
    this.author = author
    this.pages = pages
    this.read = read
}


const showBooks = ()=>{
    libraryBooks.forEach(element => {
        // SHOW THE BOOKS
    });
}

//Making UI functional

const FORM_TITLE = document.querySelector('#title').value
const FORM_AUTHOR = document.querySelector('#author').value
const FORM_PAGES = document.querySelector('#pages').value
const FORM_READ_STATUS = document.querySelector('#read').value
const SUBMIT_BUTTON = document.querySelector('#read')

const addBooks = ()=>{
    let title = FORM_TITLE
    let author = FORM_AUTHOR
    let read = FORM_READ_STATUS
    let pages = FORM_PAGES

    libraryBooks.push(new book(title, author, read, pages))
    console.log(libraryBooks)
}

SUBMIT_BUTTON.addEventListener('click', addBooks())
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

const FORM_TITLE = document.querySelector('#title')
const FORM_AUTHOR = document.querySelector('#author')
const FORM_PAGES = document.querySelector('#pages')
const FORM_READ_STATUS = document.querySelector('#read')
const SUBMIT_BUTTON = document.querySelector('#submit')

const addBooks = ()=>{
    let title = FORM_TITLE.value
    let author = FORM_AUTHOR.value
    let read = FORM_READ_STATUS.checked
    let pages = FORM_PAGES.value

    libraryBooks.push(new book(title, author, read, pages))
}

SUBMIT_BUTTON.addEventListener('click', ()=>{addBooks()})
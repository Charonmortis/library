let libraryBooks = []
const CONTAINER = document.querySelector('#container')

function book(title, author, read, pages){
    this.title = title
    this.author = author
    this.pages = pages
    this.read = read
}

//adding cards
const addCard = (book)=>{
    let card = document.createElement('div')
    card.className = book.read ? 'card read' : 'card notRead'
    
    //childs
    card.innerHTML = //delete Button
    `<svg width="20" height="20" viewBox="0 0 11 11" fill="none" xmlns="http://www.w3.org/2000/svg" class="deleteButton">
        <path 
            style="pointer-events:none"
            fill="currentColor"
            fill-rule="evenodd" 
            clip-rule="evenodd" 
            d="M9.90946 2.3456C10.3 1.95507 10.3 1.32191 9.90946 0.931382C9.51894 0.540858 8.88577 0.540858 8.49525 0.931382L5.42045 4.00618L2.34566 0.931382C1.95513 0.540858 1.32197 0.540858 0.931443 0.931382C0.540919 1.32191 0.540919 1.95507 0.931443 2.3456L4.00624 5.42039L0.931443 8.49519C0.540919 8.88571 0.540919 9.51888 0.931443 9.9094C1.32197 10.2999 1.95513 10.2999 2.34566 9.9094L5.42045 6.8346L8.49525 9.9094C8.88577 10.2999 9.51894 10.2999 9.90946 9.9094C10.3 9.51888 10.3 8.88571 9.90946 8.49519L6.83467 5.42039L9.90946 2.3456Z"
        />
    </svg>`

    let title = document.createElement('p')
    title.className = 'title'
    title.textContent = book.title
    card.append(title)
    
    let author = document.createElement('p')
    author.className = 'author'
    author.textContent = book.author
    card.append(author)
    
    let pages = document.createElement('p')
    pages.className = 'pages'
    pages.textContent = book.pages
    card.append(pages)
    
    let readStatus = document.createElement('input')
    readStatus.type = "button"
    readStatus.value = book.read ? 'read' : 'Not Read'
    card.append(readStatus)

    //showing the card to the UI
    CONTAINER.prepend(card)
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
    
    libraryBooks.unshift(new book(title, author, read, pages))
}

//updating array Index

const updateArrayIndex = ()=>{
    let UIBooks = Array.from(document.querySelectorAll('.card'))
    
    UIBooks.forEach(book => {
        book.dataset.book = UIBooks.indexOf(book)
    });
}
//Submit Button functions
SUBMIT_BUTTON.addEventListener('click', ()=>{
    addBooks()
    addCard(libraryBooks[0])
    updateArrayIndex()
    updateDeleteBtns()
    updateReadBtns()
})

//delete card

const updateDeleteBtns = ()=>{
    deleteBtn = Array.from(document.querySelectorAll('.deleteButton'))
    
    deleteBtn.forEach(btn => {
        btn.addEventListener('click', (e)=>{
            //without this it selects all of the other buttons and I don't know why        
            e.stopImmediatePropagation()
            
            currentCard = e.target.parentNode
            BookIndex = currentCard.dataset.book
            
            libraryBooks = libraryBooks.filter(book => (libraryBooks.indexOf(book) != BookIndex))
            currentCard.remove()
        })
    })
}

//Change read status

const updateReadBtns = ()=>{
    readBtns = Array.from(document.querySelectorAll('.card '))
    
    readBtns.forEach(btn => {
        btn.addEventListener('click', (e)=>{
            
            e.stopImmediatePropagation()

            currentCard = e.target.parentNode
            BookIndex = currentCard.dataset.book

            //Toggle Read Status
            libraryBooks[BookIndex].read = !libraryBooks[BookIndex].read

            //Show Read Status
            button = currentCard.querySelector('input')
            if (currentCard.className == 'card read') {
                
                currentCard.className = 'card notRead'
                button.value = 'Not Read'
                
            } else {
                
                currentCard.className = 'card read'
                button.value = 'Read'

            }
        })
    })
}
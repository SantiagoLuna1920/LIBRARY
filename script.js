

let book = [];

class Book {
    constructor(title, author, pages, id) {
        this._title=title;
        this._author=author;
        this._pages=pages;
        this._id=id;
    }
    newBook () {

        document.getElementById("container").innerHTML+=`<div class="son"><div>title: ${this._title}</div><div>author: ${this._author}</div><div>paginas leidas: ${this._pages}</div><div class="buttons" onclick="changePages(${this._id})">Edit pages</div><div class="buttons" onclick="cards(${this._id})">Delete library</div></div>`
    }
}

form.addEventListener("submit",(e)=> {
    e.preventDefault();
    const title = document.getElementById("title").value;
    const author = document.getElementById("author").value;
    const pages = document.getElementById("pages").value;
    const id=0;

    book.push(new Book (title, author, pages, id));

    document.getElementById("container").innerHTML="";
for (const boo in book) {
    book[boo]._id=boo
    book[boo].newBook();
}
});

function cards (id) {
    
    book.splice(id,1);
    document.getElementById("container").innerHTML="";
for (const boo in book) {
    book[boo]._id=boo
    book[boo].newBook();
}
console.log(book)
}


function changePages(id) {
    let page = parseInt(prompt("Ingrese sus paginas nuevas leidas"))
    book[id]._pages=page;
    document.getElementById("container").innerHTML="";
    for (const boo in book) {
        book[boo]._id=boo
        book[boo].newBook();
    }
    console.log(id)
}
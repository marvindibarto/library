//array to store book elements
const myLibrary = [];


//target for creating divs in DOM
const target = document.getElementById("overview-books");

//mock books
const tvp = new Book("Tribute von Panem", "Irgendwer", 2013);
const hp = new Book("Harry Pottinger", "JKR", 2002);
const igg = new Book("Im Grunde Gut", "Rutger Bregmann", 2018);

addBookToLibrary(tvp);
addBookToLibrary(hp);
addBookToLibrary(igg);

//loop to create one book class div in DOM
function refreshBooks(){
    target.innerHTML ="";
myLibrary.forEach((element) => {
    const book = document.createElement("div");
    book.className = "book"
    const title = document.createElement("h1");
    title.textContent = element.name;
    const author = document.createElement("p");
    author.textContent = element.author;
    const year = document.createElement("p");
    year.textContent = element.year;

    book.appendChild(title);
    book.appendChild(author);
    book.appendChild(year);
    target.appendChild(book);
});
}


// erstellen von einem div, das alle bücher drinnen hat mit grid und klasse "overview books"
//loopen durch den array
//erstellen eines divs für jedes buch mit klasse "book"
// function (buch objekt){
//     target.appendChild()
// }
// erstellen einer überschrift mit key "name"
//erstellen eines p mit namen des autors mit klasse "author"
//erstellen eines p mit datum mit klasse "date"


document.getElementById("bookForm").addEventListener("submit", function(event){
    event.preventDefault();

    const form = document.getElementById("bookForm");
    const name = document.getElementById("name");
    const author = document.getElementById("author");
    const year= document.getElementById("year");

    const alert = document.createElement("p");
    alert.className = "alert";
    
    if(name.value == ""){

        form.replaceChildren(form.firstElementChild);
        alert.textContent = "Please fill in a name";
        form.appendChild(alert);
    }
    else if(author.value ==""){
        form.replaceChildren(form.firstElementChild);
        alert.textContent = "Please fill in an author";
        form.appendChild(alert);
    }
    else if(year.value == ""){
        form.replaceChildren(form.firstElementChild);
        alert.textContent = "Please fill in a year";
        form.appendChild(alert);

    }
    else{
        form.replaceChildren(form.firstElementChild);
        const newBook = new Book(name.value,author.value,year.value);
        addBookToLibrary(newBook);
        refreshBooks();
        event.target.reset();
}
}
);

function Book (name, author, year){
    this.name = name;
    this.author = author;
    this.year = year;
}

function addBookToLibrary(obj){
    myLibrary.push(obj);
    refreshBooks();
}
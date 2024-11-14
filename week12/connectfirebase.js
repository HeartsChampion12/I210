import {app} from"./firebase.js"; 

import {getFirestore,
    collection, 
    getDocs,
    addDoc, 
} from "https://www.gstatic.com/firebasejs/11.0.1/firebase-firestore.js";

const booksListRef = document.querySelector("#booksList");

const db = getFirestore(app); 

async function getBooks() {
    const booksCollection = collection(db, "books");
    const booksDocs = await getDocs(booksCollection); 

    for (let i = 0; i < booksDocs.docs.length; i++) {
        const book = booksDocs.docs[i];
        console.log(book.id, book.data);
        
        const bookData = book.data(); 

        booksListRef.innerHTML += `<li>${bookData.title} (${bookData.yearPublished})</li>`
    }

    console.log(booksDocs)
}

async function addBook() {
    const bookName = prompt("Book Name:"); 

    const booksCollection = collection(db, "books"); 

    const yearPublished = prompt("Year Published:");

    await addDoc(booksCollection, {title: bookName, yearPublished: yearPublished}); 
    getBooks(); 
    
    console.log(bookName); 
}

document.querySelector("#addBookButton").onclick = addBook; 

getBooks(); 

console.log(db); 

import {app} from"./firebase.js"; 

import {getFirestore,
    collection, 
    getDocs,
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

getBooks(); 

console.log(db); 

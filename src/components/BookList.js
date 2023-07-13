import BookShow from "./BookShow";
import {useState} from "react";
import {useContext} from "react";
import BooksContext from "../context/books";
function BookList(){
    const {books}=useContext(BooksContext);
    const renderbook=books.map((book)=>{
        return <BookShow key={book.id} book={book} />
    })
    //console.log(books.title)
    return(<div className="book-list">{renderbook}
        </div>)
}
export default BookList
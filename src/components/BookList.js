import BookShow from "./BookShow";
import {useState} from "react";
import {useContext} from "react";
import BooksContext from "../context/books";
function BookList({books,onDelete,onEdit}){
   // const {count,incrementCount}=useContext(BooksContext);
    const renderedbook=books.map((book)=>{
        return <BookShow key={book.id} book={book} />
    })
    //console.log(books.title)
    return(<div className="book-list">{renderedbook}
        </div>)
}
export default BookList
import BookShow from "./BookShow";
import {useState} from "react";
function BookList({books,onDelete,onEdit}){
    const renderedbook=books.map((book)=>{
        return <BookShow key={book.id} book={book} onDelete={onDelete} onEdit={onEdit}/>
    })
    //console.log(books.title)
    return(<div className="book-list">{renderedbook}
        </div>)
}
export default BookList
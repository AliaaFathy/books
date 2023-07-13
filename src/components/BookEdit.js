import {useContext, useState} from "react";
import BookShow from "./BookShow";
import BookList from "./BookList";
import BooksContext from "../context/books";

function BookEdit({book,onEdit}){
    const{EditBookById}=useContext(BooksContext)
    const[newTitle,setNewTitle]=useState(book.title)
    const handleChange=(event)=>{
        setNewTitle(event.target.value)
    }
    const handleSubmit=(event)=>{
        event.preventDefault();
        EditBookById(book.id,newTitle)
        onEdit()
    }
    return(
        <form  className="book-edit" onSubmit={handleSubmit}>
        <label>Title</label>
           <input className="input" value={newTitle} onChange={handleChange}/>
            <button className="button is-primary" >Save</button>
        </form>
    )
}
export default BookEdit









import {useState} from "react";
import BookShow from "./BookShow";
import BookList from "./BookList";

function BookEdit({book,onEdit}){
    const[newTitle,setNewTitle]=useState(book.title)
    const handleChange=(event)=>{
        setNewTitle(event.target.value)
    }
    const handleSubmit=(event)=>{
        event.preventDefault();
        onEdit(book.id,newTitle)
        return <BookList/>
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









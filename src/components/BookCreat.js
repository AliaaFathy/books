import {useContext, useState} from "react";
import App from "../App";
import BooksContext from "../context/books";
function BookCreat(){
    const{createBook}=useContext(BooksContext);
    const[title,setTitle]=useState('')
    const handleChange=(event)=>{
        setTitle(event.target.value)
    }
    const handleSubmit=(event)=>{
        event.preventDefault();
        createBook(title)
        setTitle('')
    }
    return(<div className="book-create">
        <h3>Add a Book</h3>
        <form onSubmit={handleSubmit}>
            <label>title</label>
        <input className="input" value={title} onChange={handleChange}/>
        <button className="button">Submit</button>
        </form>
    </div>)
}
export default BookCreat
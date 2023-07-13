import {useContext, useState} from "react";
import BookEdit from "./BookEdit";
import BooksContext from "../context/books";

function BookShow({book}){
    const{DeleteBookByID}=useContext(BooksContext)
    const [showEdit,setShowEdit]=useState(false)

    const handleClick=()=>{
        DeleteBookByID(book.id);
}
    const handleEditClick=()=>{
        setShowEdit(!showEdit)
    }
    const handleSubmit=(id,newTitle)=>{
        setShowEdit(false)
    }
    let content=<h3>{book.title}</h3>
    if(showEdit){
        content=< BookEdit book={book} onEdit={handleSubmit} />
    }
    return(<div className="book-show">
        <img src={`https://picsum.photos/seed/${book.id}/300/200`} alt="books"/>
        {content}
        <div className="actions">
            <button className="edit" onClick={handleEditClick}>edit</button>
            <button className="delete" onClick={handleClick}>Delete</button>
        </div>
    </div>)
}
export default BookShow
import {useState} from "react";
import App from "../App";
function BookCreat({onSubmit}){
    const[title,setTitle]=useState('')
    const handleChange=(event)=>{
        setTitle(event.target.value)
    }
    const handleSubmit=(event)=>{
        event.preventDefault();
        onSubmit(title)
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
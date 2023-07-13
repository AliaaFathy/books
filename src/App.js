import BookCreat from "./components/BookCreat";
import searchBook from "./api";
import {useState, useEffect, useContext} from "react";
import BookList from "./components/BookList";
import BooksContext from "./context/books";
function App(){
    const {fetchBook}=useContext(BooksContext);
    useEffect(()=>{
        fetchBook();
    },[])

    return(
        <div className="app">
            <h1>Reading List</h1>
            <BookList ></BookList>
            <BookCreat/>
        </div>
    )
}
export default App;
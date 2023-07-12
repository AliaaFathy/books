import BookCreat from "./components/BookCreat";
import searchBook from "./api";
import {useState,useEffect} from "react";
import BookList from "./components/BookList";
import axios from "axios";
function App(){
    const[books,setBooks]= useState([])
    const  fetchBook=async ()=>{
        const response=await axios.get('http://localhost:3001/books')
        setBooks(response.data)
    }
    useEffect(()=>{
        fetchBook();
    },[])
    const DeleteBookByID=async (id)=>{  //ask here
        const response=await axios.delete(`http://localhost:3001/books/${id}`)
        const updatedBooklist=await axios.get('http://localhost:3001/books')

      /*  console.log(response)
        const newBook=books.filter((book)=>{
            return book.id!=id
        })*/
        setBooks(updatedBooklist.data)
    }
    const EditBookById=async (id,newTitle)=>{
        const  response= await axios.put(`http://localhost:3001/books/${id}`,{
            "title":newTitle
        })
        console.log(response.data)
        const updatedBook=books.map((book)=>{
            if(book.id===id){
                return {...book,...response.data}
            }
            return book
        })
        setBooks(updatedBook);
    }
    const createBook=async (title)=>{
      const response= await axios.post('http://localhost:3001/books',{
            title
        })
        console.log(response.data)
        const newBook=[...books,response.data]
        setBooks(newBook)
        console.log(books)
    }
    return(
        <div className="app">
            <h1>Reading List</h1>
            <BookList books={books} onDelete={DeleteBookByID} onEdit={EditBookById}></BookList>
            <BookCreat onSubmit={createBook}/>
        </div>
    )
}
export default App;
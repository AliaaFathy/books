import {createContext, useState} from "react";
import axios from "axios";

const BooksContext=createContext();
function Provider({children}){
    const[books,setBooks]= useState([])
    const  fetchBook=async ()=>{
        const response=await axios.get('http://localhost:3001/books')
        setBooks(response.data)
    }
    const DeleteBookByID=async (id)=>{
        const response=await axios.delete(`http://localhost:3001/books/${id}`)
        console.log(response)
        const newBook=books.filter((book)=>{
            return book.id!=id
        })
        setBooks(newBook)
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
    const valueToShare={
        books,
        createBook,
        EditBookById,
        DeleteBookByID,
        fetchBook


    }
    return<BooksContext.Provider value={valueToShare}>
        {children}
    </BooksContext.Provider>
}
export {Provider}
export default BooksContext
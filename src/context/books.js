import {createContext, useState} from "react";

const BooksContext=createContext();
function Provider({childern}){
    const[count,setCount]=useState(5)
    const valueToShare={
        count,
        incrementCount:()=>{
            setCount(count+1)
        }
    }
    return<BooksContext.Provider value={valueToShare}>
        {childern}
    </BooksContext.Provider>
}
export {Provider}
export default BooksContext
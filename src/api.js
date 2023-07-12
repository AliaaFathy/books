import axios from "axios";
const searchBook=async (value)=>{
const response=await axios.get("https://api.unsplash.com/search/photos",{
    headers:{
        Authorization:"Client-ID Y9JHf3sqgwIaI16MUbYmL13UvI2HuWNiEgwom8xXWf8"
    },
    params:{
        query:value
    }
})
    return response.data.results
}
export default searchBook
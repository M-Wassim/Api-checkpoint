import axios from 'axios'
import {React,useState,useEffect} from 'react'
import { Profile } from './Profile'

export const UserList = () => {

    const [list,setList]=useState([])
    
    
    

    useEffect(() => {
        axios
        .get("https://jsonplaceholder.typicode.com/users")
        .then((response)=>setList(response.data));
        
        
    }, [])
   

    
      

    return (
        <div style={{display:"flex",flexWrap:"wrap"}}>
           
            {/* <code>{JSON.stringify(list[0])}</code> */}
            {list.map((el,i)=><Profile el={el} key={i}/>)}
    
           
          
        </div>
    )
}

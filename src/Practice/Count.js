import React, {useState} from "react"

const Count=()=>{
   let [count,setCount] = useState(0)  

   return( 
       <div> 
       
        <h1> Lets counts </h1> 
        <h3> Value is {count} </h3>
       <button onClick={() => {setCount(count+1)} }> Increment</button>
       <button onClick={() => {setCount(count-1)} }> Decrement</button>
       <button onClick={() => {setCount(0)} }> Reset</button>
       
       </div>
   )
}
export default Count
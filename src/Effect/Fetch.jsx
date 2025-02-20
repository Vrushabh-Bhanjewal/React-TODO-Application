import { useEffect, useState } from "react";

export function Fetch(){
     const [data,setApi] = useState([])
     useEffect(()=>{
    fetch("https://jsonplaceholder.typicode.com/posts")
    .then((response)=> response.json())
    .then(json=>{setApi(json); console.log(json)})
    .catch(error=>console.log(error))
     },[])
     
    return(<>
    <div className="container">
        <ul>
            {data.map((curr)=> { return (<li key={curr.id}>{curr.title}</li> )})}
        </ul>

    </div>
    </>);
}
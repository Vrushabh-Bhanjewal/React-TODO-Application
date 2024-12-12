
import { useEffect, useState } from "react";

export function TodoDate(){
    const [timeDate,setTimeDate]= useState("");
    
    function handleTime(){
        const timezone = new Date();
        const date =timezone.toLocaleDateString();
        const time = timezone.toLocaleTimeString();
        setTimeDate(`${date} - ${time}`)   
    }
    useEffect(()=>{
        const i = setInterval(()=>{
            handleTime();
        },1000);
        return ()=>clearInterval(i);
    },[]);
    
    return(
        <h2>{timeDate}</h2>
    );
}
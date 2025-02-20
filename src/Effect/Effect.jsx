import { useEffect, useState } from "react";

export function Effect(){
    const [value,setValue] = useState(0);
    const [time,setTime] = useState();
    const box= {
        backgroundColor:"white",
        width:"500px",
        margin:"auto",
        padding:"20px 30px",
        marginTop:"50px"
    }
    useEffect(
        ()=>{
            setInterval(()=>{
                const t=new Date();
                setTime(t.toLocaleString());
            },1000)
        }
    ,[])

    return(<>
        <div style={box}>
            <h1>Counter</h1>
            <button onClick={()=>{setValue(value + 1)}}>Increment</button>
            <p>Count : {value}</p>
        </div>
        <div style={box}>
            <h1>Time</h1>
            <p>{time}</p>
        </div>
    </>);
}
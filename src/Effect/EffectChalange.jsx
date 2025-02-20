import { useEffect, useState } from "react";

export function EffectChallange(){
    const [count,setCount] = useState(0);
    const [text,setText] = useState("");
    const [subscribe,setSub] = useState(0);
    const box={
        backgroundColor:"white",
        width:"30%",
        margin:"auto",
        padding:"20px 30px",
        marginTop:"20px",
        minHeight:"100px"
    }
    useEffect(()=>{
        document.title =`count ${count}`
    },[count])

    useEffect(()=>{
       console.log(text) 
    },[text])

    useEffect(()=>{
        const time= setInterval(()=>{
            setSub((pre)=> pre+1)
        },1000)
        return ()=>clearInterval(time)
    },[])

    return (<>
    <div style={box}>
        <p>Count : {count}</p>
        <button onClick={()=>setCount(count+1)}>Increment</button>
    </div>
    <div style={box}>
        <p>Text : {text}</p>
        <input style={{width:"80%"}} type="text" onChange={(e)=>{
                return setText(e.target.value);
            }} name="data" id="" />
    </div>

    <div style={box}>
        <h1>{subscribe}</h1>
    </div>
    </>);
}
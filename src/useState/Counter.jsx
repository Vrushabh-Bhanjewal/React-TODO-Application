import { useState } from "react";

export function Counter(){
    const [count,setCount]= useState(0);
    const [val,setValue] = useState(0);
    function handleInc(){
        setCount(()=>count+val)
    }
    function handleDec(){
        if(count-val > 0){
        setCount(count-val)
        }else{
            handleRes()
        }
    }
    function handleRes(){
        setCount(0)
    }
    const box={
        backgroundColor:"white",
        color:"black",
        width:"500px",
        padding:"20px 20px",
        margin:"50px auto"
    }
    const but={padding:"5px 10px",
        margin:"15px 10px 5px 0"
    }
    return(<>
    <div style={box}>
        <div>
            <p>Counter = {count} </p>
            <input type="number" value={val} onChange={(e)=>setValue(Number(e.target.value))}/>
        </div>
        <div>
            <button onClick={handleInc} style={but}>Increment</button>
            <button onClick={handleDec} style={but} disabled={count==0 && true}>Decrement</button>
            <button onClick={handleRes} style={but} disabled={count==0 && true}>Reset</button>
        </div>
    </div>
    </>);
}

import { FaRegCheckCircle } from "react-icons/fa";
import { RiDeleteBinLine } from "react-icons/ri";
import style from'./todo.module.css';
import { useState,useEffect } from 'react';

export function Todo(){
    const [input,setinput]=useState("");
    const [value,setValue]= useState([]);
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
    
    function handleChange(e){
        setinput(e.target.value);
    }
    function handleClick(e){
        e.preventDefault();
        if(!input) return
        if( value.includes(input)) return
        setValue((pre)=>[...pre,input]);
        setinput("");
    }
        
    return(<>
    <div className={style.container}>
        <section>
            <header>
                <h1> TODO Appliation </h1>
                <h2>{timeDate}</h2>
            </header>
        </section>
        <section >
            <form className={style[`todo-add`]} onSubmit={handleClick}>
                <div>
                    <input className={style[`todo-input`]} type="text" onChange={handleChange} placeholder='Task' value={input}/>
                </div>
                <div>
                    <input className={style[`todo-button`]}  type="submit" />
                </div>
        </form>
        </section>
        <section>
            <ul>
                {
                    value.map((i,index)=>{ return(<li key={index}> <span>{i}</span> 
                    <button><FaRegCheckCircle /></button>
                    <button><RiDeleteBinLine /></button>
                    </li> ) }

                )}
            </ul>
        </section>
    </div>
    </>);
}
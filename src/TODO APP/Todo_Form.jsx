
import { useState } from 'react';
import style from './todo.module.css';
export function TodoForm({setForm}){
    const [input,setinput]=useState("");
    function handleChange(value){
        setinput({id:value, content:value, check:false});
    }
    function handleClick(e){ 
        e.preventDefault();
        setForm(input);
        setinput({id:"",content:"",checked:false});   
    }
    return(
        <>
        <form className={style[`todo-add`]} onSubmit={handleClick}>
                <div>
                    <input 
                    className={style[`todo-input`]} 
                    type="text" 
                    onChange={(e)=>handleChange(e.target.value)} 
                    placeholder='Task' 
                    value={input.content}
                    />
                </div>
                <div>
                    <input className={style[`todo-button`]}  type="submit" />
                </div>
        </form>
        </>
    );
}

import { useState } from 'react';
import style from './todo.module.css';
export function TodoForm({value,setValue}){
    const [input,setinput]=useState("");
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
    return(
        <>
        <form className={style[`todo-add`]} onSubmit={handleClick}>
                <div>
                    <input className={style[`todo-input`]} type="text" onChange={handleChange} placeholder='Task' value={input}/>
                </div>
                <div>
                    <input className={style[`todo-button`]}  type="submit" />
                </div>
        </form>
        </>
    );
}
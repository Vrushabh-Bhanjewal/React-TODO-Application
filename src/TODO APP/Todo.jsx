

import style from'./todo.module.css';
import { useState } from 'react';
import { TodoForm } from "./Todo_Form";
import { TodoDate } from "./TodoDate";
import { TodoList } from "./TodoList";

export function Todo(){
    
    const [value,setValue]= useState([]);
    function handleDeleteItem(val){
        setValue(value.filter((i)=>i !== val))
    }
    function handleClearData(){
        setValue([]);
    }
        
    return(<>
    <div className={style.container}>
        <section>
            <header>
                <h1> TODO APPLICATION </h1>
                <TodoDate />
            </header>
        </section>
        <section >
            <TodoForm value={value} setValue={setValue}/>
        </section>
        <section>
            <ul className={style.ulList}>
                {
                    value.map((i,index)=>{ return(<TodoList i={i} key={index} handleDeleteItem={handleDeleteItem}/> ) }
                )}
            </ul>
        </section>
        <section>
            <button onClick={handleClearData} id={style.clearBtn}>Clear Data</button>
        </section>
    </div>
    </>);
}
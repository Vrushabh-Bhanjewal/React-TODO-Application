

import style from'./todo.module.css';
import { useState } from 'react';
import { TodoForm } from "./Todo_Form";
import { TodoDate } from "./TodoDate";
import { TodoList } from "./TodoList";

export function Todo(){
    
    const [value,setValue]= useState([]);

    function handleDeleteItem(val){
        setValue(value.filter((data)=>data.content !== val))
    }
    function handleCheckItem(data){
        const update= value.map((cur)=>{
            if(data === cur.content ){
                return {...cur,check:!cur.check};
            }else{ 
                return {...cur};
            }
        })
        setValue(update);
    }
    function handleClearData(){
        setValue([]);
    }
    function handleFormSubmit(input){
        const {id,content,check} = input;
        if(!content) return;
        const add = value.find((cur)=> cur.content ===content);
        if (add) {return;}
        setValue((pre)=>[...pre,{ id,content,check}]);
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
            <TodoForm  
            setForm ={handleFormSubmit} />
        </section>
        <section>
            <ul className={style.ulList}>
                { 
                    value.map((data)=>{ return(
                    <TodoList 
                        data={data.content} 
                        key={data.id} 
                        check={data.check}
                        handleDeleteItem={handleDeleteItem}
                        handleCheckItem={handleCheckItem}
                    /> ) }
                )}
            </ul>
        </section>
        <section>
            <button onClick={handleClearData} id={style.clearBtn}>Clear Data</button>
        </section>
    </div>
    </>);
}
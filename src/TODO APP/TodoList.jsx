import { FaRegCheckCircle } from "react-icons/fa";
import { MdDeleteForever } from "react-icons/md";
import style from './todo.module.css';
export function TodoList({i,index,handleDeleteItem}){


    return(
        <li className={style.liList} key={index}> <span>{i}</span> 
        <button className={style.ibtn}><FaRegCheckCircle className={style.icons1}/></button>
        <button className={style.ibtn} onClick={()=>handleDeleteItem(i)}><MdDeleteForever className={style.icons2} /></button>
        </li>
    );
}
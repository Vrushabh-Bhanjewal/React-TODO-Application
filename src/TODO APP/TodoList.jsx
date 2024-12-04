import { FaRegCheckCircle } from "react-icons/fa";
import { MdDeleteForever } from "react-icons/md";
import style from './todo.module.css';
export function TodoList({data,check,handleCheckItem, handleDeleteItem}){
    return(
        <li className={style.liList}  > <span className={check ?style.check : style.notcheck} >{data}</span> 
        <span id="icon-bar">
        <button className={style.ibtn} onClick={()=>handleCheckItem(data)} >
            <FaRegCheckCircle className={style.icons1}/>
        </button>
        <button className={style.ibtn} onClick={()=>handleDeleteItem(data)}>
            <MdDeleteForever className={style.icons2} />
        </button>
        </span>
        </li>
    );
}
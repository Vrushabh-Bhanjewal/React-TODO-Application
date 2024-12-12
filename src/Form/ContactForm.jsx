import { useState } from 'react';
import style from './Form.module.css';
export function ContactForm(){
    const [user,setUser] = useState({
        name:"",
        pass:"",
        message:''
    })
    function handleChange(e){
        const {name,value} = e.target;
        setUser((pre)=>({...pre,[name]:value}))
    }
    return (<>
    <div className={style.container}>
        <h1 className={style.title}>Contact Us</h1>
        <form className={style.form} action="">
        <label htmlFor="name">UserName</label>
        <input type="text" name="name" value={user.name} onChange={handleChange}/>

        <label htmlFor="pass">Password</label>
        <input type="password" name="pass" value={user.pass} onChange={handleChange} />

        <label htmlFor="message">Message</label>
        <textarea name="message" id="" value={user.message} onChange={handleChange} ></textarea>

        <button className={style.submit}>Submit</button>
        </form>
    </div>
    </>);
}
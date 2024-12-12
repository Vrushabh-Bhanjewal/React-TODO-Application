import { useState } from 'react';
import style from './form.module.css';
export function FormReact(){
    const [user,setUser] = useState({
        firstName:"",
        lastName:"",
        mail:"",
        phone:"",
        pass:""
    });

    function handleChange(e){
        console.log(e);
        const {name,value} =e.target;
        setUser((pre)=>({...pre,[name]:value}))
    }
    return(<>
    <div className={style.container}>
        <h1 className={style.title}> Sign Up</h1>
        <form className={style.form} action="">
            <label htmlFor="firstName">First Name</label>
            <input name="firstName" type="text" value={user.firstName} onChange={handleChange}/>

            <label htmlFor="lastName">Last Name</label>
            <input name="lastName" type="text" value={user.lastName} onChange={handleChange}/>

            <label htmlFor="mail">E-mail</label>
            <input name="mail" type="email" value={user.mail} onChange={handleChange} />

            <label htmlFor="phone">Phone No</label>
            <input name="phone" type="number" value={user.phone} onChange={handleChange}/>

            <label htmlFor="password">Password</label>
            <input name="pass" type="password" value={user.pass} onChange={handleChange}/>

            <button className={style.submit}>Submit</button>
        </form>  
    </div>
    </>);
}

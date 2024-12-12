import { useState } from 'react';
import style from './form.module.css';
export function Form(){
    const [firstname,setFirst] = useState("");
    const [lastname,setLast] = useState("")
    const [mail,setMail] = useState("")
    const [phone,setPhone] = useState("")
    const [pass,setPass] = useState("")
    function handleChange(e){
        const {name,value} = e.target;
        switch (name){
            case "firstName":
                setFirst(value)
                break;

            case "lastName":
                setLast(value)
                break;

            case "mail":
                setMail(value)
                break;

            case "phone":
                setPhone(value)
                break;

            case "password":
                setPass(value)
                break;
            default:
                console.log("default",names,"value ",value)
                break;

        } 
    }
    // function handleFirst(e){
    //     const {name,value} =e.target;
    //     console.log(name)
    //     setFirst(value)
    // }
    return(<>
    <div className={style.container}>
        <h1 className={style.title}> Sign Up</h1>
        <form className={style.form} action="">
            <label htmlFor="firstName">First Name</label>
            <input name="firstName" type="text" value={firstname} onChange={handleChange}/>

            <label htmlFor="lastName">Last Name</label>
            <input name="lastName" type="text" value={lastname} onChange={handleChange}/>

            <label htmlFor="mail">E-mail</label>
            <input name="mail" type="email" value={mail} onChange={handleChange} />

            <label htmlFor="phone">Phone No</label>
            <input name="phone" type="number" value={phone} onChange={handleChange}/>

            <label htmlFor="password">Password</label>
            <input name="password" type="password" value={pass} onChange={handleChange}/>

            <button className={style.submit}>Submit</button>
        </form>  
    </div>
    </>);
}

import { useState } from 'react';
import style from './Form.module.css';

export function  Login(){
    const [client,setClient] = useState({
        name:"",
        pass:""
    });
    function handleChange(e){
        const{name,value} = e.target
        setClient((pre)=>({...pre,[name]:value}))
    }

    return (<>
    
    <div className={style.container}>
        <h1 className={style.title}>Sign In</h1>

        <form className={style.form} >
        <label htmlFor="name">UserName</label>
        <input type="text" name="name" value={client.name}  onChange={handleChange} />

        <label htmlFor="pass">Password</label>
        <input type="password" name="pass" value={client.pass} onChange={handleChange}/>

        <button className={style.submit}>Submit</button>
        </form>
    </div>

    </>);
}
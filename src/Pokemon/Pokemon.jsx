import { useEffect, useState } from "react";
import style from "./poke.module.css"
export function Pokemon(){

    const [pokeAPI,setp] =useState(null);
    const [loading,setLoad] = useState(true);
    const [error,setErr] = useState(null);
    let api="https://pokeapi.co/api/v2/pokemon/charizard";

    // * via promise 
    // useEffect(()=>{
    //     fetch(api)
    //     .then(response=> response.json())
    //     .then(json=> {
    //         setp(json); console.log(json);
    //         setLoad(false);
    //     })
    //     .catch(err=>{
    //         console.log(err);
    //         setErr(err);
    //         setLoad(false)
    //     })
    // },[])

    // * via async await
    async function pokeData(){
        try{
            let a= await fetch(api);
            let b= await a.json();
            setp(b);
            console.log(b);
            setLoad(false);
        }
        catch(error){
            console.log(err);
            setErr(err);
            setLoad(false)  
        }
    }
    useEffect(()=>{
        pokeData()        
    },[])

    if(loading){
        return (<>
        <h1>Loading...</h1>
        </>)
    }
    if(error){
        return (<>
        <h1>{error.message}</h1>
        </>)
    }
   
    return(<>
        <section className="section-pokemon">
            <div className="container">
                <h1>Serach Pokemon</h1>
            </div>
            <ul className={style.cards}>
                <li className={style.card}>
                    <img src={pokeAPI.sprites.other.dream_world.front_default} alt="" />
                    <h2>{pokeAPI.name}</h2>
                    <div className={style["grid-col-four"]}>
                        
                        <p>Height</p>
                        <p>{pokeAPI.height}</p>

                        <p>Weight</p>
                        <p>{pokeAPI.weight}</p>

                        <p>Attack</p>
                        <p>{pokeAPI.stats[1].base_stat}</p>

                        <p>Defense</p>
                        <p>{pokeAPI.stats[2].base_stat}</p>
                    </div>
                </li>
                
            </ul>
        </section>
    </>);
}

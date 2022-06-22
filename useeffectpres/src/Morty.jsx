import React,{useState,useEffect} from 'react'
import { getMorty } from './api'

const Morty = () => {
    const[morty,setMorty] = useState([])
        
    useEffect(()=>{
        getMorty()
        .then(response=>{
            setMorty(response)
        })
    },[]);
    console.log(morty)
    
    return(
        <div>
            <h1>{morty.name}</h1>
            <img src={morty.image} alt="" />
        </div>
    )

}

export default Morty;

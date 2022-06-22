import React,{useState,useEffect} from 'react'
import { getRick } from './api'


const Rick = () => {
    const[rick,setRick] = useState([])
        
    useEffect(()=>{
        getRick()
        .then(response=>{
            setRick(response)
        })
    });
    return(
        <div>
            <h1>{rick.name}</h1>
            <img src={rick.image} alt="" />
        </div>
    )

}

export default Rick;

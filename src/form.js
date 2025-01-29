import React, {useState} from 'react';

const home=()=>{
    const [name,setname] = useState("")
    function handlechange(event){
        setname(event.target.value)
        console.log(name)
    }
    return(
        <div>
            <label>
            name: <input type="text" onChange={handlechange} value={name}></input>
            </label>
            <h1>{name}</h1>
        </div>
    )
}

export default home;
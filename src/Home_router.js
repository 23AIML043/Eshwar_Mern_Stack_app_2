import React from 'react'
import {useState} from 'react';
import { useDispatch } from 'react-redux';
import { addUser } from './slices/userslice';
function Home(){
    const dispatch = useDispatch()
    const [formdata,setformdata]=useState({
        name:"",
        age:""
    });
    function handlechange(event) {
        const { name, value } = event.target;
        setformdata((curr) => {
          return {
            ...curr,
            [name]: value
          };
        }
      );
      }
console.log(formdata)
const add = (event)=>{
    event.preventDefault();
    dispatch(addUser(formdata));
}
  return (
    <div>
        <h1>Home
            </h1>
            <form>
                <label>nameyy:</label>
                <br/>
                <input name="name" type="text" value={formdata.name} onChange={handlechange} />
                <br />
                <label>age:</label>
                <br/>
                <input name="age" type="number" value={formdata.age} onChange={handlechange} />
                <br />
                <button onClick={add}>ADD</button>
            </form>
        </div>
  )
}
export default Home;
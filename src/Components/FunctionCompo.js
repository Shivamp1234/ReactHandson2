import React, { useState } from 'react'
import "./Components.css"

const Compo = () => {
    const[name,setName]=useState("");
    const[department,setDepartment]=useState("");
    const[rating,setRating]=useState("");
    const[data,setData]=useState([]);
    const handleChange1=(e)=>{
        setName(e.target.value);
    }
    const handleChange2=(e)=>{
        setDepartment(e.target.value);
    }
    const handleChange3=(e)=>{
        setRating(e.target.value);
    }
    const handleSubmit=()=>{
        const dataObj={
            name:name,
            department:department,
            rating:rating
        }
        setData([...data,dataObj]);
    }
  return (
    <>
    <div className="input-fields">
    <label>Name:</label>
    <input type="text" name="name" placeholder="Enter Your Name" onChange={handleChange1}/><br/>
    <label>Department:</label>
    <input type="text" name="department" placeholder="Enter Your Department" onChange={handleChange2}/><br/>
    <label>Rating:</label>
    <input type="text" name="rating" placeholder="Enter Rating" onChange={handleChange3}/><br/>
    <button onClick={handleSubmit}>Submit</button>
    </div>
    <div className="parent">
    <div className="data">
    {data.map((item,index)=>{
        return(
            <div>
            <p>Name:{item.name}|{item.department}|{item.rating}</p>
            </div>
        )
    })}
    </div>
    </div>
    </>
  )
}

export default Compo
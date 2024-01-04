'use client'
import { useState } from "react"

export default function Form() {

  const [ formData , setFormData] = useState({
    name:'',
    email:''
  })

  const handleChange = ((e: React.ChangeEvent<any>)=>{
    e.preventDefault();
    const {name , value} = e.target;
    setFormData((prevData)=> ({...prevData , [name]:value}))
  })

  console.log(formData)
  const handleSubmit = (()=>{})

    return (<>

<div className="container bg-slate-700">

  <form className="" onSubmit={handleSubmit}>

    <label htmlFor="name">Name:
      <input type="text" name="name"
      value={formData.name}
      onChange={handleChange} />
    </label>
    <label htmlFor="email">Email
      <input type="text" name="email"
      value={formData.email}
      onChange={handleChange} />
    </label>
    <button type="submit">Submit</button>
  </form>
    
      </div>
    </>)
  }
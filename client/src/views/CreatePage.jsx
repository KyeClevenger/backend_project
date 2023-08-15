import React, {useState} from 'react'
import axios from "axios"
import { useNavigate } from 'react-router-dom'

const CreatePage = () => {
    const [title, setTitle] = useState("")
    const [price, setPrice] = useState("")
    const [description, setDescription] = useState("")

    const navigate = useNavigate()

    const handleSubmit = (e)=>{
        e.preventDefault()
        axios.post(`http://localhost:8000/api/products`, {title: title, price: price, description: description})
            .then(response=>{
                navigate(`/products`)
            })
            .catch(err=>console.log(err))
    }
    
    return (
    <div>
        <form onSubmit = {handleSubmit} className="form">
        <div>
            <label> Title </label>
            <input type="text" name="title" value={title} onChange={e=>setTitle(e.target.value)}></input>
            <label> Price </label>
            <input type="number" name="price" value={price} onChange={e=>setPrice(e.target.value)}></input>
            <label> Description </label>
            <input type="text" name="description" value={description} onChange={e=>setDescription(e.target.value)}></input>
            <button> Submit </button>
        </div>
        </form>
    </div>
    )
}

export default CreatePage
import React, { useState, useEffect } from 'react'
import { useParams, useNavigate, Link } from 'react-router-dom'
import axios from "axios"

const EditPage = () => {
    const [title, setTitle] = useState("")
    const [price, setPrice] = useState("")
    const [description, setDescription] = useState("")

    const navigate = useNavigate()

    const {id} = useParams()

    const handleDelete = ()=>{
        axios.delete(`http://localhost:8000/api/products/${id}`)
            .then(response => navigate(`/products`))
            .catch(err=>console.log(err))
    }


    useEffect(() => {
        axios.get(`http://localhost:8000/api/products/${id}`)
            .then(response => {
                // Prepopulate form info
                console.log(response.data) 
                const prod = response.data
                setTitle(prod.title)
                setPrice(prod.price)
                setDescription(prod.description)
            })
            .catch(err => console.log(err))
    }, [])

    const handleSubmit = (e)=>{
        e.preventDefault()
        axios.patch(`http://localhost:8000/api/products/${id}`, {title: title, price: price, description: description})
            .then(response=>{
                navigate(`/products`)
            })
            .catch(err=>console.log(err))
    }

    return (
        <div>
            <form onSubmit = {handleSubmit} className="form">
            <div>
                <label> (Edit) Title </label>
                <input type="text" name="title" value={title} onChange={e=>setTitle(e.target.value)}></input>
                <label> (Edit) Price </label>
                <input type="number" name="price" value={price} onChange={e=>setPrice(e.target.value)}></input>
                <label> (Edit) Description </label>
                <input type="text" name="description" value={description} onChange={e=>setDescription(e.target.value)}></input>
                <button> Submit </button>
                <button type="button" onClick={handleDelete}>Delete</button>
            </div>
            </form>
        </div>
        )
}

export default EditPage
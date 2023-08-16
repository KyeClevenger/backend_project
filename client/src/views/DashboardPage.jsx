import React, { useState, useEffect } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import axios from "axios"


const DashboardPage = () => {
  const [prodList, setProdList] = useState([])

  const navigate = useNavigate();

  useEffect(() => {
    axios.get(`http://localhost:8000/api/products`)
      .then(response => setProdList(response.data))
      .catch(err => console.log(err))
    
  }, [])

  const handleDelete =(deleteId)=>{
    axios.delete(`http://localhost:8000/api/products/${deleteId}`)
      .then(response => {
          removeFromDom(deleteId);
      })
      .catch(err=>console.log(err))
  }

  // letting you delete without needed to refresh the page
  const removeFromDom = (deleteId)=> {
    const filteredList = prodList.filter((eachProd, idx)=> eachProd._id!== deleteId )
    setProdList(filteredList)
  }

  return (
    <div>
      {prodList.map((eachProd, idx) => {
      return (
        <div key={eachProd._id}>
          <h4>{eachProd.title}</h4>
          <h4>{eachProd.price}</h4>
          <h4>{eachProd.description}</h4>
          <div>
          <Link to={`/products/${eachProd._id}`}>Details</Link>
          <button onClick={()=>handleDelete(eachProd._id)} type="button">Delete</button>
          </div>
        </div>
      )
      })}
    </div>
  )
}

export default DashboardPage
import React, { useState, useEffect } from 'react'
import axios from "axios"

const DashboardPage = () => {
  const [ProdList, setProdList] = useState([])

  useEffect(() => {
    axios.get(`http://localhost:8000/api/products`)
      .then(response => setProdList(response.data))
      .catch(err => console.log(err))
  }, [])

  return (
    <div>
      {ProdList.map((eachProd, idx) => {
      return (
        <div>
          <h4>{eachProd.title}</h4>
          <h4>{eachProd.price}</h4>
          <h4>{eachProd.description}</h4>
        </div>
      )
      })}
    </div>
  )
}

export default DashboardPage
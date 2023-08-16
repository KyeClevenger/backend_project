import React, { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'
import { Link } from 'react-router-dom'
import axios from "axios"

const DetailsPage = () => {
    const [product, setProduct] = useState()
    const { id } = useParams()

    useEffect(() => {
        axios.get(`http://localhost:8000/api/products/${id}`)
            .then(response => setProduct(response.data))
            .catch(err => console.log(err))
    }, [])
    return (
        <div>
            {
                product ?
                    <div>
                        <div>
                            <h4>{product.title}</h4>
                            <h4>Price: {product.price}</h4>
                            <h4>Desciption: {product.description}</h4>
                            <h4>Last Updated {product.createdAt}</h4>
                            <Link to={`/products/${id}/edit`}>Edit</Link>
                        </div>
                    </div> :
                    <h5>Loading...</h5>
            }
        </div>
    )
}

export default DetailsPage
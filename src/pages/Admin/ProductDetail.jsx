import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router'
import { getProductByID } from '../../api/httpsrequests';

const ProductDetail = () => {
    const { id } = useParams();
    const [product, setProduct] = useState({});
    
    useEffect(() => {
        getProductByID(id).then(data => {
            setProduct(data);
        })
    }, [id])
    return (
        <>
        <ul>
        <li>Product ID: <h1>{product.id}</h1></li>
        <li>Product Name: <h1>{product.name}</h1></li>
        <li>Product Info: <h1>{product.info}</h1></li>
        </ul>
        </>
    )
}

export default ProductDetail

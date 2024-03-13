import React, { useState } from 'react'
import { v4 as uuidv4 } from 'uuid';
import { postProduct } from '../../api/httpsrequests';
import { useNavigate } from 'react-router';


const AddProduct = () => {
  const [newProduct,setNewProduct] = useState({});
  const navigate =useNavigate()
  function handleSubmit(e) {
    e.preventDefault();
    newProduct.id=uuidv4();
    postProduct(newProduct)
    navigate('/admin/products')
  }
  function handleChange(e) {
    setNewProduct({...newProduct,[e.target.name]:e.target.value})
  }
  return (
   <form onSubmit={(e)=>handleSubmit(e)}>
    <input name='name' onChange={(e)=>handleChange(e)} placeholder='product.name' type='text' required/>
    <input name='info' onChange={(e)=>handleChange(e)} placeholder='product.info' type='text' required/>
    <button type='submit'>Add New Product</button>
   </form>
  )
}

export default AddProduct

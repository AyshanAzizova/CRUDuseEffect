import React, { useEffect, useState } from 'react'
import { useNavigate, useParams } from 'react-router'
import { editProductByID, getProductByID } from '../../api/httpsrequests';

const EditProducts = () => {
  const { id } = useParams();
  const [product, setProduct] = useState([]);
  const navigate = useNavigate();
  useEffect(() => {
    getProductByID(id).then(data => {
      console.log(data);
      setProduct(data);
    })
  }, [id])
  function handleSubmit() {
    editProductByID(id,product)
    navigate(`/admin/products`)
  }
  function handleChange(e) {
    setProduct({...product,[e.target.name]:e.target.value})
  }
  return (
    <form onSubmit={(e)=>handleSubmit(e)}>
      <input onChange={(e) => handleChange(e)} value={product.name} name='name' placeholder='name' />
      <input onChange={(e) => handleChange(e)} value={product.info} name='info' placeholder='info' />
      <button>EDIT</button>
    </form>
  )
}

export default EditProducts

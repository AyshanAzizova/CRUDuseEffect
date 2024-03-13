import React, { useEffect, useState } from 'react';
import { deleteProductByID, getAllProducts } from '../../api/httpsrequests';
import { Link } from 'react-router-dom';

const Products = () => {
  let [products, setProducts] = useState([]);


  useEffect(() => {
    getAllProducts().then(data => {
      setProducts(data);
    });
  }, []);

  return (
    <table>
      <thead>
        <tr>
          <td>ID</td>
          <td>NAME</td>
          <td>INFO</td>
        </tr>
      </thead>
      <tbody>
        {products && products.map((product) => (
          <tr key={product.id}>
            <td><Link to={`${product.id}`} >{product.name}</Link></td>
            <td>{product.info}</td>
            <td>
              <button onClick={() => {
                deleteProductByID(product.id);
                let filteredProducts = products.filter((item) => item.id !== product.id)
                setProducts(filteredProducts)
              }}>Delete</button>
              <button><Link to={`edit/${product.id}`}>Edit</Link></button>
            </td>
          </tr>
        ))}
      </tbody>
    </table >
  );
};

export default Products;

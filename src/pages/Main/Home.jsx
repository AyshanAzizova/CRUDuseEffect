import axios from 'axios';
import React from 'react'
import { useEffect, useState } from 'react';

const Home = () => {
  const [data, setData] = useState([]);
  // const [currentData, setCurrentData] = ({
  //   id: '',
  //   companyName: '',
  //   contactName: '',
  //   contactTitle: ''
  // })
  useEffect(() => {

    fetchData()
  }, []);
  const fetchData = () => {
    axios.get('https://northwind.vercel.app/api/suppliers').then(response => setData(response.data))
  }
  const handleDelete = (id) => {
    axios.delete(`https://northwind.vercel.app/api/suppliers/${id}`).then(() => fetchData())
  }
  const handleEdit = (id) => {
    console.log(id);
  }
  const handleSubmit = () => {
    // if (currentData.id) {
    //   // put
    // }
    // else {
    //   addCategory({ companyName: currentData.companyName, contactName: currentData.contactName, contactTitle: currentData.contactTitle })
    // }
  }
  const addCategory = (newCategory) => {
    axios.post('https://northwind.vercel.app/api/suppliers', newCategory).then(() => {
      fetchData();
      // setCurrentData({
      //   id: '',
      //   companyName: '',
      //   contactName: '',
      //   contactTitle: ''
      // })
    })
  }

  const handleInputCompanyNameChange = (e) => {
    // setCurrentData({ ...currentData, companyName: e.target.value })
  }
  const handleInputContactNameChange = (e) => {
    // setCurrentData({ ...currentData, contactName: e.target.value })
  }
  const handleInputContactTitleChange = (e) => {
    // setCurrentData({ ...currentData, contactTitle: e.target.value })
  }
  return (
    <div>
      <h1 style={{ textAlign: "center", color: "red", fontSize: "30px" }}>HOMEPAGE</h1>
      <form onSubmit={handleSubmit}>
        <input onChange={handleInputCompanyNameChange} value={data.companyName} />
        <input onChange={handleInputContactNameChange} value={data.contactName} />
        <input onChange={handleInputContactTitleChange} value={data.contactTitle} />
        <button>Add</button>
      </form>
      <table>
        <thead>
          <tr>
            <th>id</th>
            <th>companyName</th>
            <th>contactName</th>
            <th>contactTitle</th>
          </tr>
        </thead>
        <tbody>
          {data && data.map(item => (

            <tr key={item.id}>
              <td>{item.id}</td>
              <td>{item.companyName}</td>
              <td>{item.contactName}</td>
              <td>{item.contactTitle}</td>
              <td>
                <button onClick={() =>
                  handleEdit(item.id)}>Edit</button>
                <button onClick={() =>
                  handleDelete(item.id)}>Delete</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>

    </div>
  )
}

export default Home

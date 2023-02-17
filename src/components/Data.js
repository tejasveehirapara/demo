import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'

function Data() {

const id = useParams()
// console.log(id);
const [data, setData] = useState([])

const fetchApi = () => {
    axios
    .get(`https://fakestoreapi.com/products/${id}`)
    .then((res) => {
      setData(res.data);
      console.log(res);
    })
    .catch((err) => {
      console.log(err);
    });
  } 
  
  useEffect(() => {
  fetchApi();
  }, []);
  

  return (
    <div>Data</div>
  )
}

export default Data
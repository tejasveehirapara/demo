
import axios from 'axios';
import React from 'react'
import { useEffect } from 'react';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const Array = () => {

const [data, setData] = useState([])
const navigate = useNavigate();

const fetchApi = () => {
  axios
  .get("https://fakestoreapi.com/products")
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
const [show, setShow] = useState(false)

const handleClick = () => {
  localStorage.clear()
  navigate("/")
}

  return (
    <div className='row'>
      <button onClick={handleClick}> logOut</button>
      {
        data.map((item) => (
          <div class="card col-4">
          <img src={item.image} class="card-img-top "  style={{width:"100px"}} alt="..."/>
          <div class="card-body">
            <h5 class="card-title">{item.description}</h5>
            <p class="card-text"> {item.price}</p>
            <a href="#" class="btn btn-primary" onClick={() => navigate(`/data/${item.id}`)}>Go somewhere</a>
          </div>
        </div>
        ))
      }
      {/* <div className='col-4'
      > <div class="card col-4">
      <img src={} class="card-img-top "  style={{width:"100px"}} alt="..."/>
      <div class="card-body">
        <h5 class="card-title"></h5>
        <p class="card-text"></p>
        <a href="#" class="btn btn-primary">Go somewhere</a>
      </div>
    </div></div> */}

    </div>
  )
}

export default Array




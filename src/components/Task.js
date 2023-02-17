
import React, { useState } from 'react'

function Task() {
const [search, setSearch] = useState('')
const [addData, setAdddata] = useState([])
const [seconddata, setSeconddata] = useState([])
const [input, setInput] = useState('')
const [food, setFood] = useState([])

// const handleChange = (e) => {
// setSearch(e.target.value)
// }

const handleAdd = () => {
setAdddata([...addData,search])
setSearch("")
}
console.log(addData,"addata")

const handleRemove = (id) => {

const temp = addData.filter((item) => item !== id)
setAdddata(temp)
setSeconddata([...seconddata,id])
console.log(temp,"temp")
}

const handleFoodChange = (e, index) => {
const newObject = [...input]
newObject[`${index}`] = e;
setInput(newObject)
}
console.log(input,"input")
const handleFoodAdd = (index) => {
// setFood([...food, input])
// setInput("")
const newObj = [...seconddata]
console.log(newObj,"newObj");
console.log(newObj[`${index}`] = index,"newObj[`${index}`] = index")
newObj[`${index}`] = index ? setFood([...food, input]) : ""

}

console.log(seconddata,"seconddata");
  return (
    <div>
        <div className="row m-0">
            <div className="col-6" style={{height:"50vh", backgroundColor:"pink"}}>
{
    addData.map((curItem, index) => {
        return(
            <>
            <div className='bg-light' onClick={() => handleRemove(curItem)} >
            <h1 style={{padding:"10px", margin:"3px"}}>{curItem}</h1>
            </div>
            </>
        )
    })
}
            </div>
            <div className="col-6" style={{height:"50vh", backgroundColor:"blue"}}>
{
    seconddata.map((item, index) => {
        return(
            <div className='bg-light' >
            <h1 style={{padding:"10px", margin:"3px"}}>{item}</h1>
            {
                food.map((foods) => (
                    <>
                    <div>{foods}</div>
                    </>
                ))
            }
            <div className='mb-1'>
                <input value={input[`${index}`] || ""} onChange={(e) => handleFoodChange(e.target.value,index)}/>
                <button onClick={() => handleFoodAdd(index)}>Add</button>
            </div>
            </div>  
        )
    })
}
            </div>
            <div className="col-6" style={{height:"50vh", backgroundColor:"green"}}>
            <div style={{height:"40vh"}}></div>
              <div className='w-100'>
                 <input className='main-input' value={search}  onChange={(e) => setSearch(e.target.value) } ></input>
                <button onClick={() => handleAdd()}>Add</button>
                </div> 
            </div>
            <div className="col-6" style={{height:"50vh", backgroundColor:"yellow"}}></div>
           
        </div>
    </div>
  )
}

export default Task
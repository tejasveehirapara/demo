import React, { useState } from 'react'
import { quizData } from './Quizedata'


const Quetion = () => {

const [que, setQue] = useState(quizData)
const [correct, setCorrect] = useState(null)
const [show, setShow] = useState(false)
const [options, setOptions] = useState()
const [indexvalue, setIndexValue] = useState("")
const [selectedId, setSelectedId] = useState(false)
const [answerSelected, setAnswerSelected] = useState(false)
const [answerCorrect, setAnswerCorrect] = useState(null)

const handleQui = (id) => {
  setShow(true)
    const temp = quizData.filter((item) => item.id === id)
    setQue(temp)
}

const changeIndexValue =(value) => {
    // alert(value)
    setIndexValue(value,"indexv")
}




const ansClick = (answer, opt, id) => {
    //    className={` ${ansClick && quizData.find((color) => color.answer  === opt && index === index) ? `green` : `red`}`}
    const abc = que.findIndex((color, index) => color.id === id && color.answer === opt && answer)
    console.log(abc)
    if(abc > -1){
        document.getElementById("divID").style.backgroundColor = "green";  
    }
    else{
        document.getElementById("divID").style.backgroundColor = "red";  

    }
}
return (
    <div>

<div style={{display:"flex"}}>
{quizData.map((ele, index) => (
    <>
    
        <div className='ids' onClick={() => handleQui(ele.id)} >{index + 1}</div>
    
    </>
))}
</div>
        { show && 
            que.map((ele, index) => (
                <>
                <div style={{display:"flex", marginTop:"20px"}}>
                    <span className="index">{index + 1}<sub style={{padding:"10px"}}>.</sub></span>
                <span className="index">{ele.question}</span>
                </div>
                {/* <h2>{ele.options}</h2> */}
                {
                    ele.options.map((opt) => (
                        <>
                       
                       
                       <p key={opt.id} id="divID" 
                       style={{padding:"10px", border:"3px solid black", margin:"10px"}}  onClick={(e) => (ansClick(ele.answer,opt, index, ele.id))}>{opt}</p>
                        </>
                    ))
                }
                </>
            ))
        }
    </div>
  )
}

export default Quetion
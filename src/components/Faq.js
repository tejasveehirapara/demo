import React, { useState } from "react";
import {qBank} from "./quize"
import 'react-toastify/dist/ReactToastify.css';
import { toast, ToastContainer } from "react-toastify";
function Faqdata() {

  console.log(qBank,"qq")
  const [Id, setId] = useState();
  const [coranswer, setCoranswer] = useState(false)
  const [selectedIndex, setselectedIndex] = useState(null);
  const [selectedIndexforId, setselectedIndexforid] = useState(null);
  const [correctAnswer, setCorrectAnswer] = useState('')
const [show, setShow] = useState(false)
  const handleGetque = (id) => {
    
    setShow(false)
    setselectedIndex(null)
    // setCorrectAnswer(!correctAnswer)
    const temp = qBank.filter((item) => item.questionId === id);
    console.log(temp, "temp");
    setId(temp);
    const cur = qBank.filter((item) => item.questionId == id)
    setselectedIndexforid([...selectedIndexforId, cur])
    console.log(selectedIndexforId,"bh")
  };
  const handleAnswerShow = (option, answer) => {
    // setCorrectAnswer(option)
    setShow(true)
    // setselectedIndexforid(null)
    setCorrectAnswer(option)
    console.log(correctAnswer,"correctAnswer")
    console.log(option)
    console.log(answer)
    if(option === answer){
        setCoranswer(true)
        toast.success("your answer is correct")
    }
    else if(option !== answer){
        toast.error("your answer is wrong")
        setCoranswer(false)
    }
  }
  return (
    <div>
        <ToastContainer/>
      <div className="d-flex">
        {qBank.map((item) => (
          <>
            <div
              className={`queId ${selectedIndexforId === item.questionId  && coranswer? `bgForcorrectAns` : selectedIndexforId === item.questionId && !coranswer ? `bgForwrongAns` : `bgForSimple`} `}
              onClick={() => (handleGetque(item.questionId, item.correct))}
            >
              {item.questionId}
            </div>
          </>
        ))}
      </div>
      { Id && Id.map((quiest) => (
        <>
          <div className="p-4 mainQue">
            <h6 className="quizeQue">
              {quiest.questionId}.{quiest.question}
            </h6>
            {show  && correctAnswer === quiest.correct ? "yoghg" : ""}
            {quiest.answers.map((options, index) => (
              <>
                <button className={`optionBtn ${selectedIndex === index && coranswer ? `bgForcorrectAns` : selectedIndex === index && !coranswer ? `bgForwrongAns` : `bgForSimple`}`}
                onClick={() => (handleAnswerShow(options,quiest.correct),setselectedIndex(index))}>
                  {index === 0
                    ? "A"
                    : index === 1
                    ? "B"
                    : index === 2
                    ? "C"
                    : index === 3
                    ? "D"
                    : ""}
                  . {options}
                </button>
              </>
            ))}
          </div>
        </>
      ))}
    </div>
  );
}
export default Faqdata;
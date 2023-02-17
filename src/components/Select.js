import React,{useState} from 'react'
import { quizData } from './quize';

function Select() {

    const [data, setData] = useState(quizData);
    const [selectedCard, setSelectedCard] = useState(data);
    
    console.log(selectedCard,"selectedac");
    // const [selectedAmenities, setSelectedAmenities] = useState(selectNameFivestep);
    // console.log(selectedAmenities)
    // const handleSelectAmenities = (amenities) => {
    //     const index = selectedAmenities.findIndex((amenitiesName) => amenitiesName.id == amenities.id);
    //     console.log(index)
    //     if (index > -1) {
    //         selectedAmenities.splice(index, 1);
    //         setSelectedAmenities(selectedAmenities)
    //     }
    //     else {
    //         setSelectedAmenities([...selectedAmenities, amenities])
    //     }
    //     setSelectNameFivestep([...selectedAmenities, amenities])
    // };
const handleSelect = (ele) => {
    console.log(ele)
    const index = selectedCard.findIndex((item) => item.id !== ele.id)
    console.log(index,"index")
    if(index > -1){
      
        setSelectedCard(selectedCard)
    }
    else{
        setSelectedCard([...selectedCard,ele])
    }
    setData([...selectedCard,ele])
}

  return (
    <div className='row'>
        {
            data.map((ele) => (
                <>
                <div className={`col-4 ${selectedCard.find((item) => item.id === ele.id && `cardActive`)}`} style={{width:"18rem", height:"18rem"}} onClick={() => handleSelect(ele)}>
                                   <h1 >{ele.question}</h1>
                {
                    ele.options.map((opt) => (
                        <p className='"card-body"'>{opt}</p>
                    ))
                }
                </div>
 
                </>
            ))
        }
    </div>
  )
}

export default Select
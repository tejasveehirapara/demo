import { useState, useEffect } from 'react';
import axios from 'axios';

// import RightArrow from '../../assets/svg/right-arrow.svg';

// import stl from './ImageWithDD.module.scss';

const Imagewithdd = () => {
    const [isOpen, setIsOpen] = useState(false);     //For Open and Close Dropdown
    const [dropdownData, setDropdownData] = useState(null);        //For Dropdown data
    const [selectedData, setSelectedData] = useState({
        selectedOption: "",
        selectedImageName: "",
        selectedImageDesc: "",
    });         //For set Default Selected Data

    //For Get Data from API and set in variable
    useEffect(() => {
        try {
            axios.get("http://localhost:3000/api/data.json")
                .then((res) => {
                    const sortInAscOrder = [...res.data].sort((a, b) => a.order - b.order);
                    setDropdownData(sortInAscOrder);
                    const defaultData = sortInAscOrder.filter((item) => {
                        return item.order === 10;
                    })
                    setSelectedData({
                        selectedOption: defaultData[0].title,
                        selectedImageName: defaultData[0].coverImage,
                        selectedImageDesc: defaultData[0].description,
                    })
                })
        }
        catch (err) {
            console.log(err);
        }
    }, [])

    //For open and close dropdown  
    const handleOpenClose = () => {
        setIsOpen(!isOpen);
    }

    const handleSelect = (title: string, coverImg: string, desc: string) => {
        setSelectedData({
            selectedOption: title,
            selectedImageName: coverImg,
            selectedImageDesc: desc,
        })
        setIsOpen(false);
    }

    const handleValue = (val: any) => {
        console.log(val)
    }

    return (
        <>
        <div >
            <div>
                <div >
                    <div  onClick={handleOpenClose}>
                        <span>{selectedData.selectedOption}</span>
                        <span>
                            <img  style={{ transform: isOpen ? "rotate(180deg)" : "" }} />
                        </span>
                    </div>
                    {dropdownData && dropdownData?.map((imageData: any) => {
                        return (
                            <>
                                <div data-testid='dropdownData' style={{ display: `${isOpen ? "block" : "none"}` }} onClick={() => { handleSelect(imageData.title, imageData.coverImage, imageData.description) }} key={imageData.id}>
                                    <input role='radio' data-testid={`dropdownRadio-${imageData.id}`} type="radio" id={imageData.id} name="img_select" value={imageData.shortTitle} onChange={(e: any) => { handleValue(e) }} checked={selectedData.selectedOption === imageData.title ? true : false} />
                                    <label htmlFor={imageData.id}></label>{imageData.shortTitle}
                                </div>
                            </>
                        )
                    })}
                </div>
            </div>
            <div >
                <div>
                    <img src={`./images/${selectedData.selectedImageName}`} alt={`${selectedData.selectedImageName.split(".")[0]}`} />
                </div>
                <div>
                    <h1>{selectedData.selectedOption}</h1>
                    <div>{selectedData.selectedImageDesc}</div>
                </div>
            </div>
        </div>
        </>
    )
}

export default Imagewithdd
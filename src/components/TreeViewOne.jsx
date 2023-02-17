import React, { useRef, useState } from 'react';
import FolderTree from "react-folder-tree";
import Data from './TreeViewOne.json';
const TreeViewOne = () => {
    const fileUpload = useRef(null);
    const uploadProfilePic = (e) => {
        console.log(e);
    };
    console.log('Data', Data);
    const handleUpload = () => {
        console.log(fileUpload.current.click(), "fileUpload");
    };
    const onTreeStateChange = (state) => console.log("tree state: ", state);
    const [inputText, setInputText] = useState("");
    let inputHandler = (e) => {
        //convert input text to lower case
        var lowerCase = e.target.value.toLowerCase();
        setInputText(lowerCase);
    };
    const asArray = Object.entries(Data);
    const filteredData = asArray.filter((el) => {
        console.log("el", el[0]);
        //if no input the return the original
        if (inputText === '') {
            return el[0];
        }
        //return the item which contains the user input
        else {
            return el[0].toLowerCase().includes(inputText)
        }
    })
    console.log('filteredData', filteredData);
    return (
        <div>
            <div className='form'>
                <nav className="navbar navbar-expand-lg header-part-main">
                    <div className="container-fluid">
                        <a className="navbar-brand main-title p-3" href="#">BOM Explorer</a>
                    </div>
                </nav>
                <div className='sub-header p-3'>
                    <div className='add-btn'>
                        <button type="button" className="btn btn-primary">Add new</button>
                    </div>
                    <div className='search-bar-part'>
                        <input type="search" className='search-bar-part-sub' placeholder='Search...' onChange={inputHandler} />
                    </div>
                    <div className='upload-btn'>
                        <input
                            type="file"
                            ref={fileUpload}
                            onChange={uploadProfilePic}
                            style={{ opacity: "0", display: "none" }}
                            accept=".csv"
                        />
                        <button className="btn btn-secondary" onClick={() => handleUpload()}>Upload CSV</button>
                    </div>
                </div>
                <div className="form container tree-part-main">
                    <FolderTree
                        data={Data}
                        onChange={onTreeStateChange}
                        showCheckbox={false}
                    // readOnly                  
                    />
                    <ul>
                        {filteredData.map((item) => {
                            console.log('item', item.map((newData) => {
                                console.log('newData', newData)
                                // newData.map((secData) => {
                                //     console.log('secData',secData.name);
                                // });
                            }));
                            return (
                                <li key={item.id}>{item[0]}</li>
                            )
                        })}
                    </ul>
                </div>
            </div>
        </div>
    )
}
export default TreeViewOne
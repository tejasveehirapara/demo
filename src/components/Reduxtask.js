import React, { useState } from "react";
function Reduxtsk() {
  const [search, setsearch] = useState("");
  const [addname, setAddname] = useState([]);
  const [addcustomer, setAddcustomer] = useState([]);
  const [input, setInput] = useState("");
  const [addfood, setAddFood] = useState([]);
  const [cust, setcust] = useState([]);
  const [selectedIndex, setSelectedIndex] = useState([]);
  const [selectedFood, setSelectedFood] = useState(addfood);
  let nextId = 0;
  const handleAddName = () => {
    setAddname([...addname, search]);
    setsearch("");
  };
  const handleRemove = (idd) => {
    const temp = addname.filter((ele, index) => index !== idd);
    setAddname(temp);
    const customer = addname.filter((ele, index) => index === idd);
    const data = []
    data.push({id:idd, name:customer,food:[]})
    setAddcustomer(data)
    // setAddcustomer([...addcustomer, customer]);
  };
  console.log(addcustomer, "addcustomer");
  const handleInputChange = (e, index) => {
    const newItem = [...input];
    newItem[`${index}`] = e;
    setInput(newItem);
  };
  const handleAddFood = (indexx) => {
    setSelectedIndex(indexx);
    setAddFood([{id:indexx, food: input[`${indexx}`] },...addfood]);
    const fooddata = []
fooddata["id"] = indexx
fooddata["food"] = [addfood.filter((data) => data.id === fooddata["id"])]
fooddata["customer"] = addcustomer.filter((customer,index) => index === indexx )
console.log(fooddata,"fooddata")
setcust(fooddata)
    // setAddFood([{ id: indexx, food: input[`${indexx}`] }, ...addfood]);
    setInput("");
  };
  console.log(addfood, "addfoodss");
  const handleAddFoodIndex = (foods) => {
    // setInput("");
    setSelectedFood([...selectedFood, foods]);
  };
  return (
    <div>
      <div className="row m-0">
        <div className="col-6 bg-dark" style={{ height: "50vh" }}>
          {addname.map((item, index) => {
            return (
              <div
                className="bg-warning p-3 m-2"
                onClick={() => handleRemove({index})}
              >
                <h1 className="text-light">{item}</h1>
              </div>
            );
          })}
        </div>
        <div className="col-6 bg-primary" style={{ height: "50vh" }}>
          {addcustomer.map((customer, index) => {
            return (
              <div className="bg-warning p-3 m-2 d-flex">
                {/* <h4>{customer}</h4> */}
                <input
                  type="text"
                  value={input[`${index}`] || " "}
                  onChange={(e) => handleInputChange(e.target.value, index)}
                />
                <button onClick={() => handleAddFood(index)}>add</button>
            
                {/* {selectedIndex === index &&
                 addfood.map((foods, index) => (
                    <>
                      {selectedIndex === foods.id && 
                        <div
                          className={`bg-light p-2 m-2 ${
                            selectedFood?.find(
                              (Data) => Data === foods
                            ) && "foodbg"
                          } `}
                        >{foods.food}
                        </div>
                      }
                    </>
                  ))} */}
              </div>
            );
          })}
        </div>
        <div className="col-6 bg-secondary" style={{ height: "50vh" }}>
          <div style={{ height: "40vh" }}></div>
          <input
            type="text"
            value={search}
            onChange={(e) => setsearch(e.target.value)}
          />
          <button onClick={() => handleAddName()}>add</button>
        </div>
        <div className="col-6 bg-light" style={{ height: "50vh" }}>
          {addfood.map((foods,index) => {
            return <div className={`p-2 m-2 ${selectedFood?.find((amenityData) => amenityData === foods.food)? 'foodbg' : "foodbgn"}`} onClick={() => (handleAddFoodIndex(foods.food))}>{foods.food}</div>;
          })}
        </div>
      </div>
    </div>
  );
}
export default Reduxtsk;







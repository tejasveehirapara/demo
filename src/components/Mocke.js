import React, { useState } from "react";
import Data from "./data.json";
import photo from "../Images/pro-photos.jpg";


// import { IoIosArrowUp } from "react-icons/io";

function Mocke() {
  const [radio, setRadio] = useState([]);
  const [active, setActive] = useState(false);
  const [state, setState] = useState({
    Pdata: Data.users((data) => data.shortTitle === "Pro"),
  });

  // const handleSubmit = (e) => {
  //   if(serch === "All"){
  //     setSearch(Data.filter((e) => {
  //       return e.shortTitle === "All"
  //     }))
  //     console.log(serch);
  //   }
  //   else if(radio === "Pro"){
  //     setSearch(Data.value)
  //   }
  //   else if(radio === "Free"){
  //     setSearch(Data.value)
  //   }

  // }
  const handleChange = (event) => {
    setRadio(event.target.value);

    const value = event.target.value;
    if (value === Data.shortTitle) {
      setState({ Pdata: Data.filter((data) => data.shortTitle === "All") });
      



    } else if (value === Data.shortTitle) {
      setState({
        Pdata: Data.users.filter((data) => data.shortTitle === "Free")
       
      });
    } else if (value === Data.users.shortTitle) {
      setState({
        Pdata: Data.users.filter((data) => data.shortTitle === "Pro")
      });
    }
    console.log(state);
  };

  return (
    <>
      <div className="mx-5 my-4">
        <div className="row">
          <div className="col-lg-5 col-md-12 ">
            <h2 class="accordion-header">
              <button
                class="accordion-button"
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#collapseOne"
                aria-expanded="true"
                aria-controls="collapseOne"
              >
                {radio} photos
              </button>
            </h2>
            <div
              id="collapseOne"
              class="accordion-collapse collapse show"
              aria-labelledby="headingOne"
              data-bs-parent="#accordionExample"
            >
              <div class="accordion-body">
                {state.Pdata.map((datas) => (
                  <ul>
                    <li className="radio-li ">
                      <input
                        type="radio"
                        checked={radio === datas.shortTitle}
                        value={datas.shortTitle}
                        name="name"
                        className="radio-radio my-2 "
                        onChange={handleChange}
                      />
                      <label for="radio-btn ">
                        <b>{datas.shortTitle}</b>
                      </label>
                    </li>
                  </ul>
                ))}
              </div>
            </div>
          </div>
          <div className="col-lg-7 col-md-12 card-main">
            (
            {state.Pdata.map((datas) => (
              <>
                <div className="main-card" key={datas.id}>
                  <img
                    style={{ height: "400px" }}
                    src={photo}
                    className="card-img-top"
                    alt="..."
                  />
                  <div className="card-body my-3">
                    <h1 className="card-title my-3" style={{ padding: "10px" }}>
                      <b>{datas.title}</b>
                    </h1>
                    <p
                      className="card-text my-3"
                      style={{ fontsize: "50px", padding: "10px" }}
                    >
                      <b>{datas.description}</b>
                    </p>
                  </div>
                </div>
              </>
            ))}
          </div>
          )}
        </div>
      </div>
    </>
  );
}

export default Mocke;

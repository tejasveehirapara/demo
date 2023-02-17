import React, { useState } from "react";
import Data from "./data.json";
import pro from "./data.json";

function Mock() {
  const [radio, setRadio] = useState("All");

  const [state, setState] = useState({
    Pdata: Data.users.filter((data) => data.shortTitle === "All"),
  });

  const handleChange = (event) => {
    setRadio(event.target.value);
    const value = event.target.value;
    if (value === "All") {
      setState({
        Pdata: Data.users.filter((data) => data.shortTitle === "All")
      });
    } else if (value === "Free") {
      setState({
        Pdata: Data.users.filter((data) => data.shortTitle === "Free")
      });
    } else if (value === "Pro") {
      setState({
        Pdata: Data.users.filter((data) => data.shortTitle === "Pro")
      });
    }
    console.log(setState);
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
                <ul>
                  <li className="radio-li ">
                    <input
                      type="radio"
                      checked={radio === "All"}
                      value="All"
                      className="radio-radio my-2 "
                      onChange={handleChange}
                    />
                    <label for="radio-btn ">
                      <b>All</b>
                    </label>
                  </li>
                  <li className="radio-li ">
                    <input
                      type="radio"
                      checked={radio === "Pro"}
                      value="Pro"
                      className="radio-radio my-2 "
                      onChange={handleChange}
                    />
                    <label for="radio-btn ">
                      <b>Pro</b>
                    </label>
                  </li>
                  <li className="radio-li ">
                    <input
                      type="radio"
                      checked={radio === "Free"}
                      value="Free"
                      className="radio-radio my-2 "
                      onChange={handleChange}
                    />
                    <label for="radio-btn ">
                      <b>Free</b>
                    </label>
                  </li>
                </ul>
              </div>
            </div>
          </div>

          <div className="col-lg-7 col-md-12 card-main">
            {state.Pdata.map((datas) => (
              <>
                <div className="main-card" key={datas.id}>
                  <img
                    style={{ height: "400px" }}
                    src={datas.coverImage}
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
        </div>
      </div>
    </>
  );
}

export default Mock;

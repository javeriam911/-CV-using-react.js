import React from "react";
// import {pic} from "E:\react course\cv\src\images\pic.jpg"

export default function header() {
  return (
    <>
      <div className="container card">
        <div className="cont1"> 
          <div className=" my-5 cards">
            <div className="card-body">
              <h1 className="card-title">Javeria Mateen</h1>
              <p className="card-text">
                <h6>Resident: Karachi</h6>
                <h6>Contact: 000000000000000</h6>
                <h6> E-mail: javeriam130@gmail.com</h6>
              </p>
            </div>
          </div>
        </div>

        <div className="cont2"> 
          <img src={process.env.PUBLIC_URL+"th.jpeg"} className="img" alt="profile" />
{/* <img src={pic} alt="pic" /> */}




        </div>
      </div>
    </>
  );
}

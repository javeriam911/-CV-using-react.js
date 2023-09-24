import React from "react";
// import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

export default function Footer() {
  return (
    // <Router>
      <div className="card container ">
        <div className="">
          <h3>
            <u> Contact me :</u>
          </h3>
        </div>
        <div className=" container card">
          <span className="card contA">
            {/* <Link to="www.linkedin.com/in/javeria-mateen-06aa65244">
              Instagram
            </Link> */}
          
          Instagram : <b> Javeriam911</b>
          
          </span>

          <span className="card contB">
            LinkedIn  :<b> javeria mateeen</b>
          </span>
        </div>
      </div>
    // </Router>
  );
}

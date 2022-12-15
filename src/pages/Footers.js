import React from "react";
import "../style/footers.css";

export default function Footers() {
  return (
    <div className="body" style={{ backgroundColor: "#F0DBDB", fontFamily: "public-sans" }}>
      <div className="footer">
        <div style={{display: "flex"}}>
        <div className="row" style={{display: "block"}}>
          <a  target="_blank" href="https://www.facebook.com/StarbucksIndonesia/">
          <i className="fab fa-facebook"></i>
          </a>
          <a target="_blank" href="https://www.instagram.com/starbucksindonesia/">
            {" "}
            <i className="fab fa-instagram"></i>
          </a>
          <a target="_blank" href="https://twitter.com/starbucksindonesia/">
          <i className="fab fa-twitter-square"></i>
          </a>
        </div>
        </div>

        <div className="row">
          <ul>
            <li>
              <a href="#">Contact us</a>
            </li>
            <li>
              <a href="https://www.starbucks.co.id/customer-service/frequently-asked-questions">Our Services</a>
            </li>
            <li>
              <a href="https://www.starbucks.com/terms/privacy-policy/">Privacy Policy</a>
            </li>
            <li>
              <a href="https://twitter.com/sbuxindonesia/status/1268400894179028992">Terms & Conditions</a>
            </li>
            <li>
              <a href="#">Career</a>
            </li>
          </ul>
        </div>

        <div className="row" style={{justifyContent: "center"}}>
          © 2021 Copyright By:
          Melyana
        </div>
      </div>
    </div>
  );
}

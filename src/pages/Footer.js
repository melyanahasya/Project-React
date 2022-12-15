import React from "react";

export default function Footer() {
  return (
    <div
      style={{ backgroundColor: "#F0DBDB", height: "259px" }}
      className="footer"
    >
      <br />
      <div
        style={{
          display: "flex",
          gap: "5%",
          padding: "2%",
          marginTop: "auto",
        }}
      >
        <div style={{ marginLeft: "2%", textAlign: "left" }}>
          <h4>About</h4>
          <p>Our Company</p>
          <p>Become a Partner</p>
          <p>Our Heritage</p>
        </div>
        <div>
          <h4>Use</h4>
          <div style={{ textAlign: "left" }}>
            <p>
              <a
                target="_blank"
                style={{ textDecoration: "none", color: "black" }}
                href="https://fontawesome.com/"
              >
                <i class="fab fa-font-awesome-flag"></i> Fontawesome
              </a>
            </p>

            <p>
              <a
                target="_blank"
                style={{ textDecoration: "none", color: "black" }}
                href="https://getbootstrap.com/"
              >
                <i class="fab fa-bootstrap"></i> Bootstrap
              </a>
            </p>
            <p>
              <a
                target="_blank"
                style={{ textDecoration: "none", color: "black" }}
                href="https://reactjs.org/"
              >
                <i class="fab fa-react"></i> React
              </a>
            </p>
          </div>
        </div>
        <div>
          <h4>Customer Service</h4>
          <p>
            <a
              style={{ textDecoration: "none", color: "black" }}
              href="https://www.starbucks.co.id/customer-service/frequently-asked-questions"
            >
              Asked Question
            </a>
          </p>
          <p>
            <a
              style={{ textDecoration: "none", color: "black" }}
              href="https://www.starbucks.co.id/store-locator"
            >
              Store Location
            </a>
          </p>
        </div>

        <div
          style={{ display: "flex", gap: "9px", fontSize: "20px" }}
          className="sosmed"
        >
          <a
            target="_blank"
            style={{ color: "black" }}
            href="https://www.instagram.com/starbucksindonesia/"
          >
            <i className="fab fa-instagram"></i>
          </a>
          <a
            target="_blank"
            style={{ color: "black" }}
            href="https://twitter.com/starbucksindonesia/"
          >
            <i className="fab fa-twitter-square"></i>
          </a>
          <a
            style={{ color: "black" }}
            target="_blank"
            href="https://www.facebook.com/StarbucksIndonesia/"
          >
            <i className="fab fa-facebook"></i>
          </a>
        </div>
      </div>
      <div style={{backgroundColor: "#434242", color: "white"}}>
        <p>
          <i className="far fa-copyright"></i> Copyright by Melyana
        </p>
      </div>
    </div>
  );
}

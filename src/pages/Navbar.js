import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

export default function Navbar() {
  const [show, setShow] = useState(false);

  const navigate = useNavigate();

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const logout = () => {
    window.location.reload();
    localStorage.clear();
    navigate("/login");
  };
  return (
    <div style={{ fontFamily: "public-sans", fontSize: "19px"}}>
      <nav className="navbar navbar-expand-lg " style={{backgroundColor: "##F0DBDB"}}>
        <div className="container-fluid">
          <a style={{fontSize: "33px"}} className="navbar-brand" href="/">
            <strong ><i >Caffe Online</i></strong>
          </a>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <a className="nav-link active" aria-current="page" href="/">
                  Home
                </a>
              </li>

              <li className="nav-item">
                <a className="nav-link active" href="/cart">
                  Cart
                </a>
              </li>
              {localStorage.getItem("id") !== null ? (
                <>
                  <li>
                    <button className="nav-item float-right border-0 bg-transparent">
                      <a style={{color: "red", fontSize: "19px"}} className="btn" onClick={logout}>
                        Logout
                      </a>
                    </button>
                  </li>
                </>
              ) : (
                <li className="nav-item float-right border-0 bg-transparent">
                  <a style={{color: "green"}} className="btn" href="/login">
                    Login
                  </a>
                </li>
              )}

              <li style={{ margin: "left" }} className="nav-item dropdown">
                <a
                  className="nav-link dropdown-toggle"
                  href="#"
                  role="button"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                >
                  List
                </a>
                <ul className="dropdown-menu">
                  <li>
                    <a className="dropdown-item" href="/makanan">
                      Makanan
                    </a>
                  </li>
                  <li>
                    <hr className="dropdown-divider" />
                  </li>
                  <li>
                    <a className="dropdown-item" href="/minuman">
                      Minuman Dingin
                    </a>
                  </li>
                  <li>
                    <hr className="dropdown-divider" />
                  </li>
                  <li>
                    <a className="dropdown-item" href="/minumanHangat">
                      Minuman Hangat
                    </a>
                  </li>
                </ul>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </div>
  );
}

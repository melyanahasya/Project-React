import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { InputGroup, Form, Modal } from "react-bootstrap";
import axios from "axios";
import Swal from "sweetalert2";

export default function Navbar() {
  const [show, setShow] = useState(false);
  const [gambar, setGambar] = useState("");
  const [produk, setProduk] = useState("");
  const [deskripsi, setDeskripsi] = useState("");
  const [harga, setHarga] = useState("");

  const navigate = useNavigate();

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const addUser = async (e) => {
    e.preventDefault();

    const data = {
      gambar: gambar,
      produk: produk,
      deskripsi: deskripsi,
      harga: Number(harga),
    };

    await axios.post("http://localhost:8000/makanan", data);
    Swal.fire("Good job!", "You clicked the button!", "success")
      .then(() => {
        window.location.reload();
      })
      .catch((error) => {
        alert("terjadi kesalahan" + error);
      });
  };

  const logout = () => {
    window.location.reload();
    localStorage.clear();
    navigate("/login");
  };
  return (
    <div style={{ fontFamily: "public-sans", fontSize: "19px", backgroundColor: "#F9F2ED" }}>
      <nav
        className="navbar navbar-expand-lg "
        style={{ backgroundColor: "##F0DBDB" }}
      >
        <div className="container-fluid">
          <a style={{ fontSize: "33px" }} className="navbar-brand" href="/">
            <strong>
              <i>Caffe Online</i>
            </strong>
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

              {localStorage.getItem("username") !== null ? (
                <>
                  <li
                    style={{ fontSize: "27px" }}
                    className="nav-item float right "
                  >
                    <button className="btn" onClick={handleShow}>
                      Tambah
                    </button>
                  </li>
                  <li className="nav-item">
                    <a className="nav-link active" href="/crud">
                      Table
                    </a>
                  </li>
                 
                </>
              ) : (
                <></>
              )}
              {localStorage.getItem("id") !== null ? (
                <>
                  <li>
                    <button className="nav-item float-right border-0 bg-transparent">
                      <a
                        style={{ color: "red", fontSize: "19px" }}
                        className="btn"
                        onClick={logout}
                      >
                        Logout
                      </a>
                    </button>
                  </li>

                  <li className="nav-item">
                    <a className="nav-link active" href="/cart">
                      Cart
                    </a>
                  </li>
                </>
              ) : (
                <li className="nav-item float-right border-0 bg-transparent">
                  <a
                    style={{ color: "green", fontSize: "19px" }}
                    className="btn"
                    href="/login"
                  >
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
      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton style={{ backgroundColor: "#F0DBDB" }}>
          <Modal.Title>Add User</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form onSubmit={addUser} method="POST">
            <div className="mb-3">
              <Form.Label>
                <strong>Gambar</strong>
              </Form.Label>
              <InputGroup className="d-flex gap-3">
                <Form.Control
                  placeholder="Masukkan gambar"
                  value={gambar}
                  onChange={(e) => setGambar(e.target.value)}
                  required
                />
              </InputGroup>
            </div>

            <div className="mb-3">
              <Form.Label>
                <strong>Nama Produk</strong>
              </Form.Label>
              <InputGroup className="d-flex gap-3">
                <Form.Control
                  placeholder="Masukkan nama produk"
                  value={produk}
                  onChange={(e) => setProduk(e.target.value)}
                  required
                />
              </InputGroup>
            </div>

            <div className="mb-3">
              <Form.Label>
                <strong>Deskripsi</strong>
              </Form.Label>
              <InputGroup className="d-flex gap-3">
                <Form.Control
                  placeholder="Masukkan deskripsi"
                  value={deskripsi}
                  onChange={(e) => setDeskripsi(e.target.value)}
                  required
                />
              </InputGroup>
            </div>

            <div className="mb-3">
              <Form.Label>
                <strong>Harga</strong>
              </Form.Label>
              <InputGroup className="d-flex gap-3">
                <Form.Control
                  placeholder="Masukkan Harga"
                  type="number"
                  value={harga}
                  onChange={(e) => setHarga(e.target.value)}
                  required
                />
              </InputGroup>
            </div>

            <button className="mx-1 button-btl btn" onClick={handleClose}>
              Close
            </button>
            <button
              type="submit"
              className="mx-1 button-btl btn"
              onClick={handleClose}
            >
              save
            </button>
          </Form>
        </Modal.Body>
      </Modal>
    </div>
  );
}

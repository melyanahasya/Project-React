import Navbar from "./Navbar";
import Crud from "../component/Crud";
import "../style/home.css";
import Card from "react-bootstrap/Card";
import ListGroup from "react-bootstrap/ListGroup";
import axios from "axios";
import React, { useEffect, useState } from "react";
import Footer from "./Footer";
import { numberWithCommas } from "../utils/Utils";
import Swal from "sweetalert2";
import AOS from "aos";
import Footers from "./Footers";

export default function Home() {
  const [food, setFood] = useState([]);

  const AddKeranjang = async (food) => {
    await axios.post("http://localhost:8000/keranjang/", food);
    Swal.fire("Good job!", "You clicked the button!", "success")
      .then(() => {
        window.location.reload();
      })
      .catch((error) => {
        alert("terjadi kesalahan" + error);
      });
  };

  const getAll = async () => {
    await axios
      .get("http://localhost:8000/makanan")
      .then((res) => {
        setFood(res.data);
      })
      .catch((error) => {
        alert("terjadi kesalahan" + error);
      });
  };

  useEffect(() => {
    getAll();
  }, []);

  AOS.init();

  return (
    <div style={{ fontFamily: "public-sans",  backgroundColor: "#F9F2ED" }} className="all">
      <Navbar />

      <div
        id="carouselExampleFade"
        className="carousel slide carousel-fade"
        data-bs-ride="carousel"
      >
        <div className="carousel-inner">
          <br />
          <div className="carousel-item active">
            <img
              style={{ widht: "60%", height: "465px" }}
              src="https://cdn-2.tstatic.net/travel/foto/bank/images/promo-starbucks-artinacup-is-back.jpg"
              className="d-block w-100 h-28 px-5 py-0 pb-5"
              alt="Brewed Coffe"
            />
          </div>
          <div className="carousel-item">
            <img
              style={{ widht: "60%", height: "465px" }}
              src="https://www.starbucks.co.id/storage/image/temporary/summernote_image_1648202656.jpg"
              className="d-block w-100 h-28 px-5 py-0 pb-5"
              alt="..."
            />
          </div>
          <div className="carousel-item">
            <img
              style={{ widht: "60%", height: "465px" }}
              src=" https://www.starbucks.co.id/image/banner-promo-card.jpg"
              className="d-block w-100 h-28 px-5 py-0 pb-5"
              alt="..."
            />
          </div>
        </div>
        <button
          className="carousel-control-prev"
          type="button"
          data-bs-target="#carouselExampleFade"
          data-bs-slide="prev"
        >
          <span
            className="carousel-control-prev-icon"
            aria-hidden="true"
          ></span>
          <span className="visually-hidden">Previous</span>
        </button>
        <button
          className="carousel-control-next"
          type="button"
          data-bs-target="#carouselExampleFade"
          data-bs-slide="next"
        >
          <span
            className="carousel-control-next-icon"
            aria-hidden="true"
          ></span>
          <span className="visually-hidden">Next</span>
        </button>
      </div>

      <div>
        <h3>Pilihan Terbaik</h3>
        <hr />

        <div className="kartu">
          <div style={{ gap: "50%", padding: "5%",  backgroundColor: "#F9F2ED" }} className="card">
            <div className="row gy-5">
              {food.map((food) => {
                return (
                  <div className="col-3">
                    <Card
                    data-aos="fade-up"
                    data-aos-anchor-placement="top-center"
                      style={{ width: "18rem", backgroundColor: "#F0DBDB" }}
                    >
                      <Card.Img variant="top" src={food.gambar} alt="" />
                      <Card.Body>
                        <Card.Title>{food.produk}</Card.Title>
                        <Card.Text style={{ fontSize: "17px" }}>
                          {food.deskripsi}
                        </Card.Text>
                      </Card.Body>
                      <ListGroup className="list-group-flush">
                        <ListGroup.Item style={{ backgroundColor: "#F1EEE9" }}>
                          Start From Rp {numberWithCommas(food.harga)}
                        </ListGroup.Item>
                      </ListGroup>
                      <Card.Body>
                        {localStorage.getItem("id") !== null ? (
                          <>
                            <button
                              style={{
                                border: "none",
                                color: "black",
                                backgroundColor: "#F0DBDB",
                              }}
                              onClick={() => AddKeranjang(food)}
                            >
                              <i className="fas fa-cart-plus"></i>
                            </button>
                          </>
                        ) : (
                          <></>
                        )}

                        <Card.Link
                          target="_blank"
                          style={{ color: "black" }}
                          className="button"
                          href={food.viewmore}
                        >
                          View More
                        </Card.Link>
                      </Card.Body>
                    </Card>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
      {/* <Footer /> */}
      <Footers/>
    </div>
  );
}

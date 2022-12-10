import axios from "axios";
import React, { useEffect, useState } from "react";
import { InputGroup, Form } from "react-bootstrap";
import { useNavigate, useParams } from "react-router-dom";
import Swal from "sweetalert2";

function Edit() {
  const param = useParams();
  const [gambar, setGambar] = useState("");
  const [produk, setProduk] = useState("");
  const [deskripsi, setDeskripsi] = useState("");
  const [harga, setHarga] = useState("");

  const navigate = useNavigate();

  useEffect(() => {
    axios
      .get("http://localhost:8000/makanan/" + param.id)
      .then((response) => {
        const newFood = response.data;
        setGambar(newFood.gambar);
        setProduk(newFood.produk);
        setDeskripsi(newFood.deskripsi);
        setHarga(newFood.harga);
      })
      .catch((error) => {
        alert("terjadi kesalahan sir" + error);
      });
  }, []);

  const submitActionHandler = async (event) => {
    event.preventDefault();
    await Swal.fire({
      title: "Are you sure?",
      text: "if true you can click Ok",
      icon: "question",
      showCancelButton: true,
    })
      .then((result) => {
        if (result.isConfirmed) {
          axios.put("http://localhost:8000/keranjang/" + param.id, {
            gambar: gambar,
            produk: produk,
            deskripsi: deskripsi,
            harga: harga,
          });
          Swal.fire("Deleted!", "Your file has been deleted.", "success");
          window.location.reload();
        }
      })
      .then(() => {
        navigate("/cart");
        window.location.reload();
      })
      .catch((error) => {
        alert("Terjadi kesalahan" + error);
      });
  };

  return (
    <div className="edit mx-5">
      <div className="container my-5">
        <Form onSubmit={submitActionHandler}>


          <div className="name mb-3">
            <Form.Label>
              <strong>Gambar</strong>
            </Form.Label>
            <InputGroup className="d-flex gap-3">
              <Form.Control
                placeholder="gambar"
                value={gambar}
                onChange={(e) => setGambar(e.target.value)}
              />
            </InputGroup>
          </div>
          <div className="name mb-3">
            <Form.Label>
              <strong>Nama Produk</strong>
            </Form.Label>
            <InputGroup className="d-flex gap-3">
              <Form.Control
                placeholder="produk"
                value={produk}
                onChange={(e) => setProduk(e.target.value)}
              />
            </InputGroup>
          </div>

          <div className="place-of-birth mb-3">
            <Form.Label>
              <strong>Deskripsi</strong>
            </Form.Label>
            <InputGroup className="d-flex gap-3">
              <Form.Control
                placeholder="Deskripsi"
                value={deskripsi}
                onChange={(e) => setDeskripsi(e.target.value)}
              />
            </InputGroup>
          </div>

          <div className="mb-3">
            <Form.Label>
              <strong>Harga</strong>
            </Form.Label>
            <InputGroup className="d-flex gap-3">
              <Form.Control
                type="number"
                placeholder="harga"
                value={harga}
                onChange={(e) => setHarga(e.target.value)}
              />
            </InputGroup>
          </div>

          <div className="d-flex justify-content-end align-items-center mt-2">
            <button className="buton btn" type="submit">
              Save
            </button>
          </div>
        </Form>
      </div>
    </div>
  );
}

export default Edit;

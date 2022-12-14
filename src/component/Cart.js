import axios from "axios";
import React, { useEffect, useState } from "react";
import Swal from "sweetalert2";
import { numberWithCommas } from "../utils/Utils";

export default function Cart() {
  const [food, setFood] = useState([]);
  const total = food.reduce((a, b) => a + b.harga, 0);  // buat total harga

 

  const AddPesanan = async (food) => {
    await axios.post(" http://localhost:8000/pesanan", food);
    Swal.fire("Good job!", "You clicked the button!", "success")
        .then(() => {
          window.location.reload();
        })
        .catch((error) => {
          alert("terjadi kesalahan" + error);
        });
  }




  const DeletePesanan = async (food) => {
    await axios.delete("http://localhost:8000/keranjang/", food);
    Swal.fire("Good job!", "You clicked the button!", "success")
      .then(() => {
        window.location.reload();
      })
      .catch((error) => {
        alert("terjadi kesalahan" + error);
      });
  };

  const getAll = () => {
    axios
      .get("http://localhost:8000/keranjang")
      .then((res) => {
        setFood(res.data);
      })
      .catch((error) => {
        alert("terjadi kesalahan" + error);
      });
  };

  const deleteUser = async (id) => {
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
    }).then((result) => {
      if (result.isConfirmed) {
        axios.delete("http://localhost:8000/keranjang/" + id);
        Swal.fire("Deleted!", "Your file has been deleted.", "success");
        window.location.reload();
      }
    });
    getAll();
  };

  useEffect(() => {
    getAll();
  }, []);
  return (
    <div style={{ fontFamily: "public-sans", fontSize: "19px" }}>
      <div>
        <table className="table">
          <thead>
            <tr>
              <th scope="col">No</th>
              <th scope="col">Gambar</th>
              <th style={{ width: "200px" }} scope="col">
                Nama Produk
              </th>
              <th style={{ width: "500px" }} scope="col">
                Deskripsi
              </th>
              <th scope="col">Harga (Rp)</th>
              {localStorage.getItem("id") !== null ? (
                <th>Action</th>
              ) : (
                <></>
              )}{" "}
            </tr>
          </thead>
          <tbody>
            {food.map((food, index) => {
              return (
                <tr key={food.id}>
                  <td>{index + 1}</td>
                  <td>
                    <img style={{ width: "80px" }} src={food.gambar} alt="" />
                  </td>
                  <td>{food.produk}</td>
                  <td style={{ fontSize: "17px" }}>{food.deskripsi}</td>
                  <td>{numberWithCommas(food.harga)}</td>
                  {localStorage.getItem("id") !== null ? (
                    <td className="action">
                      <button
                        variant="danger"
                        style={{ border: "none" }}
                        className="mx-1"
                        onClick={() => deleteUser(food.id)}
                      >
                        <i className="fas fa-trash-alt"></i>
                      </button>
                    </td>
                  ) : (
                    <></>
                  )}
                </tr>
              );
            })}
          </tbody>
        </table>
        <strong
          style={{
            backgroundColor: "#F0DBDB",
            display: "block",
            width: "170px",
            padding: "5px",
            margin: "10px",
          }}
        >
          Total : {total}
        </strong>
        <button
          style={{
            border: "none",
            display: "block",
            width: "170px",
            padding: "5px",
            margin: "10px",
            backgroundColor: "#F0DBDB",
          }}
          onClick={() => AddPesanan (food)}  
           >
          Chekout
        </button>
      </div>
    </div>
  );
}

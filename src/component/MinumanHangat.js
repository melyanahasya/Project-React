import axios from "axios";
import React, { useEffect, useState } from "react";

export default function Minuman() {
  const [food, setFood] = useState([]);

  const getAll = () => {
    axios
      .get("http://localhost:8000/minumanHangat")
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
  return (
    <div  style={{fontFamily: "public-sans", fontSize: "19px"}}>
      <h4>Minuman Hangat</h4>

      <hr />
      <table className="table">
        <thead>
          <tr>
            <th scope="col">No</th>
            <th scope="col">Gambar</th>
            <th scope="col">Nama Minuman</th>
            <th scope="col">Harga (Rp)</th>
            <th scope="col">Buy</th>
          </tr>
        </thead>
        <tbody>
          {food.map((food, index) => {
            return (
              <tr key={food.id}>
                <td>{index + 1}</td>
                <td>
                  <img style={{ width: "80px" }} src={food.gambarHangat} alt="" />
                </td>
                <td>{food.namaMinumanHangat}</td>
                <td>{food.hargaHangat}</td>
                <td>
                  <i className="fas fa-cart-plus"></i>
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>
      <br />
      
      <a href="/">
      <i className="fas fa-long-arrow-left"></i>
      </a>
    </div>
  );
}

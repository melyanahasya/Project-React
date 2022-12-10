import axios from "axios";
import React, { useEffect, useState } from "react";

export default function Makanan() {
  const [food, setFood] = useState([]);

  const getAll = () => {
    axios
      .get("http://localhost:8000/makananRingan")
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
      <h4>Makanan Ringan</h4>
      <hr />
      <table className="table">
        <thead>
          <tr>
            <th scope="col">No</th>
            <th scope="col">Gambar</th>
            <th scope="col">Nama Makanan</th>
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
                  <img style={{ width: "80px" }} src={food.gambar} alt="" />
                </td>
                <td>{food.namaMakanan}</td>
                <td>{food.harga}</td>
                <td>
                  <i className="fas fa-cart-plus"></i>
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>
      <a href="/">
        <i className="fas fa-long-arrow-left"></i>
      </a>
    </div>
  );
}

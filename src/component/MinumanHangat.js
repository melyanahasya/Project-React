import axios from "axios";
import React, { useEffect, useState } from "react";
import Swal from "sweetalert2";
import { numberWithCommas } from "../utils/Utils";

export default function Minuman() {
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
    <div>
    <table>
  <caption> Minuman Hangat : </caption>
  <thead>
    <tr>
      <th scope="col" style={{width: "15px"}}>No</th>
      <th scope="col">Gambar</th>
      <th scope="col">Makanan</th>
      <th scope="col">Deskripsi</th>
      <th scope="col">Harga (Rp)</th>
      <th scope="col">{localStorage.getItem("id") !== null ? (
                <>
                  <a style={{ color: "black", textDecoration: "none" }} href="">
                    Buy
                  </a>
                </>
              ) : (
                <></>
              )}</th>
    </tr>
  </thead>
  <tbody>
  {food.map((food, index) => {
    return (
    <tr  key={food.id}>
      <td data-label="No">{index + 1}</td>
      <td data-label="Gambar"><img style={{ width: "80px" }} src={food.gambar} alt="" /></td>
      <td data-label="Produk">{food.produk}</td>
      <td data-label="Deskripsi">{food.deskripsi}</td>
      <td data-label="Harga">{numberWithCommas(food.harga)}</td>
      <td data-label="Buy"><button style={{border: "none"}}  onClick={() => AddKeranjang(food)}><i className="fas fa-cart-plus"></i></button></td>
    </tr>
  )}
  )
    }
  </tbody>
</table>
<a href="/">
        <i className="fas fa-long-arrow-left"></i>
      </a>
</div>
  
  );
}

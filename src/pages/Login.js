import axios from 'axios';
import React, { useState } from 'react'
import { InputGroup, Form } from 'react-bootstrap'
import { useNavigate } from 'react-router-dom';
import Swal from 'sweetalert2';


export default function Login() {
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");

    const navigate = useNavigate();
    
    const login = async (e) => {
        e.preventDefault();
        axios.get(" http://localhost:8000/admins").then(({data}) => {
            const admin = data.find(
                (x) => x.username === username && x.password === password
            );
            if (admin) {
                Swal.fire({
                    icon: "success",
                    title: "masuk sebagai Admin",
                    showConfirmButton: false,
                    timer: 2500
                })
                localStorage.setItem("username" , admin.username)
                localStorage.setItem("id" , admin.id)
                navigate("/")
                setTimeout(() => {
                    window.location.reload();
                }, 1000)
            } else {
                Swal.fire({
                    icon: "error",
                    title: "Username atau password tidak valid",
                    showConfirmButton: false,
                    timer: 2500
                })
            }
        })
    }
  return (
    <div style={{ backgroundColor: "#F0DBDB" }} className="container border my-5 pt-3 pb-5 px-5 form-login ">
        <div style={{fontFamily: "public-sans", fontSize: "17px"}}>
        <h1 className="mb-5">Form Login Admin</h1>
        <Form  onSubmit={login} method="POST">
            <div className="mb-3">
                <Form.Label>
                    <strong>Usename</strong>
                </Form.Label>
                <InputGroup className="d-flex gap-3">
                    <Form.Control placeholder="Masukkan Username Anda"
                    type="text"
                    value={username}
                    onChange={(e) => setUsername(e.target.value)}/>
                </InputGroup>
            </div>

            <div className="mb-3">
                <Form.Label>
                    <strong>Password</strong>
                </Form.Label>
                <InputGroup className="d-flex gap-3">
                    <Form.Control placeholder="Masukkan Password Anda"
                    type="password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}/>
                </InputGroup>
            </div>
            <button variant="primary" type="submit" className="mx-1 buton btn">Login</button>
            <a style={{textDecoration: "none"}}href="/loginUser">Sebagai User</a>
            {/* <a style={{textDecoration: "none"}}href="/register">Jika Belum Punya Akun Silahkan Register</a> */}
            <p>Jika belum punya akun silahkan <a style={{textDecoration: "none"}} href="/register">Register</a></p>


        </Form>
        </div>
    </div>
  )
}

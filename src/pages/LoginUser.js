import axios from 'axios';
import React, { useState } from 'react'
import { InputGroup, Form } from 'react-bootstrap'
import { useNavigate } from 'react-router-dom';
import Swal from 'sweetalert2';


export default function LoginUser() {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const navigate = useNavigate();
    
    const login = async (e) => {
        e.preventDefault();
        axios.get(" http://localhost:8000/users").then(({data}) => {
            const user = data.find(
                (x) => x.email === email && x.password === password
            );
            if (user) {
                Swal.fire({
                    icon: "success",
                    title: "masuk sebagai" + email,
                    showConfirmButton: false,
                    timer: 2500
                })
                localStorage.setItem("id" , user.id)
                navigate("/")
                setTimeout(() => {
                    window.location.reload();
                }, 1000)
            } else {
                Swal.fire({
                    icon: "error",
                    title: "Email atau password tidak valid",
                    showConfirmButton: false,
                    timer: 2500
                })
            }
        })
    }
  return (
    <div style={{ backgroundColor: "#F0DBDB" }} className="container border my-5 pt-3 pb-5 px-5 form-login">
        <div style={{fontFamily: "public-sans", fontSize: "17px"}}>
        <h1 className="mb-5">Form Login User</h1>
        <Form  onSubmit={login} method="POST">
            <div className="mb-3">
                <Form.Label>
                    <strong>Email</strong>
                </Form.Label>
                <InputGroup className="d-flex gap-3">
                    <Form.Control placeholder="Masukkan Email Anda"
                    type="text"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}/>
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
        </Form>
        </div>
    </div>
  )
}

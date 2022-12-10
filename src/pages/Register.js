import axios from "axios";
import React, { useState } from "react";
import { InputGroup, Form } from "react-bootstrap";
import Swal from "sweetalert2";
import { useNavigate } from "react-router-dom";

export default function Register() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const navigate = useNavigate();

  const register = async (e) => {
    e.preventDefault();
    await axios.post("http://localhost:8000/users", {
      email: email,
      password: password,
    });
    {
      Swal.fire("Succes!", "You clicked the button!", "success")
        .then(() => {
          navigate("/");
          window.location.reload();
        })
        .catch((error) => {
          alert("Terjadi Kesalahan " + error);
        });
    }
  };
  return (
    <div className="container border my-5 pt-3 pb-5 px-5 form-login">
      <h1 className="mb-5">Form Register</h1>
      <Form onSubmit={register} method="POST">
        <div className="mb-3">
          <Form.Label>
            <strong>Email</strong>
          </Form.Label>
          <InputGroup className="d-flex gap-3">
            <Form.Control
              placeholder="Email"
              required
              type="text"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </InputGroup>
        </div>

        <div className="mb-3">
          <Form.Label>
            <strong>Password</strong>
          </Form.Label>
          <InputGroup className="d-flex gap-3">
            <Form.Control
              placeholder="Password"
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </InputGroup>
        </div>
        <button variant="primary" type="submit" className="mx-1 buton btn">
          Register
        </button>
      </Form>
    </div>
  );
}

import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Register from "./pages/Register";
import Home from "./pages/Home";
import Login from "./pages/Login";
import Crud from "./component/Crud";
import Makanan from "./component/Makanan";
import Minuman from "./component/Minuman";
import MinumanHangat from "./component/MinumanHangat";
import LoginUser from "./pages/LoginUser";
import Edit from "./pages/Edit";
import Cart from "./component/Cart";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/register" element={<Register />} />
          <Route path="/login" element={<Login />} />
          <Route path="/loginUser" element={<LoginUser />} />
          <Route path="/crud" element={<Crud />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="/makanan" element={<Makanan />} />
          <Route path="/minuman" element={<Minuman />} />
          <Route path="/minumanHangat" element={<MinumanHangat />} />
          <Route path="/edit/:id" element={<Edit />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;

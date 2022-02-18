import logo from "./logo.svg";
import "./App.css";
import Header from "./core/components/Header";
import Landing from "./core/components/Landing";
import Footer from "./core/components/Footer";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { Login } from "./auth/components/Login";
import Register from "./auth/components/Register";

function App() {
  return (
    <div className="App">
      <Router>
        <Header></Header>
        <Routes>
          <Route path="/" element={<Landing></Landing>}></Route>
          <Route path="register" element={<Register></Register>}></Route>
          <Route path="login" element={<Login></Login>}></Route>
        </Routes>
        <Footer></Footer>
      </Router>
    </div>
  );
}

export default App;

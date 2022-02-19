import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import "./App.css";
import { AuthRouters } from "./auth/routings/AuthRouters";
import Footer from "./core/components/layouts/Footer";
import Header from "./core/components/layouts/Header";
import Landing from "./core/components/layouts/Landing";

function App() {
  return (
    <div className="App">
      <Router>
        <Header></Header>
        <Routes>
          <Route path="/" element={<Landing></Landing>}></Route>
          <Route path="/auth/*" element={<AuthRouters></AuthRouters>}></Route>
        </Routes>
        <Footer></Footer>
      </Router>
    </div>
  );
}

export default App;

import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import "./App.css";
import { AuthRouters2 } from "./auth/routings/AuthRouters2";
import Footer from "./core/components/layouts/Footer";
import Header from "./core/components/layouts/Header";
import Landing from "./core/components/layouts/Landing";
import { Test } from "./propsDemo/Test";

function App() {
  return (
    <div className="App">
      <Router>
        <Header></Header>
        <Test></Test>
        <Routes>
          <Route path="/" element={<Landing></Landing>}></Route>
          <Route path="/auth/*" element={<AuthRouters2></AuthRouters2>}></Route>
        </Routes>
        <Footer></Footer>
      </Router>
    </div>
  );
}

export default App;

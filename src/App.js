import { useEffect } from "react";
import { Provider } from "react-redux";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import "./App.css";
import { loadUser } from "./app/auth/action/authAction";
import { AuthRouters } from "./app/auth/routings/AuthRouters";
import Footer from "./app/core/components/layouts/Footer";
import Header from "./app/core/components/layouts/Header";
import Landing from "./app/core/components/layouts/Landing";
import DashboardRouter from "./app/dashboard/routings/DashboardRouter";
import store from "./redux/store";
import setAuthToken from "./utils/setAuthToken";

function App() {
  // it should do some fundamental checks for token.
  // useEffect
  useEffect(() => {
    if (localStorage.token) {
      setAuthToken(localStorage.token);
      store.dispatch(loadUser());
    }
  }, []);

  return (
    <div className="App">
      <Provider store={store}>
        <Router>
          <Header></Header>
          <Routes>
            <Route path="/" element={<Landing></Landing>}></Route>
            <Route path="/auth/*" element={<AuthRouters></AuthRouters>}></Route>
            <Route
              path="/dashboard/*"
              element={<DashboardRouter></DashboardRouter>}
            ></Route>
          </Routes>
          <Footer></Footer>
        </Router>
      </Provider>
    </div>
  );
}

export default App;

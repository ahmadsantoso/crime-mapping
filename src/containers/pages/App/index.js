import React from "react";
import "./App.css";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Dashboard from "../Dashboard/Dashboard";
import Login from "../Login/Login";
import Register from "../Register/Register";
import Laporan from "../Laporan/Laporan";
import Analisa from "../Analisa/Analisa";
import PengaduanDetail from "../PengaduanDetail/PengaduanDetail";

function App() {
  return (
    <Router>
      <div>
        <Route path="/Dashboard" exact component={Dashboard} />
        <Route path="/Laporan" component={Laporan} />
        <Route path="/Analisa" component={Analisa} />
        <Route path="/Login" component={Login} />
        <Route path="/Register" component={Register} />
        <Route path="/pengaduan/detail/:id" component={PengaduanDetail} />
      </div>
    </Router>
  );
}

export default App;

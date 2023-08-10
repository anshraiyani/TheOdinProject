import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import About from "./components/About";
import OrderSummary from "./components/OrderSummary";
import Home from "./components/Home";
import Navbar from "./components/Navbar";
import NoMatch from "./components/NoMatch";

export default function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="about" element={<About />} />
        <Route path="order-summary" element={<OrderSummary />} />
        <Route path="*" element={<NoMatch />} />
      </Routes>
    </Router>
  );
}

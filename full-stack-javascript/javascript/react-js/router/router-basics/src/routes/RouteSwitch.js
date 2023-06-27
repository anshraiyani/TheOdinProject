import React from "react";
import App from "../components/App";
import Profiles from "../components/Profiles";
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";

export default function RouteSwitch() {
  return (
    <>
      <BrowserRouter>
        <nav>
          <ul>
            <li>
              <Link to="/">App</Link>
            </li>
            <li>
              <Link to="/profiles">Profiles</Link>
            </li>
          </ul>
        </nav>
        <Routes>
          <Route path="/" element={<App />} />
          <Route path="/profiles" element={<Profiles />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}
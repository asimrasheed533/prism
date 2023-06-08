import React, { Component } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./screens/Home";
import Onboarding1 from "./screens/Onboarding1";

export default class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/onboarding1" element={<Onboarding1 />} />
        </Routes>
      </BrowserRouter>
    );
  }
}

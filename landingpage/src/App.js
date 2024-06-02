import React from "react";
import Navbar from "./components/navbar/navbar";
import { Container } from "@mui/material";
import Hero from "./components/hero/hero";
import "./App.css";
function App() {
  return (
    <div className="App">
      <div className="main">
        <Container maxWidth="lg">
          <Navbar />
          <Hero />
        </Container>
      </div>
    </div>
  );
}

export default App;

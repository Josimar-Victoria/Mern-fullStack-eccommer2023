import React from "react";
import { Footer, Header } from "./components";
import "./App.css";
import { Home } from "./pages";

function App() {
  return (
    <div className="App">
      <Header />
      <Home />
      <Footer />
    </div>
  );
}

export default App;

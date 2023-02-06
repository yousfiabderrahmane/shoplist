import React from "react";
import "./App.css";
import { Dashboard } from "./components/Dashboard";
import { Inputs } from "./components/Inputs";
import { Navbar } from "./components/Navbar";

function App() {
  return (
    <div className="App">
      <Navbar />
      <Inputs />
      <Dashboard />
    </div>
  );
}

export default App;

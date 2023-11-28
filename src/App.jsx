import { Routes, Route } from "react-router-dom";
import { useState } from "react";
import "./App.css";

// Components
import Nav from "./Components/Nav";

// Pages
import Index from "./Pages/Index";
import Home from "./Pages/Home";
import New from "./Pages/New";
import Show from "./Pages/SHow";

function App() {
  return (
    <>
      <Nav />
      <main>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/bookmarks" element={<Index />} />
          <Route path="/bookmarks/new" element={<New />} />
          <Route path="/bookmarks/:id" element={<Show />} />
        </Routes>
      </main>
    </>
  );
}

export default App;

import { Routes, Route } from "react-router-dom";
import { useState } from "react";
import "./App.css";

// Components
import Nav from "./Components/Nav";

// Pages
import Index from "./Pages/Index";
// import Show from "./Pages/Show";
// import New from "./Pages/New";

function App() {
  return (
    <>
      <Nav />
      <main>
        <Routes>
          <Route path="/bookmarks" element={<Index />} />
        </Routes>
      </main>
    </>
  );
}

export default App;

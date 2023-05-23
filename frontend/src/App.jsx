import { BrowserRouter, Routes, Route } from "react-router-dom";
import Artistes from "@pages/Artistes";
import OneArtist from "@pages/OneArtist";
import "./App.css";

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <h1 className="titre"> SHZ BLOG </h1>
      </div>
      <Routes>
        <Route path="/" element={<Artistes />} />
        <Route path="/artistes/:id" element={<OneArtist />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;

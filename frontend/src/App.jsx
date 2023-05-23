import { BrowserRouter, Routes, Route } from "react-router-dom";
import Artistes from "@pages/Artistes";
import "./App.css";

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <h1 className="titre"> SHZ BLOG </h1>
      </div>
      <Routes>
        <Route path="/" element={<Artistes />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;

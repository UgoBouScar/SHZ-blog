import { BrowserRouter, Routes, Route } from "react-router-dom";
import Articles from "@pages/Articles";
import "./App.css";

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <h1 className="titre"> SHZ BLOG </h1>
      </div>
      <Routes>
        <Route path="/" element={<Articles />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;

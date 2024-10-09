import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import { NavBar } from "./compoments/navbar/NavBar";
import { Home } from "./pages/Dashboard/Home";

function App() {
  return (
    <BrowserRouter>
      <div id="all-app">
        <NavBar />
        <Routes>
          <Route path="/" element={<Home />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;

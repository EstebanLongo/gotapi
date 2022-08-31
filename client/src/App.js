import { Route, Routes, BrowserRouter } from "react-router-dom";
import "./App.css";
import Home from "./components/Home/Home";
import CharacterDetail from "./components/CharacterDetail/CharacterDetail.jsx";
import NavBar from "./components/NavBar/NavBar";
import LandingPage from "./components/LandingPage/LandingPage";
import FormCreate from "./components/FormCreate/FormCreate";

export default function App() {
  return (
    <div className="App">
      <BrowserRouter>
      {/* <NavBar /> */}
        <Routes>
          <Route index element={<LandingPage />} />
          <Route path="/characters" element={<Home />} />
          <Route path="/" element={<NavBar />} />
          <Route path="/characterdetail/:id" element={<CharacterDetail />} />
          <Route path="/character/create" element={<FormCreate />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

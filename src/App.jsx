import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Ebooks from "./pages/Ebooks";
import AreaMembros from "./pages/AreaMembros";

export default function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/ebooks" element={<Ebooks />} />
      <Route path="/area-de-membros" element={<AreaMembros />} />
    </Routes>
  );
}

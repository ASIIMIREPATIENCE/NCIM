
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import "./App.css";
import "./styles/global.css";

import PublicLayout from "./layouts/PublicLayout";
import Home from "./pages/public/Home";
import About from "./pages/public/About";
import Programmes from "./pages/public/Programmes";
import Events from "./pages/public/Events";
import Stories from "./pages/public/Stories";
import GetInvolved from "./pages/public/GetInvolved";
import Donate from "./pages/public/Donate";
import Contact from "./pages/public/Contact";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<PublicLayout />}>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/programmes" element={<Programmes />} />
          <Route path="/events" element={<Events />} />
          <Route path="/stories" element={<Stories />} />
          <Route path="/get-involved" element={<GetInvolved />} />
          <Route path="/donate" element={<Donate />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="*" element={<Navigate to="/" replace />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;

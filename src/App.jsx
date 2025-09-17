import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import Navbar from "./components/Navbar.jsx";
import Avatars3 from "./components/Avatars3.jsx";
import ApplyLeave from "./components/ApplyLeave.jsx";
import CancelLeave from "./components/CancelLeave.jsx";
import Avatars4 from "./components/Avatars4.jsx";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <Router>
        <Navbar />
        <Routes>
          <Route path="/" element={<CancelLeave />} />
          {/* <Route path="/cancel-leave" element={<CancelLeave />} /> */}
          <Route path="/ApplyLeave" element={<ApplyLeave />} />
          <Route path="/Avatars3" element={<Avatars3 />} />
          <Route path="/Avatars4" element={<Avatars4 />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;

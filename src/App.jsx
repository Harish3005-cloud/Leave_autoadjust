import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import Navbar from "./components/Navbar.jsx";
import Avatars3 from "./components/Avatars3.jsx";
import ApplyLeave from "./components/ApplyLeave.jsx";
import CancelLeave from "./components/CancelLeave.jsx";
import Avatars4 from "./components/Avatars4.jsx";
import Leave_Balance from "./components/Leave_Balance.jsx";
import Leave_state1 from "./components/Leave_state1.jsx";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <Router>
        <Navbar />
        <Routes>
          
          {/* <Route path="/cancel-leave" element={<CancelLeave />} /
           */}
          <Route path="/Leave_state1" element={<Leave_state1 />} />
          <Route path="/ApplyLeave" element={<ApplyLeave />} />
          <Route path="/Leave_Balance" element={<Leave_Balance />} />
        
        </Routes>
      </Router>
    </>
  );
}

export default App;

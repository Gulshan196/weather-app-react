import { useState } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Cities from "./components/Cities";
import Home from "./components/Home";
import SideBar from "./components/SideBar";

function App() {
  const [active,setActive] = useState(false);
  return (
    <div className="home-body">
      <BrowserRouter>
      <SideBar active={active}/>
      <Routes>
        <Route path="/" element={<Home setActive={setActive}/>} />
        <Route path="/cities" element={<Cities />} />
      </Routes>
      </BrowserRouter>
      {/* <Home /> */}
    </div>
  );
}

export default App;

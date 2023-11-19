import { BrowserRouter, Route, Routes } from "react-router-dom";

import Home from "./pages/Home";
import NotFound from "./pages/NotFound";
import Navbar from "./components/navbar/Navbar";

import Menu from "./pages/Menu";


function App() {
  return (
    <BrowserRouter>
      <Navbar/>
        <Routes>
          <Route path="/" element={<Home/>}/>
          <Route path="/menu" element={<Menu/>}/>
          <Route path="/notfound" element={<NotFound/>}/>
          <Route path="/*" element={<NotFound/>}/>
        </Routes>
    </BrowserRouter>
  );
}

export default App;

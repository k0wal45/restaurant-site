import { BrowserRouter, Route, Routes } from "react-router-dom";

import Home from "./pages/Home";
import NotFound from "./pages/NotFound";
import Navbar from "./components/navbar/Navbar";
import Footer from "./components/Footer";


function App() {
  return (
    <BrowserRouter>
      <Navbar/>
        <Routes>
          <Route path="/" element={<Home/>}/>
          <Route path="/notfound" element={<NotFound/>}/>
          <Route path="/*" element={<NotFound/>}/>
        </Routes>
      <Footer/>
    </BrowserRouter>
  );
}

export default App;

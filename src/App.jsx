import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/home/index.jsx";
import Clinic from "./pages/clinic/index.jsx";
import { ToastContainer } from "react-toastify";

const App = () => {
  return (
    <>
    <ToastContainer/>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/clinic" element={<Clinic />} />
        </Routes>
      </BrowserRouter>
    </>
  );
};

export default App;

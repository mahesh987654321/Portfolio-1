import { Route, Routes } from "react-router-dom";
import AllAbout from "./Page/AllAbout/AllAbout";
import AllContact from "./Page/AllContact/AllContact";
import Appiontment from "./Page/Appointment/Appiontment";
import Contact from "./Page/Contact/Contact";
import Home from "./Page/Home";
import Navbar from "./Page/Navbar";

function App() {
  return (
    <div className="App">
      <Navbar></Navbar>
      <Routes>
        <Route path="/" element={<Home></Home>}></Route>
        <Route path="/about" element={<AllAbout></AllAbout>}></Route>
        <Route
          path="/appiontment"
          element={<Appiontment></Appiontment>}
        ></Route>
        <Route path="/contact" element={<AllContact></AllContact>}></Route>
        <Route path="/" element={<Home></Home>}></Route>
        <Route path="/" element={<Home></Home>}></Route>
        <Route path="/" element={<Home></Home>}></Route>
      </Routes>
    </div>
  );
}

export default App;

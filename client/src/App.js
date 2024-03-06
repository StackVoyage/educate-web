import "./App.css";
import Home from "./components/Home";
import UserNavbar from "./components/UserNavbar";
import Navbar from "./components/admin/Navbar";
import { Route, Routes } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <>
        <Navbar />
        {/* <UserNavbar /> */}
        <Routes>
          <Route path="/" element={<Home />} />
        </Routes>
      </>
    </div>
  );
}

export default App;

import "./App.css";
import Home from "./components/Home";
import UserNavbar from "./components/UserNavbar";
import Navbar from "./components/admin/Navbar";
import { Route, Routes } from "react-router-dom";
import SignIn from "./components/auth/SignIn";

import SignUp from "./components/auth/SignUp";
import Enquiry from "./components/Enquiry";

function App() {
  return (
    <div className="App">
      <>
        <Navbar />

        {/* <UserNavbar /> */}
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/sign-in" element={<SignIn />} />
          <Route path="/sign-out" element={<SignUp />} />
          <Route path="/enquiry" element={<Enquiry />} />
        </Routes>
      </>
    </div>
  );
}

export default App;

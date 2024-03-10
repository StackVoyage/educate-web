import "./App.css";
import Home from "./components/Home";
import UserNavbar from "./components/UserNavbar";
import Navbar from "./components/admin/Navbar";
import { Route, Routes } from "react-router-dom";
import SignIn from "./components/auth/SignIn";

import SignUp from "./components/auth/SignUp";
import Enquiry from "./components/Enquiry";
import ContactPage from "./components/Contact";
import BookDemo from "./components/BookDemo";
import FAQ from "./components/FAQ";
import Faculty from "./components/Faculty";
import Courses from "./components/Courses";

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
          <Route path="/contact" element={<ContactPage />} />
          <Route path="/book-demo" element={<BookDemo />} />
          <Route path="/asking-questions" element={<FAQ />} />
          <Route path="/faculty" element={<Faculty />} />
          <Route path="/courses" element={<Courses />} />
        </Routes>
      </>
    </div>
  );
}

export default App;

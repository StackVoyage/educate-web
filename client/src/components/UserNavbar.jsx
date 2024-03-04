// import React, { useState } from "react";
// import { NavLinkItemDesktop, NavLinkItemMobile } from "./admin/Navbar";
// import { FaBars, FaTimes } from "react-icons/fa";

// const UserNavbar = () => {
//   const [navOpen, setNavOpen] = useState(false);

//   const toggleNav = () => {
//     setNavOpen(!navOpen);
//   };
//   return (
//     <div className="w-full h-20 bg-violet-500 flex justify-evenly items-center  ">
//       <ul className="hidden md:flex gap-20 font-semibold ">
//         <NavLinkItemDesktop to="/courses">Courses</NavLinkItemDesktop>
//         <NavLinkItemDesktop to="/results">Results</NavLinkItemDesktop>
//         <NavLinkItemDesktop to="/faculty">Faculty</NavLinkItemDesktop>
//         <NavLinkItemDesktop to="/fee_structure">
//           Fee Structure
//         </NavLinkItemDesktop>
//         <NavLinkItemDesktop to="/testimonials">Testimonials</NavLinkItemDesktop>
//         <NavLinkItemDesktop to="/faqs">FAQs</NavLinkItemDesktop>
//         <NavLinkItemDesktop to="/admission">Admission</NavLinkItemDesktop>
//       </ul>
//       <div
//         onClick={toggleNav}
//         className="cursor-pointer text-white md:hidden pr-4 z-10"
//       >
//         {navOpen ? <FaTimes size={30} /> : <FaBars size={30} />}
//       </div>
//       {navOpen && (
//         <ul className="md:hidden flex flex-col justify-center items-center absolute left-0 w-full top-20 ">
//           <NavLinkItemMobile to="/courses">Courses</NavLinkItemMobile>
//           <NavLinkItemMobile to="/results">Results</NavLinkItemMobile>
//           <NavLinkItemMobile to="/faculty">Faculty</NavLinkItemMobile>
//           <NavLinkItemMobile to="/fee_structure">
//             Fee Structure
//           </NavLinkItemMobile>
//           <NavLinkItemMobile to="/testimonials">Testimonials</NavLinkItemMobile>
//           <NavLinkItemMobile to="/faqs">FAQs</NavLinkItemMobile>
//           <NavLinkItemMobile to="/admission">Admission</NavLinkItemMobile>
//         </ul>
//       )}
//     </div>
//   );
// };

// export default UserNavbar;
import React, { useState } from "react";
import { NavLinkItemDesktop, NavLinkItemMobile } from "./admin/Navbar";
import { FaBars, FaTimes } from "react-icons/fa";

const UserNavbar = () => {
  const [navOpen, setNavOpen] = useState(false);

  const toggleNav = () => {
    setNavOpen(!navOpen);
  };

  return (
    <div className="relative">
      {/* Marquee Component */}

      {/* User Navbar */}
      <div className="w-full h-20 bg-violet-500 flex justify-evenly items-center overflow-hidden transition-all duration-300 ">
        <ul className="hidden md:flex gap-20 font-semibold ">
          <NavLinkItemDesktop to="/courses">Courses</NavLinkItemDesktop>
          <NavLinkItemDesktop to="/results">Results</NavLinkItemDesktop>
          <NavLinkItemDesktop to="/faculty">Faculty</NavLinkItemDesktop>
          <NavLinkItemDesktop to="/fee_structure">
            Fee Structure
          </NavLinkItemDesktop>
          <NavLinkItemDesktop to="/testimonials">
            Testimonials
          </NavLinkItemDesktop>
          <NavLinkItemDesktop to="/faqs">FAQs</NavLinkItemDesktop>
          <NavLinkItemDesktop to="/admission">Admission</NavLinkItemDesktop>
        </ul>
        <div
          onClick={toggleNav}
          className="cursor-pointer text-white md:hidden pr-4 z-10"
        >
          {navOpen ? <FaTimes size={30} /> : <FaBars size={30} />}
        </div>
      </div>

      {/* Mobile Nav Links */}
      {navOpen && (
        <ul className="md:hidden flex flex-col justify-center items-center absolute left-0 w-full top-20 bg-violet-500">
          <NavLinkItemMobile to="/courses">Courses</NavLinkItemMobile>
          <NavLinkItemMobile to="/results">Results</NavLinkItemMobile>
          <NavLinkItemMobile to="/faculty">Faculty</NavLinkItemMobile>
          <NavLinkItemMobile to="/fee_structure">
            Fee Structure
          </NavLinkItemMobile>
          <NavLinkItemMobile to="/testimonials">Testimonials</NavLinkItemMobile>
          <NavLinkItemMobile to="/faqs">FAQs</NavLinkItemMobile>
          <NavLinkItemMobile to="/admission">Admission</NavLinkItemMobile>
        </ul>
      )}
    </div>
  );
};

export default UserNavbar;

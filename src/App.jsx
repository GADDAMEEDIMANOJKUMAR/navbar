import React from "react";
import vite from "./assets/vite.svg";
import "./App.css";
import { CiMenuBurger } from "react-icons/ci";
import { IoIosCloseCircle } from "react-icons/io";
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import About from "./Pages/About";
import Contact from "./Pages/Contact";
import Home from "./Pages/Home";
import Login from "./Pages/Login page/Login";
import Services from "./Pages/Services";
import SignUp from "./Pages/Signup page/signup";
import ForgotPassword from './Pages/ForgotPasswordpage/forgot';

const App = () => {
  const [toggleMenu, setToggleMenu] = React.useState(false);
  const [mobileView, setMobileView] = React.useState(window.innerWidth <= 568);

  React.useEffect(() => {
    const handleResize = () => {
      setMobileView(window.innerWidth <= 568);
      if (window.innerWidth > 568) {
        setToggleMenu(false);
      }
    };
    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <BrowserRouter>
      <div>
        {mobileView ? (
          <div>
            <div
              className="menu-icon"
              onClick={() => setToggleMenu(!toggleMenu)}
            >
              {toggleMenu ? <IoIosCloseCircle /> : <CiMenuBurger />}
            </div>
            {toggleMenu && (
              <nav className="navbar">
                <div>
                  <img src={vite} className="logo" alt="Vite logo" />
                </div>
                <Link to="/">Home</Link>
                <Link to="/about">About</Link>
                <Link to="/services">Services</Link>
                <Link to="/contact">Contact</Link>
                <Link to="/login">Login</Link>
                <Link to="/SignUp">Sign Up</Link>
                <div>
                  <p>created by @manoj kumar❤️</p>
                </div>
              </nav>
            )}
          </div>
        ) : (
          <nav className="navbar">
            <div>
              <img src={vite} className="logo" alt="Vite logo" />
            </div>
            <div className="nav-links">
              <Link to="/">Home</Link>
              <Link to="/about">About</Link>
              <Link to="/services">Services</Link>
              <Link to="/contact">Contact</Link>
              <Link to="/login">Login</Link>
              <Link to="/SignUp">Sign Up</Link>
            </div>
          </nav>
        )}
        {/* Route definitions */}
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/services" element={<Services />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/login" element={<Login />} />
          <Route path="/SignUp" element={<SignUp />} />
          <Route path="/forgotPassword" element={<ForgotPassword />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
};

export default App;

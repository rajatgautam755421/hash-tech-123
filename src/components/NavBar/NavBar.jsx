import React, { useState } from "react";
import "./NavBar.css";
import { Link, NavLink } from "react-router-dom";
import { motion } from "framer-motion";
import Hamburger from "hamburger-react";

const NavBar = () => {
  const [nav, setNav] = useState(false);
  const handleClick = () => {
    setNav(true);
  };
  return (
    <>
      <nav className="navbar navbar-expand-lg navbar-light bg-light">
        <div className="container">
          <motion.div
            drag
            dragConstraints={{ left: 0, top: 0, right: 0, bottom: 0 }}
            initial={{ y: -200, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 2.1 }}
          >
            <NavLink to="/">
              <img
                src="https://hashtechnologies.net/wp-content/uploads/2021/02/WhatsApp-Image-2021-02-10-at-1.14.15-PM-1024x666-removebg-preview.png"
                alt="Logo"
                className="hash__logo"
              />
            </NavLink>
          </motion.div>

          <motion.button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            initial={{ x: 200, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ duration: 2.1 }}
          >
            <Hamburger />
          </motion.button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <motion.ul
              className="navlinks navbar-nav mr-auto mb-2 mb-lg-0"
              initial={{ x: 200, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{ duration: 2.1 }}
            >
              <motion.li
                className={`nav-item ${nav && "selectedNav"}`}
                onClick={handleClick}
                whileHover={{
                  scale: 1.1,
                  originX: 0,
                  fontWeight: "bold",
                }}
              >
                <NavLink
                  exact
                  className="nav-link"
                  aria-current="page"
                  to="/"
                  activeClassName="active__nav__link"
                >
                  Home
                </NavLink>
              </motion.li>
              <motion.li
                className="nav-item"
                whileHover={{
                  scale: 1.1,
                  originX: 0,
                  fontWeight: "bold",
                }}
              >
                <NavLink
                  exact
                  className="nav-link active"
                  aria-current="page"
                  to="/about-us"
                  activeClassName="active__nav__link"
                >
                  About Us
                </NavLink>
              </motion.li>
              <motion.li
                className="nav-item"
                whileHover={{
                  scale: 1.1,
                  originX: 0,
                  fontWeight: "bold",
                }}
              >
                <NavLink
                  exact
                  className="nav-link active"
                  aria-current="page"
                  to="/how-are-we-different"
                  activeClassName="active__nav__link"
                >
                  How Are We Different
                </NavLink>
              </motion.li>
              <motion.li
                className="nav-item"
                whileHover={{
                  scale: 1.1,
                  originX: 0,
                  fontWeight: "bold",
                }}
              >
                <NavLink
                  exact
                  className="nav-link active"
                  aria-current="page"
                  to="/hash-labs"
                  activeClassName="active__nav__link"
                >
                  Hash Labs
                </NavLink>
              </motion.li>
              <motion.li
                className="nav-item"
                whileHover={{
                  scale: 1.1,
                  originX: 0,
                  fontWeight: "bold",
                }}
              >
                <NavLink
                  exact
                  className="nav-link active"
                  aria-current="page"
                  to="/contact-us"
                  activeClassName="active__nav__link"
                >
                  Contact Us
                </NavLink>
              </motion.li>
              <motion.li
                className="navbar__dropdown nav-item dropdown"
                whileHover={{
                  originX: 0,
                  fontWeight: "bold",
                }}
              >
                <Link
                  className="nav-link active dropdown-toggle"
                  id="navbarDropdown"
                  role="button"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                  activeClassName="active__nav__link"
                >
                  Our Services
                </Link>
                <ul className="dropdown-menu" aria-labelledby="navbarDropdown">
                  <motion.li
                    whileHover={{
                      scale: 1.100027,
                      originX: 0,
                      fontWeight: "bold",
                    }}
                  >
                    <Link className="dropdown-item" to="/main-services">
                      Main Services
                    </Link>
                  </motion.li>
                  <motion.li
                    whileHover={{
                      scale: 1.100027,
                      originX: 0,
                      fontWeight: "1000",
                    }}
                  >
                    <hr className="dropdown-divider" />
                  </motion.li>
                  <motion.li
                    whileHover={{
                      scale: 1.100027,
                      originX: 0,
                      fontWeight: "bold",
                    }}
                  >
                    <NavLink
                      exact
                      className="dropdown-item"
                      to="/blockchain-devlopment"
                      activeClassName="active__nav__link"
                    >
                      Blockchain Devlopment
                    </NavLink>
                  </motion.li>
                  <motion.li
                    whileHover={{
                      scale: 1.100027,
                      originX: 0,
                      fontWeight: "bold",
                    }}
                  >
                    <NavLink
                      exact
                      className="dropdown-item"
                      to="/ruby-on-rails"
                      activeClassName="active__nav__link"
                    >
                      Ruby On Rails
                    </NavLink>
                  </motion.li>
                  <motion.li
                    whileHover={{
                      scale: 1.100027,
                      originX: 0,
                      fontWeight: "bold",
                    }}
                  >
                    <NavLink
                      exact
                      className="dropdown-item"
                      to="/app-devlopment"
                      activeClassName="active__nav__link"
                    >
                      App Devlopment
                    </NavLink>
                  </motion.li>
                  <motion.li
                    whileHover={{
                      scale: 1.100027,
                      originX: 0,
                      fontWeight: "bold",
                    }}
                  >
                    <NavLink
                      exact
                      className="dropdown-item"
                      to="/designing-solutions"
                      activeClassName="active__nav__link"
                    >
                      Designing Solutions
                    </NavLink>
                  </motion.li>
                  <motion.li
                    whileHover={{
                      scale: 1.100027,
                      originX: 0,
                      fontWeight: "bold",
                    }}
                  >
                    <NavLink
                      exact
                      className="dropdown-item"
                      to="/net-development"
                      activeClassName="active__nav__link"
                    >
                      .NET Devlopment
                    </NavLink>
                  </motion.li>
                </ul>
              </motion.li>
            </motion.ul>
          </div>
        </div>
      </nav>
    </>
  );
};

export default NavBar;

// onChange={e=>setUser.name(e.target.value)}

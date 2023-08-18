import { Fragment } from "react";
import React, { useState } from "react";
import { Link } from "react-router-dom";
import Navbar from "./Navbar";
import classes from "./Header.module.css";
import NavModal from "./Modal/NavModal";
import { ReactComponent as Menu } from "../asset/Icon/menu.svg";

const Header = () => {
  const [showModal, setShowModal] = useState(false);

  const openModal = () => {
    setShowModal(true);
    document.body.style.overflow = "hidden";
  };

  const closeModal = () => {
    setShowModal(false);
    document.body.style.overflow = "auto";
  };
  return (
    <Fragment>
      <header className={classes.header}>
        <p className={classes.logo}>
          <Link to="/">
            M<span className={classes.textcolor}>O</span>PC
            <span className={classes.textcolor}>O</span>N
          </Link>
        </p>
        <button onClick={openModal}>
          <Menu />
        </button>
        <Navbar />
        {showModal && <NavModal onClose={closeModal} />}
      </header>
    </Fragment>
  );
};

export default Header;

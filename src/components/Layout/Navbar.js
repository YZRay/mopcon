import classes from "./Navbar.module.css";
import { useState } from "react";
import { Link } from "react-router-dom";
import { ReactComponent as ArrowIcon } from "../asset/Icon/ep_arrow-down.svg";

const Navbar = () => {
  const [showDropdown, setShowDropdown] = useState(false);

  const handleDropdownToggle = () => {
    setShowDropdown(!showDropdown);
  };

  return (
    <ul className={classes.button}>
      <li className={classes.nav}>
        <Link to="/community" className={classes["nav-text"]}>
          主辦社群
        </Link>
      </li>
      {/* <li
        className={`${classes.nav} ${showDropdown ? classes.active : ""}`}
        onMouseEnter={handleDropdownToggle}
        onMouseLeave={handleDropdownToggle}
      >
        <Link
          to="#"
          className={`${classes["nav-text"]} ${
            showDropdown ? classes["nav-agenda"] : ""
          }`}
        >
          議程介紹
          <ArrowIcon />
        </Link>
        {showDropdown && (
          <ul className={classes.dropdown}>
            <li className={classes.menu}>
              <Link to="/schedule" className={classes["nav-text"]}>
                主要議程
              </Link>
            </li>
            <li className={classes.menu}>
              <Link to="/schedule_unconf" className={classes["nav-text"]}>
                交流議程
              </Link>
            </li>
          </ul>
        )}
      </li>
      <li className={classes.nav}>
        <Link to="/speaker" className={classes["nav-text"]}>
          講者陣容
        </Link>
      </li>
      <li className={classes.nav}>
        <Link to="/sponsor" className={classes["nav-text"]}>
          贊助夥伴
        </Link>
      </li> */}
      {/* <li className={classes.nav}>
        <Link to="/ticket" className={classes["nav-text"]}>
          票種介紹
        </Link>
      </li> */}
      {/* <li className={classes.nav}>
        <Link to="#" className={classes["nav-text"]}>
          共筆文件
        </Link>
      </li> */}
      <li className={classes.nav}>
        <Link to="/time-machine" className={classes["nav-text"]}>
          時光機
        </Link>
      </li>
    </ul>
  );
};

export default Navbar;

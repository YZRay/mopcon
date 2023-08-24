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
        <Link to="/host-community">主辦社群</Link>
      </li>
      <li
        className={`${classes.nav} ${showDropdown ? classes.active : ""}`}
        onMouseEnter={handleDropdownToggle}
        onMouseLeave={handleDropdownToggle}
      >
        <Link to="#">
          議程介紹
          <ArrowIcon />
        </Link>
        {showDropdown && (
          <ul className={classes.dropdown}>
            <li className={classes.menu}>
              <Link to="/MainAgenda">主要議程</Link>
            </li>
            <li className={classes.menu}>
              <Link to="/ComAgenda">交流議程</Link>
            </li>
          </ul>
        )}
      </li>
      <li className={classes.nav}>
        <Link to="/speaker">講者陣容</Link>
      </li>
      <li className={classes.nav}>
        <Link to="/sponsor">贊助夥伴</Link>
      </li>
      <li className={classes.nav}>
        <Link to="/ticket">票種介紹</Link>
      </li>
      <li className={classes.nav}>
        <Link to="/some-link">共筆文件</Link>
      </li>
      <li className={classes.nav}>
        <Link to="/time-machine">時光機</Link>
      </li>
    </ul>
  );
};

export default Navbar;
